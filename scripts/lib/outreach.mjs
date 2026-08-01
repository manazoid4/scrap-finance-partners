const CORPORATE_TYPES = new Set(["limited-company", "llp", "corporate-body"]);
const TOUCH_DELAYS_DAYS = [0, 4, 10, 18];

const angles = {
  stock: {
    problem: "whether the stock figure can be relied on when buying, selling and reporting",
    question: "How confident are you that the stock number matches what is actually in the yard?",
  },
  margin: {
    problem: "whether the apparent spread still holds after haulage, handling and yard time",
    question: "Which grade looks strongest before operating cost but weakest afterwards?",
  },
  haulage: {
    problem: "whether collection and route costs are being attached to the deals that create them",
    question: "Can you see which movements still make money after the vehicle has done the work?",
  },
  reporting: {
    problem: "whether month-end reporting is early and reliable enough to support decisions",
    question: "Which number takes the most manual work before you are willing to trust it?",
  },
  fred: {
    problem: "whether Fred reporting is giving the commercial view the yard actually needs",
    question: "Where does the team leave Fred and return to spreadsheets to get an answer?",
  },
};

export function isEligibleRecipient(prospect) {
  return CORPORATE_TYPES.has(prospect.companyType) || prospect.consent === true;
}

function validProspect(prospect) {
  return Boolean(
    prospect?.id &&
      prospect?.companyName &&
      prospect?.sourceUrl &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(prospect?.email ?? "") &&
      isEligibleRecipient(prospect),
  );
}

function addDays(date, days) {
  const scheduled = new Date(date);
  scheduled.setUTCDate(scheduled.getUTCDate() + days);
  return scheduled.toISOString();
}

function sequenceFor(prospect) {
  const angle = angles[prospect.painAngle] ?? angles.reporting;
  const greeting = prospect.contactName ? `Hi ${prospect.contactName},` : "Hello,";
  const context = `I found ${prospect.companyName} through ${prospect.sourceUrl}.`;

  return [
    {
      subject: `${prospect.companyName}: which number is hardest to trust?`,
      body: `${greeting}\n\n${context}\n\nScrap Finance Partners works with UK scrap and recycling businesses on ${angle.problem}.\n\n${angle.question}\n\nIf that is worth comparing notes on, reply with the number you trust least.`,
    },
    {
      subject: `Re: ${prospect.companyName}: which number is hardest to trust?`,
      body: `${greeting}\n\nA Finance Health Check starts with the trading, stock, transport, cash and reports already in use. It finishes with a written view of what holds up, what does not and what to fix first.\n\nWould a short outline help?`,
    },
    {
      subject: `A practical check for ${prospect.companyName}`,
      body: `${greeting}\n\nOne useful test: ${angle.question}\n\nIf the answer takes several spreadsheets or several people, that is usually where the review starts. Happy to send the scope and fixed fee.`,
    },
    {
      subject: `Close the loop?`,
      body: `${greeting}\n\nI will close this here. If ${angle.problem} becomes a priority later, reply and I will send the Health Check outline.`,
    },
  ];
}

export function buildQueue(prospects, suppressed = [], startAt = new Date()) {
  const blocked = new Set(suppressed.map((value) => value.trim().toLowerCase()));
  const seen = new Set();
  const queue = [];

  for (const prospect of prospects) {
    const email = prospect?.email?.trim().toLowerCase();
    const domain = email?.split("@")[1];
    if (
      !validProspect(prospect) ||
      seen.has(email) ||
      blocked.has(email) ||
      blocked.has(domain)
    ) {
      continue;
    }

    seen.add(email);
    sequenceFor(prospect).forEach((message, index) => {
      queue.push({
        id: `${prospect.id}-t${index + 1}`,
        prospectId: prospect.id,
        companyName: prospect.companyName,
        email,
        touch: index + 1,
        scheduledAt: addDays(startAt, TOUCH_DELAYS_DAYS[index]),
        subject: message.subject,
        body: message.body,
        sourceUrl: prospect.sourceUrl,
        approved: false,
        status: "draft",
      });
    });
  }

  return queue;
}

export function selectDueMessages(queue, suppressed = [], now = new Date(), limit = 10) {
  const blocked = new Set(suppressed.map((value) => value.trim().toLowerCase()));
  const selectedProspects = new Set();

  return queue
    .filter((message) => {
      const email = message.email.trim().toLowerCase();
      const domain = email.split("@")[1];
      return (
        message.approved === true &&
        message.status === "draft" &&
        new Date(message.scheduledAt) <= now &&
        !blocked.has(email) &&
        !blocked.has(domain)
      );
    })
    .sort((left, right) => {
      if (left.prospectId === right.prospectId) return left.touch - right.touch;
      return new Date(left.scheduledAt) - new Date(right.scheduledAt);
    })
    .filter((message) => {
      if (selectedProspects.has(message.prospectId)) return false;
      selectedProspects.add(message.prospectId);
      return true;
    })
    .slice(0, Math.min(limit, 25));
}

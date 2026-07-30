/**
 * The productised Finance Health Check.
 *
 * Fee and turnaround are PENDING in docs/marketing/CLAIMS_REGISTER.md, so this
 * module carries the *basis* on which they are agreed rather than any number.
 * If the client later approves a fee, add it to the register first, then add a
 * gated field here — never inline a figure into a page.
 */

export const fitFor = [
  "Owner-managed scrap, metal recycling and waste businesses in the UK.",
  "Businesses trading enough volume that a wrong grade or route decision costs real money.",
  "Owners who already suspect a gap between the headline margin and what ends up in the bank.",
  "Yards where finance, stock and transport information all exist but do not agree.",
  "Anyone about to commit to a system, a site or a large forward position who wants the numbers tested first.",
];

export const notFitFor = [
  "Businesses looking for statutory accounts, audit, tax returns or payroll — that stays with your accountant.",
  "Anyone wanting a guaranteed saving. No outcome is promised, and anyone who promises one is guessing.",
  "Businesses in acute distress needing insolvency or restructuring advice. That is specialist, regulated work.",
  "Anyone wanting a software rollout. A tool bought before the problem is understood usually adds a second problem.",
  "Businesses that cannot make a few hours of owner and yard time available. Without that, the review has nothing real to test.",
];

export const questionsReviewed = [
  {
    area: "Trading margin",
    question:
      "Does the apparent spread survive haulage, handling, yard time and the management attention the deal actually consumed?",
  },
  {
    area: "Stock confidence",
    question:
      "Do the records used for buying and cash decisions reflect what is physically in the yard — and if not, is that a counting problem or a reporting one?",
  },
  {
    area: "Transport",
    question:
      "Is haulage visible when the deal is judged, or only after the movement is complete and the cost is already committed?",
  },
  {
    area: "Yard capacity",
    question:
      "Which material is consuming the space, plant and hours that something more profitable could have used?",
  },
  {
    area: "Working capital",
    question:
      "Where is cash tied up between paying a supplier and being paid, and what does that stop you doing next week?",
  },
  {
    area: "Management information",
    question:
      "Does each report arrive in time to change an outcome, and does every measure on it lead to a named decision?",
  },
];

export const informationRequested = [
  {
    item: "Purchase and sales records for an agreed trading period",
    why: "To see the spread as it was actually realised, not as it was expected.",
  },
  {
    item: "Haulage and transport records for the same period",
    why: "To attribute movement cost to the deals that caused it.",
  },
  {
    item: "Period-end stock reports and any reconciliation working papers",
    why: "To test whether the stock figure behind your decisions is one you can rely on.",
  },
  {
    item: "Management accounts and whatever reporting pack already exists",
    why: "To see what you are currently deciding from, and what it leaves out.",
  },
  {
    item: "A conversation with the owner, and with the yard and transport people",
    why: "The records show what was recorded. The conversation shows what actually happens.",
  },
];

export const informationNote =
  "The request is tailored to the agreed scope and to the records you already keep. Nothing needs to be rebuilt, re-keyed or prepared specially — if it does not already exist, it is not part of the review.";

export const reviewStages = [
  {
    number: "01",
    title: "Agree the question",
    body: "A conversation to establish what needs testing, what you already rely on, and where you suspect the picture is wrong. Scope, boundaries and cost are agreed here, in writing, before any work starts.",
  },
  {
    number: "02",
    title: "Gather what already exists",
    body: "A specific information request based on the agreed scope. No fishing expedition, and nothing you have to build for us.",
  },
  {
    number: "03",
    title: "Test the commercial picture",
    body: "Connect the financial records to the operating demands behind them: what the material cost to buy, move, handle, hold and sell — and what it displaced while it sat there.",
  },
  {
    number: "04",
    title: "Separate assumption from evidence",
    body: "Establish which of the things everyone believes about the business are supported by the records, and which are not. This is usually the part that changes minds.",
  },
  {
    number: "05",
    title: "Set the order of action",
    body: "Written findings, ranked. What matters most, what can be fixed internally, what needs specialist help, and what is not worth doing at all.",
  },
];

export const outputs = [
  {
    title: "A written findings document",
    body: "The commercial question, the evidence reviewed, what was found and what to do about it — in the order it should be done. Written to be read by an owner, not by another accountant.",
  },
  {
    title: "A ranked action list",
    body: "Each item marked as something you can fix internally, something that needs scoped work, or something that belongs with a specialist.",
  },
  {
    title: "Explicit assumptions and boundaries",
    body: "What the findings rest on, what was not examined, and where the analysis stops. You should be able to challenge any conclusion by challenging a stated assumption.",
  },
  {
    title: "A walkthrough conversation",
    body: "We go through the findings with you directly. You get to argue with them — that is the point of the meeting.",
  },
];

export const exclusions = [
  "No statutory accounts, audit, tax computation or filing.",
  "No regulated financial, investment or insurance advice.",
  "No stock count, physical inventory or asset valuation.",
  "No insolvency, restructuring or turnaround advice.",
  "No system implementation, data migration or software build.",
  "No guaranteed saving, margin improvement or recovery figure — none is calculated, promised or implied.",
];

export const afterwards = [
  {
    title: "You act on it yourself",
    body: "Most findings are internal fixes. If that is all you need, that is a good outcome and there is nothing further to buy.",
  },
  {
    title: "A scoped piece of work",
    body: "If a specific finding needs dedicated work, it is scoped and quoted separately as its own bounded job — not converted into an open-ended programme.",
  },
  {
    title: "Ongoing support",
    body: "Only where the business genuinely needs continuity. Never a condition of the Health Check, and never assumed.",
  },
  {
    title: "Nothing at all",
    body: "If the review shows the problem is not where you thought, or not worth the cost of fixing, we will say so plainly and the engagement ends there.",
  },
];

/**
 * How commercial terms are set. Descriptions of a process — not claims about a
 * price or a delivery time, both of which remain PENDING in the claims register.
 */
export const engagement = {
  feeBasis:
    "The fee is fixed and agreed in writing before any work begins. It is set from the scope agreed at stage one: the trading period examined, how many areas are reviewed, and how much of the information already exists. There is no day rate that runs on, and the fee does not move once the scope is agreed.",
  turnaroundBasis:
    "Timing is agreed alongside the fee, and depends on the scope and how quickly the requested information can be provided. You get a date before you commit, not after.",
  responseWindow: "within one working day",
  reviewedBy:
    "Enquiries are read by the person who would do the work. They are not passed to a sales team, because there isn't one.",
  noObligation:
    "An enquiry is not a commitment. If a Health Check is not the right next step for you, we will say so and tell you what is.",
};

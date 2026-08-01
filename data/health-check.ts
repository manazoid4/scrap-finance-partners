/**
 * The productised Finance Health Check.
 *
 * Fee and turnaround are PENDING in docs/marketing/CLAIMS_REGISTER.md, so this
 * module carries the *basis* on which they are agreed rather than any number.
 * If the client later approves a fee, add it to the register first, then add a
 * gated field here — never inline a figure into a page.
 */

export const fitFor = [
  "Owner-managed UK scrap, recycling and waste businesses.",
  "Yards where a wrong grade or route decision costs real money.",
  "Owners who suspect the headline margin is misleading.",
  "Teams whose finance, stock and transport reports do not agree.",
  "Businesses testing a major trade, system or site decision.",
];

export const notFitFor = [
  "Statutory accounts, audit, tax or payroll.",
  "Guaranteed savings or returns.",
  "Insolvency or restructuring advice.",
  "Software implementation before the problem is understood.",
  "Businesses unable to share records or a few hours of staff time.",
];

export const questionsReviewed = [
  {
    area: "Trading margin",
    question:
      "Does the spread survive haulage, handling, yard time and management attention?",
  },
  {
    area: "Stock confidence",
    question:
      "Do the records match what is physically in the yard?",
  },
  {
    area: "Transport",
    question:
      "Is haulage visible before the deal is agreed?",
  },
  {
    area: "Yard capacity",
    question:
      "Which material uses space and plant that could earn more elsewhere?",
  },
  {
    area: "Working capital",
    question:
      "Where is cash tied up, and what does that stop you buying next?",
  },
  {
    area: "Management information",
    question:
      "Do reports arrive in time to change a decision?",
  },
];

export const informationRequested = [
  {
    item: "Purchase and sales records for an agreed trading period",
    why: "To see the spread actually achieved.",
  },
  {
    item: "Haulage and transport records for the same period",
    why: "To connect transport cost to each deal.",
  },
  {
    item: "Period-end stock reports and any reconciliation working papers",
    why: "To test whether the stock figure can be trusted.",
  },
  {
    item: "Management accounts and whatever reporting pack already exists",
    why: "To see what current reports include and miss.",
  },
  {
    item: "A conversation with the owner, yard and transport team",
    why: "To compare the records with what actually happens.",
  },
];

export const informationNote =
  "We only ask for records you already keep. Nothing needs to be rebuilt or re-keyed.";

export const reviewStages = [
  {
    number: "01",
    title: "Agree the question",
    body: "We agree what needs testing, what is in scope and the fixed fee before work starts.",
  },
  {
    number: "02",
    title: "Gather what already exists",
    body: "We request only the existing records needed for the agreed scope.",
  },
  {
    number: "03",
    title: "Test the commercial picture",
    body: "We connect the records to what material costs to buy, move, handle, hold and sell.",
  },
  {
    number: "04",
    title: "Separate assumption from evidence",
    body: "We show which assumptions are supported by evidence and which are not.",
  },
  {
    number: "05",
    title: "Set the order of action",
    body: "You get ranked actions: internal fixes, specialist work and anything not worth doing.",
  },
];

export const outputs = [
  {
    title: "A written findings document",
    body: "The question, evidence, findings and actions, written clearly for the owner.",
  },
  {
    title: "A ranked action list",
    body: "Each action is marked as an internal fix, scoped work or specialist work.",
  },
  {
    title: "Explicit assumptions and boundaries",
    body: "What the findings rely on, what was not reviewed and where the analysis stops.",
  },
  {
    title: "A walkthrough conversation",
    body: "We talk through the findings and answer your questions.",
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
    body: "Most findings are internal fixes. There may be nothing else to buy.",
  },
  {
    title: "A scoped piece of work",
    body: "If a finding needs more work, it is scoped and quoted separately.",
  },
  {
    title: "Ongoing support",
    body: "Available only where the business genuinely needs continuity.",
  },
  {
    title: "Nothing at all",
    body: "If the problem is elsewhere or not worth fixing, we will say so.",
  },
];

/**
 * How commercial terms are set. Descriptions of a process — not claims about a
 * price or a delivery time, both of which remain PENDING in the claims register.
 */
export const engagement = {
  feeBasis:
    "The Finance Health Check is £2,500. The scope and fixed fee are agreed in writing before work starts. Nothing else is required afterwards. Any unusual scope is discussed before you commit.",
  turnaroundBasis:
    "Timing depends on the scope and when records are available. You get a date before you commit.",
  responseWindow: "within one working day",
  reviewedBy:
    "The person who does the work reads your enquiry. There is no sales team.",
  noObligation:
    "An enquiry commits you to nothing. If this is not the right service, we will say so.",
};

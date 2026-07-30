/**
 * Published pricing.
 *
 * These figures are APPROVED for publication (docs/marketing/CLAIMS_REGISTER.md,
 * approved 2026-07-30). This module replaces the earlier data/pricing.ts, which
 * was deleted in 0.3.0 because it carried figures nobody had signed off.
 *
 * The rule still applies: a price may appear here only while its register row
 * says APPROVED. If a figure changes, change the register first.
 *
 * Brand voice (AGENTS.md): never use the word "retainer" — it sounds like a
 * solicitor. Say "monthly support" or "fixed monthly". No "packages" or
 * "tiers" either; these are levels of involvement.
 */

export const healthCheck = {
  fee: "£2,500",
  feeNote: "Fixed. Agreed in writing before any work starts.",
  detail:
    "One fee for one bounded piece of work. It does not move once the scope is agreed, there is no day rate running underneath it, and there is nothing you have to buy afterwards.",
  whatItBuys: [
    "A review across trading margin, stock, transport, yard capacity, cash and reporting.",
    "A written findings document you can act on without us.",
    "A ranked action list separating internal fixes from work needing specialist help.",
    "A walkthrough conversation where you get to argue with the conclusions.",
  ],
};

export type SupportLevel = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  forWhom: string;
  includes: string[];
  emphasis?: boolean;
};

/**
 * Ongoing monthly support. Positioned as levels of involvement rather than
 * packages: most yards cannot justify a full-time finance business partner,
 * but would benefit from expert input a few days a month.
 */
export const supportLevels: SupportLevel[] = [
  {
    id: "level-1",
    name: "Level 1",
    price: "£500",
    priceNote: "per month",
    forWhom: "Yards that need the monthly numbers to arrive on time and mean something.",
    includes: [
      "Monthly KPI dashboard",
      "Management reporting pack",
      "Commentary explaining what actually moved, and why",
      "Email access for questions between packs",
    ],
  },
  {
    id: "level-2",
    name: "Level 2",
    price: "£1,000",
    priceNote: "per month",
    forWhom:
      "Businesses that want to look forward as well as back — and want someone to argue with each month.",
    includes: [
      "Everything in Level 1",
      "Forecasting and budget tracking",
      "A monthly business partner meeting",
      "Margin and cost analysis on whatever you are actively working on",
    ],
    emphasis: true,
  },
  {
    id: "level-3",
    name: "Level 3",
    price: "£2,000+",
    priceNote: "per month",
    forWhom: "Operators who need finance director input without hiring a finance director.",
    includes: [
      "Everything in Level 2",
      "Outsourced Finance Director and business partner role",
      "Board-level reporting and decision support",
      "Regular strategic input on pricing, capacity and investment decisions",
      "Direct availability between meetings",
    ],
  },
];

export const supportNote =
  "Level 3 starts at £2,000 because the right figure depends on how many days a month the business actually needs. It is agreed in writing before it starts, like everything else.";

export const comparisonNote =
  "For context: a full-time finance business partner is a salaried hire plus employment costs. Most small and medium scrap businesses cannot justify one, but would benefit from the same expertise a few days a month. That gap is what this is for.";

/** Commitments about how money and information are handled. Not claims — promises. */
export const reassurance = [
  {
    title: "Fixed before you commit",
    body: "You get the fee and the timetable in writing before you agree to anything. If neither has happened, no work has started and nothing is owed.",
  },
  {
    title: "No lock-in on monthly support",
    body: "It runs month to month with 30 days' notice on either side. No minimum term, no exit fee — work that has to be contractually trapped is not working.",
  },
  {
    title: "The Health Check is not a sales call",
    body: "It is a complete piece of work in its own right. Most findings are internal fixes you can act on without us, and if that is the outcome, that is a good outcome.",
  },
  {
    title: "No surprise invoices",
    body: "No day rates, no scope creep, no charge for the scoping conversation, and no billing for emails or phone calls.",
  },
  {
    title: "Your information stays yours",
    body: "Nothing about your business — the name, the figures, or the fact that you are a client — appears anywhere without your written approval. Happy to sign your NDA before you send a thing.",
  },
  {
    title: "One person, start to finish",
    body: "Whoever reads your enquiry is who does the work. Nothing is passed to a junior, and there is no sales team in between.",
  },
];

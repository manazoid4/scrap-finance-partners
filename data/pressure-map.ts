/**
 * Commercial pressure map.
 *
 * Explains how a headline margin is acted on between the buy and the banked
 * return. There are deliberately NO figures here: the map explains
 * relationships, it does not pretend to calculate anyone's result.
 */

export type PressureStage = {
  id: string;
  /** Short label used in the map itself. */
  label: string;
  /** The commercial question this stage puts to a deal. */
  question: string;
  /** What this stage does to the return. Directional language only, no values. */
  effect: string;
  /** What a Health Check actually looks at here. */
  examined: string;
};

export const pressureStages: PressureStage[] = [
  {
    id: "purchase-price",
    label: "Purchase price",
    question: "What did it cost to get the material through the gate?",
    effect:
      "Sets the floor. Every later cost is subtracted from a spread that is already fixed at this point.",
    examined:
      "How buying prices are set, who can vary them, and whether the person buying can see the full cost of servicing the deal.",
  },
  {
    id: "selling-price",
    label: "Selling price",
    question: "What was actually realised, after grading and deductions?",
    effect:
      "Sets the headline spread — the number most yards judge a deal on, and the last one that looks this good.",
    examined:
      "Realised prices against expected, the size and frequency of deductions, and how disputes and re-grades are recorded.",
  },
  {
    id: "haulage",
    label: "Haulage",
    question: "Was the cost of moving it visible before the deal was agreed?",
    effect:
      "Takes a bite that varies by route, load and backhaul. Often the first cost to be averaged, and the first to mislead.",
    examined:
      "Route economics, whether transport cost is attributed to the deal or absorbed centrally, and how empty running is treated.",
  },
  {
    id: "handling",
    label: "Handling and labour",
    question: "How much yard work did this material need before it could leave?",
    effect:
      "Consumes labour, plant and time. Rarely attributed to the deal that caused it, so it lands on the yard as a whole.",
    examined:
      "Processing steps by grade, plant and operator time, and whether handling-heavy material is priced to reflect it.",
  },
  {
    id: "yard-capacity",
    label: "Yard capacity",
    question: "What else could that space and that hour have been used for?",
    effect:
      "Finite. Material sitting in a bay is capacity denied to something else — a cost that never appears on any ledger.",
    examined:
      "Dwell time by grade, congestion at the points that actually constrain throughput, and what gets displaced.",
  },
  {
    id: "working-capital",
    label: "Working capital",
    question: "How long was cash tied up between paying out and being paid?",
    effect:
      "Sets the pace the business can trade at. A good margin held too long still limits what you can buy next week.",
    examined:
      "The gap between payment out and cash in, stock held against forward positions, and the pressure points in the cycle.",
  },
  {
    id: "commercial-return",
    label: "True commercial return",
    question: "After all of that, was this the best use of the business?",
    effect:
      "What is left, and whether the capacity it consumed could have earned more somewhere else.",
    examined:
      "Whether the decision to take this trade again would be made on evidence, or on the headline spread alone.",
  },
];

export const pressureMapNote =
  "This map explains which pressures we examine and how they relate. It calculates nothing and uses no figures — your numbers are the only ones that matter, and they are looked at during the review itself.";

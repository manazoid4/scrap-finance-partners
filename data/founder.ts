export interface ProofPoint {
  stat: string;
  label: string;
  context: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  organisation: string;
  highlights: string[];
}

export const proofPoints: ProofPoint[] = [
  { stat: "£120k", label: "Annual cost saving", context: "Removed redundant spreadsheets and digitised reporting at Countrywide Metals." },
  { stat: "£20k", label: "Overpayment uncovered", context: "Identified through audit checks, leading to stronger validation controls." },
  { stat: "£90k", label: "Overpayment recovered", context: "Reconciled 250+ supplier accounts across three UK sites at AGI Media Packaging." },
  { stat: "7 to 2 days", label: "Month-end close reduced", context: "Streamlined AP and reconciliation processes to cut close time." },
  { stat: "800+", label: "Assets on machine-level fuel posting", context: "Delivered fuel cost tracking by machine in D365 during EMR systems work." },
  { stat: "26 years", label: "Inside UK scrap and recycling finance", context: "Across Finance, Operations, Commercial, Transport and Systems." },
];

export const timeline: TimelineEntry[] = [
  {
    period: "2008-2011",
    role: "Financial Assistant",
    organisation: "European Metal Recycling",
    highlights: ["Ledgers, reconciliations and month-end support", "Early exposure to scrap-sector reporting"],
  },
  {
    period: "2012-2024",
    role: "Financial Analyst",
    organisation: "European Metal Recycling",
    highlights: [
      "Transport P&L, procurement and PO backlog clearing",
      "Weekly driver wages, mobile baler and cost-centre analysis",
      "National transport finance point of contact",
      "Sage to D365 migration support, supplier/debtor data transfer",
      "Machine-level fuel posting across 800+ assets",
      "Monthly transport scorecards with commentary and trend graphs",
    ],
  },
  {
    period: "More recent",
    role: "Finance & Reporting Business Partner",
    organisation: "Countrywide Metals Ltd",
    highlights: [
      "Daily analysis of operational and haulage data",
      "PO system introduced via Xero with approval workflows",
      "£20k overpayment uncovered through audit checks",
      "In-house reporting tools and daily/weekly/monthly insight reports",
      "£120k annual saving through digitised reporting",
    ],
  },
];

export const softwareExposure: string[] = [
  "Fred", "Xero", "D365", "Sage Line 50", "Sage Payroll", "Trade2", "CMS", "ScrapRunner",
  "Quicks reports", "MRO", "Dynamics", "Cognos", "Movex", "Great Plains", "Exact", "Alchemy",
  "Jigsaw Fuel", "Geotab", "FTA Vision", "AS400", "Torus", "Lotus Notes",
];

export const qualifications: string[] = ["AAT Level 3 Intermediate", "AAT Level 2 Pass"];

export const founderNote =
  "Scrap Finance Partners exists because most scrap and recycling businesses do not have a data problem. They have a visibility problem. After 26 years working inside finance, transport, commercial and systems teams in the sector, I built the reports, fixed the stock sheets, and sat in the meetings where the numbers mattered. This is practical, operator-grade finance support - not generic accountancy.";

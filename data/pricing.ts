export interface PricingTier {
  slug: string;
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
  featured?: boolean;
}

export interface OneOff {
  slug: string;
  name: string;
  price: string;
  description: string;
}

export const oneOffs: OneOff[] = [
  {
    slug: "health-check",
    name: "Scrap Yard Finance Health Check",
    price: "£750-£1,500",
    description: "A diagnostic engagement covering stock, margin, transport, systems and process control, with a scorecard and 30-day plan.",
  },
  {
    slug: "stock-accuracy-sprint",
    name: "Stock Accuracy Sprint",
    price: "£1,500-£3,000",
    description: "Fixes stock reconciliation gaps and rebuilds stock reporting rhythm.",
  },
  {
    slug: "fred-sprint",
    name: "Fred / Reporting Improvement Sprint",
    price: "£1,500-£5,000",
    description: "Improves Fred reports, stock sheets, EWC codes and system data integrity.",
  },
  {
    slug: "transport-review",
    name: "Transport Finance Review",
    price: "£1,500-£4,000",
    description: "Builds transport P&L visibility, cost-per-tonne reporting and cost-centre control.",
  },
  {
    slug: "po-payroll-review",
    name: "PO, Payroll & Process Control Review",
    price: "£1,000-£3,000",
    description: "Fixes PO approval workflow, payroll/commission accuracy and coding structure.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    slug: "bronze",
    name: "Bronze",
    price: "£500/month",
    bestFor: "Small operators needing monthly visibility.",
    includes: [
      "Monthly KPI dashboard",
      "Stock position snapshot",
      "Basic management reporting",
      "Short commentary",
      "Improvement log",
    ],
  },
  {
    slug: "silver",
    name: "Silver",
    price: "£1,000/month",
    bestFor: "Growing operators needing monthly business-partner rhythm.",
    includes: [
      "Everything in Bronze",
      "Forecasting",
      "Cashflow view",
      "Monthly business partner meeting",
      "Margin and stock movement analysis",
      "Transport/commercial KPI pack",
      "Action tracker",
    ],
    featured: true,
  },
  {
    slug: "gold",
    name: "Gold",
    price: "£2,000+/month",
    bestFor: "Serious operators needing outsourced FD/business partner support.",
    includes: [
      "Everything in Silver",
      "Board-style reporting pack",
      "Strategic finance support",
      "Cost-centre review",
      "Process improvement roadmap",
      "Systems/reporting oversight",
      "Regular decision support",
    ],
  },
];

export const pricingDisclaimer =
  "All pricing is indicative and confirmed following an initial scoping conversation. Final scope and price depend on business size, system complexity and number of sites.";

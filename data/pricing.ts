export const pricing = [
  {
    id: "control",
    title: "Control",
    price: "£1,500 /mo",
    description: "For owner-managed yards that need the numbers trusted every month.",
    outcome: "Replace guesswork with a monthly stock, margin and cash position the owner can act on.",
    features: [
      "Monthly yard finance pack",
      "Stock position by grade",
      "Gross margin by material category",
      "Debtor days and cash watch",
      "Fred/Xero data quality log",
      "Monthly owner action list"
    ],
    isPopular: false
  },
  {
    id: "margin",
    title: "Margin",
    price: "£3,000 /mo",
    description: "For growing yards that need active margin, stock and transport control.",
    outcome: "Find the routes, grades, suppliers and process gaps quietly leaking profit.",
    features: [
      "Everything in Control",
      "Margin per tonne by grade",
      "Transport cost per tonne",
      "LME versus buy-price review",
      "Cash flow forecast and debtor pressure list",
      "Monthly business partner meeting",
      "Loss-making grade and route flags",
      "Commercial decision tracker"
    ],
    isPopular: true
  },
  {
    id: "board",
    title: "Board",
    price: "£6,000+ /mo",
    description: "For serious single-site or multi-site operators that want FD-level control without hiring one.",
    outcome: "Run the yard from board-grade numbers, not late spreadsheets and gut feel.",
    features: [
      "Everything in Margin",
      "Board-style management pack",
      "Quarterly bank/accountant pack",
      "Multi-site reporting structure",
      "Forecast, budget and scenario model",
      "KPI review and challenge meetings",
      "Payroll, commission & coding advisory",
      "System/process improvement roadmap",
      "Direct owner decision support",
      "Priority sprint access"
    ],
    isPopular: false
  }
];

export const oneOffs = [
  {
    slug: "health-check",
    name: "Scrap Yard Finance Health Check",
    price: "£2,500",
    description: "One-week diagnostic across stock, margin, cash, Fred/Xero data, controls and owner priorities. Written findings, recoverable-value estimate and 30-day action plan."
  },
  {
    slug: "stock-accuracy",
    name: "Stock Accuracy Sprint",
    price: "£5,000 – £12,000",
    description: "Investigate stock discrepancies, rebuild stock visibility and trace high-value variances to tickets, grades, suppliers or process gaps."
  },
  {
    slug: "fred-improvement",
    name: "Fred Reporting Improvement Sprint",
    price: "£4,000 – £10,000",
    description: "Improve Fred reports, stock sheets, EWC codes, site setup and transport reporting so the system produces usable management numbers."
  },
  {
    slug: "fd-setup",
    name: "Outsourced FD Setup Month",
    price: "£8,000 – £15,000",
    description: "Build the management pack, close rhythm, KPI model, meeting cadence and owner decision dashboard before the monthly retainer starts."
  },
  {
    slug: "dwt-audit",
    name: "Digital Waste Tracking (DWT) Audit",
    price: "£3,500 – £7,500",
    description: "Map waste-tracking readiness, data capture gaps, process risk and integration requirements before compliance pressure lands."
  }
];

export const featureScaffold = [
  {
    title: "Stock Control",
    status: "Scaffolded module",
    features: [
      "Grade-level stock bridge",
      "Weighbridge variance log",
      "Supplier self-bill exception queue",
      "Month-end stock sign-off pack"
    ]
  },
  {
    title: "Margin Intelligence",
    status: "Scaffolded module",
    features: [
      "Margin per tonne by material",
      "LME/buy-price comparison",
      "Loss-making grade flags",
      "Commercial action tracker"
    ]
  },
  {
    title: "Transport Finance",
    status: "Scaffolded module",
    features: [
      "Cost per tonne by route",
      "Fuel and haulage variance view",
      "Customer/route profitability",
      "Depot transport scorecard"
    ]
  },
  {
    title: "Cash & Controls",
    status: "Scaffolded module",
    features: [
      "Debtor pressure list",
      "PO and coding exception log",
      "Payroll/commission review queue",
      "Bank/accountant monthly pack"
    ]
  },
  {
    title: "Systems Layer",
    status: "Scaffolded module",
    features: [
      "Fred export mapping",
      "Xero/Sage nominal bridge",
      "D365 reporting handoff",
      "CSV upload and validation workflow"
    ]
  },
  {
    title: "Owner Dashboard",
    status: "Scaffolded module",
    features: [
      "Red/amber/green yard score",
      "Recoverable-value estimate",
      "30-day fix plan",
      "Board-ready PDF snapshot"
    ]
  }
];

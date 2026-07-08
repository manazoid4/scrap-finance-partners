export interface Service {
  slug: string;
  title: string;
  problem: string;
  whatWeDo: string;
  symptoms: string[];
  founderProof: string;
  outcome: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "kpi-dashboards",
    title: "KPI Dashboards and Management Reporting",
    problem: "Directors make decisions without a single trusted set of numbers.",
    whatWeDo: "Build a monthly KPI dashboard covering throughput, margin, stock, transport and cost centres, with plain-English commentary.",
    symptoms: ["Different teams quote different numbers", "Reports arrive too late to act on", "No trend view, only snapshots"],
    founderProof: "Built daily, weekly and monthly insight reports at Countrywide Metals, replacing redundant spreadsheets and saving £120k a year.",
    outcome: "One version of the truth, reviewed monthly, that the board actually trusts.",
    deliverables: ["Monthly KPI dashboard", "Commentary pack", "Trend charts", "Action tracker"],
  },
  {
    slug: "stock-accuracy",
    title: "Stock Accuracy and Reconciliation",
    problem: "Stock records do not match physical reality, and nobody knows why.",
    whatWeDo: "Investigate stock discrepancies, rebuild reconciliation rhythm, and make Commercial and Sales trust the stock position again.",
    symptoms: ["Stock discrepancies discovered late", "Commercial and Finance stock figures disagree", "No consistent reconciliation cadence"],
    founderProof: "Maintained accurate stock records and investigated discrepancies across sites, ensuring Commercial and Sales teams had reliable stock information.",
    outcome: "A stock position everyone in the business can rely on.",
    deliverables: ["Stock reconciliation process", "Discrepancy root-cause log", "Stock KPI pack"],
  },
  {
    slug: "fred-systems",
    title: "Fred Reporting and Systems Improvement",
    problem: "Fred reports are out of date, inconsistent, or not trusted.",
    whatWeDo: "Improve Fred report structure, stock sheets, EWC codes, new site setup, and support transport module adoption.",
    symptoms: ["Manual deal sheets instead of system bookings", "EWC codes out of date", "New sites set up inconsistently in Fred"],
    founderProof: "Developed and maintained Fred reporting, stock sheets, EWC codes and new site setup, and supported the transport module rollout so jobs booked through Fred instead of manual deal sheets.",
    outcome: "Fred becomes a system the whole business trusts, not one that is worked around.",
    deliverables: ["Fred report audit", "Stock sheet rebuild", "EWC code cleanup", "Site setup checklist"],
  },
  {
    slug: "transport-finance",
    title: "Transport Finance and Cost-Centre Control",
    problem: "Transport cost per tonne is invisible, so overspend goes unnoticed until month-end.",
    whatWeDo: "Build transport P&L visibility, cost-centre control, fuel variance tracking and monthly scorecards.",
    symptoms: ["No cost-per-tonne visibility", "Fuel and fleet costs not tracked by asset", "Cost centres exist but nobody reviews them"],
    founderProof: "Owned transport P&L, cost centres and fleet budgets across trailers, off-road fleet and mobile balers, and posted machine-level fuel data across 800+ assets in D365.",
    outcome: "Transport becomes a controlled cost, not a black box.",
    deliverables: ["Transport P&L structure", "Monthly transport scorecard", "Cost-centre variance report"],
  },
  {
    slug: "forecasting-cashflow",
    title: "Forecasting and Cashflow",
    problem: "The business reacts to cash problems instead of seeing them coming.",
    whatWeDo: "Build rolling forecasts and cashflow visibility tied to real operational drivers.",
    symptoms: ["No forward-looking cash view", "Forecasts do not reflect actual seasonality or volume drivers", "Surprises at month-end"],
    founderProof: "Delivered budgeting, forecasting and cost analysis with full P&L ownership across multiple sites.",
    outcome: "A forecast the board can actually plan against.",
    deliverables: ["Rolling cashflow forecast", "Scenario view", "Monthly variance commentary"],
  },
  {
    slug: "outsourced-fd",
    title: "Outsourced Finance Director / Business Partner Support",
    problem: "The business needs FD-level input but cannot justify a full-time hire.",
    whatWeDo: "Provide regular strategic finance business partner support, on a retainer, without full-time overhead.",
    symptoms: ["No one is challenging commercial decisions from a finance lens", "Finance is purely transactional, not strategic", "No regular business partner rhythm"],
    founderProof: "Acted as national transport finance point of contact and business partner across Operations, Commercial and Finance for over a decade.",
    outcome: "Finance Director-level clarity without hiring a full-time Finance Director.",
    deliverables: ["Monthly business partner meeting", "Board-style reporting pack", "Strategic input log"],
  },
  {
    slug: "po-procurement",
    title: "PO Workflow and Procurement Controls",
    problem: "Purchase orders are approved informally, creating cost and audit risk.",
    whatWeDo: "Design and embed a proper PO approval workflow with coding standards and supplier reconciliation.",
    symptoms: ["PO backlog", "Inconsistent coding", "Supplier statements not reconciled"],
    founderProof: "Introduced a purchase order system via Xero with embedded approval workflows, cleared PO backlogs, and standardised coding across suppliers.",
    outcome: "Spend that is controlled and auditable, not informal.",
    deliverables: ["PO workflow design", "Coding standard", "Supplier reconciliation process"],
  },
  {
    slug: "payroll-commission",
    title: "Payroll, Commission and Coding Support",
    problem: "Commission and payroll calculations are manual and hard to trace.",
    whatWeDo: "Rebuild commission modelling and payroll preparation support with clear, traceable coding.",
    symptoms: ["Commission calculations cannot be audited", "Product coding inconsistent in Xero", "Payroll prep is manual and error-prone"],
    founderProof: "Supported payroll preparation, commission calculations and product code creation in Xero by machine, with a clear nominal coding structure.",
    outcome: "Payroll and commission numbers that hold up under scrutiny.",
    deliverables: ["Commission model", "Payroll prep checklist", "Coding structure"],
  },
  {
    slug: "systems-integration",
    title: "System Integration and Data Migration Support",
    problem: "System migrations put historic data and reporting continuity at risk.",
    whatWeDo: "Support Sage-to-D365-style migrations: supplier/debtor transfer, P&L reconciliation, user adoption.",
    symptoms: ["Migration risk to supplier/debtor balances", "Reporting structures break during system change", "Low user adoption after go-live"],
    founderProof: "Supported the Sage to D365 migration during the Holloway Group integration, including supplier and debtor data transfer and P&L balance reconciliation.",
    outcome: "A system migration that does not lose data integrity or reporting continuity.",
    deliverables: ["Migration reconciliation pack", "Data integrity checklist", "User adoption plan"],
  },
  {
    slug: "process-improvement",
    title: "Process Improvement and Manual Spreadsheet Reduction",
    problem: "Manual spreadsheets create risk, duplication and wasted time.",
    whatWeDo: "Identify and remove redundant manual processes, replacing them with reliable, repeatable reporting.",
    symptoms: ["Multiple versions of the same spreadsheet in circulation", "Manual re-keying between systems", "No single source of truth"],
    founderProof: "Removed redundant spreadsheets and digitised reporting, delivering £120k in annual cost savings.",
    outcome: "Less manual reporting. More useful decisions.",
    deliverables: ["Process audit", "Redundant spreadsheet removal plan", "Digitised reporting rollout"],
  },
];

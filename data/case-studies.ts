export interface CaseStudy {
  slug: string;
  title: string;
  problem: string;
  action: string;
  impact: string;
}

export const caseStudies: CaseStudy[] = [
  { slug: "manual-reporting-reduction", title: "Manual Reporting Reduction", problem: "Redundant spreadsheets in circulation across teams.", action: "Digitised reporting and removed duplicate manual processes.", impact: "£120k annual saving." },
  { slug: "audit-validation-control", title: "Audit Validation Control", problem: "Overpayment risk in supplier processing.", action: "Introduced audit checks and stronger validation controls.", impact: "£20k overpayment uncovered." },
  { slug: "supplier-reconciliation", title: "Supplier Reconciliation", problem: "Supplier overpayments going unnoticed across sites.", action: "Reconciled 250+ supplier accounts.", impact: "£90k recovered." },
  { slug: "transport-scorecards", title: "Transport Scorecards", problem: "Poor transport cost visibility for senior stakeholders.", action: "Built monthly scorecards with commentary and trend graphs.", impact: "Better senior stakeholder visibility and decision-making." },
  { slug: "d365-integration", title: "D365 / System Integration", problem: "Migration complexity risking data integrity.", action: "Managed supplier/debtor data transfer and P&L reconciliation.", impact: "Smoother finance integration with no lost continuity." },
];

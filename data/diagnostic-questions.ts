export interface DiagnosticCategory {
  category: string;
  questions: string[];
}

export const diagnosticCategories: DiagnosticCategory[] = [
  { category: "Stock visibility", questions: ["Do stock records match physical reality?", "Are stock discrepancies investigated quickly?"] },
  { category: "Margin reporting", questions: ["Is gross margin visible by material category?", "Does margin reporting reconcile with system data?"] },
  { category: "Transport performance", questions: ["Are transport costs visible per tonne, site or asset?", "Are fuel costs tracked by asset?"] },
  { category: "Cost-centre control", questions: ["Are cost centres reviewed monthly?", "Is overspend flagged before month-end?"] },
  { category: "Fred/Xero/D365/system data", questions: ["Are Fred reports trusted by Commercial, Operations and Finance?", "Are EWC codes maintained?"] },
  { category: "PO workflow", questions: ["Are PO approvals controlled?", "Is there a PO backlog?"] },
  { category: "Payroll/commission process", questions: ["Are commission calculations traceable?", "Is payroll preparation manual or system-driven?"] },
  { category: "Management reporting rhythm", questions: ["Are monthly reports decision-ready?", "Is there a consistent reporting cadence?"] },
  { category: "Manual spreadsheet burden", questions: ["Are manual spreadsheets creating risk?", "How many versions of the same spreadsheet are in circulation?"] },
  { category: "Data integrity", questions: ["Do stock, transport and finance figures agree?", "Is there a single source of truth?"] },
  { category: "Compliance/data readiness", questions: ["Is the business ready for digital waste tracking requirements?", "Are records audit-ready?"] },
];

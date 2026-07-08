export interface Kpi {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "flat";
  unit?: string;
}

export const dashboardKpis: Kpi[] = [
  { label: "Monthly throughput", value: "4,280", unit: "tonnes", delta: "+3.1%", trend: "up" },
  { label: "Stock value", value: "£1.94m", delta: "-1.2%", trend: "down" },
  { label: "Gross margin", value: "18.6%", delta: "+0.8pp", trend: "up" },
  { label: "Transport cost per tonne", value: "£14.20", delta: "+£0.60", trend: "down" },
  { label: "Debtor days", value: "42", unit: "days", delta: "-3", trend: "up" },
  { label: "Stock discrepancy count", value: "7", delta: "-4", trend: "up" },
  { label: "PO exceptions", value: "12", delta: "+2", trend: "down" },
  { label: "Product code exceptions", value: "5", delta: "-1", trend: "up" },
  { label: "EWC code issues", value: "3", delta: "0", trend: "flat" },
  { label: "Fuel cost variance", value: "£2,140", delta: "+£310", trend: "down" },
  { label: "Cost-centre overspend", value: "£8,900", delta: "-£1,200", trend: "up" },
  { label: "Manual spreadsheet risk score", value: "Medium", trend: "flat" },
];

export const monthlyTonnesTrend = [
  { month: "Feb", tonnes: 3820 }, { month: "Mar", tonnes: 3950 }, { month: "Apr", tonnes: 4010 },
  { month: "May", tonnes: 3890 }, { month: "Jun", tonnes: 4150 }, { month: "Jul", tonnes: 4280 },
];

export const marginByMaterial = [
  { material: "Ferrous", margin: 14.2 }, { material: "Non-ferrous", margin: 24.8 },
  { material: "Cable", margin: 31.5 }, { material: "Mixed/skip", margin: 9.6 },
];

export const transportCostTrend = [
  { month: "Feb", costPerTonne: 13.10 }, { month: "Mar", costPerTonne: 13.40 },
  { month: "Apr", costPerTonne: 13.90 }, { month: "May", costPerTonne: 13.60 },
  { month: "Jun", costPerTonne: 13.80 }, { month: "Jul", costPerTonne: 14.20 },
];

export const stockDiscrepanciesBySite = [
  { site: "Site A", count: 2 }, { site: "Site B", count: 3 }, { site: "Site C", count: 1 }, { site: "Site D", count: 1 },
];

export const costCentreVariance = [
  { centre: "Mobile Baler", variance: -1200 }, { centre: "Northern Transport", variance: 3400 },
  { centre: "Garage Ops", variance: -600 }, { centre: "Off-Road Fleet", variance: 2100 },
];

export const fuelCostByAssetCategory = [
  { category: "Trailers", cost: 8200 }, { category: "HGV Fleet", cost: 21400 },
  { category: "Balers", cost: 5300 }, { category: "Site Plant", cost: 6700 },
];

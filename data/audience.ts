export interface PainPoint {
  title: string;
  description: string;
}

export const audiencePains: PainPoint[] = [
  { title: "Stock doesn't match reality", description: "Physical stock and system stock disagree, and nobody has time to find out why." },
  { title: "Margin is a guess", description: "Gross margin is reported late, or not broken down by material category." },
  { title: "Transport cost is invisible", description: "No cost-per-tonne view, so overspend is only found at month-end." },
  { title: "Reports nobody trusts", description: "Commercial, Operations and Finance all quote different numbers." },
  { title: "Manual spreadsheet risk", description: "Multiple spreadsheet versions in circulation, with no single source of truth." },
  { title: "No finance business partner", description: "Can't justify a full-time FD, but decisions are made without finance input." },
];

export const audienceSegments: string[] = [
  "Owners of UK scrap yards",
  "Directors of recycling businesses",
  "Regional waste/recycling operators",
  "Commercial directors",
  "Operations managers",
  "Transport managers",
  "Finance managers who need support",
];

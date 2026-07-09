export const founder = {
  name: "Placeholder Name",
  title: "Founder & Lead Consultant",
  experience_years: 26,
  tagline: "I know the reality of scrap businesses: fast-moving yards, stock pressure, manual workarounds, transport issues, commercial urgency and finance needing to keep up.",
  expertise: [
    {
      area: "Finance & Accountancy",
      description: "Over two decades managing the financial engine of scrap and recycling operations."
    },
    {
      area: "Commercial & Transport",
      description: "Translating transport modules and manual deal sheets into actionable commercial data."
    },
    {
      area: "Operations & Yard Reality",
      description: "Bridging the gap between what happens in the yard and what appears on the balance sheet."
    }
  ],
  system_mastery: [
    {
      topic: "Fred Systems Support",
      detail: "Deep practical experience with Fred reporting, new site setups, EWC code maintenance, and transport module workflows."
    },
    {
      topic: "Stock Integrity",
      detail: "Specialist in stock reporting, stock position discrepancy investigation, and creating reliable stock sheets."
    },
    {
      topic: "Process Automation",
      detail: "Automating Xero product codes by machine, refining nominal coding structures, and calculating complex commissions."
    }
  ]
};
export interface TimelineEntry {
  period: string;
  role: string;
  organisation: string;
  highlights: string[];
}

export interface ProofPoint {
  stat: string;
  label: string;
  context: string;
}

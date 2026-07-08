export interface GrowthTask {
  title: string;
  category: "now" | "next" | "later";
  owner: string;
  notes?: string;
}

export const growthTasks: GrowthTask[] = [
  { title: "Confirm final brand name and contact details", category: "now", owner: "Founder" },
  { title: "Confirm professional/regulatory boundaries (see COMPLIANCE_NOTES.md)", category: "now", owner: "Founder" },
  { title: "Build first 25-prospect list", category: "now", owner: "Founder" },
  { title: "Publish founder LinkedIn rewrite", category: "now", owner: "Founder" },
  { title: "Launch Finance Health Check offer", category: "now", owner: "Founder" },
  { title: "Build 100-prospect list", category: "next", owner: "Founder" },
  { title: "Send first 50 outreach messages", category: "next", owner: "Founder" },
  { title: "Publish 10 LinkedIn posts", category: "next", owner: "Founder" },
  { title: "Run 5 health-check conversations", category: "next", owner: "Founder" },
  { title: "Convert 1-2 retainers", category: "next", owner: "Founder" },
  { title: "Build CRM", category: "later", owner: "Founder" },
  { title: "Add client portal prototype", category: "later", owner: "Founder" },
  { title: "Test Scrap Finance OS concept", category: "later", owner: "Founder" },
];

export const prospectPipeline = [
  { stage: "Identified", count: 25 },
  { stage: "Contacted", count: 0 },
  { stage: "Health Check booked", count: 0 },
  { stage: "Proposal sent", count: 0 },
  { stage: "Retainer signed", count: 0 },
];

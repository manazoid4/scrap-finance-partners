function slug(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 100);
}

export function buildCampaignUrl(siteUrl, input) {
  const source = slug(input.source);
  const campaign = slug(input.campaign);
  if (!source) throw new Error("A campaign source is required.");
  if (!campaign) throw new Error("A campaign name is required.");

  const url = new URL("/health-check", siteUrl);
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", slug(input.medium) || "referral");
  url.searchParams.set("utm_campaign", campaign);
  const content = slug(input.content);
  if (content) url.searchParams.set("utm_content", content);
  return url.toString();
}

export function summariseCampaigns(leads) {
  const groups = new Map();

  for (const lead of leads) {
    const campaign = lead.utm_campaign || "Unattributed";
    const source = lead.utm_source || "Direct / unknown";
    const key = campaign + "::" + source;
    const row = groups.get(key) ?? { campaign, source, enquiries: 0, meetings: 0, won: 0, progressedRate: 0 };
    row.enquiries += 1;
    if (lead.status === "meeting") row.meetings += 1;
    if (lead.status === "won") row.won += 1;
    groups.set(key, row);
  }

  return [...groups.values()]
    .map((row) => ({
      ...row,
      progressedRate: Math.round(((row.meetings + row.won) / row.enquiries) * 100),
    }))
    .sort((a, b) => b.enquiries - a.enquiries || a.campaign.localeCompare(b.campaign));
}

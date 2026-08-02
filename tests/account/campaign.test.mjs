import assert from "node:assert/strict";
import test from "node:test";

import { buildCampaignUrl, summariseCampaigns } from "../../lib/campaign.mjs";

test("campaign links use clean UTM parameters without personal data", () => {
  assert.equal(
    buildCampaignUrl("https://scrap-finance-partners.vercel.app", {
      source: "Regional Association",
      medium: "partner",
      campaign: "Finance Health Check",
      content: "newsletter",
    }),
    "https://scrap-finance-partners.vercel.app/health-check?utm_source=regional-association&utm_medium=partner&utm_campaign=finance-health-check&utm_content=newsletter",
  );
});

test("campaign links require a source and campaign name", () => {
  assert.throws(() => buildCampaignUrl("https://example.test", { source: "", campaign: "health-check" }), /source/i);
  assert.throws(() => buildCampaignUrl("https://example.test", { source: "partner", campaign: "" }), /campaign/i);
});

test("campaign reporting groups genuine enquiries and outcome progress", () => {
  const report = summariseCampaigns([
    { utm_campaign: "finance-health-check", utm_source: "regional-association", status: "new" },
    { utm_campaign: "finance-health-check", utm_source: "regional-association", status: "meeting" },
    { utm_campaign: "finance-health-check", utm_source: "regional-association", status: "won" },
    { utm_campaign: null, utm_source: null, status: "qualified" },
  ]);

  assert.deepEqual(report[0], {
    campaign: "finance-health-check",
    source: "regional-association",
    enquiries: 3,
    meetings: 1,
    won: 1,
    progressedRate: 67,
  });
  assert.equal(report[1].campaign, "Unattributed");
});

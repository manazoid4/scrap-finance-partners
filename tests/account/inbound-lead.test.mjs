import assert from "node:assert/strict";
import test from "node:test";

import { buildInboundLead, mergeInboundLead, processLeadSubmission } from "../../lib/inbound-lead.mjs";

test("website capture creates an actionable pipeline record", () => {
  const now = new Date("2026-08-02T10:00:00.000Z");
  const lead = buildInboundLead({
    company: "A verified company",
    name: "A real enquirer",
    email: "ENQUIRER@EXAMPLE.TEST",
    phone: "01234 567890",
    source: "health-check",
    challenge: "Trading margin",
    utmCampaign: "summer-health-check",
  }, "organization-id", "owner-id", now);

  assert.equal(lead.email, "enquirer@example.test");
  assert.equal(lead.consent_basis, "direct_enquiry");
  assert.equal(lead.next_follow_up_at, "2026-08-03T10:00:00.000Z");
  assert.match(lead.notes, /Trading margin/);
  assert.match(lead.notes, /summer-health-check/);\n  assert.equal(lead.utm_campaign, "summer-health-check");
});

test("repeat enquiries update the existing record without delaying an earlier action", () => {
  const incoming = buildInboundLead({ company: "A verified company", name: "A real enquirer", email: "enquirer@example.test" }, "organization-id", "owner-id", new Date("2026-08-02T10:00:00.000Z"));
  const merged = mergeInboundLead({ phone: "01234 567890", notes: "Earlier verified note", next_follow_up_at: "2026-08-02T12:00:00.000Z", utm_campaign: "existing-campaign" }, incoming);

  assert.equal(merged.phone, "01234 567890");
  assert.equal(merged.next_follow_up_at, "2026-08-02T12:00:00.000Z");
  assert.match(merged.notes, /Earlier verified note/);\n  assert.equal(merged.utm_campaign, "existing-campaign");
});

test("submission is persisted before its notification is attempted", async () => {
  const events = [];
  const result = await processLeadSubmission({ company: "Verified company" }, {
    persist: async () => events.push("persisted"),
    notify: async () => events.push("notified"),
  });

  assert.deepEqual(events, ["persisted", "notified"]);
  assert.deepEqual(result, { ok: true, notificationSent: true });
});

test("a notification failure does not discard a captured lead", async () => {
  const result = await processLeadSubmission({ company: "Verified company" }, {
    persist: async () => undefined,
    notify: async () => { throw new Error("notification unavailable"); },
  });

  assert.deepEqual(result, { ok: true, notificationSent: false });
});

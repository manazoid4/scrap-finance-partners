import assert from "node:assert/strict";
import test from "node:test";

import { buildQueue, isEligibleRecipient, selectDueMessages } from "../../scripts/lib/outreach.mjs";
import { calculateCommission } from "../../scripts/lib/commission.mjs";

test("corporate recipients are eligible and sole traders require consent", () => {
  assert.equal(isEligibleRecipient({ companyType: "limited-company", consent: false }), true);
  assert.equal(isEligibleRecipient({ companyType: "llp", consent: false }), true);
  assert.equal(isEligibleRecipient({ companyType: "sole-trader", consent: false }), false);
  assert.equal(isEligibleRecipient({ companyType: "sole-trader", consent: true }), true);
});

test("queue generation removes suppressed and duplicate recipients", () => {
  const prospects = [
    { id: "1", companyName: "North Yard Ltd", companyType: "limited-company", email: "director@north.test", painAngle: "stock", sourceUrl: "https://north.test" },
    { id: "2", companyName: "Duplicate Ltd", companyType: "limited-company", email: "DIRECTOR@north.test", painAngle: "margin", sourceUrl: "https://duplicate.test" },
    { id: "3", companyName: "Suppressed Ltd", companyType: "limited-company", email: "owner@suppressed.test", painAngle: "reporting", sourceUrl: "https://suppressed.test" },
  ];

  const queue = buildQueue(prospects, ["owner@suppressed.test"], new Date("2026-08-01T09:00:00Z"));

  assert.equal(queue.length, 4);
  assert.equal(queue.every((message) => message.email === "director@north.test"), true);
  assert.deepEqual(queue.map((message) => message.touch), [1, 2, 3, 4]);
  assert.equal(queue.every((message) => message.approved === false), true);
});

test("commission is based only on collected net revenue", () => {
  const report = calculateCommission(
    [
      { leadId: "lead-1", invoiceId: "INV-1", status: "paid", netCollectedGbp: 2500 },
      { leadId: "lead-1", invoiceId: "INV-2", status: "unpaid", netCollectedGbp: 1000 },
      { leadId: "lead-2", invoiceId: "INV-3", status: "refunded", netCollectedGbp: 500 },
    ],
    0.15,
  );

  assert.equal(report.netCollectedGbp, 2500);
  assert.equal(report.commissionDueGbp, 375);
  assert.equal(report.qualifyingInvoices, 1);
});

test("send selection rechecks suppression and allows one touch per prospect", () => {
  const queue = [
    { id: "a-1", prospectId: "a", email: "a@example.test", touch: 1, approved: true, status: "draft", scheduledAt: "2026-07-01T09:00:00Z" },
    { id: "a-2", prospectId: "a", email: "a@example.test", touch: 2, approved: true, status: "draft", scheduledAt: "2026-07-02T09:00:00Z" },
    { id: "b-1", prospectId: "b", email: "b@blocked.test", touch: 1, approved: true, status: "draft", scheduledAt: "2026-07-01T09:00:00Z" },
  ];

  const due = selectDueMessages(queue, ["blocked.test"], new Date("2026-08-01T09:00:00Z"), 10);

  assert.deepEqual(due.map((message) => message.id), ["a-1"]);
});

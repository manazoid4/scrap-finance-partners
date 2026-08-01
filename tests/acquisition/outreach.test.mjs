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
    { id: "1", companyName: "TEST-COMPANY-A", companyType: "limited-company", email: "a@invalid.test", painAngle: "stock", sourceUrl: "https://invalid.test/a" },
    { id: "2", companyName: "TEST-DUPLICATE", companyType: "limited-company", email: "A@INVALID.TEST", painAngle: "margin", sourceUrl: "https://invalid.test/b" },
    { id: "3", companyName: "TEST-SUPPRESSED", companyType: "limited-company", email: "blocked@invalid.test", painAngle: "reporting", sourceUrl: "https://invalid.test/c" },
  ];

  const queue = buildQueue(prospects, ["blocked@invalid.test"], new Date("2026-08-01T09:00:00Z"));

  assert.equal(queue.length, 4);
  assert.equal(queue.every((message) => message.email === "a@invalid.test"), true);
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

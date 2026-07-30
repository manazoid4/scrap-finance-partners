import { expect, test } from "@playwright/test";

import {
  approvedCopy,
  isOutcomePublishable,
  isPublishable,
  notApproved,
  type ApprovalRecord,
} from "../../data/approvals";
import { founderContact, founderIdentity } from "../../data/founder";
import { privateClientDraft, publishableEngagements } from "../../data/client-engagements";

const fullyApproved: ApprovalRecord = {
  publish: true,
  publicationApproved: true,
  approvedPublicCopy: "Approved wording.",
  evidenceStatus: "client-confirmed",
  outcomeVerified: true,
  identifyingRiskReviewed: true,
  approvalDate: "2026-07-29",
  claimsRegisterRow: "Example row",
};

test.describe("publication gate", () => {
  test("notApproved fails closed on every gate", () => {
    const record = notApproved("Example row");
    expect(isPublishable(record)).toBe(false);
    expect(isOutcomePublishable(record)).toBe(false);
    expect(approvedCopy(record)).toBeNull();
  });

  test("a fully approved record is publishable", () => {
    expect(isPublishable(fullyApproved)).toBe(true);
    expect(approvedCopy(fullyApproved)).toBe("Approved wording.");
  });

  test("every individual gate blocks publication on its own", () => {
    const blockers: Partial<ApprovalRecord>[] = [
      { publish: false },
      { publicationApproved: false },
      { identifyingRiskReviewed: false },
      { approvedPublicCopy: null },
      { approvedPublicCopy: "   " },
      { approvalDate: null },
      { approvalDate: "" },
    ];
    for (const blocker of blockers) {
      const record = { ...fullyApproved, ...blocker };
      expect(isPublishable(record), JSON.stringify(blocker)).toBe(false);
      expect(approvedCopy(record)).toBeNull();
    }
  });

  test("approvedCopy never leaks draft wording from an unapproved record", () => {
    expect(
      approvedCopy({
        ...fullyApproved,
        publicationApproved: false,
        approvedPublicCopy: "Private client name and figures.",
      }),
    ).toBeNull();
  });

  test("outcome claims need verification on top of publication approval", () => {
    const unverified = { ...fullyApproved, outcomeVerified: false };
    expect(isPublishable(unverified)).toBe(true);
    expect(isOutcomePublishable(unverified)).toBe(false);
    expect(isOutcomePublishable(fullyApproved)).toBe(true);
  });
});

test.describe("shipped records stay unpublished", () => {
  test("pending records are not publishable", () => {
    expect(isPublishable(founderIdentity.approval)).toBe(false);
    expect(isPublishable(founderContact.approval)).toBe(false);
    expect(isPublishable(privateClientDraft.approval)).toBe(false);
  });

  test("no client engagement is publishable as shipped", () => {
    expect(publishableEngagements()).toEqual([]);
  });

  test("the private client draft carries no identifying content", () => {
    expect(privateClientDraft.profile.name).toBeNull();
    expect(privateClientDraft.profile.location).toBeNull();
    expect(privateClientDraft.profile.identifyingDetails).toEqual([]);
    for (const value of Object.values(privateClientDraft.caseStudy)) {
      expect(value).toBeNull();
    }
  });

  test("the founder identity and contact blocks are empty as shipped", () => {
    expect(founderIdentity.name).toBeNull();
    expect(founderIdentity.role).toBeNull();
    expect(founderIdentity.portrait).toBeNull();
    expect(founderIdentity.personalStatement).toBeNull();
    expect(founderContact.email).toBeNull();
    expect(founderContact.telephone).toBeNull();
  });
});

/**
 * Public-output leak check. Visits every public route and asserts that no
 * unapproved figure, placeholder identity or withdrawn claim reaches the HTML.
 */
const publicRoutes = [
  "/",
  "/health-check",
  "/services",
  "/case-studies",
  "/about",
  "/ways-to-work-together",
  "/contact",
  "/insights",
  "/updates",
  "/privacy",
];

// £2,500 (Health Check) and £500 / £1,000 / £2,000 (monthly support) are
// APPROVED — see docs/marketing/CLAIMS_REGISTER.md — so they must NOT be
// listed here. The figures below are the original, unapproved ones they
// replaced, plus the withdrawn one-pager claims.
const forbiddenStrings = [
  "Placeholder Name",
  "£1,500",
  "£3,000",
  "£6,000",
  "£500/mo",
  "£120k",
  "£90k",
  "£20k",
  "£80k",
  "£12,040",
  "money back",
  "cancel anytime",
  "13% of every subscription",
];

for (const route of publicRoutes) {
  test(`${route} exposes no unapproved claim or placeholder identity`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status(), `${route} should resolve`).toBeLessThan(400);
    const html = await page.content();
    for (const forbidden of forbiddenStrings) {
      expect(html, `${route} must not contain "${forbidden}"`).not.toContain(forbidden);
    }
  });
}

test("the approved Health Check fee is published, not withheld", async ({ page }) => {
  await page.goto("/health-check");
  await expect(page.getByText("£2,500").first()).toBeVisible();
});

test("the approved monthly support figures are published", async ({ page }) => {
  await page.goto("/ways-to-work-together");
  for (const figure of ["£500", "£1,000", "£2,000+"]) {
    await expect(page.getByText(figure, { exact: true }).first()).toBeVisible();
  }
});

test("withdrawn one-pagers are no longer served", async ({ request }) => {
  for (const path of [
    "/one-pagers/overview.html",
    "/one-pagers/health-check.html",
    "/one-pagers/yardledger.html",
  ]) {
    const response = await request.get(path);
    expect(response.status(), `${path} must not be served`).toBe(404);
  }
});

import { type ApprovalRecord, isPublishable, notApproved } from "./approvals";

/**
 * Founder authority.
 *
 * Name, portrait, qualifications, biography and direct contact details are
 * PENDING in docs/marketing/CLAIMS_REGISTER.md. They must not be invented.
 * Each block is gated independently so the client can approve them one at a
 * time; the site renders what is approved and omits the rest without leaving
 * a visible hole.
 *
 * TO PUBLISH THE FOUNDER IDENTITY:
 *   1. Obtain written confirmation of name, role and portrait usage rights.
 *   2. Set the claims register row to APPROVED with the date.
 *   3. Fill every field of `founderIdentity.approval` and the name/role fields.
 *   4. Add the portrait to /public/founder/ and set `portrait`.
 */

export type FounderIdentity = {
  approval: ApprovalRecord;
  name: string | null;
  role: string | null;
  portrait: { src: string; alt: string; width: number; height: number } | null;
  /** First-person explanation of who performs the work. Gated with the identity. */
  personalStatement: string | null;
};

export type FounderContact = {
  approval: ApprovalRecord;
  email: string | null;
  telephone: string | null;
  telephoneHref: string | null;
};

/** NOT APPROVED. Do not populate without written sign-off. */
export const founderIdentity: FounderIdentity = {
  approval: notApproved("Founder identity, biography and credentials"),
  name: null,
  role: null,
  portrait: null,
  personalStatement: null,
};

/** NOT APPROVED. Until filled, enquiries route to the form and the shared inbox. */
export const founderContact: FounderContact = {
  approval: notApproved("Founder direct contact details"),
  email: null,
  telephone: null,
  telephoneHref: null,
};

/**
 * The one APPROVED experience statement (claims register, reviewed 2026-07-29).
 * Render verbatim. Do not paraphrase into a stronger claim.
 */
export const approvedExperienceStatement =
  "26 years of accountancy and finance experience in UK scrap metal.";

/**
 * What the work covers. Describes the kind of experience, and makes no claim
 * about qualifications, named employers or dates.
 */
export const experienceAreas = [
  {
    id: "finance",
    title: "Accountancy and commercial finance",
    copy: "Month-end, nominal structure, margin analysis and the reporting owner-managers actually use to make buying and selling decisions.",
    note: "Finance judged by whether it changes a decision in time — not by whether the pack went out.",
  },
  {
    id: "fred",
    title: "Fred and reporting systems",
    copy: "Fred reporting, new site setup, EWC code maintenance and transport module workflows.",
    note: "Working inside the system the yard already runs, rather than proposing a replacement for it.",
  },
  {
    id: "stock",
    title: "Stock integrity",
    copy: "Stock reporting, investigating stock position discrepancies, and building stock sheets that survive scrutiny.",
    note: "Separating a reporting gap from a physical stock problem before anyone acts on the number.",
  },
  {
    id: "transport",
    title: "Transport, yard and capacity",
    copy: "Haulage cost, route economics, labour and handling, and the finite yard capacity every deal consumes.",
    note: "The cost that lands after the deal is agreed is usually the cost that decided it.",
  },
] as const;

/** Boundaries. Always rendered — a limit is not a claim. */
export const professionalBoundaries = [
  "Commercial consultancy only. Not legal, tax, audit or regulated financial advice.",
  "No guarantee of savings, margin improvement or any financial outcome.",
  "Statutory accounts, audit and tax filings stay with your existing accountant.",
  "Regulated finance, insurance and compliance work belongs with appropriately qualified professionals.",
];

export const hasApprovedIdentity = () => isPublishable(founderIdentity.approval);
export const hasApprovedContact = () => isPublishable(founderContact.approval);

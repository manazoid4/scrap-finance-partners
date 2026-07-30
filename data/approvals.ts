/**
 * Publication gating primitives.
 *
 * Nothing in this repository may reach a public surface unless the matching
 * claim row in `docs/marketing/CLAIMS_REGISTER.md` is APPROVED and the record
 * below carries an explicit approval. Gates fail closed: an unfinished record
 * is never publishable.
 */

export type EvidenceStatus =
  | "unverified"
  | "client-supplied"
  | "client-confirmed"
  | "documented";

export type ApprovalRecord = {
  /** Master switch. Nothing renders publicly while false. */
  publish: boolean;
  /** Client has approved publication of this exact content. */
  publicationApproved: boolean;
  /** The precise wording the client signed off. Rendered verbatim or not at all. */
  approvedPublicCopy: string | null;
  /** How strong the underlying evidence is. */
  evidenceStatus: EvidenceStatus;
  /** Whether any stated outcome has been verified against source records. */
  outcomeVerified: boolean;
  /** Whether the content has been reviewed for accidental client identification. */
  identifyingRiskReviewed: boolean;
  /** ISO date (YYYY-MM-DD) of approval, or null if never approved. */
  approvalDate: string | null;
  /** Row in docs/marketing/CLAIMS_REGISTER.md this record depends on. */
  claimsRegisterRow: string;
};

/** A record that has never been approved. The default for all new content. */
export const notApproved = (
  claimsRegisterRow: string,
  evidenceStatus: EvidenceStatus = "unverified",
): ApprovalRecord => ({
  publish: false,
  publicationApproved: false,
  approvedPublicCopy: null,
  evidenceStatus,
  outcomeVerified: false,
  identifyingRiskReviewed: false,
  approvalDate: null,
  claimsRegisterRow,
});

/** The single gate every public surface must pass. Fails closed. */
export function isPublishable(record: ApprovalRecord): boolean {
  return (
    record.publish === true &&
    record.publicationApproved === true &&
    record.identifyingRiskReviewed === true &&
    typeof record.approvedPublicCopy === "string" &&
    record.approvedPublicCopy.trim().length > 0 &&
    typeof record.approvalDate === "string" &&
    record.approvalDate.trim().length > 0
  );
}

/**
 * Returns the approved wording, or null. Never returns draft or internal copy,
 * so a partially-completed record cannot leak through a truthy check.
 */
export function approvedCopy(record: ApprovalRecord): string | null {
  return isPublishable(record) ? record.approvedPublicCopy : null;
}

/**
 * Stricter gate for anything stating a measured result. Requires the outcome
 * itself to have been verified against source records.
 */
export function isOutcomePublishable(record: ApprovalRecord): boolean {
  return isPublishable(record) && record.outcomeVerified === true;
}

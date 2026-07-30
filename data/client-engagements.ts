import { type ApprovalRecord, isPublishable, notApproved } from "./approvals";

/**
 * Private client evidence.
 *
 * INTERNAL SCAFFOLD ONLY. Nothing here is rendered. The shape exists so that
 * approved client evidence has somewhere safe to land later, with every gate
 * already in place. Fill nothing in until the client has approved the exact
 * public wording in writing.
 *
 * Private information must never appear in HTML, public JSON, static assets,
 * source maps, repository documentation or preview deployments.
 */

export type ClientEngagement = {
  /** Internal reference only. Must never be derived from a client name. */
  internalReference: string;
  approval: ApprovalRecord;
  profile: {
    name: string | null;
    location: string | null;
    /** Anything that could identify the client indirectly. Stays empty until reviewed. */
    identifyingDetails: string[];
  };
  caseStudy: {
    context: string | null;
    question: string | null;
    analysis: string | null;
    finding: string | null;
    recommendation: string | null;
    /** Observed status only. Never presented as a measured impact. */
    observedStatus: string | null;
  };
};

export const privateClientDraft: ClientEngagement = {
  internalReference: "engagement-001",
  approval: notApproved(
    "Private client identity, engagement details and outcomes",
    "unverified",
  ),
  profile: {
    name: null,
    location: null,
    identifyingDetails: [],
  },
  caseStudy: {
    context: null,
    question: null,
    analysis: null,
    finding: null,
    recommendation: null,
    observedStatus: null,
  },
};

export const clientEngagements: ClientEngagement[] = [privateClientDraft];

/**
 * The only supported way to read engagements for a public surface.
 * Returns an empty list until an engagement passes every gate.
 */
export function publishableEngagements(): ClientEngagement[] {
  return clientEngagements.filter((engagement) => isPublishable(engagement.approval));
}

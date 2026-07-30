/**
 * Published anonymised case evidence.
 *
 * This is the narrative the client has agreed to publish, restructured so the
 * recommendation is never presented as a measured impact. The "observed status"
 * stage states what is true — that the recommendation was made and accepted —
 * and stops there. No saving, recovery or margin figure appears in this file,
 * and none may be added without an APPROVED row in
 * docs/marketing/CLAIMS_REGISTER.md.
 *
 * Private, unapproved engagements live in data/client-engagements.ts and are
 * gated. Nothing from that file may be merged into this one.
 */

export type CaseStage = {
  id: string;
  label: string;
  body: string;
};

export const caseReference = "Engagement note 01";

export const caseDisclaimer =
  "Anonymised engagement. Identity and commercially sensitive details withheld by agreement.";

export const caseEvidenceStatus =
  "Narrative approved for publication. No outcome figure claimed or verified.";

export const caseTitle = "A profitable trade that was the wrong use of the yard";

export const caseStages: CaseStage[] = [
  {
    id: "context",
    label: "Context",
    body: "An owner-managed yard trading ferrous scrap in volume. The business was profitable, the grade in question sold reliably, and nothing in the management accounts suggested a problem. The owner's concern was less specific than a number: the yard felt busier than the results implied.",
  },
  {
    id: "question",
    label: "Question",
    body: "Did the headline trading spread on that material represent the actual commercial return, once haulage, yard labour and the capacity it consumed were taken into account — and if not, what should be traded instead?",
  },
  {
    id: "analysis",
    label: "Analysis",
    body: "Three months of trading activity were reviewed: purchase prices, selling prices, haulage costs, the operational involvement each movement required, and how yard and transport resources were allocated across the period. The records already existed; none were rebuilt for the review. Transport had been absorbed centrally rather than attributed to material, and handling time had never been recorded against a grade.",
  },
  {
    id: "finding",
    label: "Finding",
    body: "The material generated revenue and the spread was genuine. The return after operational demands was materially lower than the headline margin implied, because yard labour and transport capacity were being consumed by comparatively lower-margin activity. The gap was invisible in the existing reporting rather than absent from the business.",
  },
  {
    id: "recommendation",
    label: "Recommendation",
    body: "Attribute haulage and handling to the grade that caused them, before the next buying decision. Prioritise selected higher-margin non-ferrous opportunities, including relevant aluminium grades, where the expected commercial return justified the use of finite yard and transport capacity.",
  },
  {
    id: "status",
    label: "Observed status",
    body: "The findings and the recommendation were accepted by the business. No measurement of financial impact was carried out, and none is claimed here. What can be stated is what was recommended and that it was adopted — not what it subsequently earned.",
  },
];

export const caseRationale = [
  "Rank trading opportunities by expected return against the capacity they consume, not by spread alone.",
  "Allocate yard labour and transport using the full operating cost of the material.",
  "Give buying decisions a commercial basis that exists before the deal, not after the invoice.",
];

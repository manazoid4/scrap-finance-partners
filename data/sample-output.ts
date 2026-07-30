/**
 * Illustrative Health Check output.
 *
 * THIS IS A FORMAT EXAMPLE. It does not describe a real client, a real
 * engagement or a real result. Every figure is shown as a redaction block
 * rather than an invented number, so nothing here can be mistaken for
 * evidence of an outcome.
 *
 * Do not replace the redaction blocks with example numbers. A plausible-looking
 * number is a claim, whether or not it is labelled as an example.
 */

/** The redaction block used wherever a real report would carry a figure. */
export const REDACTED = "███████";

export type SampleOutputSection = {
  id: string;
  label: string;
  body: string;
  /** Optional evidence rows rendered as a ruled list. */
  rows?: { term: string; value: string }[];
};

export const sampleOutputMeta = {
  documentTitle: "Finance Health Check — Findings",
  reference: `SFP/HC/${REDACTED}`,
  preparedFor: `${REDACTED} (illustrative)`,
  issued: REDACTED,
  status: "Format example — not a client document",
};

export const sampleOutputSections: SampleOutputSection[] = [
  {
    id: "question",
    label: "Commercial question",
    body: "Whether the grades taking the largest share of yard time were producing a return that justified the capacity they consumed — or whether that capacity was better used elsewhere.",
  },
  {
    id: "evidence",
    label: "Evidence reviewed",
    body: "Records already used to run the business. Nothing was rebuilt or re-keyed for the review.",
    rows: [
      { term: "Trading period examined", value: `${REDACTED} months` },
      { term: "Purchase and sales records", value: `${REDACTED} transactions` },
      { term: "Haulage records", value: `${REDACTED} movements` },
      { term: "Stock reports", value: `${REDACTED} period-end positions` },
      { term: "Management accounts", value: `${REDACTED} periods` },
      { term: "Interviews", value: `${REDACTED} (owner, yard, transport)` },
    ],
  },
  {
    id: "finding",
    label: "Key finding",
    body: "The headline spread on the highest-volume grade held up. The return after haulage, handling and dwell time did not — and the difference was wide enough to change which trades were worth taking. The gap appeared in none of the reports the business was already producing, because transport was absorbed centrally and handling time was never attributed to a grade.",
  },
  {
    id: "action",
    label: "Priority action",
    body: "Attribute haulage and handling to the grade that caused them, before the next buying decision, starting with the two grades that consume the most yard time. This is a reporting change rather than a systems project, and can be done inside the records that already exist.",
  },
  {
    id: "assumptions",
    label: "Assumptions and boundaries",
    body: "Findings rest on the records provided and on what was described in interview. No stock count was performed and no valuation was carried out. This is commercial analysis — not audit, tax or regulated financial advice. No saving or return is claimed, promised or implied.",
  },
];

export const sampleOutputDisclaimer =
  "Illustrative format only. Not a client document, not a real engagement, and not evidence of any result. Figures are redacted rather than invented, so nothing here can be read as a claim.";

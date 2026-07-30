# Claims register

Status values: `PENDING`, `APPROVED`, `REJECTED`. Pending or rejected claims must not appear as
fact on any public surface — including HTML, public JSON, static assets under `public/`, source
maps, and preview deployments.

Enforcement is not only editorial. `data/approvals.ts` implements the gate that every piece of
approval-dependent content passes through, and it fails closed: a record missing any one of
`publish`, `publicationApproved`, `approvedPublicCopy`, `identifyingRiskReviewed` or
`approvalDate` is not publishable. `tests/e2e/privacy-gate.spec.ts` asserts this in both
directions — the gate logic itself, and a crawl of every public route checking that no
unapproved figure or placeholder identity reaches the HTML.

Last reviewed: 2026-07-30 (pricing approved same day, see "Changes" below).

## Register

| Claim | Evidence required | Owner | Status | Allowed surfaces | Reviewed |
|---|---|---|---|---|---|
| 26 years of accountancy and finance experience in UK scrap metal | Client confirmation | Client | APPROVED | Homepage, `/about`, `/health-check` | 2026-07-29 |
| Anonymised commercial margin case narrative | Client-supplied wording and final publication approval | Client | APPROVED | `/case-studies`, homepage summary only | 2026-07-30 |
| Sector focus: UK scrap metal, recycling and waste | Self-evident description of practice | Client | APPROVED | All pages | 2026-07-30 |
| Single-operator practice; the person you speak to does the work | Client confirmation of operating model | Client | APPROVED | Homepage, `/about`, `/health-check`, `/contact` | 2026-07-30 |
| Fixed fee agreed in writing before work begins (process, no figure) | Client confirmation of engagement process | Client | APPROVED | `/health-check`, `/ways-to-work-together` | 2026-07-30 |
| Response window: reply within one working day | Client commitment to service level | Client | APPROVED | `/contact`, `/health-check`, forms, footer | 2026-07-30 |
| Health Check scope, exclusions and stages | Client confirmation of what is delivered | Client | APPROVED | `/health-check` | 2026-07-30 |
| Illustrative Health Check output (all figures redacted) | Not a claim — every value is a redaction block | Internal | APPROVED | `/health-check`, homepage | 2026-07-30 |
| Founder identity, name, portrait and biography | Written profile, evidence and portrait usage rights | Client | PENDING | None | — |
| Founder direct contact details (email, telephone) | Client confirmation of published contact route | Client | PENDING | None | — |
| Founder qualifications and professional memberships | Certificates or register entries | Client | PENDING | None | — |
| Health Check fee: £2,500, fixed | Client written approval | Client | APPROVED | `/health-check`, `/ways-to-work-together`, forms, footer | 2026-07-30 |
| Monthly support levels: £500 / £1,000 / £2,000+ per month | Client written approval | Client | APPROVED | `/ways-to-work-together` | 2026-07-30 |
| Health Check turnaround time (specific days) | Written offer approval | Client | PENDING | None | — |
| Exact savings, margin or time outcomes | Source records and publication consent | Client | PENDING | None | — |
| Private client identity, engagement details and outcomes | Exact written publication approval | Client | PENDING | None; internal scaffold only | — |
| YardLedger availability, features or pricing | Product release approval | Client | PENDING | None; `/updates` "Exploring" wording only | — |
| Month-end close time reduction ("7 → 2 days") | Source records and publication consent | Client | REJECTED | None — withdrawn 2026-07-30 | 2026-07-30 |
| Original unapproved fee figures (£500/mo one-pager, £1,500 / £3,000 / £6,000 tiers) | Written offer approval | Client | REJECTED | None — superseded by the approved £2,500 / £500 / £1,000 / £2,000+ rows above, 2026-07-30 | 2026-07-30 |
| "What this replaces: a full-time FD at £80k+" | Substantiation of the comparison | Client | REJECTED | None — withdrawn 2026-07-30 | 2026-07-30 |
| Money-back guarantee ("3 months, full money back") | Written commercial terms | Client | REJECTED | None — withdrawn 2026-07-30 | 2026-07-30 |
| Charitable donation ("13% of every subscription") | Written policy and evidence of donations | Client | REJECTED | None — withdrawn 2026-07-30 | 2026-07-30 |
| Named client outcome figures (£120k, £90k, £20k) | Source records and publication consent | Client | REJECTED | None — source file deleted 2026-07-30 | 2026-07-30 |

## Changes made on 2026-07-30

**Pricing approved and published.** The client confirmed the Health Check fee (£2,500, fixed)
and three monthly support levels (£500 / £1,000 / £2,000+ per month) in writing. `data/pricing.ts`
now holds the approved figures; they render on `/health-check` and `/ways-to-work-together`. This
is a distinct, later decision from the same-day privacy work below — the original unapproved
figures stay `REJECTED` and were never the ones published.

**Withdrawn from public surfaces.** `public/one-pagers/{overview,health-check,yardledger}.html`
were being served publicly and carried the fee, close-time, FD-comparison, money-back and charity
claims above, plus fabricated demo KPI values. They were moved to
`docs/marketing/one-pagers/*.draft.html` and are no longer built or served. `app/robots.ts` now
disallows `/one-pagers/`. See [`one-pagers/README.md`](one-pagers/README.md).

**Deleted from the repository.** `data/pricing.ts` (£1,500 / £3,000 / £6,000 monthly tiers and a
£2,500 Health Check fee) and `data/case-studies.ts` (£120k, £90k and £20k outcome figures) were
imported by nothing, but sat one import away from shipping unapproved claims. Both are removed;
git history retains them if the client later approves the figures.

**Placeholder identity removed.** `data/founder.ts` previously carried
`name: "Placeholder Name"` as a plain string. It now carries `null` behind an `ApprovalRecord`,
so a future consumer cannot render placeholder text as though it were fact.

**Case study rewritten.** `/case-studies` now ends on an "Observed status" stage stating that the
recommendation was made and adopted, followed by a section headed "What this note does not claim"
saying explicitly that no financial impact was measured. Previously the recommendation sat last,
where it read as an outcome.

## How to approve a pending claim

1. Get the client's approval in writing, covering the exact public wording.
2. Change the row above to `APPROVED`, name the allowed surfaces, and date it.
3. Populate the matching `ApprovalRecord` in `data/` — every field, including `approvalDate`.
4. Remove the string from `forbiddenStrings` in `tests/e2e/privacy-gate.spec.ts` if it is now
   permitted to appear.
5. Run `npm run test:e2e` before merging.

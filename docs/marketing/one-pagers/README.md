# One-pagers — INTERNAL DRAFTS, NOT APPROVED FOR PUBLICATION

These three HTML files were previously served publicly from `public/one-pagers/`. They were
moved here on 2026-07-29 because they carried claims that are `PENDING` in
[`../CLAIMS_REGISTER.md`](../CLAIMS_REGISTER.md) with **Allowed surfaces: None**.

Do **not** move these back into `public/` until every claim below is approved and the register
row is updated.

## Why each file was withdrawn

### `overview.draft.html`
| Claim in the file | Register row | Status |
|---|---|---|
| "£500/mo — From — cancel anytime" | Health Check fee and delivery time | PENDING |
| "Then from £500/month if you want us to stay" | Health Check fee and delivery time | PENDING |
| "Health Check: fixed price, one week" | Health Check fee and delivery time | PENDING |
| "7 → 2 days month-end close" | Exact savings, margin or time outcomes | PENDING |
| "What this replaces: a full-time FD at £80k+" | Exact savings, margin or time outcomes | PENDING |
| HMRC / input VAT assertions | — | Regulated-advice boundary risk; see `../../COMPLIANCE_NOTES.md` |

The £500/mo figure also contradicted the (now deleted) `data/pricing.ts`, which carried a
£1,500/mo entry for the same tier. Two different invented prices for one service.

### `yardledger.draft.html`
Presented YardLedger as a shipping product with a demo KPI block (`Stock variance -£12,040`,
`Gross margin Cu 18.5% / Target 22.0%`), a "3 months, full money back" guarantee and a
"13% of every subscription goes to charity" claim. Register row *YardLedger availability,
features or pricing* is PENDING with **Allowed surfaces: None**. It also contradicted the live
`/software` page, which correctly states that availability, scope and pricing have not been
announced.

### `health-check.draft.html`
Withdrawn alongside the other two pending a fee-and-turnaround approval and a compliance pass.

## Before republishing any of these

1. Get written client approval for each claim and update `../CLAIMS_REGISTER.md`.
2. Remove every figure that is not backed by an APPROVED row.
3. Add the site-wide boundary disclaimer required by `../../COMPLIANCE_NOTES.md` — standalone
   HTML does not inherit the site footer, so the disclaimer is silently dropped.
4. Re-check that no client is identifiable.
5. Move the file back into `public/` and remove the `Disallow: /one-pagers/` line from
   `app/robots.ts`.

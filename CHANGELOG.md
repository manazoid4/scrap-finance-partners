# Changelog

All notable public-facing changes are recorded here.

## [Unreleased]

### Added
- Private-by-default acquisition workflow: prospect eligibility checks, suppression and duplicate
  removal, four-touch email queue generation, human approval gates and confirmed batch sending.
- Paid-revenue attribution and commission reporting at a configurable rate (15% by default).
- Outreach, suppression and revenue templates containing invented examples only; real lead data is
  stored under the Git-ignored `private/outreach/` directory.
- A recurring £150 client-acquisition invoice template with separate success-fee terms.

### Security
- Email delivery is a dry run unless `--confirm` is supplied, and only explicitly approved, due
  messages are eligible.
- Sole traders and non-corporate partnerships are excluded unless consent is recorded.
- Every sent message includes its source, privacy link and a direct stop instruction.
- Production dependency audit now reports zero known vulnerabilities.

## [0.4.0] — 2026-07-30 — Published pricing

Client approved the Health Check fee and three monthly support levels in writing. Both now
render on the site instead of being described only as a process.

### Added
- `data/pricing.ts` — approved figures: Health Check £2,500 (fixed), monthly support at £500 /
  £1,000 / £2,000+ (Level 1/2/3, never called "packages" or "retainer" per `AGENTS.md`).
- `/ways-to-work-together` rebuilt around the two priced options, a level comparison, and six
  reassurance commitments (fixed fee before you commit, no lock-in on monthly support, no
  surprise invoices, NDA on request, one person start to finish, the Health Check is not a sales
  call).
- `/health-check` now states the £2,500 fee in the hero and in a dedicated fee section, next to
  the existing scope, exclusions and process content.
- `tests/e2e/privacy-gate.spec.ts` — two new tests asserting the approved figures are actually
  published, alongside the existing tests asserting the *un*approved ones are not.

### Changed
- `docs/marketing/CLAIMS_REGISTER.md` — Health Check fee and the three monthly support figures
  moved `PENDING` → `APPROVED`. Turnaround time (a specific number of days) remains `PENDING`
  separately from the fee.
- `forbiddenStrings` in `tests/e2e/privacy-gate.spec.ts` no longer blocks `£2,500`/`£500`/
  `£1,000`/`£2,000` — the *original* unapproved figures they replaced (£1,500/£3,000/£6,000
  tiers, the £500/mo one-pager fee) remain forbidden.

## [0.3.0] — 2026-07-30 — Industrial Evidence Room

Major production overhaul. Buyer-facing summary at `/updates`; this is the technical record.

### Security / privacy
- **Withdrew three publicly-served marketing one-pagers.** `public/one-pagers/{overview,health-check,yardledger}.html` were reachable over HTTP and carried a `£500/mo` fee, a "7 → 2 days" month-end close reduction, a "full-time FD at £80k+" comparison, a "3 months, full money back" guarantee, a "13% of every subscription goes to charity" claim, and fabricated demo KPI values (`Stock variance -£12,040`, `Gross margin Cu 18.5%`). Every one is `PENDING` or `REJECTED` in the claims register with *Allowed surfaces: None*. Moved to `docs/marketing/one-pagers/*.draft.html` with a README recording each withdrawn claim.
- Added `Disallow: /one-pagers/` to `app/robots.ts`; removed the now-redundant `/dashboard-demo` and `/software` entries.
- **Deleted `data/pricing.ts`** (£1,500 / £3,000 / £6,000 monthly tiers, £2,500 Health Check fee) and **`data/case-studies.ts`** (£120k, £90k, £20k outcome figures). Both were imported by nothing but sat one import away from shipping unapproved claims.
- **Replaced the `"Placeholder Name"` string in `data/founder.ts`** with `null` behind an `ApprovalRecord`, so no consumer can render placeholder identity as fact.

### Added
- `data/approvals.ts` — publication gating primitives. `ApprovalRecord` carries `publish`, `publicationApproved`, `approvedPublicCopy`, `evidenceStatus`, `outcomeVerified`, `identifyingRiskReviewed`, `approvalDate` and `claimsRegisterRow`. `isPublishable()` fails closed on any missing gate; `approvedCopy()` never returns draft wording; `isOutcomePublishable()` additionally requires a verified outcome.
- `data/founder.ts` — approval-gated founder profile supporting name, role, portrait, personal statement and direct contact, all shipping `null` while `PENDING`. `components/founder-authority.tsx` renders what is approved and omits the rest without leaving a visible gap.
- `data/health-check.ts` and a rebuilt `/health-check` — who it is for, who it is *not* for, six questions reviewed, information requested (with the reason for each), five review stages, four tangible outputs, six explicit exclusions, four "what happens afterwards" outcomes, and the fee/turnaround **basis** stated as process rather than a figure.
- `data/sample-output.ts` + `components/sample-output.tsx` — illustrative Health Check output rendered as a document artifact. Every figure is a redaction block (`███████`), never an invented number, and is announced to screen readers as "redacted". Labelled a format example in three places.
- `data/pressure-map.ts` + `components/pressure-map.tsx` — seven-stage commercial pressure map (purchase price → selling price → haulage → handling → yard capacity → working capital → true commercial return) as an ARIA tablist with arrow/Home/End keyboard support. Contains no numeric or currency fields by design.
- `data/case-evidence.ts` — the anonymised engagement note restructured as context → question → analysis → finding → recommendation → **observed status**, plus a "What this note does not claim" section stating that no financial impact was measured.
- `data/changelog.ts` — typed buyer-facing changelog (`version`, `releaseDate`, `status: live|upcoming|exploring`, plain-English `change`, buyer `benefit`, `relatedPage`, `evidence`).
- `templates/onboarding/CLIENT_ONBOARDING_PACK.md` — welcome email, engagement overview, information request checklist, secure document-sharing instructions, meeting agendas, scope-confirmation checklist and publication sign-off record. Internal only; `templates/` sits outside `public/`.
- `docs/marketing/MARKETING_SCAFFOLD.md` — LinkedIn company description, founder biography (blocked pending approval), six social drafts, three advert concepts, two landing-page angles, UTM naming template, one-page capability statement, case-study approval template. Nothing approved; no adverts authorised.
- `tests/e2e/privacy-gate.spec.ts` — asserts the gate logic in both directions, crawls every public route for forbidden strings (placeholder identity, every withdrawn figure), and verifies the withdrawn one-pagers now 404.
- Skip link, `id="main"` landmark, and `aria-current="page"` on navigation.

### Changed
- **Navigation** — primary nav is now Health Check, How We Help, Case Study, About, Ways to Work Together, Contact. The mobile panel gains a Tab focus trap, Escape-to-close with focus restoration, and 44px targets. The "Request Health Check" CTA is now visible at **every** width without opening the menu (previously `hidden sm:flex`).
- **Enquiry form** — only name, company and work email are required. Telephone, commercial challenge, timing and free-text context are optional, and `app/api/lead/route.ts` no longer rejects submissions missing `challenge`/`timing`. Added a stated response window, who reviews the enquiry, a boundary statement, an error-state email fallback (via `NEXT_PUBLIC_CONTACT_EMAIL`, omitted when unset), and `inFlight`/`submitted` refs preventing duplicate submission. Existing source and UTM attribution retained.
- **Routes** — `/founder` → `/about`, `/pricing` → `/ways-to-work-together` (the page carries no prices, so it is no longer called Pricing). Removed `/software` and `/dashboard-demo`. All four have permanent redirects in `next.config.ts`; `app/sitemap.ts` updated.
- **Composition** — each page now uses a distinct device rather than one repeated 12-column template: a dossier record card on About, an annex cover sheet plus numbered stages on Case Study, a commitment ledger on Ways to Work Together, a version stack on Updates, and the document artifact on Health Check. Removed the mono eyebrow above most headings.
- Footer gains a direct contact route, a response-time line, and an expanded boundary disclaimer.
- The YardLedger concept is marked "Exploring" on `/updates` only, in wording that cannot imply availability.

### Fixed
- **Contrast (WCAG 2.2 AA).** `--ink-muted` darkened `#686e68` → `#5a605a` (4.57:1 → 5.65:1 on paper). Documented `--copper` as a surface-only colour: it fails as body text on paper (3.33:1) and must never carry white text (3.80:1); `--copper-dim` (5.89:1) is the text token on light grounds.
- `<html lang="en">` → `lang="en-GB"`.
- Skip link switched from `left:-9999px` to a clip-based visually-hidden technique — the negative offset was itself causing horizontal overflow at narrow widths.
- Reduced-motion media query now resets `animation-delay` and `transition-delay`. With `animation-fill-mode: both`, a delayed animation held its `from` state (opacity 0) for the length of the delay, leaving hero content invisible to reduced-motion users.
- Single persistent live region on the form; a nested `role="alert"` inside an `aria-live` wrapper produced two alerts with conflicting politeness.

### Removed
- `framer-motion` and `recharts` dependencies — both unused once the dashboard components were deleted. The first-load sequence is CSS-only (`sfp-rise`, `sfp-wipe`), so no animation library is required.
- Dead modules importing nothing: `data/{agents,audience,content-ideas,diagnostic-questions,growth-tasks,kpis,services,software-stack}.ts` and `components/{premium-card,pricing-card,service-card,kpi-card,dashboard-chart}.tsx`.

### Verification
TypeScript clean · ESLint clean · production build clean (13 routes static, only `/api/lead` dynamic) · Playwright 121/121 passing against the production server, covering overflow at 320/360/375/390/414/768/1024/1280/1440px across 10 routes, keyboard navigation, focus containment, form submission and failure, reduced motion, redirects, one-h1-per-page, and the public-output leak crawl.

## [0.2.1] — 2026-07-29

### Changed
- Rebuilt the visual system as restrained industrial editorial design with a graphite, neutral paper and copper palette.
- Replaced generic landing-page cards and decorative grid treatments with hard editorial rules, indexed content and purposeful density.
- Introduced a high-contrast serif and utilitarian sans-serif typographic system.
- Reworked the homepage, Health Check, service, case study, engagement, insights, updates, contact, privacy and YardLedger surfaces.

### Fixed
- Preserved mobile containment from 320px upward while increasing information density and typographic impact.
- Kept the Health Check enquiry accessible, qualified and human-reviewed without a permanently obstructive mobile CTA.
## [0.2.0] — 2026-07-29

### Changed
- Repositioned the site around commercial finance consultancy and the Finance Health Check.
- Rebuilt the responsive shell and mobile navigation to remove intrinsic-width spacing defects.
- Replaced unsupported performance, experience, pricing and product claims with evidence-safe wording.
- Reframed YardLedger as an exploring concept rather than an available product.

### Added
- Client-supplied commercial margin case study.
- Insights and public Updates pages.
- Qualified enquiry fields and source/UTM attribution in internal lead notifications.
- Public-safe marketing, onboarding, claims and release-governance templates.

### Removed
- Conflicting homepage shell, obsolete Nocturne presentation and software-first conversion paths.

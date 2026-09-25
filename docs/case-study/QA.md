# Portfolio demo verification

Verified on 25 September 2026 against a local production build at `http://127.0.0.1:3121`, with no CRM or email credentials.

## Health checks

| Check | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run typecheck` | Passed |
| `npm run build` | Passed |
| `npm run test:acquisition` | 4 passed |
| `npm run test:account` | 7 passed |
| `npm run test:e2e -- --workers=2` | 128 passed against the production server |

CI runs the same checks and starts the production build for Playwright. Locally, `PLAYWRIGHT_BASE_URL` selected the isolated server above.

## Visual and link pass

Playwright Chromium captured and reviewed every marketing route at both requested viewport widths, with the founder identity and contact still unapproved:

| Route | 390px | 1280px |
| --- | --- | --- |
| `/` | Pass | Pass |
| `/health-check` | Pass | Pass |
| `/services` | Pass | Pass |
| `/case-studies` | Pass | Pass |
| `/about` | Pass | Pass |
| `/ways-to-work-together` | Pass | Pass |
| `/contact` | Pass | Pass |
| `/updates` | Pass | Pass |
| `/privacy` | Pass | Pass |
| `/insights` → `/updates` | Pass | Pass |

The 20 captures showed no horizontal overflow, broken images, empty headings, unfinished sections, console errors or uncaught browser errors. All 25 discovered HTTP/anchor links passed, including the Maz Works credit. Mail links were inspected without sending email. Existing tests also cover retired route redirects and responsive widths from 320px to 1440px.

Fixed section targets being hidden behind the sticky header; regression coverage checks the request, example-output and pressure-map anchors at 390px and 1280px. Vercel Analytics now loads only on Vercel, avoiding its missing local script.

## Demo safeguards

- Root robots metadata and the global `X-Robots-Tag` exclude pages from indexing. Tests cover marketing, authentication and workspace pages, redirect destinations and the 404 response. Crawlers can still read the noindex directives.
- `data/founder.ts` is unchanged: identity and direct contact remain null and gated. Unfinished founder copy and unreleased update sections are hidden.
- Contact and Health Check controls are disabled, including without JavaScript. They have no form submission handler or action. Direct or stale submissions to `/api/lead` receive HTTP 403 without database or email calls.
- The footer credits Maz Works and identifies the site as a demo. Website-build questions link to `manazoid4@gmail.com`.
- Corrected workspace copy about automatic enquiries and a malformed comment that had swallowed the timestamp declaration used for due leads.

## Case-study evidence

These are real Playwright captures, converted to WebP without resizing. Browser scrollbars were hidden during capture to preserve the requested image width.

| File | Dimensions | View |
| --- | --- | --- |
| [home-desktop.webp](home-desktop.webp) | 1440 × 5370 | Full desktop homepage |
| [home-mobile.webp](home-mobile.webp) | 390 × 8358 | Full mobile homepage |
| [health-check-flow.webp](health-check-flow.webp) | 1440 × 1000 | Disabled Health Check enquiry preview |

[SUMMARY.md](SUMMARY.md) contains three factual lines about the built scope. It makes no outcome, revenue, testimonial or payment claim.

## Scope excluded

No redesign, new features, dependency upgrades, founder publication, invoice, handover, walkthrough or client sign-off. No live CRM mutations or outreach sends were tested. No separate client “Website changes” document was present in the repository; requirements beyond the requested copy/demo cleanup were not pursued. Production deployment and merging this branch are outside this PR.

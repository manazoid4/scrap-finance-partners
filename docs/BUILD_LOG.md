# Build Log

## 2026-07-08

- Inspected target directory (Desktop) - no existing `scrap-finance-partners` folder found. Clean build.
- Scaffolded Next.js 15 app (App Router, TypeScript, Tailwind, ESLint) via `create-next-app`.
- Installed `framer-motion`, `lucide-react`, `recharts`.
- Created full folder structure: `docs/`, `data/`, `components/`, `agents/`, `knowledge/`, `templates/`, and page routes under `app/`.
- Wrote strategy docs: STRATEGY, FOUNDER_SOURCE_MAP, OFFER_LADDER, AUDIENCE, ROADMAP, COMPLIANCE_NOTES, DESIGN_SYSTEM.
- Next: data layer, components, pages, agent library, templates, knowledge vault, then quality checks and commit.

## 2026-08-01 — client acquisition workspace foundation

- Added a Supabase migration for organisations, role-based members, leads, email templates,
  suppressions, outbound-message history and commissionable revenue.
- Enabled row-level security on every workspace table. Authenticated users can only access an
  organisation they belong to; revenue mutations are limited to owners/admins and membership
  management to owners.
- Added lead normalisation and template placeholder rendering with unit coverage.
- Added current Supabase SSR packages and local project configuration. No remote project was
  linked or migrated during this session.
- Live portal sending remains explicitly gated by `SEND_EMAILS_ENABLED=false`.
- Removed all invented outreach and revenue records from repository templates and disabled
  Supabase seeding. The workspace must open empty and display only persisted real records.
- Blocked: the local Probity pre-edit hook cannot review TS/TSX/JSX changes because its configured
  `gpt-5.6-sol` model requires a newer Codex desktop runtime. CLI 0.146.0 is current locally; restart
  or update the desktop app before applying the prepared login/portal UI tranche.

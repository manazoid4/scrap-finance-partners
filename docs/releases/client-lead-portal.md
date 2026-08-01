# Client lead portal release note

## 2026-08-01

- Added a top-level Client Login route with signup, confirmation callback, password recovery and sign-out.
- Added a protected organisation workspace with Leads, Email templates, Email composer and Message history.
- The CRM contains no seed data. Setup mode visibly renders empty states without creating records.
- Live email is draft-only unless SEND_EMAILS_ENABLED is explicitly set to true.
- Supabase URL and publishable key remain required in Vercel before accounts and persistence become active.
- The migration must be applied to the dedicated Scrap Finance Partners Supabase project before enabling login.

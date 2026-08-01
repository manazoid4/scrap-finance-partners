# Client workspace database

`migrations/20260801201911_create_lead_workspace.sql` is the reviewed source of truth for the
client acquisition workspace. It has not been applied to a remote Supabase project.

Database seeding is disabled. The migration creates structure and access policies only; it inserts
no organisations, users, leads, templates, messages, metrics or revenue.

Before deployment:

1. Create or identify the dedicated Scrap Finance Partners Supabase project.
2. Add its URL and publishable key to local/Vercel environment variables.
3. Link the CLI to that exact project and verify the project reference before pushing migrations.
4. Run the migration, then exercise two test users in different organisations to prove isolation.
5. Configure Auth redirect URLs for production and local development.
6. Keep live email disabled until templates, privacy copy, suppression handling and sender domain
   have been checked.

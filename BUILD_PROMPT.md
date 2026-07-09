# Build Prompt — Scrap Finance Partners

Copy and paste this into Claude, Codex, Hermes, Cursor or another coding agent.

---

You are building a local-first GitHub-ready product repo for a UK niche consultancy called **Scrap Finance Partners**.

The business is founded around a person with **26 years of UK scrap metal accountancy / finance / operations / commercial systems experience**. This is not just a generic company website. It must position the founder as a trusted specialist and build a scalable consultancy/productized advisory engine around his expertise.

## Core Mission

Build a polished local Next.js app that runs on localhost first. Do not deploy to Vercel yet. Create a complete repo scaffold, commit everything locally, and prepare GitHub push commands.

The app should emulate the structure and operational usefulness of Manazir’s existing growth hub projects, especially the Zawiya Growth Hub style of:

- clear strategic pages,
- action databases,
- role/agent prompts,
- knowledge vault structure,
- growth tasks,
- practical templates,
- not just a pretty landing page.

Use **YouMind.com** as design inspiration: premium, editorial, spacious, polished, modern, AI/workspace feel, beautiful cards, soft motion, strong typography, taste-led layout, and sections based on capturing messy expertise then shaping it into real outputs.

## Business Context

The founder’s background includes:

- 26 years in UK scrap metal accountancy and finance.
- Cross-functional support across Finance, Operations, Commercial, Transport and Systems.
- Fred system reporting development and maintenance.
- Stock reporting, stock sheets, stock position reporting and discrepancy investigation.
- EWC code maintenance.
- New site setup in Fred.
- Transport module support to move bookings from manual deal sheets into Fred.
- KPI reporting across Operations, Transport and Commercial departments.
- Payroll preparation support.
- Commission calculations.
- Xero product code creation by machine.
- Nominal coding structure support.
- Process improvement, reporting accuracy, cost savings and data visibility.

## Name and Brand

Use the primary name:

**Scrap Finance Partners**

Tagline options to use throughout:

- “Finance clarity for scrap metal and recycling businesses.”
- “Outsourced finance intelligence for scrap yards, recyclers and circular businesses.”
- “Turn stock, transport and commercial data into better decisions.”

Visual direction:

- Premium but practical.
- Trustworthy, mature, finance-led.
- Industry-specific without looking dirty or cheap.
- Dark graphite / off-white / muted green / zinc / copper accent palette.
- Large editorial typography.
- Soft gradients, glass cards, data panels, subtle industrial grid lines.
- No generic recycling clipart.
- Use tasteful visuals: stock movement cards, KPI cards, data dashboards, yard-map abstract lines, metal texture inspiration but minimal.

## Tech Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui style components if suitable
- Framer Motion for subtle animation
- Lucide icons
- MDX or Markdown content source for knowledge/growth pages
- Local JSON seed data for services, pricing, agents, tasks, case studies and resources

Do not add auth, database or payments yet. Keep it local-first and simple to run.

## Required App Pages

Create these routes:

1. `/`
   - Premium landing page.
   - Hero focused on scrap metal finance clarity.
   - Founder authority card: 26 years in UK scrap metal finance.
   - Pain points: stock errors, manual reporting, weak KPI visibility, hidden margin leaks, disconnected Fred/Xero/processes.
   - “How we help” service grid.
   - Retainer pricing cards.
   - Diagnostic call CTA.
   - Lead magnet CTA.

2. `/services`
   - Detail service offerings:
     - KPI dashboard and management reporting.
     - Forecasting and cashflow.
     - Outsourced Finance Director / Business Partner.
     - Fred reporting and systems improvement.
     - Stock accuracy and reconciliation.
     - Payroll, commission and coding support.
     - Commercial and transport performance reporting.

3. `/pricing`
   - Bronze £500/month.
   - Silver £1,000/month.
   - Gold £2,000+/month.
   - Include “best for”, included deliverables, outcomes and upsell path.
   - Add one-off products:
     - Scrap Yard Finance Health Check.
     - Stock Accuracy Sprint.
     - Fred Reporting Improvement Sprint.
     - Outsourced FD Setup Month.

4. `/founder`
   - Personal authority page.
   - Show the founder as a real person, not just a logo.
   - Include timeline of role evolution.
   - Include credibility sections:
     - Finance.
     - Operations.
     - Commercial.
     - Fred systems.
     - Stock integrity.
     - Process improvement.
   - Include a human positioning paragraph: “I know the reality of scrap businesses: fast-moving yards, stock pressure, manual workarounds, transport issues, commercial urgency and finance needing to keep up.”

5. `/health-check`
   - Lead magnet and diagnostic product page.
   - Create a checklist-style page with sections:
     - Stock visibility.
     - Margin reporting.
     - Transport performance.
     - Fred/Xero/system data.
     - Payroll/commission/coding risk.
     - Management decision rhythm.
   - Include a form mockup but no backend yet.

6. `/dashboard-demo`
   - Mock KPI dashboard using seed data.
   - Cards: stock value, gross margin, transport cost per tonne, debtor days, stock discrepancy count, monthly throughput, top product codes, EWC risk items.
   - Charts with dummy data.
   - Should look like something a scrap company owner would immediately understand.

7. `/growth-hub`
   - Internal strategic command centre inspired by Zawiya Growth Hub.
   - Sections:
     - Now / Next / Later tasks.
     - Client pipeline.
     - Content ideas.
     - Offer ladder.
     - Outreach experiments.
     - Agent/skill library.
     - Knowledge vault links.

8. `/agents`
   - List all specialized agents/skills.
   - Each card shows role, purpose, inputs, outputs and prompt file path.

9. `/knowledge`
   - Knowledge vault landing page.
   - Include placeholder categories:
     - Scrap industry finance.
     - Fred reporting.
     - Stock accuracy.
     - Compliance and risk.
     - Sales material.
     - Client templates.

10. `/contact`
   - Simple contact page with mock form.
   - Include email placeholder, phone placeholder and LinkedIn placeholder.
   - No backend. Console log form data or keep as static.

## Required Repo Structure

Create:

```txt
scrap-finance-partners/
  README.md
  package.json
  next.config.ts
  tsconfig.json
  tailwind.config.ts
  postcss.config.js
  app/
    layout.tsx
    page.tsx
    globals.css
    services/page.tsx
    pricing/page.tsx
    founder/page.tsx
    health-check/page.tsx
    dashboard-demo/page.tsx
    growth-hub/page.tsx
    agents/page.tsx
    knowledge/page.tsx
    contact/page.tsx
  components/
    site-header.tsx
    site-footer.tsx
    hero-section.tsx
    section-heading.tsx
    service-card.tsx
    pricing-card.tsx
    kpi-card.tsx
    dashboard-chart.tsx
    agent-card.tsx
    growth-board.tsx
  data/
    services.ts
    pricing.ts
    founder.ts
    kpis.ts
    agents.ts
    growth-tasks.ts
    content-ideas.ts
  agents/
    industry-research-agent.md
    finance-diagnostic-agent.md
    fred-systems-agent.md
    kpi-dashboard-agent.md
    sales-proposal-agent.md
    content-seo-agent.md
    compliance-risk-agent.md
    personal-brand-agent.md
    growth-ops-agent.md
    client-onboarding-agent.md
  knowledge/
    scrap-finance-primer.md
    fred-reporting-notes.md
    stock-accuracy-playbook.md
    retainer-offer-notes.md
    outreach-playbook.md
  templates/
    finance-health-check.md
    discovery-call-script.md
    proposal-template.md
    monthly-report-template.md
    linkedin-posts.md
  public/
    logo-placeholder.svg
```

## Agent/Skill Files

Create each Markdown agent file with:

- Role.
- When to use.
- Inputs required.
- Output format.
- Prompt.
- Quality bar.

### Required Agents

1. **Industry Research Agent**
   - Research UK scrap metal/recycling market, competitors, regulation shifts, digital waste tracking, BMRA updates, Companies House, HMRC, Environment Agency.
   - Output: strategic brief, opportunity map, risks.

2. **Finance Diagnostic Agent**
   - Turn client interview notes into a finance health check.
   - Output: red/amber/green report, missed margin opportunities, immediate fixes.

3. **Fred Systems Agent**
   - Diagnose Fred reporting, stock sheets, EWC codes, site setup, transport module workflows.
   - Output: systems improvement roadmap.

4. **KPI Dashboard Agent**
   - Build monthly KPI definitions and dashboard logic.
   - Output: KPI pack, formulas, commentary.

5. **Sales Proposal Agent**
   - Convert prospect pain points into a tailored proposal.
   - Output: proposal, pricing, next steps.

6. **Content SEO Agent**
   - Create LinkedIn posts, articles and service pages.
   - Output: authoritative content that sounds like a 26-year industry specialist.

7. **Compliance Risk Agent**
   - Check for areas needing legal/accountancy/compliance review.
   - Must not give legal advice as final truth. Must flag “confirm with regulated professional / official source”.

8. **Personal Brand Agent**
   - Turn founder experience into LinkedIn/about/case-study material.
   - Output: polished authority content.

9. **Growth Ops Agent**
   - Manage pipeline, experiments, outreach and next tasks.
   - Output: weekly growth sprint plan.

10. **Client Onboarding Agent**
   - Build onboarding checklist, document requests and first 30-day plan.
   - Output: onboarding pack.

## Growth Hub Data

Create seed data for:

### Now Tasks

- Choose final business name.
- Confirm founder qualifications and regulated services boundary.
- Create one-page PDF lead magnet.
- Build 3 dummy dashboard examples.
- Create 50-prospect outreach list.
- Draft founder LinkedIn profile.

### Next Tasks

- Create 10 LinkedIn posts.
- Create health check scoring model.
- Create discovery call script.
- Create proposal template.
- Create client onboarding checklist.

### Later Tasks

- Add CRM database.
- Add Stripe for retainers.
- Add lead capture backend.
- Add gated knowledge vault.
- Add client portal.
- Add automated reporting upload flow.

## Copywriting Requirements

Use strong direct copy. Examples:

- “Most scrap businesses do not have a data problem. They have a visibility problem.”
- “When stock, transport, commercial and finance data disagree, owners make expensive decisions in the dark.”
- “We help scrap and recycling businesses turn messy operational data into finance-led decisions.”
- “You do not need a full-time Finance Director to get Finance Director-level clarity.”
- “Built by someone who understands yards, stock pressure, Fred reporting, Xero coding, transport and commercial reality.”

Avoid vague phrases like:

- “Empowering businesses”
- “Innovative solutions”
- “World-class excellence”
- “We are passionate”

## Compliance / Professional Boundary

Add a small disclaimer in footer and relevant pages:

“This website is for consultancy positioning and does not provide legal, tax, audit or regulated financial advice. Formal accountancy, tax, audit, AML or compliance services should be provided only through appropriately qualified and supervised professionals.”

Also add a setup note in README:

Before trading, confirm business structure, professional body membership, AML supervision requirements, insurance, engagement letters, GDPR/privacy, professional indemnity insurance and whether Companies House authorised agent/ACSP status is needed for any filing or identity verification services.

## Dashboard Demo Requirements

Use dummy data but make it realistic.

KPIs:

- Monthly throughput tonnes.
- Stock value.
- Gross margin by material category.
- Transport cost per tonne.
- Stock discrepancy count.
- Debtor days.
- Supplier/customer concentration.
- Product code exceptions.
- EWC code issues.
- Manual process risk count.

Charts:

- Monthly tonnes trend.
- Gross margin by material category.
- Transport cost per tonne over time.
- Stock discrepancies by site.

## README Requirements

Include:

- Project overview.
- Local setup.
- Scripts.
- Repo structure.
- Business concept.
- Pages included.
- Agent library overview.
- Compliance notes.
- GitHub push instructions.

Local setup:

```bash
npm install
npm run dev
```

GitHub setup commands:

```bash
git init
git add .
git commit -m "Initial Scrap Finance Partners local build"
git branch -M main
gh repo create manazoid4/scrap-finance-partners --private --source=. --remote=origin --push
```

If GitHub CLI is not available:

```bash
git remote add origin https://github.com/manazoid4/scrap-finance-partners.git
git push -u origin main
```

## Build Quality Bar

The result must feel like a real premium consultancy website and internal operating system, not a generic template.

Before finishing:

- Run TypeScript checks.
- Run lint if configured.
- Confirm `npm run dev` works.
- Commit locally.
- Output exact commands used.
- Output any remaining TODOs.
- Do not deploy.

## Final Deliverable

When complete, report:

1. Localhost URL.
2. Files created.
3. Commands run.
4. Suggested next 5 improvements.
5. Any compliance or business details still needed from the founder.

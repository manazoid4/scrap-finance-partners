# Client Acquisition System

## Objective

Win suitable UK scrap and recycling clients for Scrap Finance Partners. The first campaign sells
the fixed-scope Finance Health Check. Monthly support is discussed only after a real need is found.

## Commercial model

- Base campaign management: **£150 per month**.
- Success fee: **15% of net revenue actually collected** from an attributable new client during
  their first six months.
- Exclude VAT, refunds, unpaid invoices, existing relationships and opportunities already in the
  client's pipeline.
- Record the lead source before the first meeting. Pay commission only after client funds clear.

## Operating flow

1. Copy `templates/outreach/prospects.example.json` to
   `private/outreach/prospects.json` and replace the invented record.
2. Record every source URL and company type. Do not commit real prospect information.
3. Copy the suppression example to `private/outreach/suppression.json` and retain every opt-out.
4. Run `npm run outreach:prepare`.
5. Review every generated message in `private/outreach/queue.json`; set `approved` to `true` only
   after checking the company, recipient, source and wording.
6. Run `npm run outreach:send` for a dry run.
7. Run `npm run outreach:send -- --confirm` only when the approved batch is ready.
8. Stop scheduled follow-ups as soon as a recipient replies, objects, opts out or bounces.
9. Record paid, campaign-attributable invoices in `private/outreach/revenue.json`; run
   `npm run outreach:commission` to generate the private commission report.

## Eligibility and compliance controls

- Limited companies, LLPs and other corporate bodies are eligible by default.
- Sole traders and non-corporate partnerships require recorded consent before email outreach.
- Personal business-contact data still requires a documented UK GDPR lawful basis, transparent
  privacy information, source recording and prompt handling of objections.
- Do not use tracking pixels. Measure delivery, replies, booked meetings, proposals, wins and cash
  collected.
- Identify Scrap Finance Partners honestly. Never disguise the sender, invent client outcomes or
  imply an existing relationship.
- Treat the suppression list as permanent operational data. Never delete someone merely so they
  can re-enter a future list.

## Pipeline stages

`sourced → verified → approved → contacted → replied → qualified → meeting → proposal → won/lost → paid`

## Weekly review

- New verified companies and excluded records.
- Delivery failures, objections and suppression additions.
- Replies, qualified conversations, meetings and proposals.
- Won revenue, cash collected and commission due.
- Which pain angle produced useful conversations; revise before increasing volume.

## Client portal next

The account system will be invitation-led for paying clients: authentication, secure report access,
lead and commission summaries, document exchange and password recovery. Public signup is not an
acquisition priority and should not expose private campaign data.

# Marketing scaffold

**Drafts only. Nothing here is approved for publication, and no advertisement is to be launched
from this file.** Every asset is written to be *evidence-safe*: no fee, no outcome figure, no
client reference, no founder identity claim. Anything in `[SQUARE BRACKETS]` is a gap needing a
decision or an approval before the copy can be used.

Check [`CLAIMS_REGISTER.md`](CLAIMS_REGISTER.md) before publishing any of it. Founder identity,
fee, turnaround and all outcome figures are currently `PENDING`, so the copy below is written to
work without them.

---

## 1. LinkedIn company description

> Commercial finance for UK scrap metal, recycling and waste businesses.
>
> Most yards can tell you their spread. Far fewer can tell you what a grade actually returned
> once haulage, handling, yard time and tied-up cash had taken their cut — because the reporting
> that would show it does not exist.
>
> We run a Finance Health Check: a bounded review of the trading, stock, transport, cash and
> reporting information a business already keeps, to establish which commercial decisions are
> being made on figures that do not hold up. You get written findings, a ranked order of action,
> and a clear statement of what we did not examine.
>
> Scope and fee are fixed in writing before anything starts. No outcome is guaranteed, and we
> will tell you if a Health Check is not what you need.
>
> Commercial consultancy only — not legal, tax, audit or regulated financial advice.

**Specialities:** scrap metal finance · commercial margin analysis · stock reporting and
reconciliation · haulage and route economics · management information · Fred reporting

---

## 2. Founder LinkedIn biography

> **BLOCKED — do not publish.** Founder identity, biography and qualifications are `PENDING` in
> the claims register. The structure below is ready; every bracketed field needs written
> confirmation first, and the name and role must come from the client rather than be inferred.

> [NAME] — [ROLE], Scrap Finance Partners
>
> 26 years of accountancy and finance experience in UK scrap metal.
>
> I work with owner-managed scrap, recycling and waste businesses on one question: does the
> margin still hold after the yard has done the work?
>
> Most of what I do is unglamorous. Attributing haulage to the grade that caused it. Working out
> whether a stock variance is a counting problem or a reporting one. Getting a month-end pack to
> land while the decisions it should inform are still open.
>
> [ONE SPECIFIC, VERIFIABLE SENTENCE ABOUT SECTOR BACKGROUND — CLIENT TO SUPPLY]
>
> Commercial consultancy only. Statutory accounts, audit and tax stay with your accountant.
>
> [APPROVED CONTACT ROUTE]

**Before publishing:** confirm name, role, the background sentence, portrait usage rights and the
contact route in writing; set the claims register rows to `APPROVED`; populate `founderIdentity`
and `founderContact` in `data/founder.ts`.

---

## 3. Six social-post drafts

Each is evidence-safe: a question or an observation, no figures, no claims.

**1 — The premise**
> Your best-selling grade might be your worst deal.
>
> The spread is calculated at the two moments material is easiest to measure: the weighbridge in,
> and the invoice out. Everything between those points costs money — and almost none of it lands
> on the grade that caused it.
>
> Which of your grades takes the most yard time? And is it the one you would have guessed?

**2 — Haulage**
> Transport cost is usually known accurately, and known too late.
>
> The invoice is precise. It arrives after the commitment. By then the only question left is how
> to absorb it.
>
> Ask it earlier: what will it cost to move this, on this route, at this frequency, with this
> chance of running empty one way? It does not need to be exact. It needs to exist before the
> decision.

**3 — Stock confidence**
> Most yards can tell you roughly how far out their stock figure is.
>
> That is the finding. The number is not trusted, everyone has privately adjusted for it, and
> nobody has written the adjustment down.
>
> Once a figure carries a mental correction, it has stopped being information.

**4 — Counting vs reporting**
> A stock variance is either a counting problem or a reporting problem, and they need opposite
> fixes.
>
> Counting: the material genuinely is not what the system says.
> Reporting: the material is right and the number is wrong.
>
> Working out which one you have costs far less than fixing the wrong one.

**5 — Capacity**
> Space and transport are the only genuinely finite things in a yard.
>
> You can raise a price or chase a debt. You cannot conjure another acre at short notice.
>
> Material sitting in a bay is renting your yard. The rent is whatever the faster-moving
> alternative would have earned. No ledger records it, which is why it persists.

**6 — Reporting**
> A report that arrives after the decision is not a report. It is a record.
>
> The test is not whether the pack went out. It is whether anything on it could still change an
> outcome by the time somebody reads it.

---

## 4. Three Instagram / Meta advert concepts

**Not to be launched.** Concepts only, for review. No advertising spend is authorised, and no
concept may run until the claims register permits every element of its copy.

| # | Concept | Primary text | Headline | Visual direction | Destination |
|---|---|---|---|---|---|
| 1 | **The two numbers** | "The spread says the deal worked. The bank says something else. A Finance Health Check finds out which one is right." | Does your margin survive the yard? | Static. Split panel, graphite / copper. Two ruled figures, the second redacted. No stock photography, no people. | `/health-check` |
| 2 | **The seven pressures** | "Purchase price. Selling price. Haulage. Handling. Yard capacity. Working capital. Seven things happen between the buy and the bank — most reporting shows you two." | What happened to the other five? | Static, or a four-frame carousel. Typographic ledger, one pressure per frame, sharp edges, no icons. | `/health-check#pressure-map` |
| 3 | **The document** | "You get a short written document that answers one commercial question, states what it rests on, and says what to do first. Here is the format." | See the output before you buy the work. | Static. The redacted findings artifact, shot as a document. Redaction blocks visible — that is the point. | `/health-check#example-output` |

**Rules for all three:** no fee, no turnaround, no outcome figure, no testimonial, no client
reference, and no founder name until approved. Every ad must land on a page whose claims are
`APPROVED`.

---

## 5. Two Health Check landing-page angles

**Angle A — "The number that lies."** Leads on the gap between headline spread and realised
return. Best for cold traffic that does not yet know it has a problem. Proof sequence: premise →
pressure map → redacted output → case note → enquiry. Currently live at `/health-check`.

**Angle B — "Bounded, and it says where it stops."** Leads on scope, exclusions and the fixed-fee
process. Best for warm traffic already comparing advisers, and for anyone burned by an
open-ended consulting engagement. Proof sequence: what it is and is not for → exclusions →
stages → redacted output → enquiry. Would need its own route (`/health-check/scope`) and its own
UTM.

Test one at a time. See [`MEASUREMENT.md`](MEASUREMENT.md).

---

## 6. UTM naming template

The site already captures `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and
`utm_term` on every enquiry (`components/lead-form.tsx` → `app/api/lead/route.ts`), plus the
landing path and referrer domain. Use lower-case, hyphen-separated values only.

```
?utm_source=<platform>&utm_medium=<channel>&utm_campaign=<yyyy-mm>-<theme>&utm_content=<asset>
```

| Parameter | Allowed values | Example |
|---|---|---|
| `utm_source` | `linkedin`, `meta`, `google`, `email`, `direct-outreach`, `referral` | `linkedin` |
| `utm_medium` | `organic-social`, `paid-social`, `cpc`, `email`, `qr`, `print` | `paid-social` |
| `utm_campaign` | `<yyyy-mm>-<theme>` | `2026-08-margin-gap` |
| `utm_content` | asset identifier, matching the concept table above | `concept-1-two-numbers` |
| `utm_term` | keyword, paid search only | `scrap-yard-finance` |

Full example:
`/health-check?utm_source=meta&utm_medium=paid-social&utm_campaign=2026-08-margin-gap&utm_content=concept-3-document`

Never put a person's name, a client name or any figure into a UTM value — they are logged,
shared, and end up in analytics exports.

---

## 7. One-page capability statement

> ### Scrap Finance Partners
> **Commercial finance for UK scrap metal, recycling and waste.**
>
> **The problem we work on**
> A yard can be busy, profitable on paper, and still unable to say which material is worth
> taking. The spread is easy to calculate. What the material cost to move, handle, hold and
> displace is not — and it is usually the part that decides the answer.
>
> **What we do**
> A **Finance Health Check**: a bounded commercial review across trading margin, stock
> confidence, transport, yard capacity, working capital and management information. Built on the
> records the business already keeps.
>
> **What you receive**
> A written findings document. A ranked action list, each item marked as an internal fix, scoped
> work, or specialist. An explicit statement of assumptions and of what was not examined. A
> walkthrough conversation where you get to argue with the conclusions.
>
> **What it is not**
> Not statutory accounts, audit, tax or regulated financial advice. Not insolvency or
> restructuring. Not a stock count or valuation. Not a software implementation. No guaranteed
> saving, margin improvement or recovery — none is calculated, promised or implied.
>
> **How it runs**
> Scope agreed first. Fee fixed in writing before work starts. No day rate that runs on. Most
> findings are internal fixes you can act on yourself, and that is a good outcome.
>
> **Experience**
> 26 years of accountancy and finance experience in UK scrap metal. One person does the work, and
> that is the person you speak to.
>
> **Contact**
> [APPROVED CONTACT ROUTE] · scrap-finance-partners.vercel.app
>
> *Commercial consultancy only. This document does not provide legal, tax, audit or regulated
> financial advice.*

**Note:** any PDF export of this must carry the boundary disclaimer above — standalone documents
do not inherit the site footer. That omission is exactly what put the withdrawn one-pagers out of
compliance; see [`one-pagers/README.md`](one-pagers/README.md).

---

## 8. Case-study approval template

Send to the client. Publish nothing until every field is returned and signed.

> **Proposed case study — approval request**
>
> We would like to publish an anonymised account of the work described below. It would appear at
> scrap-finance-partners.vercel.app/case-studies. Nothing is published unless you approve the
> exact wording, and you can withdraw approval at any time.
>
> **1. Proposed public wording, in full:**
> [PASTE THE EXACT TEXT — NOT A SUMMARY]
>
> **2. What we would NOT say:** your name, location, site count, turnover, customers, suppliers,
> systems, or any figure.
>
> **3. Please confirm:**
> - [ ] I approve this exact wording for publication.
> - [ ] I confirm nothing in it identifies my business, directly or indirectly.
> - [ ] I understand no financial outcome is stated, because none was measured.
> - [ ] I understand I can withdraw this approval in writing at any time.
>
> **4. Anything you want changed or removed:**
> [FREE TEXT]
>
> Name: [NAME] · Role: [ROLE] · Date: [YYYY-MM-DD] · Signature: [SIGNATURE]

**On receipt:** transfer every answer into the `ApprovalRecord` in `data/client-engagements.ts`,
add a dated row to the claims register, and only then set `publish: true`. If any box is
unticked, the answer is no.

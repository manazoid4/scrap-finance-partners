# Client onboarding pack

**Internal template. Not published, not served, not linked from the site.** `templates/` sits
outside `public/`, so nothing here is reachable over HTTP. Never paste a real client name,
figure or document into this file — copy it out, fill the copy, and keep the filled version out
of this repository.

Placeholders are written as `[SQUARE BRACKETS]`. Dates are ISO `YYYY-MM-DD`.

Before sending anything from this pack, check
[`../../docs/marketing/CLAIMS_REGISTER.md`](../../docs/marketing/CLAIMS_REGISTER.md). No fee,
turnaround or outcome figure may be quoted until its row is `APPROVED`.

---

## 1. Welcome email

> **Subject:** Your Finance Health Check — what happens now
>
> Hello [FIRST NAME],
>
> Thanks for confirming. This note sets out what happens next so nothing comes as a surprise.
>
> **What we agreed.** A Finance Health Check covering [AGREED SCOPE AREAS], across
> [TRADING PERIOD]. The fee is [AGREED FEE] and the findings are with you by [AGREED DATE]. Both
> are fixed — they do not move unless you ask for the scope to change, and we agree that in
> writing first.
>
> **What I need from you.** The list is attached (section 3). It is deliberately short, and it is
> all information you already keep. Nothing needs rebuilding for my benefit — if it does not
> already exist, it is not part of the review.
>
> **How to send it.** Please use the secure link in section 4 rather than email attachments.
>
> **First conversation.** [DATE / TIME], around [DURATION]. Agenda in section 5. I would like
> [OWNER] there, and ideally whoever runs the yard and whoever books the transport.
>
> **What I will not be doing.** No statutory accounts, no audit, no tax work, no stock count, no
> valuation, no software. If something turns out to need one of those, I will say so and stop.
>
> Any questions before we start, reply to this email.
>
> [SIGN-OFF]

---

## 2. Engagement overview

| Item | Detail |
|---|---|
| Client | [CLIENT NAME] |
| Engagement reference | [SFP/HC/NNN] |
| Scope areas | [TRADING MARGIN / STOCK / TRANSPORT / CASH / REPORTING] |
| Trading period examined | [PERIOD] |
| Fee | [AGREED FEE] — fixed, agreed in writing |
| Findings due | [YYYY-MM-DD] |
| Primary contact | [NAME, ROLE] |
| Others involved | [YARD / TRANSPORT / FINANCE CONTACTS] |
| Explicitly out of scope | Statutory accounts, audit, tax, regulated advice, insolvency, stock count, valuation, systems implementation |
| Outcome commitment | None. No saving, margin improvement or recovery is promised or implied. |

**Confidentiality.** Nothing about this engagement — the client's name, sector position, figures,
or the fact that they are a client — appears on the website, in marketing, in a case study, or in
conversation with anyone else, unless the client approves the exact wording in writing. That
approval is recorded in section 7 and in the claims register.

---

## 3. Information request checklist

Tick as received. Chase nothing more than twice; if something is not available, record that and
carry it into the findings as a stated boundary.

- [ ] Purchase records for [PERIOD] — supplier, grade, weight, price, date
- [ ] Sales records for [PERIOD] — customer, grade, weight, realised price, deductions, date
- [ ] Haulage and transport records for [PERIOD] — route, load, cost, carrier
- [ ] Period-end stock reports for [PERIOD]
- [ ] Any stock reconciliation working papers or variance notes
- [ ] Management accounts for [PERIOD]
- [ ] The current management reporting pack, as it is actually circulated
- [ ] Grade / material code list and any mapping between systems
- [ ] Nominal structure or chart of accounts extract
- [ ] Names and availability of the people for the interviews in section 5

**Not requested and not wanted:** payroll detail beyond aggregate yard labour cost, employee
personal data, customer bank details, or anything covered by a third-party NDA the client cannot
share under.

---

## 4. Secure document-sharing instructions

> Please do not send records as email attachments. Email is not a secure channel, and these are
> your commercial records.
>
> 1. Use the upload link at [SECURE UPLOAD LINK] — it is unique to this engagement and expires
>    on [YYYY-MM-DD].
> 2. If you would rather use your own system, share a folder with [APPROVED ADDRESS] and set it
>    to expire.
> 3. Do not include employee personal data, customer bank details, or anything you are not free
>    to share.
> 4. If a file is too large, tell me and we will arrange it — do not split it across emails.

**Internal handling rules.**

- Store client records only in [APPROVED LOCATION]. Never in this repository, never in a scratch
  directory, never in a chat tool.
- Retain for [RETENTION PERIOD] after the engagement closes, then delete and record the deletion.
- Never paste client figures into an AI tool, a support ticket, or a commit message.
- On close, confirm deletion to the client in writing.

---

## 5. Meeting agenda

**Kick-off — [DURATION]**

1. What decision prompted this. What you would do differently if you trusted the numbers. (10m)
2. How buying prices are actually set, and by whom. (10m)
3. What happens physically to material between the gate and the outbound load. (15m)
4. Where you already suspect the reporting is wrong. (10m)
5. Who does what at month-end, and when the pack actually lands. (10m)
6. Confirm the information request and who owns each item. (5m)

**Findings walkthrough — [DURATION]**

1. The question we set out to answer, restated. (5m)
2. What the evidence showed, in the order it matters. (20m)
3. Assumptions each finding rests on — challenge these. (15m)
4. The ranked action list: internal fix, scoped work, or specialist. (15m)
5. What was not examined, and why. (5m)
6. What happens next, including the option of nothing. (5m)

---

## 6. Scope-confirmation checklist

Complete before any work begins. If any box is unticked, work has not started.

- [ ] Scope areas agreed and written down
- [ ] Trading period agreed
- [ ] Fee agreed in writing and acknowledged by the client
- [ ] Findings date agreed in writing
- [ ] Exclusions listed and explicitly acknowledged
- [ ] Information request issued
- [ ] Secure sharing route set up and tested
- [ ] Interview participants confirmed
- [ ] Confirmed in writing that no outcome is guaranteed
- [ ] Confirmed that nothing about the engagement is published without separate written approval

---

## 7. Approval and sign-off record

### Engagement sign-off

| Field | Value |
|---|---|
| Scope confirmed by | [NAME, ROLE] |
| Date | [YYYY-MM-DD] |
| Method | [EMAIL / SIGNED DOCUMENT] |
| Findings delivered | [YYYY-MM-DD] |
| Findings accepted by | [NAME, ROLE] |
| Records deleted / returned | [YYYY-MM-DD] |

### Publication approval — required before any public mention

Leave every row at its default unless the client has approved publication in writing. Mirror the
answers into the matching `ApprovalRecord` in `data/client-engagements.ts` and into the claims
register. Any default value means **do not publish**.

| Gate | Default | Notes |
|---|---|---|
| `publish` | `false` | Master switch |
| `publicationApproved` | `false` | Client approved this exact content |
| `approvedPublicCopy` | `null` | The precise signed-off wording, verbatim |
| `evidenceStatus` | `unverified` | `unverified` / `client-supplied` / `client-confirmed` / `documented` |
| `outcomeVerified` | `false` | Only `true` if an outcome was measured against records |
| `identifyingRiskReviewed` | `false` | Checked that the client cannot be identified indirectly |
| `approvalDate` | `null` | `YYYY-MM-DD` |

**Indirect identification check.** Before setting `identifyingRiskReviewed` to `true`, confirm
the text does not reveal the client through: location, site count, turnover band, named systems
in an unusual combination, a distinctive material mix, a named customer or supplier, or a period
specific enough to match against public filings.

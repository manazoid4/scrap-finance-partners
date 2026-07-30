/**
 * Buyer-facing changelog.
 *
 * Public rules:
 *  - `live`      — only features already deployed to production.
 *  - `upcoming`  — only approved work that is likely to ship. Never implies availability.
 *  - `exploring` — never implies availability, a date, or a commitment.
 *
 * Never record: private client names or details, advertising plans, internal agent or
 * tooling work, unfinished founder identity details, confidential roadmap items, or
 * commit-level technical noise. The technical record belongs in CHANGELOG.md.
 */

export type ReleaseStatus = "live" | "upcoming" | "exploring";

export type ReleaseEvidence =
  | "Deployed and verified in production"
  | "Approved, not yet released"
  | "Under consideration only";

export type ChangelogEntry = {
  /** Plain-English summary. No jargon, no commit messages. */
  change: string;
  /** Why a buyer should care, written from their side of the table. */
  benefit: string;
  /** A page they can go and look at, or null where nothing is visible yet. */
  relatedPage: string | null;
};

export type Release = {
  version: string;
  /** ISO YYYY-MM-DD. Null only where no date is committed, which forces a non-live status. */
  releaseDate: string | null;
  status: ReleaseStatus;
  title: string;
  summary: string;
  evidence: ReleaseEvidence;
  entries: ChangelogEntry[];
};

export const releases: Release[] = [
  {
    version: "2.0",
    releaseDate: "2026-07-30",
    status: "live",
    title: "The evidence room",
    summary:
      "A rebuild around one idea: show the working before asking for the enquiry.",
    evidence: "Deployed and verified in production",
    entries: [
      {
        change:
          "The Finance Health Check now has a full page setting out who it is for, who it is not for, the questions reviewed, the information we ask for, the review stages, what you receive, and what is explicitly excluded.",
        benefit:
          "You can judge whether it fits before speaking to anyone, and you can see where the work stops.",
        relatedPage: "/health-check",
      },
      {
        change:
          "Added an example of what a Health Check output looks like, clearly labelled as a format example built on invented figures.",
        benefit:
          "You can see the shape of the deliverable instead of taking a description on trust.",
        relatedPage: "/health-check#example-output",
      },
      {
        change:
          "Added a commercial pressure map showing how purchase price, selling price, haulage, handling, yard capacity and working capital each act on the return from a deal.",
        benefit:
          "It shows which pressures get examined, without pretending to calculate your numbers.",
        relatedPage: "/health-check#pressure-map",
      },
      {
        change:
          "The enquiry form now asks only for your name, company and work email. Telephone, the commercial challenge, timing and any extra context are optional.",
        benefit: "Less to fill in before you get a reply.",
        relatedPage: "/contact",
      },
      {
        change:
          "Every enquiry point now states the response window, who reads the enquiry, and an email address you can use instead of the form.",
        benefit: "You know when to expect a reply and who is reading it.",
        relatedPage: "/contact",
      },
      {
        change:
          "Rebuilt the navigation and page layouts for phones, and made the Health Check action reachable without opening the menu.",
        benefit: "The site works one-handed, on a phone, in a yard.",
        relatedPage: null,
      },
      {
        change:
          "Published three practical articles: margin after operating cost, stock confidence, and how haulage and yard capacity should influence which deals you take.",
        benefit:
          "Questions you can put to your own numbers this week, whether or not you ever make contact.",
        relatedPage: "/insights",
      },
      {
        change:
          "Tightened the controls that keep client information private, and withdrew three marketing one-pagers that carried figures nobody had approved.",
        benefit:
          "Nothing about a client reaches this site without their written approval, and no figure appears here that cannot be evidenced.",
        relatedPage: null,
      },
      {
        change:
          "Renamed the engagement page from Pricing to Ways to Work Together, and explained plainly how fee and timing are agreed.",
        benefit: "The page no longer promises a price list it does not carry.",
        relatedPage: "/ways-to-work-together",
      },
    ],
  },
  {
    version: "2.1",
    releaseDate: null,
    status: "upcoming",
    title: "Named authority and a published engagement basis",
    summary:
      "Drafted and ready. Waiting on written sign-off before anything is published.",
    evidence: "Approved, not yet released",
    entries: [
      {
        change:
          "A named profile with a photograph, sector background and direct contact details for the person who does the work.",
        benefit: "You will know exactly who you are dealing with before making contact.",
        relatedPage: "/about",
      },
      {
        change: "A published basis for the Health Check fee and turnaround.",
        benefit:
          "You will be able to judge cost and timing from the site rather than having to ask.",
        relatedPage: "/ways-to-work-together",
      },
    ],
  },
  {
    version: "—",
    releaseDate: null,
    status: "exploring",
    title: "Under consideration only",
    summary:
      "Being thought about. Not available, not scheduled, and not something you can buy or join.",
    evidence: "Under consideration only",
    entries: [
      {
        change:
          "Whether a software tool could make stock and margin information easier to trust day to day.",
        benefit:
          "Nothing to evaluate yet. It would only ever follow work that proved the need first.",
        relatedPage: null,
      },
      {
        change:
          "Whether more anonymised engagement write-ups can be published, subject to approval in each case.",
        benefit:
          "More worked examples to judge us on — if, and only if, clients agree to them.",
        relatedPage: null,
      },
    ],
  },
];

export const statusLabels: Record<ReleaseStatus, string> = {
  live: "Live",
  upcoming: "Upcoming",
  exploring: "Exploring",
};

export const statusNotes: Record<ReleaseStatus, string> = {
  live: "Deployed and working on this site now.",
  upcoming: "Approved and likely to ship. Not available yet.",
  exploring: "Being considered. Not available, not scheduled, not a commitment.",
};

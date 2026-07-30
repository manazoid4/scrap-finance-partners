import type { Metadata } from "next";
import Link from "next/link";

import { engagement } from "@/data/health-check";

export const metadata: Metadata = {
  title: "Ways to work together",
  description:
    "How scope, fee and timing are agreed, and the three ways an engagement can run — from diagnosis to focused improvement to ongoing support.",
};

const stages = [
  {
    number: "01",
    stage: "Diagnose",
    title: "Finance Health Check",
    body: "A bounded review of the commercial picture, producing written findings and a ranked order of action. Almost every engagement starts here, because scoping anything larger without it is guesswork.",
    commitment: "One fixed-fee piece of work. No obligation to buy anything afterwards.",
    href: "/health-check",
    hrefLabel: "See the full scope",
  },
  {
    number: "02",
    stage: "Improve",
    title: "Scoped project",
    body: "Defined work on a specific issue the diagnosis surfaced — a margin question, a stock reporting gap, transport attribution, or a month-end that arrives too late to matter.",
    commitment: "Quoted separately, with its own scope and end point. Never open-ended.",
    href: "/services",
    hrefLabel: "How we help",
  },
  {
    number: "03",
    stage: "Control",
    title: "Ongoing support",
    body: "Regular commercial finance input where the business genuinely needs continuity — a recurring decision rhythm rather than a one-off answer.",
    commitment: "Only where it earns its place. Never a condition of the work above.",
    href: "/contact",
    hrefLabel: "Discuss it",
  },
];

const commitments: [string, string][] = [
  ["Making an enquiry", `Nothing. ${engagement.noObligation}`],
  [
    "After the scoping conversation",
    "Nothing, until you accept a written scope and fee. The conversation itself is not chargeable.",
  ],
  [
    "During the Health Check",
    "The agreed fixed fee, and the time of your people to answer questions honestly.",
  ],
  [
    "After the findings",
    "Nothing. Most findings are internal fixes you can act on yourself, and that is a perfectly good outcome.",
  ],
];

export default function WaysToWorkTogetherPage() {
  return (
    <>
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r-2 lg:p-12">
          <h1 className="seq seq-1">Diagnose. Improve. Control.</h1>
          <p className="seq seq-2 editorial-intro mt-8">
            Three ways an engagement can run, and one honest explanation of how the money works.
            You are not choosing a package — you are choosing how far to go.
          </p>
        </div>
        <div className="seq seq-3 flex flex-col justify-center bg-graphite p-6 text-white sm:p-10 lg:col-span-5">
          <p className="font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold leading-tight">
            Scope follows evidence. Fee follows scope.
          </p>
          <p className="mt-5 text-[#c6cbc5]">Nothing starts until both are agreed in writing.</p>
        </div>
      </section>

      {/* Why there is no price list — answered directly rather than dodged. */}
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black md:grid-cols-2">
        <div className="border-b-2 border-black p-6 sm:p-9 md:border-b-0 md:border-r-2 md:p-10">
          <h2 className="text-[clamp(1.4rem,2.2vw,2rem)]">Why there is no price list here</h2>
          <p className="mt-5 text-ink-secondary">{engagement.feeBasis}</p>
        </div>
        <div className="p-6 sm:p-9 md:p-10">
          <h2 className="text-[clamp(1.4rem,2.2vw,2rem)]">How timing is agreed</h2>
          <p className="mt-5 text-ink-secondary">{engagement.turnaroundBasis}</p>
          <p className="mt-5 text-sm text-ink-muted">
            You will have the fee and the date in writing before committing to anything. If that
            has not happened, no work has started.
          </p>
        </div>
      </section>

      {/* The three stages as a ledger with an explicit commitment column. */}
      <section className="editorial-shell border-b-2 border-black">
        <ol className="divide-y-2 divide-black">
          {stages.map((item) => (
            <li key={item.number} className="grid grid-cols-1 md:grid-cols-12">
              <div className="flex items-start gap-4 border-b border-black p-5 md:col-span-3 md:border-b-0 md:border-r md:p-8">
                <span className="font-mono text-sm font-bold text-copper-dim">{item.number}</span>
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
                    {item.stage}
                  </p>
                  <h2 className="mt-2 text-[clamp(1.3rem,1.9vw,1.75rem)]">{item.title}</h2>
                </div>
              </div>
              <p className="border-b border-black p-5 text-ink-secondary md:col-span-5 md:border-b-0 md:border-r md:p-8">
                {item.body}
              </p>
              <div className="p-5 md:col-span-4 md:p-8">
                <p className="font-semibold">{item.commitment}</p>
                <Link href={item.href} className="editorial-link mt-5">
                  {item.hrefLabel}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Closing on the commitments, not another CTA slab. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black bg-copper p-6 text-graphite sm:p-9 md:p-10">
          <h2>What you are committing to at each point.</h2>
        </div>
        <dl className="divide-y divide-black">
          {commitments.map(([term, body]) => (
            <div key={term} className="grid grid-cols-1 md:grid-cols-12">
              <dt className="p-5 font-semibold md:col-span-4 md:border-r md:border-black md:p-8">
                {term}
              </dt>
              <dd className="border-t border-black p-5 text-ink-secondary md:col-span-8 md:border-t-0 md:p-8">
                {body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="editorial-shell grid grid-cols-1 bg-graphite text-white lg:grid-cols-12">
        <div className="border-b border-[#4d534e] p-6 sm:p-9 lg:col-span-8 lg:border-b-0 lg:border-r lg:p-10">
          <h2 className="text-white">Start with the question, not a package.</h2>
          <p className="mt-5 text-[#c6cbc5]">
            You will hear back {engagement.responseWindow}. {engagement.reviewedBy}
          </p>
        </div>
        <Link
          href="/health-check"
          className="flex min-h-32 items-center justify-between bg-copper p-6 font-bold text-graphite hover:bg-[#f0f0ed] sm:p-9 lg:col-span-4"
        >
          Request Health Check <span aria-hidden>→</span>
        </Link>
      </section>
    </>
  );
}

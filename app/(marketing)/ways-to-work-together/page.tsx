import type { Metadata } from "next";
import Link from "next/link";

import { engagement } from "@/data/health-check";
import {
  comparisonNote,
  healthCheck,
  reassurance,
  supportLevels,
  supportNote,
} from "@/data/pricing";

export const metadata: Metadata = {
  title: "Ways to work together",
  description:
    "Published prices. The Finance Health Check is £2,500. Ongoing monthly support from £500 a month. Fixed, agreed in writing, no lock-in.",
};

const commitments: [string, string][] = [
  ["Making an enquiry", `Nothing. ${engagement.noObligation}`],
  [
    "After the scoping conversation",
    "Nothing, until you accept a written scope and fee. The conversation itself is not chargeable.",
  ],
  [
    "During the Health Check",
    "The agreed £2,500, and the time of your people to answer questions honestly.",
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
          <h1 className="seq seq-1">What it costs, before you ask.</h1>
          <p className="seq seq-2 editorial-intro mt-8">
            Two ways to work together, both with the price on the page. Diagnose the problem once
            for a fixed fee, or keep the numbers under control every month. No packages, no sales
            process, no &ldquo;let&rsquo;s have a conversation about budget&rdquo;.
          </p>
        </div>
        <div className="seq seq-3 flex flex-col justify-center bg-graphite p-6 text-white sm:p-10 lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">
            Finance Health Check
          </p>
          <p className="mt-4 font-serif text-[clamp(3rem,7vw,5rem)] font-bold leading-none tracking-[-.03em]">
            {healthCheck.fee}
          </p>
          <p className="mt-4 font-semibold">{healthCheck.feeNote}</p>
          <Link href="/health-check" className="editorial-action mt-8 self-start">
            See what that covers
            <span className="ml-3" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </section>

      {/* The one-off piece of work. */}
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-10">
          <h2>Diagnose it once.</h2>
          <p className="editorial-intro mt-6">{healthCheck.detail}</p>
        </div>
        <ul className="divide-y divide-black lg:col-span-7">
          {healthCheck.whatItBuys.map((item) => (
            <li key={item} className="flex gap-3 p-6 font-semibold sm:p-8">
              <span aria-hidden className="font-mono text-copper-dim">
                →
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Monthly support. Levels of involvement, not packages. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
          <div className="p-6 sm:p-9 lg:col-span-7 lg:p-10">
            <h2>Or keep it under control every month.</h2>
            <p className="editorial-intro mt-6">{comparisonNote}</p>
          </div>
          <div className="flex items-end border-t border-black p-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10">
            <p className="text-sm text-ink-secondary">
              Month to month, 30 days&rsquo; notice either way. No minimum term and no exit fee.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {supportLevels.map((level, index) => (
            <article
              key={level.id}
              className={`border-b-2 border-black p-6 sm:p-8 md:border-b-0 ${
                index < supportLevels.length - 1 ? "md:border-r-2" : ""
              } ${level.emphasis ? "bg-copper text-graphite" : ""}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p
                  className={`font-mono text-[11px] font-bold uppercase tracking-[.08em] ${
                    level.emphasis ? "text-graphite" : "text-copper-dim"
                  }`}
                >
                  {level.name}
                </p>
                {level.emphasis && <span className="stamp">Most take this</span>}
              </div>

              <p className="mt-5 font-serif text-[clamp(2.4rem,4vw,3.4rem)] font-bold leading-none tracking-[-.03em]">
                {level.price}
              </p>
              <p
                className={`mt-2 font-mono text-xs uppercase tracking-[.08em] ${
                  level.emphasis ? "text-graphite" : "text-ink-muted"
                }`}
              >
                {level.priceNote}
              </p>

              <p className="mt-6 border-t-2 border-current pt-5 font-semibold">{level.forWhom}</p>

              <ul className="mt-6 space-y-3">
                {level.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span aria-hidden className="font-mono font-bold">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="border-t-2 border-black bg-panel-alt p-5 text-sm text-ink-secondary sm:p-6">
          {supportNote}
        </p>
      </section>

      {/* Reassurance. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black p-6 sm:p-9 md:p-10">
          <h2>What you can hold us to.</h2>
          <p className="editorial-intro mt-5">
            Six commitments. Every one is something you can point at later if it is not being
            honoured.
          </p>
        </div>
        <dl className="grid grid-cols-1 md:grid-cols-2">
          {reassurance.map((item, index) => (
            <div
              key={item.title}
              className={`border-b border-black p-6 sm:p-8 ${index % 2 === 0 ? "md:border-r" : ""}`}
            >
              <dt className="font-serif text-xl font-bold">{item.title}</dt>
              <dd className="mt-3 text-ink-secondary">{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* What you are committing to, stage by stage. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black bg-graphite p-6 text-white sm:p-9 md:p-10">
          <h2 className="text-white">What you are committing to, at each point.</h2>
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
          <h2 className="text-white">Start with the question, not the invoice.</h2>
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

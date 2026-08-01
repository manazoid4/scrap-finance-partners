import type { Metadata } from "next";
import Link from "next/link";

import FounderAuthority from "@/components/founder-authority";
import LeadForm from "@/components/lead-form";
import PressureMap from "@/components/pressure-map";
import SampleOutput from "@/components/sample-output";
import {
  afterwards,
  engagement,
  exclusions,
  fitFor,
  informationNote,
  informationRequested,
  notFitFor,
  outputs,
  questionsReviewed,
  reviewStages,
} from "@/data/health-check";
import { healthCheck } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Finance Health Check",
  description:
    "A bounded commercial finance review for UK scrap and recycling businesses. What it covers, what it excludes, what you receive, and what happens next.",
};

export default function HealthCheckPage() {
  return (
    <>
      {/* Hero. The action is reachable without scrolling at every width. */}
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-9 lg:col-span-8 lg:border-b-0 lg:border-r-2 lg:p-12">
          <div className="seq seq-1 flex flex-wrap justify-between gap-2 border-b border-black pb-4 font-mono text-[11px] uppercase tracking-[.08em]">
            <span>Diagnostic engagement</span>
            <span>Fixed fee, agreed first</span>
          </div>
          <h1 className="seq seq-2 mt-10 max-w-5xl">
            Find out which numbers you can trust.
          </h1>
          <p className="seq seq-3 editorial-intro mt-7">
            We review the trading, stock, transport, cash and reports you already use. You get a
            clear view of what holds up and what needs attention.
          </p>
          <div className="seq seq-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#request" className="editorial-action">
              Request a Health Check
              <span className="ml-3" aria-hidden>
                →
              </span>
            </Link>
            <Link href="#example-output" className="editorial-link sm:ml-3">
              View a sample report
            </Link>
          </div>
        </div>

        <aside className="flex flex-col justify-between bg-graphite p-6 text-white sm:p-9 lg:col-span-4 lg:p-10">
          <p className="font-serif text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-tight">
            For owner-managed scrap and recycling businesses that need a clearer view of
            performance.
          </p>
          <dl className="mt-8 space-y-4 border-t border-[#4d534e] pt-6 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">
                Fee
              </dt>
              <dd className="mt-1 font-serif text-3xl font-bold leading-none">
                {healthCheck.fee}
              </dd>
              <dd className="mt-2 text-[#c6cbc5]">{healthCheck.feeNote}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">
                Reply
              </dt>
              <dd className="mt-1 font-semibold">You hear back {engagement.responseWindow}.</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">
                Who responds
              </dt>
              <dd className="mt-1 text-[#c6cbc5]">{engagement.reviewedBy}</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Fit / not fit, side by side. The most useful thing on the page. */}
      <section
        id="fit"
        className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-2"
      >
        <div className="border-b-2 border-black p-6 sm:p-9 lg:border-b-0 lg:border-r-2 lg:p-10">
          <h2>Right for you if…</h2>
          <ul className="mt-7 divide-y divide-hairline border-t border-hairline">
            {fitFor.map((item) => (
              <li key={item} className="flex gap-3 py-4">
                <span aria-hidden className="font-mono font-bold text-copper-dim">
                  →
                </span>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-graphite p-6 text-white sm:p-9 lg:p-10">
          <h2 className="text-white">Not right for you if…</h2>
          <ul className="mt-7 divide-y divide-[#4d534e] border-t border-[#4d534e]">
            {notFitFor.map((item) => (
              <li key={item} className="flex gap-3 py-4">
                <span aria-hidden className="font-mono font-bold text-copper">
                  ×
                </span>
                <span className="text-[#c6cbc5]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-[#4d534e] pt-6 text-sm text-[#c6cbc5]">
            {engagement.noObligation}
          </p>
        </div>
      </section>

      {/* Questions reviewed. */}
      <section id="what-we-review" className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black p-5 sm:p-8 md:p-10">
          <h2>Six questions, asked properly.</h2>
          <p className="editorial-intro mt-5">
            The review is organised around decisions, not around a list of deliverables.
          </p>
        </div>
        <div className="editorial-index">
          {questionsReviewed.map((row) => (
            <article key={row.area} className="grid grid-cols-1 md:grid-cols-12">
              <h3 className="p-5 md:col-span-3 md:border-r md:border-black md:p-7">{row.area}</h3>
              <p className="border-t border-black p-5 text-ink-secondary md:col-span-9 md:border-t-0 md:p-7">
                {row.question}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Pressure map. */}
      <section id="pressure-map" className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black p-5 sm:p-8 md:p-10">
          <h2>Where the margin actually goes.</h2>
          <p className="editorial-intro mt-5">
            Seven pressures act on every deal between the buy and the bank. Work through them.
          </p>
        </div>
        <PressureMap />
      </section>

      {/* Information requested. */}
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-9 lg:col-span-4 lg:border-b-0 lg:border-r-2 lg:p-10">
          <h2>What we ask you for.</h2>
          <p className="editorial-intro mt-6">{informationNote}</p>
        </div>
        <dl className="divide-y divide-black lg:col-span-8">
          {informationRequested.map((row) => (
            <div key={row.item} className="p-6 sm:p-8">
              <dt className="font-semibold">{row.item}</dt>
              <dd className="mt-2 text-ink-secondary">{row.why}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Stages. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black p-5 sm:p-8 md:p-10">
          <h2>How the review runs.</h2>
        </div>
        <ol className="divide-y-2 divide-black">
          {reviewStages.map((stage) => (
            <li
              key={stage.number}
              className="grid grid-cols-[3.5rem_minmax(0,1fr)] sm:grid-cols-[5rem_minmax(0,1fr)]"
            >
              <span className="flex items-start justify-center border-r-2 border-black p-5 font-mono text-sm font-bold text-copper-dim">
                {stage.number}
              </span>
              <div className="p-5 sm:p-7">
                <h3>{stage.title}</h3>
                <p className="mt-3 max-w-3xl text-ink-secondary">{stage.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Outputs. */}
      <section id="what-you-get" className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black bg-copper p-6 text-graphite sm:p-9 md:p-10">
          <h2>What you receive.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {outputs.map((output, index) => (
            <article
              key={output.title}
              className={`border-b border-black p-6 sm:p-8 ${index % 2 === 0 ? "md:border-r" : ""}`}
            >
              <h3>{output.title}</h3>
              <p className="mt-3 text-ink-secondary">{output.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* The artifact. */}
      <section id="example-output" className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black p-6 sm:p-9 md:p-10">
          <h2>An example of the output.</h2>
          <p className="editorial-intro mt-5">
            A format example, not a client document. Every figure is redacted rather than invented,
            so nothing here can be mistaken for a result.
          </p>
        </div>
        <div className="p-4 sm:p-8 md:p-10">
          <SampleOutput />
        </div>
      </section>

      {/* Exclusions — stated as plainly as the inclusions. */}
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black bg-graphite p-6 text-white sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-10">
          <h2 className="text-white">What it explicitly is not.</h2>
          <p className="mt-6 text-[#c6cbc5]">
            The boundary matters as much as the scope. Work outside this list belongs with
            appropriately qualified professionals.
          </p>
        </div>
        <ul className="divide-y divide-black lg:col-span-7">
          {exclusions.map((item) => (
            <li key={item} className="flex gap-3 p-6 font-semibold sm:p-7">
              <span aria-hidden className="font-mono text-copper-dim">
                ×
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Fee and turnaround. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="grid grid-cols-1 border-b-2 border-black md:grid-cols-12">
          <div className="border-b-2 border-black bg-copper p-6 text-graphite sm:p-9 md:col-span-4 md:border-b-0 md:border-r-2 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[.08em]">The fee</p>
            <p className="mt-4 font-serif text-[clamp(3rem,6vw,4.5rem)] font-bold leading-none tracking-[-.03em]">
              {healthCheck.fee}
            </p>
            <p className="mt-4 font-semibold">{healthCheck.feeNote}</p>
          </div>
          <div className="p-6 sm:p-9 md:col-span-8 md:p-10">
            <h2 className="text-[clamp(1.4rem,2.2vw,2rem)]">How the fee is set</h2>
            <p className="mt-5 text-ink-secondary">{engagement.feeBasis}</p>
            <h2 className="mt-8 text-[clamp(1.4rem,2.2vw,2rem)]">How timing is agreed</h2>
            <p className="mt-5 text-ink-secondary">{engagement.turnaroundBasis}</p>
          </div>
        </div>
        <ul className="divide-y divide-black">
          {healthCheck.whatItBuys.map((item) => (
            <li key={item} className="flex gap-3 p-5 font-semibold sm:p-7">
              <span aria-hidden className="font-mono text-copper-dim">
                →
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Afterwards. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black p-5 sm:p-8 md:p-10">
          <h2>What happens afterwards.</h2>
        </div>
        <div className="editorial-index">
          {afterwards.map((item) => (
            <article key={item.title} className="grid grid-cols-1 md:grid-cols-12">
              <h3 className="p-5 md:col-span-4 md:border-r md:border-black md:p-7">{item.title}</h3>
              <p className="border-t border-black p-5 text-ink-secondary md:col-span-8 md:border-t-0 md:p-7">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-shell border-b-2 border-black" aria-label="Who does the work">
        <FounderAuthority />
      </section>

      {/* Request. */}
      <section
        id="request"
        className="editorial-shell grid grid-cols-1 bg-graphite lg:grid-cols-12"
      >
        <div className="border-b border-[#4d534e] p-6 text-white sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
          <h2 className="text-white">Start with the decision you cannot currently trust.</h2>
          <p className="mt-6 max-w-lg text-[#c6cbc5]">{engagement.reviewedBy}</p>
          <p className="mt-4 max-w-lg text-[#c6cbc5]">
            You will hear back {engagement.responseWindow}. {engagement.noObligation}
          </p>
        </div>
        <div className="p-4 sm:p-8 lg:col-span-7 lg:p-10">
          <LeadForm source="health-check-page" submitLabel="Request Health Check" />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import {
  caseDisclaimer,
  caseEvidenceStatus,
  caseRationale,
  caseReference,
  caseStages,
  caseTitle,
} from "@/data/case-evidence";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "An anonymised engagement note: how commercial analysis revealed the operational return behind scrap trading activity.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Exhibit header — an annex cover sheet, not another hero. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black bg-graphite px-5 py-4 text-white sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">
            {caseReference}
          </p>
          <span className="stamp stamp-invert">Anonymised</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="border-b-2 border-black p-6 sm:p-10 lg:col-span-8 lg:border-b-0 lg:border-r-2 lg:p-12">
            <h1 className="seq seq-1">{caseTitle}</h1>
          </div>
          <dl className="seq seq-2 lg:col-span-4">
            <div className="border-b border-black p-6 sm:p-8">
              <dt className="font-mono text-[11px] uppercase tracking-[.08em] text-copper-dim">
                Evidence status
              </dt>
              <dd className="mt-3 font-semibold">{caseEvidenceStatus}</dd>
            </div>
            <div className="p-6 sm:p-8">
              <dt className="font-mono text-[11px] uppercase tracking-[.08em] text-copper-dim">
                Disclosure
              </dt>
              <dd className="mt-3 text-ink-secondary">{caseDisclaimer}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* The record itself, as a numbered annex. */}
      <article className="editorial-shell border-b-2 border-black">
        <ol className="divide-y-2 divide-black">
          {caseStages.map((stage, index) => (
            <li key={stage.id} className="grid grid-cols-1 md:grid-cols-12">
              <div className="flex items-start gap-4 border-b border-black p-6 md:col-span-4 md:border-b-0 md:border-r md:p-9">
                <span className="font-mono text-sm font-bold text-copper-dim">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[clamp(1.4rem,2.2vw,2rem)]">{stage.label}</h2>
              </div>
              <p className="p-6 text-lg text-ink-secondary md:col-span-8 md:p-9">{stage.body}</p>
            </li>
          ))}
        </ol>
      </article>

      {/* Why the recommendation followed — kept separate from any claim of result. */}
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black bg-copper p-6 text-graphite sm:p-9 lg:col-span-4 lg:border-b-0 lg:border-r-2 lg:p-10">
          <h2 className="text-[clamp(1.4rem,2.2vw,2rem)]">Why that recommendation followed</h2>
        </div>
        <ul className="divide-y divide-black lg:col-span-8">
          {caseRationale.map((item) => (
            <li key={item} className="flex gap-3 p-6 font-semibold sm:p-8">
              <span aria-hidden className="font-mono text-copper-dim">
                →
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Explicit limits on what this page claims. */}
      <section className="editorial-shell border-b-2 border-black bg-panel-alt p-6 sm:p-9 md:p-10">
        <h2 className="text-[clamp(1.3rem,2vw,1.8rem)]">What this note does not claim</h2>
        <p className="mt-5 max-w-4xl text-ink-secondary">
          No saving, margin improvement or recovered value is stated here, because none was
          measured. The recommendation was made and adopted; what it earned afterwards was never
          quantified, so it is not reported. Any figure attributed to this work anywhere else did
          not come from us.
        </p>
      </section>

      <section className="editorial-shell grid grid-cols-1 bg-graphite text-white lg:grid-cols-12">
        <div className="border-b border-[#4d534e] p-6 sm:p-9 lg:col-span-8 lg:border-b-0 lg:border-r lg:p-10">
          <h2 className="text-white">
            Does your margin still hold after the yard has done the work?
          </h2>
        </div>
        <Link
          href="/health-check"
          className="flex min-h-32 items-center justify-between bg-copper p-6 font-bold text-graphite hover:bg-[#f0f0ed] sm:p-9 lg:col-span-4"
        >
          Find out <span aria-hidden>→</span>
        </Link>
      </section>
    </>
  );
}

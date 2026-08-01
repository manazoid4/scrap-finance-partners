import Link from "next/link";

import FounderAuthority from "@/components/founder-authority";
import PressureMap from "@/components/pressure-map";
import SampleOutput from "@/components/sample-output";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { caseDisclaimer, caseReference, caseStages, caseTitle } from "@/data/case-evidence";
import { reviewStages } from "@/data/health-check";

const finding = caseStages.find((stage) => stage.id === "finding");
const recommendation = caseStages.find((stage) => stage.id === "recommendation");

export default function HomePage() {
  return (
    <div className="min-h-screen min-w-0 bg-background">
      <SiteHeader />
      <main id="main">
        {/* Hero — the problem, then the action. CTA sits above the fold at every width. */}
        <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
          <div className="flex flex-col justify-between border-b-2 border-black p-5 sm:p-8 lg:col-span-8 lg:border-b-0 lg:border-r-2 lg:p-12">
            <div className="seq seq-1 flex items-center justify-between border-b border-black pb-4 font-mono text-[11px] uppercase tracking-[.08em]">
              <span>UK scrap &amp; recycling</span>
              <span>Commercial finance</span>
            </div>

            <div className="py-10 lg:py-14">
              <h1 className="seq seq-2 max-w-5xl">
                Your best-selling grade might be your worst deal.
              </h1>
              <p className="seq seq-3 editorial-intro mt-7">
                The spread looks fine. Then haulage, handling, yard time and tied-up cash take
                their cut — and nothing in the monthly reporting shows you what is left. A Finance
                Health Check finds out.
              </p>
            </div>

            <div className="seq seq-4 flex flex-col gap-3 border-t border-black pt-5 sm:flex-row sm:items-center">
              <Link href="/health-check" className="editorial-action">
                Request a Finance Health Check
                <span className="ml-3" aria-hidden>
                  →
                </span>
              </Link>
              <Link href="/health-check#what-you-get" className="editorial-link sm:ml-3">
                See exactly what you get
              </Link>
            </div>
          </div>

          <aside
            className="flex flex-col bg-graphite text-white lg:col-span-4"
            aria-label="The commercial test"
          >
            <div className="seq-wipe flex flex-1 items-center p-6 sm:p-8 lg:p-10">
              <p className="font-serif text-[clamp(1.9rem,3.6vw,3.4rem)] font-bold leading-[1.02] tracking-[-.03em]">
                Does the margin still hold after the yard has done the work?
              </p>
            </div>
            <div className="divide-y divide-[#4d534e] border-t border-[#4d534e] text-sm text-[#c6cbc5]">
              <p className="px-6 py-4 sm:px-8">Haulage and route economics</p>
              <p className="px-6 py-4 sm:px-8">Labour, handling and capacity</p>
              <p className="px-6 py-4 sm:px-8">Stock, cash and reporting confidence</p>
            </div>
          </aside>
        </section>

        {/* Authority, immediately after the hero. */}
        <section
          className="editorial-shell border-b-2 border-black"
          aria-label="Who does the work"
        >
          <FounderAuthority />
        </section>

        {/* Flagship interaction. */}
        <section id="pressure-map" className="editorial-shell border-b-2 border-black">
          <div className="grid grid-cols-1 border-b-2 border-black md:grid-cols-12">
            <div className="p-5 md:col-span-7 md:p-10">
              <h2>Seven things happen between the buy and the bank.</h2>
              <p className="editorial-intro mt-5">
                Each one takes something out of the deal. Most reporting shows you the first two.
                Work through them.
              </p>
            </div>
            <div className="flex items-end border-t border-black p-5 md:col-span-5 md:border-l md:border-t-0 md:p-10">
              <p className="text-sm text-ink-secondary">
                No figures and no calculator. This explains what gets examined, and why it changes
                the answer.
              </p>
            </div>
          </div>
          <PressureMap />
        </section>

        {/* The artifact. */}
        <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
          <div className="border-b-2 border-black p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r-2 lg:p-10">
            <h2>This is what you actually receive.</h2>
            <p className="editorial-intro mt-6">
              A short written document that answers one commercial question, states what it rests
              on, and says what to do first.
            </p>
            <Link href="/health-check#example-output" className="editorial-link mt-8">
              Read the full example
            </Link>
          </div>
          <div className="p-4 sm:p-6 lg:col-span-8 lg:p-10">
            <SampleOutput />
          </div>
        </section>

        {/* Case evidence, framed as an exhibit rather than another card grid. */}
        <section className="editorial-shell border-b-2 border-black">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black bg-graphite px-5 py-4 text-white sm:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">
              {caseReference}
            </p>
            <span className="stamp stamp-invert">Anonymised</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="border-b-2 border-black p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-10">
              <h2>{caseTitle}</h2>
              <p className="mt-6 text-sm text-ink-muted">{caseDisclaimer}</p>
              <Link href="/case-studies" className="editorial-link mt-8">
                Read the full engagement note
              </Link>
            </div>
            <div className="lg:col-span-7">
              {finding && (
                <div className="border-b border-black p-6 sm:p-8 lg:p-10">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
                    {finding.label}
                  </p>
                  <p className="mt-4 font-serif text-xl font-bold leading-snug sm:text-2xl">
                    {finding.body}
                  </p>
                </div>
              )}
              {recommendation && (
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
                    {recommendation.label}
                  </p>
                  <p className="mt-4 text-ink-secondary">{recommendation.body}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Process, as a running ledger. */}
        <section className="editorial-shell border-b-2 border-black">
          <div className="grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
            <div className="p-6 sm:p-8 lg:col-span-5 lg:p-10">
              <h2>Five stages. Scope agreed before anything starts.</h2>
              <p className="editorial-intro mt-6">
                Fixed fee, agreed in writing, before work begins. No day rate that runs on.
              </p>
            </div>
            <div className="flex items-end border-t border-black p-6 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-sm text-ink-secondary">
                If a Health Check is not the right next step for you, we will say so. An enquiry is
                not a commitment.
              </p>
            </div>
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

        <section className="editorial-shell grid grid-cols-1 bg-graphite text-white lg:grid-cols-12">
          <div className="border-b border-[#4d534e] p-6 sm:p-8 lg:col-span-8 lg:border-b-0 lg:border-r lg:p-10">
            <h2 className="max-w-4xl text-white">
              Which decision are you currently making on a number you do not fully trust?
            </h2>
            <p className="mt-5 max-w-2xl text-[#c6cbc5]">
              Tell us that, and nothing else if you would rather not. Name, company and email is
              all the form asks for.
            </p>
          </div>
          <Link
            href="/health-check"
            className="flex min-h-36 items-center justify-between bg-copper p-6 text-xl font-bold text-graphite hover:bg-[#f0f0ed] sm:p-8 lg:col-span-4"
          >
            Request Health Check <span aria-hidden>→</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

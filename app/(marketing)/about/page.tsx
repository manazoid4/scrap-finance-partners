import type { Metadata } from "next";
import Link from "next/link";

import FounderAuthority from "@/components/founder-authority";
import {
  approvedExperienceStatement,
  experienceAreas,
  professionalBoundaries,
} from "@/data/founder";

export const metadata: Metadata = {
  title: "About",
  description:
    "Commercial finance for UK scrap and recycling, grounded in 26 years of accountancy and finance experience in the sector.",
};

export default function AboutPage() {
  return (
    <>
      {/* Dossier header — a record card, not another hero with a kicker. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="border-b-2 border-black p-6 sm:p-10 lg:col-span-8 lg:border-b-0 lg:border-r-2 lg:p-12">
            <h1 className="seq seq-1">Finance that starts with how the yard works.</h1>
            <p className="seq seq-2 editorial-intro mt-8">
              Scrap Finance Partners is a single-operator consultancy. The work is commercial
              analysis for owner-managed scrap, recycling and waste businesses — connecting what
              happens in the yard to what appears in the accounts, so the two stop disagreeing.
            </p>
          </div>
          <dl className="seq seq-3 lg:col-span-4">
            <div className="border-b border-black p-6 sm:p-8">
              <dt className="font-mono text-[11px] uppercase tracking-[.08em] text-copper-dim">
                Sector experience
              </dt>
              <dd className="mt-3 font-serif text-2xl font-bold leading-tight">
                {approvedExperienceStatement}
              </dd>
            </div>
            <div className="border-b border-black p-6 sm:p-8">
              <dt className="font-mono text-[11px] uppercase tracking-[.08em] text-copper-dim">
                Structure
              </dt>
              <dd className="mt-3 font-semibold">
                One person. No account managers, no juniors, no sales team.
              </dd>
            </div>
            <div className="p-6 sm:p-8">
              <dt className="font-mono text-[11px] uppercase tracking-[.08em] text-copper-dim">
                Basis of engagement
              </dt>
              <dd className="mt-3 font-semibold">
                Fixed fee, scope agreed in writing before work begins.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="editorial-shell border-b-2 border-black" aria-label="Who does the work">
        <FounderAuthority variant="full" />
      </section>

      {/* Experience, as a numbered record rather than a card grid. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black p-6 sm:p-9 md:p-10">
          <h2>Where the experience actually sits.</h2>
          <p className="editorial-intro mt-5">
            Four areas, and the reason each one matters to a commercial decision.
          </p>
        </div>
        <ol className="divide-y-2 divide-black">
          {experienceAreas.map((area, index) => (
            <li key={area.id} className="grid grid-cols-1 md:grid-cols-12">
              <div className="flex items-start gap-4 border-b border-black p-5 md:col-span-4 md:border-b-0 md:border-r md:p-8">
                <span className="font-mono text-sm font-bold text-copper-dim">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{area.title}</h3>
              </div>
              <p className="border-b border-black p-5 text-ink-secondary md:col-span-5 md:border-b-0 md:border-r md:p-8">
                {area.copy}
              </p>
              <p className="p-5 text-sm font-semibold md:col-span-3 md:p-8">{area.note}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Approach. */}
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black bg-copper p-6 text-graphite sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-10">
          <h2>The working approach</h2>
          <p className="mt-6 font-semibold">
            Listen to the operating context. Test the information already being used. Separate
            assumption from evidence. Turn what is left into an order of action.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="border-b border-black p-6 sm:p-8 lg:p-10">
            <h3>Nothing gets rebuilt for the sake of it</h3>
            <p className="mt-3 text-ink-secondary">
              The review works with the records the business already keeps. If a figure has to be
              constructed specially to make an argument work, that is usually a sign the argument
              is wrong.
            </p>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <h3>Findings you are meant to argue with</h3>
            <p className="mt-3 text-ink-secondary">
              Every conclusion states the assumption it rests on. If the assumption is wrong, you
              should be able to say so and watch the conclusion fall over. That is a feature.
            </p>
          </div>
        </div>
      </section>

      {/* Boundaries — closing on a limit rather than another CTA slab. */}
      <section className="editorial-shell border-b-2 border-black">
        <div className="border-b-2 border-black p-6 sm:p-9 md:p-10">
          <h2>Clear professional boundaries.</h2>
          <p className="editorial-intro mt-5">
            Stated plainly, because a consultancy that will not tell you where it stops is telling
            you something.
          </p>
        </div>
        <ul className="divide-y divide-black">
          {professionalBoundaries.map((item) => (
            <li key={item} className="flex gap-3 p-5 font-semibold sm:p-7">
              <span aria-hidden className="font-mono text-copper-dim">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="editorial-shell grid grid-cols-1 bg-graphite text-white lg:grid-cols-12">
        <div className="border-b border-[#4d534e] p-6 sm:p-9 lg:col-span-8 lg:border-b-0 lg:border-r lg:p-10">
          <h2 className="text-white">Start with the commercial question you need answered.</h2>
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

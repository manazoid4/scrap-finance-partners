import type { Metadata } from "next";
import Link from "next/link";

import { releases, statusLabels, statusNotes } from "@/data/changelog";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "What is live on this site, what is approved and coming, and what is only being considered.",
};

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00Z`));

export default function UpdatesPage() {
  return (
    <>
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r-2 lg:p-12">
          <h1 className="seq seq-1">What changed, and what it means for you.</h1>
          <p className="seq seq-2 editorial-intro mt-8">
            A plain record of what is actually live on this site, what is approved and coming, and
            what is no more than an idea. Anything not yet available is labelled so it cannot be
            mistaken for something you can buy.
          </p>
        </div>
        <dl className="seq seq-3 lg:col-span-5">
          {(Object.keys(statusLabels) as (keyof typeof statusLabels)[]).map((status) => (
            <div key={status} className="border-b border-black p-6 last:border-b-0 sm:p-8">
              <dt className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
                {statusLabels[status]}
              </dt>
              <dd className="mt-2 text-sm text-ink-secondary">{statusNotes[status]}</dd>
            </div>
          ))}
        </dl>
      </section>

      {releases.map((release) => (
        <section
          key={`${release.version}-${release.status}`}
          className="editorial-shell border-b-2 border-black"
        >
          <div
            className={`flex flex-wrap items-center justify-between gap-3 border-b-2 border-black px-5 py-4 sm:px-8 ${
              release.status === "live" ? "bg-graphite text-white" : "bg-panel-alt"
            }`}
          >
            <p className="font-mono text-[11px] uppercase tracking-[.08em]">
              <span className={release.status === "live" ? "text-copper" : "text-copper-dim"}>
                {statusLabels[release.status]}
              </span>
              {release.version !== "—" && <span className="ml-3">Version {release.version}</span>}
              {release.releaseDate && (
                <span className="ml-3">{formatDate(release.releaseDate)}</span>
              )}
            </p>
            <span className={`stamp ${release.status === "live" ? "stamp-invert" : ""}`}>
              {release.evidence}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="border-b-2 border-black p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r-2 lg:p-10">
              <h2>{release.title}</h2>
              <p className="mt-5 text-ink-secondary">{release.summary}</p>
            </div>

            <ol className="divide-y divide-black lg:col-span-8">
              {release.entries.map((entry) => (
                <li key={entry.change} className="p-6 sm:p-8">
                  <p className="font-semibold">{entry.change}</p>
                  <p className="mt-3 flex gap-3 text-ink-secondary">
                    <span aria-hidden className="font-mono text-xs font-bold text-copper-dim">
                      →
                    </span>
                    <span>{entry.benefit}</span>
                  </p>
                  {entry.relatedPage && (
                    <Link href={entry.relatedPage} className="editorial-link mt-4 text-sm">
                      Go and look
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section className="editorial-shell border-b-2 border-black p-6 sm:p-9 md:p-10">
        <h2 className="text-[clamp(1.3rem,2vw,1.8rem)]">What this record deliberately omits</h2>
        <p className="mt-5 max-w-4xl text-ink-secondary">
          Nothing here names a client or describes their business. Anything under
          &ldquo;Exploring&rdquo; is an idea, not a product, and cannot be bought, booked or
          joined. Technical detail belongs in the repository changelog, not on a page meant for
          people deciding whether to work with us.
        </p>
      </section>
    </>
  );
}

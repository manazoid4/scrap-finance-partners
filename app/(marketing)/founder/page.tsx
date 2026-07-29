import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About",
  description:
    "Commercial finance support grounded in 26 years of accountancy and finance experience in UK scrap metal.",
};

const experienceAreas = [
  {
    title: "Finance and accountancy",
    copy: "Understanding the numbers behind buying, selling, stock, cash and month-end—not finance in isolation.",
  },
  {
    title: "Fred and reporting systems",
    copy: "Practical experience of the reporting, site setup and operational workflows that yards already rely on.",
  },
  {
    title: "Stock, transport and yard operations",
    copy: "Connecting what the records say with the labour, haulage, handling and capacity needed to produce the result.",
  },
];
export default function Founder() {
  return (
    <>
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-10 lg:col-span-8 lg:border-b-0 lg:border-r-2 lg:p-12">
          <p className="editorial-label">About the consultancy</p>
          <h1 className="mt-10">
            Finance that starts with how the yard works.
          </h1>
        </div>
        <div className="flex flex-col justify-between bg-copper p-6 text-graphite sm:p-9 lg:col-span-4">
          <p className="editorial-label">Sector experience</p>
          <p className="mt-12 font-serif text-4xl font-bold leading-[1.02]">
            26 years of accountancy and finance experience in UK scrap metal.
          </p>
        </div>
      </section>
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <article className="border-b-2 border-black p-6 sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r-2">
          <h2>Experience across the whole commercial picture.</h2>
          <p className="editorial-intro mt-7">
            Scrap Finance Partners is built around experience inside the sector:
            where trading decisions, system records and yard reality have to
            agree before the numbers can be trusted.
          </p>
        </article>
        <div className="divide-y divide-black lg:col-span-7">
          {experienceAreas.map((area) => (
            <article key={area.title} className="p-6 sm:p-8">
              <h3>{area.title}</h3>
              <p className="mt-3 max-w-2xl text-ink-secondary">{area.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-2">
        <article className="border-b-2 border-black p-6 sm:p-9 lg:border-b-0 lg:border-r-2">
          <h2>The working approach</h2>
          <p className="editorial-intro mt-7">
            Listen to the operating context, test the information already being
            used, separate assumptions from evidence and turn the findings into
            a practical order of action.
          </p>
        </article>
        <article className="p-6 sm:p-9">
          <h2>Clear boundaries</h2>
          <p className="editorial-intro mt-7">
            Scrap Finance Partners provides commercial consultancy. Legal, tax,
            audit, regulated finance and specialist compliance work belong with
            appropriately qualified professionals.
          </p>
        </article>
      </section>
      <section className="editorial-shell grid grid-cols-1 bg-graphite text-white lg:grid-cols-12">
        <div className="border-b border-[#4d534e] p-6 sm:p-9 lg:col-span-8 lg:border-b-0 lg:border-r">
          <h2 className="text-white">
            Start with the commercial question you need answered.
          </h2>
        </div>
        <Link
          href="/contact"
          className="flex min-h-32 items-center justify-between bg-copper p-6 font-bold text-graphite hover:bg-[#f0f0ed] sm:p-9 lg:col-span-4"
        >
          Start a conversation <span aria-hidden>→</span>
        </Link>
      </section>
    </>
  );
}

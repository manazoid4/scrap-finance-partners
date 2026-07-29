import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const reviewRows = [
  {
    area: "Trading margin",
    question:
      "Does the apparent spread survive haulage, yard time and operational involvement?",
    decision: "Know which activity earns capacity.",
  },
  {
    area: "Stock confidence",
    question:
      "Do the records used for buying and cash decisions reflect the physical process?",
    decision: "Separate a reporting gap from a real stock problem.",
  },
  {
    area: "Transport",
    question:
      "Is haulage visible when the deal is judged—or only after the movement is complete?",
    decision: "Put route economics into the commercial choice.",
  },
  {
    area: "Management information",
    question:
      "Do reports arrive in time, and does each measure lead to a named decision?",
    decision: "Reduce noise and improve decision timing.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen min-w-0 bg-background">
      <SiteHeader />
      <main>
        <section className="editorial-shell grid min-h-[37rem] grid-cols-1 border-b-2 border-black lg:grid-cols-12">
          <div className="flex flex-col justify-between border-b-2 border-black p-5 sm:p-8 lg:col-span-8 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-14">
            <div className="flex items-center justify-between border-b border-black pb-4 font-mono text-[11px] uppercase tracking-[.08em]">
              <span>Commercial mandate</span>
              <span>UK / Scrap &amp; Recycling</span>
            </div>
            <div className="py-12 lg:py-16">
              <h1 className="max-w-5xl">
                Know what makes money—and what only makes tonnage.
              </h1>
              <p className="editorial-intro mt-8">
                Scrap Finance Partners connects trading, stock, transport and
                finance so owner-managers can judge the whole commercial
                return—not just the headline spread.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-t border-black pt-5 sm:flex-row sm:items-center">
              <Link href="/health-check" className="editorial-action">
                Request a Finance Health Check{" "}
                <span className="ml-3" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/health-check#what-we-review"
                className="editorial-link sm:ml-3"
              >
                Examine the review scope
              </Link>
            </div>
          </div>
          <aside
            className="flex flex-col bg-graphite text-white lg:col-span-4"
            aria-label="Commercial test"
          >
            <div className="border-b border-[#4d534e] p-5 font-mono text-[11px] uppercase tracking-[.08em] text-copper sm:p-8">
              The commercial test
            </div>
            <div className="flex flex-1 items-center p-6 sm:p-8 lg:p-10">
              <p className="font-serif text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.02] tracking-[-.03em]">
                Does the margin still hold after the yard has done the work?
              </p>
            </div>
            <div className="divide-y divide-[#4d534e] border-t border-[#4d534e] text-sm text-[#c6cbc5]">
              <p className="px-6 py-4 sm:px-8">Haulage and route economics</p>
              <p className="px-6 py-4 sm:px-8">Labour, handling and capacity</p>
              <p className="px-6 py-4 sm:px-8">
                Stock, cash and reporting confidence
              </p>
            </div>
          </aside>
        </section>

        <section className="editorial-shell grid grid-cols-1 border-b-2 border-black md:grid-cols-12">
          <p className="border-b border-black bg-copper p-5 font-serif text-2xl font-bold leading-tight text-graphite md:col-span-8 md:border-b-0 md:border-r md:p-7">
            Built on 26 years of accountancy and finance experience in UK scrap
            metal.
          </p>
          <Link
            href="/founder"
            className="flex min-h-20 items-center justify-between p-5 font-bold hover:bg-graphite hover:text-white md:col-span-4 md:p-7"
          >
            See the experience behind the work <span aria-hidden>→</span>
          </Link>
        </section>

        <section className="editorial-shell border-b-2 border-black">
          <div className="grid grid-cols-1 border-b-2 border-black md:grid-cols-12">
            <div className="border-b border-black p-5 md:col-span-3 md:border-b-0 md:border-r md:p-8">
              <p className="editorial-label">Commercial review index</p>
            </div>
            <div className="p-5 md:col-span-9 md:p-8">
              <h2>Where the numbers meet the operation.</h2>
              <p className="editorial-intro mt-5">
                The work is organised around decisions. Each review area has a
                practical commercial question behind it.
              </p>
            </div>
          </div>
          <div className="editorial-index">
            {reviewRows.map((row) => (
              <article
                key={row.area}
                className="grid grid-cols-1 md:grid-cols-12"
              >
                <h3 className="p-5 md:col-span-3 md:border-r md:border-black md:p-7">
                  {row.area}
                </h3>
                <p className="border-t border-black p-5 text-ink-secondary md:col-span-5 md:border-t-0 md:border-r md:p-7">
                  {row.question}
                </p>
                <p className="border-t border-black p-5 font-semibold md:col-span-4 md:border-t-0 md:p-7">
                  {row.decision}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
          <div className="border-b-2 border-black bg-copper p-6 text-graphite sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-10">
            <p className="editorial-label">Case evidence</p>
            <h2 className="mt-8">
              A profitable trade can still be the wrong use of capacity.
            </h2>
            <Link href="/case-studies" className="editorial-link mt-9">
              Read the commercial margin case study
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="border-b border-black p-6 sm:p-8 lg:p-10">
              <p className="font-serif text-2xl font-bold leading-tight">
                Three months of trading activity were reviewed across purchase
                price, selling price, haulage, operational involvement and
                resource allocation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b border-black p-6 md:border-b-0 md:border-r md:p-8">
                <p className="editorial-label text-copper-dim">Finding</p>
                <p className="mt-4 text-ink-secondary">
                  The return after operational demands was lower than the
                  headline margin suggested.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <p className="editorial-label text-copper-dim">Decision</p>
                <p className="mt-4 text-ink-secondary">
                  Use yard and transport capacity where the expected commercial
                  return justifies it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-shell border-b-2 border-black">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="border-b-2 border-black p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-10">
              <h2>The Finance Health Check is the first formal step.</h2>
              <p className="editorial-intro mt-6">
                A focused commercial review, scoped before work begins. No
                invented recovery figure and no pressure to buy a larger
                programme.
              </p>
            </div>
            <ol className="divide-y-2 divide-black lg:col-span-7">
              {[
                [
                  "01",
                  "Establish the question",
                  "Agree what needs testing and the information already used to run the business.",
                ],
                [
                  "02",
                  "Review the commercial picture",
                  "Connect the financial records with the operating demands behind them.",
                ],
                [
                  "03",
                  "Set the order of action",
                  "Identify the material issues, practical next steps and clear scope boundaries.",
                ],
              ].map(([number, title, copy]) => (
                <li
                  key={number}
                  className="grid grid-cols-[4rem_minmax(0,1fr)]"
                >
                  <span className="flex items-start justify-center border-r-2 border-black p-5 font-mono text-sm font-bold text-copper-dim">
                    {number}
                  </span>
                  <div className="p-5 sm:p-7">
                    <h3>{title}</h3>
                    <p className="mt-3 text-ink-secondary">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="editorial-shell grid grid-cols-1 bg-graphite text-white lg:grid-cols-12">
          <div className="border-b border-[#4d534e] p-6 sm:p-8 lg:col-span-8 lg:border-b-0 lg:border-r lg:p-10">
            <h2 className="max-w-4xl text-white">
              Bring the yard reality into the finance picture.
            </h2>
            <p className="mt-5 max-w-2xl text-[#c6cbc5]">
              Tell us which commercial decision is currently hardest to trust.
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

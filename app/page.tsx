import Link from "next/link";
import { ArrowRight, Check, Scale, Truck, Warehouse } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const reviewAreas = [
  { icon: Scale, title: "Trading margin", copy: "Test whether the apparent spread still holds after the operating effort behind it." },
  { icon: Truck, title: "Transport capacity", copy: "Make haulage visible in the commercial decision, not as a surprise after the deal." },
  { icon: Warehouse, title: "Yard resources", copy: "See which grades and activities earn their use of labour, space and attention." },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen min-w-0 flex-col">
      <SiteHeader />
      <main className="min-w-0 flex-1">
        <section className="border-b border-hairline bg-grid">
          <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,.65fr)] lg:items-end">
            <div className="min-w-0">
              <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-copper">Commercial finance for scrap and recycling</p>
              <h1 className="display-xl max-w-4xl text-ink">Know what is making money—and what is only making tonnage.</h1>
              <p className="mt-6 max-w-2xl text-lg text-ink-secondary">Connect trading, stock, transport and finance so you can see what earns its place, where capacity is being consumed and which decisions deserve attention first.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/health-check" className="inline-flex min-h-12 items-center justify-center bg-copper px-6 font-semibold text-white transition-colors hover:bg-copper-bright">Request a Finance Health Check <ArrowRight className="ml-2 h-4 w-4" /></Link>
                <Link href="/health-check#what-we-review" className="inline-flex min-h-12 items-center justify-center border border-ink px-6 font-semibold text-ink transition-colors hover:border-copper hover:text-copper">See what it reviews</Link>
              </div>
            </div>
            <aside className="min-w-0 border-l-4 border-copper bg-navy p-6 sm:p-8" aria-label="The commercial question">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">The question behind the numbers</p>
              <p className="mt-4 font-serif text-2xl font-bold leading-tight text-white">Does the margin still hold after haulage, yard time and operational capacity?</p>
              <p className="mt-4 text-sm text-ink-secondary">A headline spread is useful. The decision needs the whole commercial picture.</p>
            </aside>
          </div>
        </section>

        <section className="border-b border-hairline bg-panel">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">Where value can hide</p><h2 className="mt-3 text-ink">The numbers have to match the way the yard actually works.</h2></div>
            <div className="mt-10 grid min-w-0 grid-cols-1 border-l border-t border-hairline md:grid-cols-3">
              {reviewAreas.map(({ icon: Icon, title, copy }) => <article key={title} className="min-w-0 border-b border-r border-hairline p-6 sm:p-8"><Icon className="h-6 w-6 text-copper" /><h3 className="mt-6 text-ink">{title}</h3><p className="mt-3 text-sm text-ink-secondary">{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-b border-hairline">
          <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
            <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">A focused first step</p><h2 className="mt-3 text-ink">Start with the Finance Health Check.</h2><p className="mt-5 max-w-xl text-ink-secondary">A fixed-scope commercial review designed to identify which issues deserve action, which numbers need testing and where better information could improve decisions.</p><Link href="/health-check" className="mt-7 inline-flex min-h-11 items-center font-semibold text-copper">Explore the Health Check <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
            <ul className="min-w-0 space-y-4 border-t border-hairline pt-6">
              {["Review the information already used to run the business", "Connect commercial margin with operational demands", "Prioritise practical next actions without inventing a savings promise", "Create a clear route into a scoped improvement project if needed"].map((item) => <li key={item} className="flex min-w-0 gap-3 text-ink-secondary"><Check className="mt-1 h-5 w-5 shrink-0 text-copper" /><span>{item}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="bg-navy">
          <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">A better commercial conversation</p><h2 className="mt-2 max-w-2xl text-white">Bring the yard reality into the finance picture.</h2></div>
            <Link href="/contact?intent=health-check" className="inline-flex min-h-12 shrink-0 items-center justify-center bg-copper px-6 font-semibold text-white hover:bg-copper-bright">Request a Health Check <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
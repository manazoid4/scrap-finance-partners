import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ============================================================
          HERO — Full-bleed, split layout. Massive type left,
          abstract industrial visual right. No centered text.
          ============================================================ */}
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise opacity-30 pointer-events-none" />
        {/* Subtle copper glow top-right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-copper/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container relative px-4 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
            {/* Left: massive headline + CTAs */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-copper mb-8">
                Scrap Finance Partners — 26 years in UK scrap metal finance
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.95] text-ink">
                Your stock
                <br />
                figures are
                <br />
                <span className="text-copper">wrong.</span>
              </h1>

              <p className="mt-10 text-xl md:text-2xl text-ink-secondary max-w-lg leading-relaxed font-light">
                And your margin is hiding. Most scrap yards run on numbers they do not trust. We fix that.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-bright text-white border-0 rounded-sm text-base px-8">
                  <Link href="/health-check">
                    Get a Health Check <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-hairline text-ink hover:bg-panel-alt rounded-sm text-base px-8">
                  <Link href="/services">See What You Get</Link>
                </Button>
              </div>
            </div>

            {/* Right: abstract data sculpture */}
            <div className="hidden lg:block relative mt-8">
              <div className="border border-hairline bg-panel/80 p-8 relative">
                <div className="absolute -top-px -left-px h-3 w-3 border-t border-l border-copper" />
                <div className="absolute -top-px -right-px h-3 w-3 border-t border-r border-copper" />
                <div className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-copper" />
                <div className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-copper" />

                <p className="text-[10px] font-mono uppercase tracking-wider text-ink-muted mb-6">Margin by Material — June 2026</p>

                <div className="flex items-end gap-3 h-56">
                  {[
                    { h: 85, label: "Cu", val: "£84k" },
                    { h: 62, label: "Al", val: "£61k" },
                    { h: 38, label: "Fe", val: "£35k" },
                    { h: 55, label: "Br", val: "£53k" },
                    { h: 72, label: "Pb", val: "£70k" },
                    { h: 45, label: "Zn", val: "£42k" },
                    { h: 28, label: "SS", val: "£26k" },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-[10px] font-mono text-ink-muted">{bar.val}</span>
                      <div className="w-full bg-copper/70" style={{ height: `${bar.h}%` }} />
                      <span className="text-[10px] font-mono text-ink-muted">{bar.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-hairline grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[10px] font-mono text-ink-muted">Stock Var</p>
                    <p className="text-lg font-bold font-mono text-red">-£12k</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-ink-muted">Debtor Days</p>
                    <p className="text-lg font-bold font-mono text-amber">42</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-ink-muted">Margin</p>
                    <p className="text-lg font-bold font-mono text-green">18.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROOF STRIP — Horizontal band, inline stats. No cards.
          Like a Bloomberg ticker or newspaper masthead.
          ============================================================ */}
      <section className="border-b border-hairline bg-panel">
        <div className="container px-4 py-10 md:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {[
              { num: "£120k", label: "Annual savings from digitised reporting" },
              { num: "£20k", label: "Overpayment caught before it left" },
              { num: "£90k", label: "Recovered from supplier reconciliation" },
              { num: "7→2 days", label: "Reporting cycle reduction" },
            ].map((stat, i) => (
              <div key={i} className={`${i > 0 ? 'lg:border-l lg:border-hairline lg:pl-8' : ''}`}>
                <p className="text-3xl md:text-4xl font-bold font-mono text-copper tracking-tight">{stat.num}</p>
                <p className="mt-1 text-sm text-ink-secondary leading-snug max-w-[180px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PAIN POINTS — Editorial list with oversized numbers.
          Left side has the headline, right side has the items.
          No cards. Just type and rules.
          ============================================================ */}
      <section className="border-b border-hairline">
        <div className="container px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
                The problems we see every week
              </h2>
              <p className="mt-6 text-lg text-ink-secondary leading-relaxed">
                When stock, transport, commercial and finance data disagree, owners make expensive decisions in the dark.
              </p>
            </div>

            <div className="space-y-0">
              {[
                { num: "01", title: "Stock you cannot trust", desc: "Monthly stock sheets that bear no relation to what is on the ground. Margin leaking through the gaps." },
                { num: "02", title: "Margin you cannot see", desc: "No clear view of gross margin by material category. Decisions made on gut feel, not data." },
                { num: "03", title: "Fred reporting that wastes time", desc: "EWC codes out of date, transport module underused, stock reports that need three hours of Excel massage." },
                { num: "04", title: "Finance that arrives too late", desc: "Management accounts six weeks after month end. By then the problem has already cost you money." },
              ].map((item, i) => (
                <div key={i} className="group py-8 border-t border-hairline first:border-t-0">
                  <div className="flex items-start gap-6">
                    <span className="text-4xl font-bold font-mono text-hairline group-hover:text-copper transition-colors duration-300">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-ink mb-2">{item.title}</h3>
                      <p className="text-ink-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT YOU GET — Split layout. Massive headline left,
          clean editorial list right with rules between items.
          ============================================================ */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
                What you get
              </h2>
              <p className="mt-6 text-lg text-ink-secondary leading-relaxed">
                Not a dashboard. Not a "solution". Real numbers that match your yard. Delivered monthly. Explained in plain English.
              </p>
            </div>

            <div className="space-y-0">
              {[
                "Monthly stock position you can actually trust",
                "Gross margin by material category — no spreadsheet gymnastics",
                "Transport cost per tonne, route by route",
                "Debtor days and cash flow you see coming",
                "Fred reports that work straight out of the system",
                "A monthly meeting where we tell you what the numbers mean — and what to do",
              ].map((item, i) => (
                <div key={i} className="py-5 border-t border-hairline first:border-t-0 flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 bg-copper flex-shrink-0" />
                  <span className="text-lg text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES — Compact typographic index. Not cards.
          Stacked rows with numbers, titles, and hover reveal.
          ============================================================ */}
      <section className="border-b border-hairline">
        <div className="container px-4 py-20 md:py-28">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
              How we help
            </h2>
            <Button asChild variant="outline" className="border-hairline text-ink hover:bg-panel-alt rounded-sm hidden md:inline-flex">
              <Link href="/services">All 10 services</Link>
            </Button>
          </div>

          <div className="space-y-0">
            {[
              { num: "01", title: "KPI Dashboards & Reporting", desc: "Monthly dashboards, trend commentary, director-ready insight." },
              { num: "02", title: "Stock Accuracy & Reconciliation", desc: "Find discrepancies, fix reporting, recover lost margin." },
              { num: "03", title: "Fred Systems Improvement", desc: "Stock sheets, EWC codes, transport module, new site setup." },
              { num: "04", title: "Transport Finance & Cost Control", desc: "Transport P&L, fuel costs, depot performance, cost per tonne." },
              { num: "05", title: "Forecasting & P&L Support", desc: "Budget forecasting, variance commentary, overspend reduction." },
              { num: "06", title: "Manual Spreadsheet Reduction", desc: "Digitise reporting, remove duplicates, cut admin time." },
            ].map((service, i) => (
              <Link
                key={i}
                href="/services"
                className="group block py-7 border-t border-hairline first:border-t-0 transition-colors hover:bg-panel/50"
              >
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="text-sm font-mono text-ink-muted w-8 flex-shrink-0 pt-1">{service.num}</span>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-ink group-hover:text-copper transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-ink-secondary md:text-right md:max-w-xs">{service.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-ink-muted group-hover:text-copper transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PRICING BANNER — Full-width, massive type. Not a card grid.
          ============================================================ */}
      <section className="border-b border-hairline bg-panel">
        <div className="container px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-copper mb-6">Pricing</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink">
                Fixed monthly.
                <br />
                No surprises.
              </h2>
              <p className="mt-6 text-lg text-ink-secondary max-w-md">
                From £500/month. Less than a part-time bookkeeper. More useful than most full-time FDs.
              </p>
            </div>
            <div>
              <Button asChild size="lg" className="bg-copper hover:bg-copper-bright text-white border-0 rounded-sm text-base px-8 w-full md:w-auto">
                <Link href="/pricing">
                  See Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SCRAP FINANCE OS — Dark band with split layout.
          Visual weight on the concept, not just text.
          ============================================================ */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div>
              <div className="inline-block bg-copper/10 text-copper px-3 py-1 text-xs font-mono uppercase tracking-wider mb-6">
                Coming 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
                Scrap Finance OS
              </h2>
              <p className="mt-6 text-lg text-ink-secondary leading-relaxed">
                A client portal where you upload reports and receive automated KPI dashboards, stock alerts, and board packs — without the manual work.
              </p>
            </div>

            <div className="border border-hairline bg-panel p-8 relative">
              <div className="absolute -top-px -left-px h-3 w-3 border-t border-l border-copper" />
              <div className="absolute -top-px -right-px h-3 w-3 border-t border-r border-copper" />
              <div className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-copper" />
              <div className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-copper" />

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-hairline p-4">
                  <p className="text-[10px] font-mono text-ink-muted uppercase">Stock Alert</p>
                  <p className="text-sm font-mono text-red mt-1">-£12k variance</p>
                </div>
                <div className="border border-hairline p-4">
                  <p className="text-[10px] font-mono text-ink-muted uppercase">Margin</p>
                  <p className="text-sm font-mono text-green mt-1">Cu: 24.5%</p>
                </div>
                <div className="border border-hairline p-4">
                  <p className="text-[10px] font-mono text-ink-muted uppercase">Transport</p>
                  <p className="text-sm font-mono text-ink mt-1">£18.40/T</p>
                </div>
                <div className="border border-hairline p-4">
                  <p className="text-[10px] font-mono text-ink-muted uppercase">Debtors</p>
                  <p className="text-sm font-mono text-amber mt-1">42 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOUNDER QUOTE — Full-width, oversized. Quote mark as
          background element. Not a centered card.
          ============================================================ */}
      <section className="border-b border-hairline">
        <div className="container px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-ink tracking-tight">
              "I have worked in scrap yard finance for 26 years. I have seen yards lose six-figure margin because their stock reporting was wrong and nobody noticed for eight months."
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-12 w-12 bg-panel border border-hairline flex items-center justify-center text-sm font-bold text-copper">
                MA
              </div>
              <div>
                <p className="font-bold text-ink">Majid Ahmed</p>
                <p className="text-sm text-ink-secondary">Founder, Scrap Finance Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

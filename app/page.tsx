import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown, AlertTriangle, EyeOff, Gauge, BarChart3, Truck, FileSpreadsheet, ShieldCheck, Clock, Layers, Target } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero — dark industrial with grid texture, copper glow, data viz */}
      <section className="relative border-b border-hairline bg-panel overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Copper radial glow */}
        <div className="absolute inset-0 hero-glow" />
        {/* Industrial diagonal stripes */}
        <div className="absolute inset-0 industrial-stripes" />

        <div className="container relative py-20 md:py-28 lg:py-36 px-4">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left: copy + CTAs */}
            <div className="max-w-2xl">
              {/* Single deliberate kicker — brand voice, not reflex */}
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 bg-copper rounded-full pulse-dot" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-copper">
                  Built for yards
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-ink">
                Your stock figures
                <br />
                are wrong.
                <br />
                <span className="text-copper">Your margin is hiding.</span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-ink-secondary max-w-xl leading-relaxed">
                Most scrap yards run on numbers they do not trust. Fred says one thing, the yard says another, and the accountant has given up asking. We fix the gap between what your system reports and what is actually happening.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="cta-copper bg-copper hover:bg-copper-bright text-white border-0">
                  <Link href="/health-check">
                    Get a Health Check <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="cta-outline border-hairline text-ink hover:text-ink">
                  <Link href="/services">See What You Get</Link>
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-3 text-sm text-ink-muted">
                <Gauge className="h-4 w-4 text-copper" />
                <span>Built by a founder with 26 years in UK scrap metal finance.</span>
              </div>
            </div>

            {/* Right: abstract data visualization */}
            <div className="hidden lg:block relative">
              <div className="border border-hairline bg-panel-alt/60 rounded-md p-6 backdrop-blur-sm">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-hairline">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Monthly Dashboard</p>
                    <p className="text-sm font-bold text-ink mt-1">Margin by Material</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green pulse-dot" />
                    <span className="text-xs font-mono text-ink-muted">LIVE</span>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="flex items-end justify-between gap-3 h-48 mb-4">
                  {[
                    { h: 45, label: "Cu", val: "£42k" },
                    { h: 72, label: "Al", val: "£68k" },
                    { h: 30, label: "Fe", val: "£28k" },
                    { h: 88, label: "Br", val: "£84k" },
                    { h: 55, label: "Pb", val: "£51k" },
                    { h: 38, label: "Zn", val: "£35k" },
                    { h: 64, label: "SS", val: "£60k" },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-[10px] font-mono text-ink-muted">{bar.val}</span>
                      <div
                        className="w-full bg-copper/80 bar-animate rounded-t-sm"
                        style={{ height: `${bar.h}%`, animationDelay: `${i * 80}ms` }}
                      />
                      <span className="text-[10px] font-mono text-ink-muted">{bar.label}</span>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-hairline">
                  <div>
                    <p className="text-xs text-ink-muted">Stock Var</p>
                    <p className="text-lg font-bold font-mono text-red">-£12k</p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-muted">Transport</p>
                    <p className="text-lg font-bold font-mono text-amber">£8.2k</p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-muted">Net Margin</p>
                    <p className="text-lg font-bold font-mono text-green">+18%</p>
                  </div>
                </div>
              </div>

              {/* Floating accent line */}
              <div className="absolute -bottom-3 -right-3 h-16 w-16 border-r-2 border-b-2 border-copper/40 rounded-br-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points — numbered, industrial cards */}
      <section className="border-b border-hairline">
        <div className="container py-16 md:py-24 px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-ink mb-4">
              The problems we see every week
            </h2>
            <p className="text-lg text-ink-secondary">
              When stock, transport, commercial and finance data disagree, owners make expensive decisions in the dark.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
            {[
              { icon: EyeOff, num: "01", title: "Stock you cannot trust", desc: "Monthly stock sheets that bear no relation to what is on the ground. Margin leaking through the gaps." },
              { icon: TrendingDown, num: "02", title: "Margin you cannot see", desc: "No clear view of gross margin by material category. Decisions made on gut feel, not data." },
              { icon: AlertTriangle, num: "03", title: "Fred reporting that wastes time", desc: "EWC codes out of date, transport module underused, stock reports that need three hours of Excel massage." },
              { icon: Gauge, num: "04", title: "Finance that arrives too late", desc: "Management accounts six weeks after month end. By then the problem has already cost you money." },
            ].map((item, i) => (
              <div key={i} className="bg-panel p-8 service-row border-0">
                <div className="flex items-start justify-between mb-6">
                  <item.icon className="h-7 w-7 text-copper" />
                  <span className="text-3xl font-bold font-mono text-hairline-bright">{item.num}</span>
                </div>
                <h3 className="font-bold text-ink mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points — credibility cards with hover */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container py-16 md:py-24 px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-ink mb-4">
              Real impact from real yards
            </h2>
            <p className="text-lg text-ink-secondary">
              Not theoretical savings. Actual money found, recovered, or saved by fixing the numbers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "£120k", desc: "Annual savings by removing redundant manual spreadsheets and digitising reporting." },
              { stat: "£20k", desc: "Overpayment uncovered through audit checks — client was billed twice and nobody noticed." },
              { stat: "£90k", desc: "Recovered from supplier overpayments by reconciling 250+ suppliers systematically." },
              { stat: "7→2", desc: "Reporting cycle reduced from 7 days to 2 days — decisions made while they still matter." },
            ].map((item, i) => (
              <div key={i} className="cred-card p-8 border border-hairline rounded-md bg-panel">
                <p className="text-4xl md:text-5xl font-bold font-mono text-copper mb-4">{item.stat}</p>
                <div className="h-px w-12 bg-copper/40 mb-4" />
                <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="border-b border-hairline">
        <div className="container py-16 md:py-24 px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-bold text-ink mb-6">What you get</h2>
            <p className="text-lg text-ink-secondary mb-12">
              Not a dashboard. Not a "solution". Real numbers that match your yard. Delivered monthly. Explained in plain English.
            </p>
            <div className="space-y-5">
              {[
                "Monthly stock position you can actually trust",
                "Gross margin by material category — no spreadsheet gymnastics",
                "Transport cost per tonne, route by route",
                "Debtor days and cash flow you see coming",
                "Fred reports that work straight out of the system",
                "A monthly meeting where we tell you what the numbers mean — and what to do",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <span className="mt-1 h-2 w-2 bg-copper rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <span className="text-lg text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us — trust section */}
      <section className="border-b border-hairline bg-panel/50">
        <div className="container py-16 md:py-24 px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-ink mb-4">
              Why yards talk to us
            </h2>
            <p className="text-lg text-ink-secondary">
              We are not a London consultancy. We are not generic accountants. We are built for the yard.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
            {[
              { icon: ShieldCheck, title: "26 years in scrap", desc: "Not 26 years in general finance. 26 years in scrap metal finance. We know the smell of copper." },
              { icon: Clock, title: "No surprises", desc: "Fixed monthly pricing. No hidden fees. No scope creep. You know what you pay and what you get." },
              { icon: Layers, title: "From yard to balance sheet", desc: "We start at the weighbridge and finish at the board pack. The whole chain, not just the end." },
              { icon: Target, title: "Real data, real decisions", desc: "Every number we deliver is one you can act on. No vanity metrics. No corporate fluff." },
            ].map((item, i) => (
              <div key={i} className="bg-panel p-8 service-row">
                <item.icon className="h-7 w-7 text-copper mb-5" />
                <h3 className="font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-b border-hairline">
        <div className="container py-16 md:py-24 px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-ink mb-4">How we help</h2>
            <p className="text-lg text-ink-secondary">
              Specialist support across the areas where scrap yards leak money: stock, margin, transport, reporting and systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {[
              { icon: BarChart3, title: "KPI Dashboards & Reporting", desc: "Monthly dashboards, trend commentary, director-ready insight." },
              { icon: EyeOff, title: "Stock Accuracy & Reconciliation", desc: "Find discrepancies, fix reporting, recover lost margin." },
              { icon: AlertTriangle, title: "Fred Systems Improvement", desc: "Stock sheets, EWC codes, transport module, new site setup." },
              { icon: Truck, title: "Transport Finance & Cost Control", desc: "Transport P&L, fuel costs, depot performance, cost per tonne." },
              { icon: Gauge, title: "Forecasting & P&L Support", desc: "Budget forecasting, variance commentary, overspend reduction." },
              { icon: FileSpreadsheet, title: "Manual Spreadsheet Reduction", desc: "Digitise reporting, remove duplicates, cut admin time." },
            ].map((service, i) => (
              <div key={i} className="cred-card p-6 border border-hairline rounded-md bg-panel/50">
                <service.icon className="h-6 w-6 text-copper mb-4" />
                <h3 className="font-bold text-ink mb-2">{service.title}</h3>
                <p className="text-sm text-ink-secondary">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline" className="cta-outline border-hairline text-ink">
              <Link href="/services">See all 10 services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container py-16 md:py-24 px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold text-ink mb-3">
                Fixed monthly pricing. No surprises.
              </h2>
              <p className="text-lg text-ink-secondary">
                From £500/month. Less than a part-time bookkeeper. More useful than most full-time FDs.
              </p>
            </div>
            <Button asChild size="lg" className="cta-copper bg-copper hover:bg-copper-bright text-white border-0 w-fit">
              <Link href="/pricing">
                See Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Scrap Finance OS Teaser */}
      <section className="border-b border-hairline bg-panel/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container relative py-16 md:py-24 px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/30 px-3 py-1.5 rounded-sm text-sm font-medium text-copper mb-6">
              <span className="h-1.5 w-1.5 bg-copper rounded-full pulse-dot" />
              Coming Soon
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-ink mb-4">Scrap Finance OS</h2>
            <p className="text-lg text-ink-secondary mb-6">
              A client portal where you upload your reports and spreadsheets, and receive automated KPI dashboards, stock discrepancy alerts, margin analysis and monthly board packs — without the manual work.
            </p>
            <p className="text-ink-muted">
              Currently in development. Join the waitlist to be the first to access it.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Credibility */}
      <section>
        <div className="container py-16 md:py-24 px-4">
          <div className="max-w-3xl">
            <div className="h-px w-16 bg-copper mb-8 line-accent" />
            <p className="text-xl md:text-2xl leading-relaxed text-ink mb-8">
              "I have worked in scrap yard finance for 26 years. I have seen yards lose six-figure margin because their stock reporting was wrong and nobody noticed for eight months. That is why I do this."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-panel border border-hairline rounded-full flex items-center justify-center text-sm font-bold text-copper">
                MA
              </div>
              <div>
                <p className="font-bold text-ink">Majid Ahmed</p>
                <p className="text-sm text-ink-muted">Founder, Scrap Finance Partners · 26 years in UK scrap metal finance</p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="cta-outline border-hairline text-ink">
                <Link href="/founder">Read the full story <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
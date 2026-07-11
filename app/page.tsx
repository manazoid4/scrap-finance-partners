import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        <div className="absolute inset-0 noise opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] hero-glow pointer-events-none" />

        <div className="container relative px-4 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
            
            <div className="reveal">
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

              <p className="mt-10 text-xl md:text-2xl text-ink-secondary max-w-lg leading-relaxed font-light reveal reveal-delay-1">
                And your margin is hiding. Most scrap yards run on numbers they do not trust. We fix that.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 reveal reveal-delay-2">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-bright text-white border-0 rounded-sm text-base px-8 cta-copper">
                  <Link href="/health-check">
                    Get a Health Check <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-hairline text-ink hover:bg-panel-alt rounded-sm text-base px-8 cta-outline">
                  <Link href="/services">See What You Get</Link>
                </Button>
              </div>
            </div>

            {/* DASHBOARD WIDGET */}
            <div className="hidden lg:block relative reveal reveal-delay-3">
              <div className="glass-panel p-8 relative shadow-2xl border border-hairline/80 rounded-sm">
                <div className="absolute -top-px -left-px h-3 w-3 border-t border-l border-copper" />
                <div className="absolute -top-px -right-px h-3 w-3 border-t border-r border-copper" />
                <div className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-copper" />
                <div className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-copper" />

                <div className="flex justify-between items-end border-b border-hairline pb-4 mb-8">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">Margin by Material</h3>
                    <p className="font-mono text-[10px] text-ink-secondary mt-1">GROSS MARGIN £ | MTH: JUN-26</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-2xl text-copper">18.5%</p>
                  </div>
                </div>

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
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-crosshair">
                      <span className="font-mono text-[10px] text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                      <div 
                        className="w-full bg-copper/70 group-hover:bg-copper transition-colors bar-animate rounded-t-sm" 
                        style={{ height: `${bar.h}%`, animationDelay: `${i * 100}ms` }} 
                      />
                      <span className="font-mono text-[11px] text-ink-secondary">{bar.label}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-hairline">
                  <div>
                    <p className="font-mono text-[10px] text-ink-muted uppercase">Stock Var</p>
                    <p className="font-mono text-xl text-red mt-1">-£12k</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-ink-muted uppercase">Debtor Days</p>
                    <p className="font-mono text-xl text-amber mt-1">42</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-ink-muted uppercase">Margin</p>
                    <p className="font-mono text-xl text-green mt-1">18.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF TICKER */}
      <section className="border-b border-hairline bg-panel">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-x divide-hairline">
            {[
              { num: "£120k", label: "SAVED FROM REPORTING" },
              { num: "£20k", label: "OVERPAYMENT CAUGHT" },
              { num: "£90k", label: "SUPPLIER RECOVERY" },
              { num: "7→2 DAYS", label: "REPORTING CYCLE CUT" },
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col justify-center ${i === 0 ? '' : 'pl-8'}`}>
                <p className="text-3xl md:text-4xl font-mono text-copper font-bold">{stat.num}</p>
                <p className="text-xs font-mono text-ink-secondary mt-2 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-b border-hairline bg-graphite relative">
        <div className="absolute inset-y-0 right-0 w-1/2 industrial-stripes opacity-20 pointer-events-none" />
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <div className="sticky top-24">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
                The problems we see every week
              </h2>
              <div className="w-12 h-1 bg-copper mt-8 line-accent" />
              <p className="mt-8 text-lg text-ink-secondary leading-relaxed font-light">
                When stock, transport, and finance data disagree, owners make expensive decisions in the dark.
              </p>
            </div>

            <div className="border-l border-hairline pl-8 md:pl-16 space-y-16">
              {[
                { num: "01", title: "Stock you cannot trust", desc: "Monthly stock sheets that bear no relation to what is on the ground. Margin leaking through the gaps." },
                { num: "02", title: "Margin you cannot see", desc: "No clear view of gross margin by material category. Decisions made on gut feel, not data." },
                { num: "03", title: "Fred reporting that wastes time", desc: "EWC codes out of date, transport module underused, stock reports that need three hours of Excel massage." },
                { num: "04", title: "Finance that arrives too late", desc: "Management accounts six weeks after month end. By then the problem has already cost you money." },
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -left-[33px] md:-left-[65px] top-1.5 w-2 h-2 bg-panel border border-hairline group-hover:bg-copper transition-colors" />
                  <span className="block text-sm font-mono text-copper mb-3">{item.num}</span>
                  <h3 className="text-2xl font-bold text-ink tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-ink-secondary leading-relaxed max-w-xl text-lg font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE CONTROL */}
      <section className="border-b border-hairline bg-panel">
        <div className="container px-4 py-24 md:py-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
              What you get
            </h2>
            <p className="mt-6 text-xl text-ink-secondary font-light">
              Not a dashboard. Not a &quot;solution&quot;. Real numbers that match your yard. Delivered monthly. Explained in plain English.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {[
              { label: "Stock Position", desc: "Reconciled monthly. Trusted numbers you can actually use." },
              { label: "Gross Margin", desc: "By material category. No spreadsheet gymnastics." },
              { label: "Transport Cost", desc: "Per tonne, route by route." },
              { label: "Debtor Days", desc: "Cash flow you see coming." },
              { label: "Fred Systems", desc: "Reports that work straight out of the system." },
              { label: "Director Insight", desc: "A monthly meeting where we tell you what the numbers mean." },
            ].map((item, i) => (
              <div key={i} className="bg-graphite p-8 hover:bg-panel-alt transition-colors service-row flex flex-col justify-between min-h-[200px]">
                <div className="w-2 h-2 bg-copper/50 mb-6" />
                <div>
                  <h4 className="text-xl font-bold text-ink mb-3">{item.label}</h4>
                  <p className="text-ink-secondary font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button asChild size="lg" variant="outline" className="border-hairline bg-graphite text-ink hover:bg-panel-alt rounded-sm text-base px-12 cta-outline">
                <Link href="/services">View All 10 Services</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* SCRAP FINANCE OS */}
      <section className="border-b border-hairline bg-graphite relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container px-4 relative z-10">
          <div className="glass-panel border border-hairline p-1 rounded-sm shadow-xl max-w-5xl mx-auto">
            <div className="bg-panel-raised border-b border-hairline px-4 py-3 flex items-center justify-between rounded-t-sm">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-hairline" />
                <div className="w-3 h-3 rounded-full bg-hairline" />
                <div className="w-3 h-3 rounded-full bg-hairline" />
              </div>
              <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">SYS.PORTAL.2026</p>
            </div>
            
            <div className="p-8 md:p-16 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center bg-graphite/80 rounded-b-sm">
              <div>
                <div className="inline-block bg-copper/10 text-copper px-3 py-1 text-xs font-mono uppercase tracking-wider mb-8">
                  Coming 2026
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink mb-6">
                  Scrap Finance OS
                </h2>
                <p className="text-lg text-ink-secondary leading-relaxed font-light">
                  A client portal where you upload reports and receive automated KPI dashboards, stock alerts, and board packs — without the manual work.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-hairline bg-panel p-6 rounded-sm">
                  <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-3">Stock Alert</p>
                  <p className="font-mono text-lg text-red">-£12k variance</p>
                </div>
                <div className="border border-hairline bg-panel p-6 rounded-sm">
                  <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-3">Margin</p>
                  <p className="font-mono text-lg text-green">Cu: 24.5%</p>
                </div>
                <div className="border border-hairline bg-panel p-6 rounded-sm">
                  <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-3">Transport</p>
                  <p className="font-mono text-lg text-ink">£18.40 / T</p>
                </div>
                <div className="border border-hairline bg-panel p-6 rounded-sm">
                  <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-3">Debtors</p>
                  <p className="font-mono text-lg text-amber">42 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="bg-panel py-24 md:py-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-ink tracking-tight text-balance">
              &quot;I have worked in scrap yard finance for 26 years. I have seen yards lose six-figure margin because their stock reporting was wrong and nobody noticed for eight months.&quot;
            </p>
            <div className="mt-16 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6">
              <div className="h-16 w-16 bg-graphite border border-hairline flex items-center justify-center font-mono text-xl text-copper rounded-sm">
                MA
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-ink text-lg tracking-wide">Majid Ahmed</p>
                <p className="text-sm text-ink-secondary mt-1">Founder, Scrap Finance Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

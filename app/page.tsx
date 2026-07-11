import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        <div className="absolute inset-0 noise opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] hero-glow pointer-events-none" />

        <div className="container relative px-4 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-panel border border-hairline mb-8 font-mono text-[10px] uppercase tracking-widest text-copper">
                <span className="w-1.5 h-1.5 rounded-none bg-copper animate-pulse" />
                Live: UK Scrap Finance Intelligence
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.9] text-ink uppercase">
                Your <span className="text-copper italic pr-2">stock</span>
                <br />
                figures
                <br />
                are <span className="underline decoration-copper underline-offset-8">wrong.</span>
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-ink-secondary max-w-lg leading-snug font-light reveal reveal-delay-1">
                And your margin is hiding. Most scrap yards run on numbers they do not trust. We fix that.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 reveal reveal-delay-2">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-bright text-white border-0 rounded-none text-base px-8 uppercase font-mono tracking-wide cta-copper">
                  <Link href="/health-check">
                    Get a Health Check <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-hairline text-ink hover:bg-panel-alt rounded-none text-base px-8 uppercase font-mono tracking-wide cta-outline">
                  <Link href="/services">See What You Get</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative reveal reveal-delay-3">
              <div className="glass-panel p-6 shadow-2xl relative z-10 border border-hairline/80">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-copper" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-copper" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-copper" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-copper" />

                <div className="flex justify-between items-end border-b border-hairline pb-4 mb-6">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">Margin by Material</h3>
                    <p className="font-mono text-[10px] text-ink-secondary mt-1">GROSS MARGIN £ | MTH: JUN-26</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-2xl text-copper">18.5%</p>
                    <p className="font-mono text-[10px] text-green mt-1 flex items-center justify-end gap-1">
                      <ArrowUpRight className="h-3 w-3" /> +1.2% YTD
                    </p>
                  </div>
                </div>

                <div className="flex items-end gap-2 h-48">
                  {[
                    { h: 85, label: "CU", val: "£84k" },
                    { h: 62, label: "AL", val: "£61k" },
                    { h: 38, label: "FE", val: "£35k" },
                    { h: 55, label: "BR", val: "£53k" },
                    { h: 72, label: "PB", val: "£70k" },
                    { h: 45, label: "ZN", val: "£42k" },
                    { h: 28, label: "SS", val: "£26k" },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-crosshair">
                      <span className="font-mono text-[9px] text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                      <div 
                        className="w-full bg-copper/40 border border-copper/20 group-hover:bg-copper group-hover:border-copper transition-colors bar-animate" 
                        style={{ height: `${bar.h}%`, animationDelay: `${i * 100}ms` }} 
                      />
                      <span className="font-mono text-[10px] text-ink-secondary">{bar.label}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-hairline">
                  <div className="bg-panel-alt p-3 border border-hairline">
                    <p className="font-mono text-[9px] text-ink-muted uppercase">Stock Var</p>
                    <p className="font-mono text-lg text-red mt-1">-£12k</p>
                  </div>
                  <div className="bg-panel-alt p-3 border border-hairline">
                    <p className="font-mono text-[9px] text-ink-muted uppercase">Debtor Days</p>
                    <p className="font-mono text-lg text-amber mt-1">42</p>
                  </div>
                  <div className="bg-panel-alt p-3 border border-hairline">
                    <p className="font-mono text-[9px] text-ink-muted uppercase">Cash Pos</p>
                    <p className="font-mono text-lg text-green mt-1">£1.4m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-panel overflow-hidden">
        <div className="container px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-hairline">
            {[
              { num: "£120k", label: "SAVED FROM REPORTING" },
              { num: "£20k", label: "OVERPAYMENT CAUGHT" },
              { num: "£90k", label: "SUPPLIER RECOVERY" },
              { num: "7→2 DAYS", label: "REPORTING CYCLE CUT" },
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col justify-center ${i === 0 ? '' : 'pl-8'}`}>
                <p className="text-3xl md:text-4xl font-mono text-copper font-bold">{stat.num}</p>
                <p className="text-[10px] font-mono text-ink-secondary mt-2 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-graphite relative">
        <div className="absolute inset-y-0 right-0 w-1/2 industrial-stripes opacity-30 pointer-events-none" />
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <div className="sticky top-24">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1] text-ink uppercase">
                The Pain.
              </h2>
              <div className="w-12 h-1 bg-copper mt-8 line-accent" />
              <p className="mt-8 text-lg text-ink-secondary leading-relaxed font-light">
                When stock, transport, and finance data disagree, you make expensive decisions in the dark.
              </p>
            </div>

            <div className="border-l border-hairline pl-8 md:pl-16 space-y-16">
              {[
                { num: "01", title: "Stock you cannot trust", desc: "Monthly sheets bear no relation to what is on the ground. Margin leaks through the gaps." },
                { num: "02", title: "Margin you cannot see", desc: "No clear view of gross margin by material category. Decisions made on gut feel, not data." },
                { num: "03", title: "Fred reporting that wastes time", desc: "EWC codes out of date, transport module underused, stock reports needing three hours of Excel." },
                { num: "04", title: "Finance that arrives too late", desc: "Management accounts six weeks after month end. By then the problem has cost you money." },
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -left-[33px] md:-left-[65px] top-1 w-2 h-2 bg-panel border border-hairline group-hover:bg-copper transition-colors" />
                  <span className="block text-sm font-mono text-copper mb-2">{item.num} {"//"}</span>
                  <h3 className="text-2xl font-bold text-ink uppercase tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-ink-secondary leading-relaxed max-w-xl text-lg font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-panel">
        <div className="container px-4 py-24 md:py-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1] text-ink uppercase">
              The Control.
            </h2>
            <p className="mt-6 text-xl text-ink-secondary font-light">
              Not a &quot;solution&quot;. Real numbers that match your yard. Delivered monthly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
            {[
              { label: "Stock Position", desc: "Reconciled monthly. Trusted numbers." },
              { label: "Gross Margin", desc: "By material category. No Excel gymnastics." },
              { label: "Transport Cost", desc: "Per tonne, route by route." },
              { label: "Debtor Days", desc: "Cash flow you see coming." },
              { label: "Fred Systems", desc: "Reports that work straight out of the box." },
              { label: "Director Insight", desc: "Monthly briefing on what to do next." },
            ].map((item, i) => (
              <div key={i} className="bg-panel p-8 hover:bg-panel-alt transition-colors service-row flex flex-col justify-between min-h-[160px]">
                <div className="w-2 h-2 bg-copper/50 mb-4" />
                <div>
                  <h4 className="text-xl font-bold text-ink uppercase">{item.label}</h4>
                  <p className="text-ink-secondary mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Button asChild size="lg" variant="outline" className="border-hairline bg-graphite text-ink hover:bg-copper hover:text-white hover:border-copper rounded-none text-base px-12 uppercase font-mono tracking-wide transition-all duration-200">
                <Link href="/services">View All Services</Link>
             </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-graphite relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container px-4 relative z-10">
          <div className="glass-panel border border-hairline p-1">
            <div className="bg-panel-raised border-b border-hairline px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-none bg-hairline" />
                <div className="w-3 h-3 rounded-none bg-hairline" />
                <div className="w-3 h-3 rounded-none bg-hairline" />
              </div>
              <p className="font-mono text-[10px] text-ink-muted uppercase">SYS.PORTAL.2026</p>
            </div>
            
            <div className="p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-center bg-graphite/50">
              <div>
                <p className="font-mono text-copper text-sm mb-4">{">"} COMING_2026</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1] text-ink uppercase mb-6">
                  Scrap Finance OS
                </h2>
                <p className="text-lg text-ink-secondary leading-relaxed font-light mb-8">
                  A client portal where you upload reports and receive automated KPI dashboards, stock alerts, and board packs — without the manual work.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-hairline border border-hairline">
                <div className="bg-panel p-6">
                  <p className="font-mono text-[10px] text-ink-muted uppercase mb-2">STOCK_VAR</p>
                  <p className="font-mono text-xl text-red">-£12,040.00</p>
                </div>
                <div className="bg-panel p-6">
                  <p className="font-mono text-[10px] text-ink-muted uppercase mb-2">MRG_CU</p>
                  <p className="font-mono text-xl text-green">24.5%</p>
                </div>
                <div className="bg-panel p-6">
                  <p className="font-mono text-[10px] text-ink-muted uppercase mb-2">TRN_CST_T</p>
                  <p className="font-mono text-xl text-ink">£18.40</p>
                </div>
                <div className="bg-panel p-6">
                  <p className="font-mono text-[10px] text-ink-muted uppercase mb-2">DBT_DYS</p>
                  <p className="font-mono text-xl text-amber">42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-panel py-24 md:py-32">
        <div className="container px-4">
          <div className="max-w-4xl border-l-4 border-copper pl-8 md:pl-12">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-ink tracking-tight">
              &quot;I have seen yards lose six-figure margin because their stock reporting was wrong and nobody noticed for eight months.&quot;
            </p>
            <div className="mt-12 flex items-center gap-6">
              <div className="h-16 w-16 bg-graphite border border-hairline flex items-center justify-center font-mono text-xl text-copper">
                MA
              </div>
              <div>
                <p className="font-bold text-ink text-lg uppercase tracking-wide">Majid Ahmed</p>
                <p className="font-mono text-xs text-ink-secondary mt-1 tracking-widest uppercase">Founder — 26 years in scrap finance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

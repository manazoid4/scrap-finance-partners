import { PricingCard } from "@/components/pricing-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Minus } from "lucide-react"
import { featureScaffold, pricing, sprints } from "@/data/pricing"

const comparisonRows = [
  { feature: "Monthly yard finance pack", l1: true, l2: true, l3: true },
  { feature: "Stock position by grade", l1: true, l2: true, l3: true },
  { feature: "Gross margin by material category", l1: true, l2: true, l3: true },
  { feature: "Fred/Xero data quality log", l1: true, l2: true, l3: true },
  { feature: "Monthly owner action list", l1: true, l2: true, l3: true },
  { feature: "Cash flow forecast and debtor pressure list", l1: false, l2: true, l3: true },
  { feature: "Monthly business partner meeting", l1: false, l2: true, l3: true },
  { feature: "Margin per tonne by grade", l1: false, l2: true, l3: true },
  { feature: "Transport cost per tonne", l1: false, l2: true, l3: true },
  { feature: "Loss-making grade and route flags", l1: false, l2: true, l3: true },
  { feature: "Board-style management pack", l1: false, l2: false, l3: true },
  { feature: "Quarterly bank/accountant pack", l1: false, l2: false, l3: true },
  { feature: "Forecast, budget and scenario model", l1: false, l2: false, l3: true },
  { feature: "KPI review and challenge meetings", l1: false, l2: false, l3: true },
  { feature: "Payroll, commission and coding advisory", l1: false, l2: false, l3: true },
  { feature: "Direct owner decision support", l1: false, l2: false, l3: true },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        <div className="absolute inset-0 noise opacity-20 pointer-events-none" />
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-ink mb-8">
              Priced like margin recovery, not admin support.
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed font-light">
              Scrap Finance Partners is priced against stock accuracy, margin
              control, cash visibility and owner decisions. If the yard needs
              cheap bookkeeping, this is the wrong offer.
            </p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="border border-hairline bg-graphite p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-copper mb-2">Value anchor</p>
              <p className="text-ink-secondary text-sm leading-relaxed">
                Recover one mispriced load, supplier error or stock variance and
                the work can pay for itself.
              </p>
            </div>
            <div className="border border-hairline bg-graphite p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-copper mb-2">What this replaces</p>
              <p className="text-ink-secondary text-sm leading-relaxed">
                Not a bookkeeper. A finance operator who understands Fred, stock,
                transport and margin.
              </p>
            </div>
            <div className="border border-hairline bg-graphite p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-copper mb-2">Want software instead?</p>
              <p className="text-ink-secondary text-sm leading-relaxed">
                YardLedger turns your Fred and Xero exports into the same
                reports, self-serve, from £149/month.{" "}
                <a href="/software" className="text-copper hover:text-copper-bright">See YardLedger pricing →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-panel relative">
        <div className="container px-4 py-24">
          <div className="grid lg:grid-cols-3 gap-0 border border-hairline bg-graphite">
            {pricing.map((tier, index) => (
              <PricingCard
                key={tier.id}
                title={tier.title}
                level={index + 1}
                price={tier.price}
                isPopular={tier.isPopular}
                description={tier.description}
                features={tier.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-24">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink uppercase">Compare Features</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-hairline bg-panel">
              <thead className="bg-panel-alt border-b border-hairline font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                <tr>
                  <th className="px-6 py-4 font-normal border-r border-hairline">What you get</th>
                  <th className="px-6 py-4 font-normal text-center border-r border-hairline">Control</th>
                  <th className="px-6 py-4 font-normal text-center border-r border-hairline text-copper">Margin</th>
                  <th className="px-6 py-4 font-normal text-center">Board</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline bg-graphite">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-panel transition-colors">
                    <td className="px-6 py-4 font-medium text-ink border-r border-hairline">{row.feature}</td>
                    <td className="px-6 py-4 text-center border-r border-hairline">
                      {row.l1 ? <Check className="w-4 h-4 mx-auto text-copper" /> : <Minus className="w-4 h-4 mx-auto text-hairline-bright" />}
                    </td>
                    <td className="px-6 py-4 text-center border-r border-hairline">
                      {row.l2 ? <Check className="w-4 h-4 mx-auto text-copper" /> : <Minus className="w-4 h-4 mx-auto text-hairline-bright" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.l3 ? <Check className="w-4 h-4 mx-auto text-copper" /> : <Minus className="w-4 h-4 mx-auto text-hairline-bright" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-panel relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/3 industrial-stripes opacity-20 pointer-events-none" />
        <div className="container px-4 py-24 relative">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink uppercase">One-off Sprints</h2>
            <p className="mt-4 text-ink-secondary max-w-2xl text-lg font-light">
              Don&apos;t need a monthly service? We run targeted diagnostic and fix projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
            {sprints.map((sprint) => (
              <div key={sprint.id} className="bg-graphite p-8 hover:bg-panel-alt transition-colors group relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-copper scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <h3 className="text-xl font-bold text-ink uppercase mb-2">{sprint.title}</h3>
                <p className="font-mono text-copper text-lg mb-6">{sprint.price}</p>
                <p className="text-ink-secondary leading-relaxed">{sprint.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-24">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink uppercase">
              Feature scaffold
            </h2>
            <p className="mt-4 text-ink-secondary text-lg font-light">
              The capability map for YardLedger, diagnostic packs and monthly
              client reports. Scaffolded now; productised as demand proves it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {featureScaffold.map((module) => (
              <div key={module.title} className="bg-panel p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-copper mb-2">
                  {module.status}
                </p>
                <h3 className="text-lg font-bold text-ink uppercase mb-5">{module.title}</h3>
                <ul className="space-y-3">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-ink-secondary">
                      <Check className="h-4 w-4 text-copper flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-graphite py-24">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink uppercase mb-8">Not sure which offer you need?</h2>
          <Button asChild size="lg" className="bg-copper hover:bg-copper-bright text-white border-0 rounded-none text-base px-12 uppercase font-mono tracking-wide">
            <Link href="/health-check">Get a Health Check <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

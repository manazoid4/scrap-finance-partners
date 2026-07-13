import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { featureScaffold, oneOffs, pricing } from "@/data/pricing";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing | Scrap Finance Partners",
  description:
    "Premium scrap yard finance retainers, diagnostic sprints and scaffolded reporting modules for stock, margin, transport and cash control.",
};

const valueAnchors = [
  "Recover one mispriced load, supplier error or stock variance and the work can pay for itself.",
  "The comparison is not a bookkeeper. It is a finance operator who understands Fred, stock, transport and margin.",
  "Every retainer starts from a written action list: what leaked, what to fix, who owns it, and what it is worth.",
];

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border/60">
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold text-copper">
              Pricing for yards where a bad number costs real money
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Charge the work like margin recovery, not admin support.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              Scrap Finance Partners is priced against stock accuracy, margin control,
              cash visibility and owner decisions. If the yard needs cheap bookkeeping,
              this is the wrong offer.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {valueAnchors.map((anchor) => (
              <div key={anchor} className="border border-border bg-card p-5">
                <p className="text-sm leading-6 text-muted-foreground">{anchor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="container px-4 py-14 md:px-6 md:py-20">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Monthly control retainers
            </h2>
            <p className="mt-3 text-muted-foreground">
              Higher prices, tighter scope, clearer buyer expectation. Each tier is
              anchored to decisions the owner can act on, not hours delivered.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((tier) => (
              <article
                key={tier.id}
                className={`flex h-full flex-col border bg-card p-6 ${
                  tier.isPopular ? "border-copper" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">{tier.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>
                  {tier.isPopular ? (
                    <span className="shrink-0 bg-copper px-3 py-1 text-xs font-semibold text-white">
                      Core offer
                    </span>
                  ) : null}
                </div>

                <p className="mt-8 text-4xl font-extrabold tracking-tight">{tier.price}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">
                  {tier.outcome}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-8 w-full">
                  <Link href="/health-check">
                    Start with a Health Check
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-muted/30">
        <div className="container px-4 py-14 md:px-6 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Fixed sprints before the retainer
              </h2>
              <p className="mt-4 text-muted-foreground">
                These are priced to solve a painful area quickly and expose the
                recoverable value before ongoing support starts.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {oneOffs.map((offer) => (
                <article key={offer.slug} className="border border-border bg-background p-5">
                  <h3 className="font-bold">{offer.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {offer.description}
                  </p>
                  <p className="mt-5 text-lg font-extrabold text-copper">{offer.price}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 py-14 md:px-6 md:py-20">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Feature scaffold for the premium offer
            </h2>
            <p className="mt-3 text-muted-foreground">
              This is the capability map to build into YardLedger, the diagnostic pack,
              and the monthly client reports. Scaffolded now; productised as demand proves it.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {featureScaffold.map((module) => (
              <article key={module.title} className="bg-card p-6">
                <p className="text-xs font-semibold text-copper">{module.status}</p>
                <h3 className="mt-2 text-xl font-bold">{module.title}</h3>
                <ul className="mt-5 space-y-2">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-copper" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

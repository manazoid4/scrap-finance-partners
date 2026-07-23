import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "YardLedger — scrap yard finance software",
  description:
    "Turn Fred and Xero exports into verified stock positions, margin per tonne by grade, and a one-click month-end pack. 3-month money-back guarantee. 13% to charity.",
};

const features = [
  {
    name: "Stock position that reconciles",
    detail:
      "Upload your Fred export. Get stock by grade with variances flagged against your weighbridge tickets. Know what's real before month end, not after.",
  },
  {
    name: "Margin per tonne, by material",
    detail:
      "Buy price vs sell price per grade, monthly trend. See which materials make money and which just make tonnage.",
  },
  {
    name: "Transport cost per tonne, per route",
    detail:
      "Spot the routes that eat the margin. One screen, sorted worst-first.",
  },
  {
    name: "Month-end pack in one click",
    detail:
      "The PDF your bank and your accountant actually read: stock, margin, cash, debtors. Done in minutes, not a week.",
  },
  {
    name: "Debtor days watch",
    detail: "Who's drifting past terms — flagged before it becomes a bad debt.",
  },
  {
    name: "LME vs your buy prices",
    detail:
      "Daily settlement against what your yard paid. Overpaying on a grade gets flagged the same day.",
  },
];

export default function SoftwarePage() {
  return (
    <div className="bg-graphite text-ink">
      {/* HERO */}
      <section className="border-b border-hairline pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-6">
            YardLedger — early access
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl text-balance">
            Your Fred data already knows where the money went. YardLedger makes
            it say so.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-secondary max-w-2xl leading-relaxed">
            CSV in, answers out. No integrations, no IT project, no training
            course. Built by the people who spent 26 years building these exact
            reports inside scrap yards.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              href="/contact?about=yardledger"
              className="inline-flex items-center justify-center h-12 px-6 bg-copper hover:bg-copper-bright text-white font-semibold transition-colors"
            >
              Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/dashboard-demo"
              className="inline-flex items-center justify-center h-12 px-6 border border-hairline hover:border-hairline-bright text-ink font-semibold transition-colors"
            >
              See the demo
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs text-ink-muted">
            Early access: shaped with founding yards, priced accordingly, no
            fake screenshots. What you see in the demo is what we build.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-hairline bg-panel py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Six things it does. All of them useful.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.name} className="border border-hairline bg-graphite p-6">
                <h3 className="text-lg font-semibold mb-3">{f.name}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-b border-hairline py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Pricing. All of it, up front.
          </h2>
          <p className="text-lg text-ink-secondary mb-12 max-w-2xl">
            One yard, one price. More seats and more sites when you need them.
            Cancel anytime.
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="border border-copper bg-panel p-8 md:col-span-1">
              <p className="font-mono text-xs uppercase tracking-wider text-copper mb-3">Per yard</p>
              <p className="text-4xl font-semibold font-mono">
                £149<span className="text-base text-ink-secondary font-sans">/month</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["1 site", "2 seats included", "All six features", "Email support from people who know Fred"].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-copper shrink-0 mt-0.5" /> {i}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?about=yardledger"
                className="mt-8 inline-flex w-full items-center justify-center h-12 px-6 bg-copper hover:bg-copper-bright text-white font-semibold transition-colors"
              >
                Get Early Access
              </Link>
            </div>

            <div className="border border-hairline bg-panel p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-3">Extras</p>
              <ul className="space-y-4 text-sm">
                <li>
                  <span className="font-mono font-semibold text-ink">+£39/month</span>
                  <span className="block text-ink-secondary mt-1">per extra seat — office, weighbridge, your accountant</span>
                </li>
                <li>
                  <span className="font-mono font-semibold text-ink">+£99/month</span>
                  <span className="block text-ink-secondary mt-1">per extra site — same reports, every yard</span>
                </li>
                <li>
                  <span className="font-mono font-semibold text-ink">2 months free</span>
                  <span className="block text-ink-secondary mt-1">pay annually</span>
                </li>
              </ul>
            </div>

            <div className="border border-hairline bg-panel p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-3">The guarantee</p>
              <p className="text-lg font-semibold leading-snug">
                3 months. If YardLedger hasn&apos;t saved you more than it cost,
                you get every penny back.
              </p>
              <p className="mt-4 text-sm text-ink-secondary leading-relaxed">
                We count the savings with you — recovered variances, corrected
                self-bills, dropped loss-making routes. If the number is smaller
                than the invoice, the invoice comes back.
              </p>
              <p className="mt-6 pt-4 border-t border-hairline text-sm text-ink-secondary">
                <span className="font-semibold text-ink">13% of every subscription goes to charity.</span>{" "}
                Not a rounding error. Named charities, published yearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Founding yards get the ear of the people building it.
          </h2>
          <p className="text-lg text-ink-secondary max-w-xl mx-auto mb-8">
            Tell us your yard, your grades, and what Fred isn&apos;t telling
            you. We&apos;ll show you what YardLedger does with it.
          </p>
          <Link
            href="/contact?about=yardledger"
            className="inline-flex items-center justify-center h-12 px-8 bg-copper hover:bg-copper-bright text-white font-semibold transition-colors"
          >
            Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

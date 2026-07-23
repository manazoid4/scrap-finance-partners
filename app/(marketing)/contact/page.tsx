import type { Metadata } from "next";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to understand what is really happening in your business? Tell us what is broken and we will tell you how to fix it. Reply within 24 hours.",
};

const painBullets = [
  "reports that take too long to produce",
  "limited visibility of true margins",
  "stock differences that are difficult to explain",
  "manual processes creating unnecessary work",
  "finance information arriving too late",
];

const howWeStart = [
  {
    title: "Understand your current position",
    body: "We learn how your yard operates, what systems you use and where you feel the biggest challenges are.",
  },
  {
    title: "Identify improvement opportunities",
    body: "We review where visibility, control or efficiency can be improved.",
  },
  {
    title: "Agree the right support",
    body: "Whether it is a focused improvement project or ongoing finance support, we tailor the approach around your needs.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-ink">
            Ready to understand what is really happening in your business?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-secondary leading-relaxed">
            From stock accuracy and margin visibility to reporting improvements and stronger financial controls, Scrap Finance Partners helps recycling businesses turn operational data into clearer decisions.
          </p>

          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-copper">
            If you feel your business has:
          </p>
          <ul className="mt-4 space-y-2 max-w-xl">
            {painBullets.map((item) => (
              <li key={item} className="text-ink-secondary pl-4 border-l border-hairline">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg text-ink font-medium">let&apos;s have a conversation.</p>
        </div>
      </section>

      {/* How we start */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-10">How we start</h2>
          <div className="space-y-10">
            {howWeStart.map((step, i) => (
              <div key={step.title} className="border-t border-hairline pt-6">
                <h3 className="text-base font-semibold text-ink">
                  <span className="font-mono text-copper mr-2">{i + 1}.</span>
                  {step.title}
                </h3>
                <p className="mt-2 text-ink-secondary leading-relaxed max-w-xl">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="container mx-auto max-w-2xl px-4 py-16 md:py-20">
          <h2 className="text-lg font-semibold text-ink mb-1">Start the conversation</h2>
          <p className="text-sm text-ink-secondary mb-8">We aim to respond within 24 hours.</p>
          <LeadForm
            source="contact"
            messageLabel="What is your biggest challenge right now?"
            messagePlaceholder="Stock not matching? Margin unclear? Reporting too slow?"
            submitLabel="Send Message"
          />
        </div>
      </section>
    </div>
  );
}

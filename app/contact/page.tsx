import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what is broken and we will tell you how to fix it. No sales pitch. Straight conversation about your yard. Reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-ink max-w-3xl">
            Get your numbers sorted.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-secondary max-w-2xl leading-relaxed">
            Tell us what is broken and we will tell you how to fix it. No sales
            pitch. No corporate nonsense. Just a straight conversation about
            your yard.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl">
            <div className="lg:col-span-3">
              <div className="border border-hairline bg-graphite">
                <div className="p-6 border-b border-hairline">
                  <h2 className="text-lg font-semibold text-ink">Send a message</h2>
                  <p className="text-sm text-ink-secondary">We reply within 24 hours. No spam.</p>
                </div>
                <div className="p-6">
                  <LeadForm source="contact" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="border border-hairline bg-panel p-6 space-y-5">
                <h2 className="text-xs font-mono uppercase tracking-wider text-ink-muted">Contact Details</h2>
                <div className="space-y-4">
                  <a href="mailto:hello@scrapfinancepartners.co.uk" className="flex items-center gap-3 group">
                    <span className="flex-shrink-0 h-9 w-9 bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-copper" />
                    </span>
                    <div>
                      <p className="text-xs text-ink-muted">Email</p>
                      <p className="text-sm font-medium text-ink group-hover:text-copper transition-colors">
                        hello@scrapfinancepartners.co.uk
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-9 w-9 bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-copper" />
                    </span>
                    <div>
                      <p className="text-xs text-ink-muted">Response Time</p>
                      <p className="text-sm font-medium text-ink">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-9 w-9 bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-copper" />
                    </span>
                    <div>
                      <p className="text-xs text-ink-muted">Where</p>
                      <p className="text-sm font-medium text-ink">Based in the Midlands. Covering all UK yards.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-hairline bg-panel p-6">
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Prefer the phone? Put your number in the form and we will
                  call you back — usually the same working day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

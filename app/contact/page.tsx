"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/20 px-3 py-1 text-xs font-mono uppercase tracking-wider text-copper mb-6">
              <MessageSquare className="h-3 w-3" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-ink">
              Get your numbers
              <br />
              <span className="text-copper">sorted</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-ink-secondary max-w-3xl leading-relaxed font-light">
              Tell us what is broken and we will tell you how to fix it. No sales pitch. No corporate nonsense. Just a straight conversation about your yard.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="border-b border-hairline">
        <div className="container px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="border border-hairline bg-graphite">
                <div className="p-6 border-b border-hairline">
                  <h2 className="text-lg font-bold text-ink">Send a message</h2>
                  <p className="text-sm text-ink-secondary">We reply within 24 hours. No spam.</p>
                </div>
                <div className="p-6">
                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-ink">Your Name</label>
                        <input
                          id="name"
                          className="flex h-11 w-full border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-ink-tertiary/50"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="text-sm font-medium text-ink">Company</label>
                        <input
                          id="company"
                          className="flex h-11 w-full border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-ink-tertiary/50"
                          placeholder="Scrap yard or recycling business name"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-11 w-full border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-ink-tertiary/50"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-sm font-medium text-ink">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          className="flex h-11 w-full border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-ink-tertiary/50"
                          placeholder="Contact number"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-sm font-medium text-ink">What is your biggest frustration right now?</label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-ink-tertiary/50 resize-none"
                        placeholder="Stock not matching? Margin unclear? Fred giving you headaches?"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-copper hover:bg-copper-bright text-white h-11 gap-2 border-0 rounded-sm">
                      Start the Conversation
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="border border-hairline bg-panel p-6 space-y-5">
                <h2 className="text-xs font-mono uppercase tracking-wider text-ink-tertiary">Contact Details</h2>
                <div className="space-y-4">
                  <a href="mailto:hello@scrapfinancepartners.co.uk" className="flex items-center gap-3 group">
                    <span className="flex-shrink-0 h-9 w-9 bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-copper" />
                    </span>
                    <div>
                      <p className="text-xs text-ink-tertiary">Email</p>
                      <p className="text-sm font-medium text-ink group-hover:text-copper transition-colors">hello@scrapfinancepartners.co.uk</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-9 w-9 bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-copper" />
                    </span>
                    <div>
                      <p className="text-xs text-ink-tertiary">Phone</p>
                      <p className="text-sm font-medium text-ink">Available on request</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-9 w-9 bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-copper" />
                    </span>
                    <div>
                      <p className="text-xs text-ink-tertiary">Response Time</p>
                      <p className="text-sm font-medium text-ink">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="border border-hairline bg-panel overflow-hidden">
                <div className="relative h-48 bg-grid">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="flex-shrink-0 h-12 w-12 bg-copper/20 border-2 border-copper flex items-center justify-center mx-auto mb-2">
                        <MapPin className="h-6 w-6 text-copper" />
                      </span>
                      <p className="text-sm font-medium text-ink">UK-Wide Service</p>
                      <p className="text-xs text-ink-secondary mt-1">Based in the Midlands, covering all UK scrap yards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

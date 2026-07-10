"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-hairline bg-panel/20">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-copper/10 border border-copper/20 px-3 py-1 text-xs font-medium text-copper mb-4">
              <MessageSquare className="h-3 w-3" />
              Get in Touch
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Get your numbers sorted.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us what is broken and we will tell you how to fix it. No sales pitch. No corporate nonsense. Just a straight conversation about your yard.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section>
        <div className="container py-12 px-4">
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="border border-hairline rounded-xl bg-card p-6 shadow-sm">
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                      <input
                        id="name"
                        className="flex h-11 w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-sm font-medium">Company</label>
                      <input
                        id="company"
                        className="flex h-11 w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50"
                        placeholder="Scrap yard or recycling business name"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-11 w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-11 w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50"
                        placeholder="Contact number"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">What is your biggest frustration right now?</label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50 resize-none"
                      placeholder="Stock not matching? Margin unclear? Fred giving you headaches?"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-copper hover:bg-copper/90 text-white h-11 gap-2">
                    Start the Conversation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info + Map */}
            <div className="lg:col-span-2 space-y-4">
              {/* Contact Details */}
              <div className="border border-hairline rounded-xl bg-card p-6 space-y-4">
                <h2 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Contact Details</h2>
                <div className="space-y-3">
                  <a href="mailto:hello@scrapfinancepartners.co.uk" className="flex items-center gap-3 group">
                    <span className="flex-shrink-0 h-9 w-9 rounded-lg bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-copper" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium group-hover:text-copper transition-colors">hello@scrapfinancepartners.co.uk</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-9 w-9 rounded-lg bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-copper" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium">Available on request</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-9 w-9 rounded-lg bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-copper" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Response Time</p>
                      <p className="text-sm font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="border border-hairline rounded-xl bg-panel/30 overflow-hidden">
                <div className="relative h-48 bg-grid">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="flex-shrink-0 h-12 w-12 rounded-full bg-copper/20 border-2 border-copper flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <MapPin className="h-6 w-6 text-copper" />
                      </span>
                      <p className="text-sm font-medium">UK-wide Service</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Remote & on-site</p>
                    </div>
                  </div>
                  {/* Decorative route lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                    <path d="M 0 120 Q 150 80 300 100 T 600 60" stroke="#b5714a" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                    <path d="M 0 160 Q 200 140 400 150 T 600 130" stroke="#b5714a" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                  </svg>
                </div>
                <div className="p-4 border-t border-hairline">
                  <p className="text-xs text-muted-foreground">
                    We work with scrap yards and recycling businesses across the UK. On-site visits available for health checks and system setup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
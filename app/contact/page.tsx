"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Get your numbers sorted.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us what is broken and we will tell you how to fix it. No sales pitch. No corporate nonsense. Just a straight conversation about your yard.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="container py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="border border-hairline p-6 bg-panel">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <input id="name" className="flex h-10 w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company</label>
                  <input id="company" className="flex h-10 w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" placeholder="Scrap yard or recycling business name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" className="flex h-10 w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <input id="phone" type="tel" className="flex h-10 w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" placeholder="Contact number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">What is your biggest frustration right now?</label>
                  <textarea id="message" className="flex min-h-[120px] w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" placeholder="Stock not matching? Margin unclear? Fred giving you headaches?"></textarea>
                </div>
                <Button type="submit" className="w-full bg-copper hover:bg-copper/90 text-white">
                  Start the Conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Or email directly: <a href="mailto:hello@scrapfinancepartners.co.uk" className="text-copper hover:underline">hello@scrapfinancepartners.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

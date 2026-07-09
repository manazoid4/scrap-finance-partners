"use client";

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container py-12 px-4 md:px-6 max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground mt-2">Get in touch to discuss your finance and reporting needs.</p>
      </div>
      <div className="border rounded-xl p-6 bg-card text-card-foreground shadow-sm">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Your Name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="How can we help?"></textarea>
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const inputClass =
  "flex h-11 w-full border border-hairline bg-panel/30 px-3 py-2 text-base transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-ink-muted/60";

export default function LeadForm({
  source,
  messageLabel = "What is your biggest frustration right now?",
  messagePlaceholder = "Stock not matching? Margin unclear? Fred giving you headaches?",
  submitLabel = "Start the Conversation",
}: {
  source: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-copper/40 bg-copper/5 p-6 text-center">
        <p className="text-lg font-semibold text-ink">Got it. We reply within 24 hours.</p>
        <p className="mt-2 text-sm text-ink-secondary">
          Or email us directly:{" "}
          <a href="mailto:hello@scrapfinancepartners.co.uk" className="text-copper">
            hello@scrapfinancepartners.co.uk
          </a>
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Honeypot — hidden from real users */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor={`${source}-name`} className="text-sm font-medium text-ink">Your Name</label>
          <input id={`${source}-name`} name="name" required className={inputClass} placeholder="Full name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={`${source}-company`} className="text-sm font-medium text-ink">Company</label>
          <input id={`${source}-company`} name="company" className={inputClass} placeholder="Yard or recycling business name" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor={`${source}-email`} className="text-sm font-medium text-ink">Email</label>
          <input id={`${source}-email`} name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={`${source}-phone`} className="text-sm font-medium text-ink">Phone</label>
          <input id={`${source}-phone`} name="phone" type="tel" className={inputClass} placeholder="Contact number" />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor={`${source}-message`} className="text-sm font-medium text-ink">{messageLabel}</label>
        <textarea
          id={`${source}-message`}
          name="message"
          required
          rows={4}
          className={`${inputClass} h-auto min-h-[120px] resize-none`}
          placeholder={messagePlaceholder}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center h-12 bg-copper hover:bg-copper-bright disabled:opacity-60 text-white font-semibold transition-colors"
      >
        {status === "sending" ? "Sending…" : submitLabel}
        {status !== "sending" && <ArrowRight className="ml-2 h-4 w-4" />}
      </button>
      {status === "error" && (
        <p className="text-sm text-red">
          Something went wrong. Email us instead:{" "}
          <a href="mailto:hello@scrapfinancepartners.co.uk" className="text-copper">
            hello@scrapfinancepartners.co.uk
          </a>
        </p>
      )}
      <p className="text-xs text-ink-muted text-center">
        No spam. No sales pressure. We reply within 24 hours.{" "}
        <a href="/privacy" className="underline hover:text-copper">Privacy</a>
      </p>
    </form>
  );
}

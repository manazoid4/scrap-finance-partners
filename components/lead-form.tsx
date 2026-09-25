"use client";

import { useId } from "react";

/** Inert portfolio preview: no submission handler, action, or network request. */
export default function LeadForm({ submitLabel = "Send enquiry" }: { submitLabel?: string }) {
  const fieldId = useId();

  return (
    <section className="border-2 border-black bg-panel" aria-label="Demo enquiry form">
      <div className="border-b-2 border-black p-5">
        <p className="font-serif text-2xl font-bold">Send an enquiry</p>
        <p id={`${fieldId}-demo`} className="mt-2 text-sm text-ink-secondary">
          Demo build — enquiries are disabled. No details are collected or sent.
        </p>
      </div>
      <fieldset disabled aria-describedby={`${fieldId}-demo`} className="min-w-0">
        <legend className="sr-only">Enquiry form preview</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <label className="border-b border-black p-4 text-sm font-bold sm:border-r">
            Your name
            <input
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              className="editorial-field mt-2"
            />
          </label>
          <label className="border-b border-black p-4 text-sm font-bold">
            Company
            <input
              name="company"
              required
              maxLength={120}
              autoComplete="organization"
              className="editorial-field mt-2"
            />
          </label>
          <label className="border-b border-black p-4 text-sm font-bold sm:col-span-2">
            Work email
            <input
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              className="editorial-field mt-2"
            />
          </label>
        </div>

        <details className="border-b border-black">
          <summary className="min-h-12 cursor-pointer px-4 py-3 text-sm font-bold">
            Add phone, priority or timing <span className="font-normal text-ink-muted">(optional)</span>
          </summary>
          <div className="border-t border-black">
            <label className="block border-b border-black p-4 text-sm font-bold">
              Telephone
              <input
                name="phone"
                type="tel"
                maxLength={40}
                autoComplete="tel"
                className="editorial-field mt-2"
              />
            </label>
            <label className="block border-b border-black p-4 text-sm font-bold">
              What needs attention first?
              <select name="challenge" className="editorial-field mt-2" defaultValue="">
                <option value="">Not sure yet</option>
                <option>Trading margin</option>
                <option>Stock confidence</option>
                <option>Haulage and transport cost</option>
                <option>Reporting and month-end</option>
                <option>Cash and working capital</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="block p-4 text-sm font-bold">
              When are you looking to act?
              <select name="timing" className="editorial-field mt-2" defaultValue="">
                <option value="">Not sure yet</option>
                <option>As soon as practical</option>
                <option>Within three months</option>
                <option>Exploring for later</option>
              </select>
            </label>
          </div>
        </details>

        <div className="border-b-2 border-black p-4">
          <label htmlFor={`${fieldId}-message`} className="block text-sm font-bold">
            What would you like us to look at?{" "}
            <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <textarea
            id={`${fieldId}-message`}
            name="message"
            maxLength={2000}
            rows={4}
            className="editorial-field mt-2 min-h-28 resize-y"
          />
        </div>

        <button
          type="button"
          disabled
          className="flex min-h-16 w-full items-center justify-between bg-copper px-5 text-left font-bold text-graphite disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{submitLabel}</span>
          <span aria-hidden>→</span>
        </button>
      </fieldset>
      <p className="border-t border-black p-4 text-xs text-ink-muted">
        Portfolio demonstration by Maz Works. <a href="/privacy" className="font-bold underline">Privacy</a>
      </p>
    </section>
  );
}

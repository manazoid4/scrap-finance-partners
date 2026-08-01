"use client";

import { useId, useRef, useState } from "react";

import { engagement } from "@/data/health-check";

/**
 * Enquiry form.
 *
 * Required: name, company, work email. Everything else is optional — the
 * qualification questions are still asked, but they never block a submission.
 *
 * The fallback email address is read from NEXT_PUBLIC_CONTACT_EMAIL and is
 * omitted entirely when unset, so the site can never publish a contact route
 * that does not exist.
 */
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

type Status = "idle" | "sending" | "sent" | "error";

export default function LeadForm({
  source,
  intent = "health-check",
  submitLabel = "Send enquiry",
}: {
  source: string;
  intent?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const startedAt = useRef<number | null>(null);
  /** Guards against double submission even if the disabled button is bypassed. */
  const inFlight = useRef(false);
  const submitted = useRef(false);
  const fieldId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current || submitted.current) return;
    inFlight.current = true;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const params = new URLSearchParams(window.location.search);
    const context = {
      page: window.location.pathname,
      referrerDomain: document.referrer ? new URL(document.referrer).hostname : "",
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      utmContent: params.get("utm_content") ?? "",
      utmTerm: params.get("utm_term") ?? "",
      startedAt: String(startedAt.current ?? 0),
    };

    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...context, source, intent }),
      });
      if (!response.ok) throw new Error("Submission failed");
      submitted.current = true;
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }

  if (status === "sent") {
    return (
      <div className="border-2 border-black bg-copper p-6 text-graphite" role="status">
        <p className="font-serif text-2xl font-bold">Enquiry received.</p>
        <p className="mt-3 text-sm">
          You will get a reply {engagement.responseWindow}. {engagement.reviewedBy}
        </p>
        <p className="mt-3 text-sm">{engagement.noObligation}</p>
      </div>
    );
  }

  return (
    <form
      className="border-2 border-black bg-panel"
      onFocusCapture={() => {
        startedAt.current ??= Date.now();
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="border-b-2 border-black p-5">
        <p className="font-serif text-2xl font-bold">Send an enquiry</p>
        <p className="mt-2 text-sm text-ink-secondary">
          Name, company and work email are all we need.
        </p>
      </div>

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
        type="submit"
        disabled={status === "sending"}
        className="flex min-h-16 w-full items-center justify-between bg-copper px-5 text-left font-bold text-graphite hover:bg-graphite hover:text-white disabled:opacity-60"
      >
        <span>{status === "sending" ? "Sending…" : submitLabel}</span>
        <span aria-hidden>→</span>
      </button>

      {/* A single persistent live region. Nesting role="alert" inside another
          live region yields two alerts and conflicting politeness. */}
      <div aria-live="assertive" aria-atomic="true">
        {status === "error" && (
          <div role="alert" className="border-t-2 border-black bg-red p-4 text-sm font-bold text-white">
            <p>We could not send the form. Your answers are still here. Please try again.</p>
            {contactEmail && (
              <p className="mt-2 font-normal">
                Or email{" "}
                <a href={`mailto:${contactEmail}`} className="font-bold underline">
                  {contactEmail}
                </a>{" "}
                instead.
              </p>
            )}
          </div>
        )}
      </div>

      <p className="border-t border-black p-4 text-xs text-ink-muted">
        You will get a reply {engagement.responseWindow}. Commercial consultancy only — not
        regulated financial advice. We only use your details to answer this enquiry.{" "}
        <a href="/privacy" className="font-bold underline">
          Privacy
        </a>
      </p>
    </form>
  );
}

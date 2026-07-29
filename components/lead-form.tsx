"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const inputClass = "flex min-h-11 w-full min-w-0 border border-hairline bg-panel px-3 py-2 text-base transition-colors placeholder:text-ink-muted focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30";

export default function LeadForm({ source, intent = "health-check", submitLabel = "Request a Health Check" }: { source: string; intent?: string; submitLabel?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const startedAt = useRef<number | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const params = new URLSearchParams(window.location.search);
    const context = { page: window.location.pathname, referrerDomain: document.referrer ? new URL(document.referrer).hostname : "", utmSource: params.get("utm_source") ?? "", utmMedium: params.get("utm_medium") ?? "", utmCampaign: params.get("utm_campaign") ?? "", utmContent: params.get("utm_content") ?? "", utmTerm: params.get("utm_term") ?? "", startedAt: String(startedAt.current ?? 0) };
    setStatus("sending");
    try {
      const response = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, ...context, source, intent }) });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") return <div className="border border-copper bg-copper/5 p-6" role="status" aria-live="polite"><p className="text-lg font-semibold text-ink">Thank you. Your request has been sent.</p><p className="mt-2 text-sm text-ink-secondary">We will review the context and respond using the details you provided.</p></div>;

  return (
    <form className="min-w-0 space-y-5" onFocusCapture={() => { startedAt.current ??= Date.now(); }} onSubmit={handleSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="min-w-0 space-y-1.5 text-sm font-medium text-ink">Your name<input name="name" required maxLength={100} autoComplete="name" className={inputClass} /></label>
        <label className="min-w-0 space-y-1.5 text-sm font-medium text-ink">Company<input name="company" required maxLength={120} autoComplete="organization" className={inputClass} /></label>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="min-w-0 space-y-1.5 text-sm font-medium text-ink">Work email<input name="email" type="email" required maxLength={254} autoComplete="email" className={inputClass} /></label>
        <label className="min-w-0 space-y-1.5 text-sm font-medium text-ink">Phone <span className="font-normal text-ink-muted">(optional)</span><input name="phone" type="tel" maxLength={40} autoComplete="tel" className={inputClass} /></label>
      </div>
      <label className="block min-w-0 space-y-1.5 text-sm font-medium text-ink">What needs attention first?
        <select name="challenge" required className={inputClass} defaultValue=""><option value="" disabled>Select one</option><option>Trading margin</option><option>Stock confidence</option><option>Haulage and transport cost</option><option>Reporting and month-end</option><option>Cash and working capital</option><option>Something else</option></select>
      </label>
      <label className="block min-w-0 space-y-1.5 text-sm font-medium text-ink">When are you looking to act?
        <select name="timing" required className={inputClass} defaultValue=""><option value="" disabled>Select one</option><option>As soon as practical</option><option>Within three months</option><option>Exploring for later</option></select>
      </label>
      <label className="block min-w-0 space-y-1.5 text-sm font-medium text-ink">Useful context <span className="font-normal text-ink-muted">(optional)</span><textarea name="message" maxLength={2000} rows={4} className={`${inputClass} min-h-28 resize-y`} /></label>
      <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 w-full items-center justify-center bg-copper px-5 font-semibold text-white transition-colors hover:bg-copper-bright disabled:opacity-60">{status === "sending" ? "Sending…" : submitLabel}{status !== "sending" && <ArrowRight className="ml-2 h-4 w-4" />}</button>
      <div aria-live="polite">{status === "error" && <p className="text-sm text-red" role="alert">The form could not be sent. Your answers are still here, so you can try again.</p>}</div>
      <p className="text-center text-xs text-ink-muted">Your details are used only to respond to this enquiry. <a href="/privacy" className="underline hover:text-copper">Privacy</a></p>
    </form>
  );
}
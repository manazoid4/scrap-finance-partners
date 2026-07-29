"use client";

import { useRef, useState } from "react";

export default function LeadForm({ source, intent = "health-check", submitLabel = "Submit Health Check request" }: { source: string; intent?: string; submitLabel?: string }) {
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
      setStatus("sent"); form.reset();
    } catch { setStatus("error"); }
  }

  if (status === "sent") return <div className="border-2 border-black bg-copper p-6 text-graphite" role="status" aria-live="polite"><p className="font-serif text-2xl font-bold">Request received.</p><p className="mt-3 text-sm">The context will be reviewed by a person before any next step is suggested.</p></div>;

  return <form className="border-2 border-black bg-panel" onFocusCapture={() => { startedAt.current ??= Date.now(); }} onSubmit={handleSubmit}>
    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
    <div className="border-b-2 border-black p-5"><p className="font-serif text-2xl font-bold">Enquiry details</p><p className="mt-2 text-sm text-ink-secondary">Required fields help establish whether the work is a sensible fit.</p></div>
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <label className="border-b border-black p-4 text-sm font-bold sm:border-r">Your name<input name="name" required maxLength={100} autoComplete="name" className="editorial-field mt-2" /></label>
      <label className="border-b border-black p-4 text-sm font-bold">Company<input name="company" required maxLength={120} autoComplete="organization" className="editorial-field mt-2" /></label>
      <label className="border-b border-black p-4 text-sm font-bold sm:border-r">Work email<input name="email" type="email" required maxLength={254} autoComplete="email" className="editorial-field mt-2" /></label>
      <label className="border-b border-black p-4 text-sm font-bold">Phone <span className="font-normal text-ink-muted">(optional)</span><input name="phone" type="tel" maxLength={40} autoComplete="tel" className="editorial-field mt-2" /></label>
    </div>
    <label className="block border-b border-black p-4 text-sm font-bold">What needs attention first?<select name="challenge" required className="editorial-field mt-2" defaultValue=""><option value="" disabled>Select one</option><option>Trading margin</option><option>Stock confidence</option><option>Haulage and transport cost</option><option>Reporting and month-end</option><option>Cash and working capital</option><option>Something else</option></select></label>
    <label className="block border-b border-black p-4 text-sm font-bold">When are you looking to act?<select name="timing" required className="editorial-field mt-2" defaultValue=""><option value="" disabled>Select one</option><option>As soon as practical</option><option>Within three months</option><option>Exploring for later</option></select></label>
    <label className="block border-b-2 border-black p-4 text-sm font-bold">Useful context <span className="font-normal text-ink-muted">(optional)</span><textarea name="message" maxLength={2000} rows={4} className="editorial-field mt-2 min-h-28 resize-y" /></label>
    <button type="submit" disabled={status === "sending"} className="flex min-h-16 w-full items-center justify-between bg-copper px-5 text-left font-bold text-graphite hover:bg-graphite hover:text-white disabled:opacity-60"><span>{status === "sending" ? "Submitting…" : submitLabel}</span><span aria-hidden>→</span></button>
    <div aria-live="polite">{status === "error" && <p className="border-t-2 border-black bg-red p-4 text-sm font-bold text-white" role="alert">The form could not be sent. Your answers remain in place so you can try again.</p>}</div>
    <p className="border-t border-black p-4 text-xs text-ink-muted">Your details are used only to respond to this enquiry. <a href="/privacy" className="font-bold underline">Privacy</a></p>
  </form>;
}
"use client";

import { useMemo, useState } from "react";

import { buildCampaignUrl } from "@/lib/campaign.mjs";

export default function CampaignLinkBuilder({ siteUrl }) {
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("partner");
  const [campaign, setCampaign] = useState("");
  const [content, setContent] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const generatedUrl = useMemo(() => {
    if (!source.trim() || !campaign.trim()) return "";
    try {
      const origin = typeof window === "undefined" ? siteUrl : window.location.origin;
      return buildCampaignUrl(origin, { source, medium, campaign, content });
    } catch {
      return "";
    }
  }, [campaign, content, medium, siteUrl, source]);

  async function copyLink() {
    if (!generatedUrl) return;
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopyStatus("Copied.");
    } catch {
      setCopyStatus("Copy the selected link manually.");
    }
  }

  return (
    <section aria-labelledby="builder-heading" className="border-y border-black bg-white">
      <div className="border-b border-black py-4">
        <h2 id="builder-heading" className="font-bold">Build an attributable link</h2>
        <p className="mt-1 max-w-2xl text-sm text-[#4d534e]">
          Create one link per real campaign or partner. Never put a person’s name, email or phone number in these fields.
        </p>
      </div>

      <div className="grid sm:grid-cols-2">
        <label className="border-b border-black p-4 text-sm font-bold sm:border-r">
          Source
          <input value={source} onChange={(event) => setSource(event.target.value)} placeholder="e.g. regional association" className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal" />
        </label>
        <label className="border-b border-black p-4 text-sm font-bold">
          Channel
          <select value={medium} onChange={(event) => setMedium(event.target.value)} className="mt-1 min-h-11 w-full border-2 border-black bg-white px-3 font-normal">
            <option value="partner">Partner</option>
            <option value="email">Email</option>
            <option value="linkedin">LinkedIn</option>
            <option value="event">Event</option>
            <option value="directory">Directory</option>
            <option value="referral">Referral</option>
          </select>
        </label>
        <label className="border-b border-black p-4 text-sm font-bold sm:border-r">
          Campaign name
          <input value={campaign} onChange={(event) => setCampaign(event.target.value)} placeholder="e.g. finance health check" className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal" />
        </label>
        <label className="border-b border-black p-4 text-sm font-bold">
          Content label <span className="font-normal text-[#4d534e]">(optional)</span>
          <input value={content} onChange={(event) => setContent(event.target.value)} placeholder="e.g. newsletter" className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal" />
        </label>
      </div>

      <div className="p-4">
        <label className="text-sm font-bold">
          Generated campaign link
          <textarea aria-label="Generated campaign link" readOnly value={generatedUrl} rows={3} placeholder="Complete source and campaign name to generate the link." className="mt-1 w-full resize-none border-2 border-black p-3 font-mono text-xs font-normal" />
        </label>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button type="button" disabled={!generatedUrl} onClick={copyLink} className="min-h-11 border-2 border-black bg-copper px-5 font-bold disabled:bg-[#c6c6bf]">
            Copy link
          </button>
          <span aria-live="polite" className="text-sm text-[#4d534e]">{copyStatus}</span>
        </div>
      </div>
    </section>
  );
}

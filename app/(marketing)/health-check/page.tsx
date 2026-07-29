import type { Metadata } from "next";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = { title: "Finance Health Check", description: "A focused commercial finance review for UK scrap and recycling businesses." };
const areas = [
  ["Trading", "Purchase, sale and the operational demands behind the apparent margin."],
  ["Stock", "The records, reconciliations and process points relied on for decisions."],
  ["Transport", "Haulage cost, route economics and the use of finite capacity."],
  ["Operations", "Yard labour, handling, space and management involvement."],
  ["Cash", "Working-capital pressure and the timing of commercial commitments."],
  ["Reporting", "Whether management information arrives in time to change an outcome."],
];

export default function HealthCheckPage() { return <>
  <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
    <div className="border-b-2 border-black p-6 sm:p-9 lg:col-span-8 lg:border-b-0 lg:border-r-2 lg:p-12">
      <div className="flex justify-between border-b border-black pb-4 font-mono text-[11px] uppercase tracking-[.08em]"><span>Diagnostic engagement</span><span>Scope agreed first</span></div>
      <h1 className="mt-12 max-w-5xl">Find the commercial questions worth fixing first.</h1>
      <p className="editorial-intro mt-8">A focused review of the information and operating demands behind margin, stock, transport, cash and management decisions.</p>
    </div>
    <aside className="bg-graphite p-6 text-white sm:p-9 lg:col-span-4 lg:p-10">
      <p className="editorial-label text-copper">Fit before scope</p>
      <p className="mt-8 font-serif text-3xl font-bold leading-tight">Built for owner-managed scrap and recycling businesses that need a clearer commercial picture.</p>
      <p className="mt-6 text-sm text-[#c6cbc5]">Fee, timing, information request and boundaries are confirmed before work begins. No savings or return is guaranteed.</p>
    </aside>
  </section>

  <section id="what-we-review" className="editorial-shell border-b-2 border-black">
    <div className="grid grid-cols-1 border-b-2 border-black md:grid-cols-12"><div className="border-b border-black p-5 md:col-span-3 md:border-b-0 md:border-r md:p-8"><p className="editorial-label">Review scope</p></div><div className="p-5 md:col-span-9 md:p-8"><h2>Six connected areas. One commercial picture.</h2></div></div>
    <div className="editorial-index">{areas.map(([title, copy]) => <article key={title} className="grid grid-cols-1 md:grid-cols-12"><h3 className="p-5 md:col-span-3 md:border-r md:border-black md:p-7">{title}</h3><p className="border-t border-black p-5 text-ink-secondary md:col-span-9 md:border-t-0 md:p-7">{copy}</p></article>)}</div>
  </section>

  <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-2">
    <div className="border-b-2 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10"><h2>What the review produces</h2><ul className="mt-8 editorial-index">{["A concise view of the material commercial issues found.", "A practical order of action.", "Clear boundaries between internal fixes and specialist work.", "A direct discussion of sensible next steps."].map((item) => <li key={item} className="py-4 font-semibold">{item}</li>)}</ul></div>
    <div className="p-6 sm:p-8 lg:p-10"><h2>What the review needs</h2><p className="editorial-intro mt-8">A working conversation and the relevant information already used to manage trading, stock, transport and finance. The request is tailored to the agreed scope and available records.</p></div>
  </section>

  <section id="request" className="editorial-shell grid grid-cols-1 bg-graphite lg:grid-cols-12">
    <div className="border-b border-[#4d534e] p-6 text-white sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10"><p className="editorial-label text-copper">Diagnostic gateway</p><h2 className="mt-8 text-white">Start with the decision you cannot currently trust.</h2><p className="mt-6 max-w-lg text-[#c6cbc5]">The enquiry is reviewed by a person. If a Health Check is not the right next step, we will say so.</p></div>
    <div className="p-4 sm:p-8 lg:col-span-7 lg:p-10"><LeadForm source="health-check-page" /></div>
  </section>
</>; }
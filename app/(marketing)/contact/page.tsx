import type { Metadata } from "next";

import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Explore the enquiry flow in this portfolio demo by Maz Works.",
};

const nextSteps = [
  "The enquiry layout shows the information a lead-capture flow would request.",
  "The fields and send button are disabled in this demo.",
  "No enquiry is stored or sent to a business inbox.",
  "For questions about the website build, contact Maz Works directly.",
];

export default function ContactPage() {
  return (
    <>
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r-2 lg:p-12">
          <h1 className="seq seq-1">Which decision is hardest to trust right now?</h1>
          <p className="seq seq-2 editorial-intro mt-8">
            A preview of the enquiry flow built for this site. This is a portfolio demo;
            the form is disabled and no details are collected or sent.
          </p>
        </div>

        <dl className="seq seq-3 lg:col-span-5">
          <div className="border-b border-black p-6 sm:p-8">
            <dt className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
              Portfolio demonstration
            </dt>
            <dd className="mt-3 font-serif text-2xl font-bold leading-tight">
              Demo build — enquiries are disabled.
            </dd>
          </div>
          <div className="border-b border-black p-6 sm:p-8">
            <dt className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
              What you can explore
            </dt>
            <dd className="mt-3 text-ink-secondary">The form layout and optional qualification questions.</dd>
          </div>
          <div className="p-6 sm:p-8">
            <dt className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
              Questions about this website build?
            </dt>
            <dd className="mt-3">
              <a href="mailto:manazoid4@gmail.com" className="inline-flex min-h-11 items-center break-all border-b-2 border-copper-dim font-bold hover:text-copper-dim">
                manazoid4@gmail.com
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="editorial-shell grid grid-cols-1 bg-graphite lg:grid-cols-12">
        <div className="border-b border-[#4d534e] p-6 text-white sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
          <h2 className="text-white">How this demo works</h2>
          <ol className="mt-7 divide-y divide-[#4d534e] border-t border-[#4d534e]">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex gap-4 py-4 text-[#c6cbc5]">
                <span className="font-mono text-sm font-bold text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 border-t border-[#4d534e] pt-6 text-sm text-[#c6cbc5]">
            This preview is not a booking service.
          </p>
        </div>
        <div className="p-4 sm:p-8 lg:col-span-7 lg:p-10">
          <LeadForm submitLabel="Send enquiry" />
        </div>
      </section>
    </>
  );
}

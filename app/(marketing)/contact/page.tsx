import type { Metadata } from "next";

import LeadForm from "@/components/lead-form";
import { founderContact, hasApprovedContact } from "@/data/founder";
import { engagement } from "@/data/health-check";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a commercial finance conversation. Three fields, a stated response time, and a person on the other end.",
};

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

const nextSteps = [
  "Your enquiry is read by the person who would do the work.",
  `You get a reply ${engagement.responseWindow} — a real one, not an automated acknowledgement.`,
  "If a Health Check fits, we agree scope and a fixed fee in writing before anything starts.",
  "If it does not fit, we say so and tell you what would be more use.",
];

export default function ContactPage() {
  const approved = hasApprovedContact() ? founderContact : null;
  const email = approved?.email ?? contactEmail;

  return (
    <>
      <section className="editorial-shell grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r-2 lg:p-12">
          <h1 className="seq seq-1">Which decision is hardest to trust right now?</h1>
          <p className="seq seq-2 editorial-intro mt-8">
            That is the only thing worth putting in the box. Name, company and work email is all
            the form requires — everything else is optional.
          </p>
        </div>

        <dl className="seq seq-3 lg:col-span-5">
          <div className="border-b border-black p-6 sm:p-8">
            <dt className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
              When you will hear back
            </dt>
            <dd className="mt-3 font-serif text-2xl font-bold leading-tight">
              You get a reply {engagement.responseWindow}.
            </dd>
          </div>
          <div className="border-b border-black p-6 sm:p-8">
            <dt className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
              Who reads it
            </dt>
            <dd className="mt-3 text-ink-secondary">{engagement.reviewedBy}</dd>
          </div>
          <div className="p-6 sm:p-8">
            <dt className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
              Prefer not to use a form?
            </dt>
            <dd className="mt-3">
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center border-b-2 border-copper-dim font-bold hover:text-copper-dim"
                >
                  {email}
                </a>
              ) : (
                <span className="text-ink-secondary">
                  A direct email address is published here once confirmed. Until then the form is
                  the fastest route, and it reaches the same person.
                </span>
              )}
              {approved?.telephone && approved.telephoneHref && (
                <>
                  <br />
                  <a
                    href={approved.telephoneHref}
                    className="mt-2 inline-flex min-h-11 items-center border-b-2 border-copper-dim font-bold hover:text-copper-dim"
                  >
                    {approved.telephone}
                  </a>
                </>
              )}
            </dd>
          </div>
        </dl>
      </section>

      <section className="editorial-shell grid grid-cols-1 bg-graphite lg:grid-cols-12">
        <div className="border-b border-[#4d534e] p-6 text-white sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
          <h2 className="text-white">What happens next</h2>
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
            {engagement.noObligation}
          </p>
        </div>
        <div className="p-4 sm:p-8 lg:col-span-7 lg:p-10">
          <LeadForm source="contact-page" intent="general" submitLabel="Send enquiry" />
        </div>
      </section>
    </>
  );
}

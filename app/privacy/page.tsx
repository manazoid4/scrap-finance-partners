import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Scrap Finance Partners handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 text-ink">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-ink-secondary leading-relaxed text-base">
        <p className="font-mono text-xs text-ink-muted">Last updated: 13 July 2026</p>

        <h2 className="text-xl font-semibold text-ink pt-4">Who we are</h2>
        <p>
          Scrap Finance Partners provides finance and business support services
          to UK scrap metal, waste and recycling businesses. Contact:{" "}
          <a href="mailto:hello@scrapfinancepartners.co.uk" className="text-copper hover:text-copper-bright">
            hello@scrapfinancepartners.co.uk
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">What we collect</h2>
        <p>
          When you use our contact or health check forms we collect the details
          you give us: your name, company name, email address, phone number and
          your message. Nothing else. We do not buy data about you and we do
          not use marketing cookies.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">Why we collect it</h2>
        <p>
          One reason: to reply to your enquiry and, if you become a client, to
          deliver the work. The lawful basis is legitimate interest (responding
          to a business enquiry you initiated) and, later, contract.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">Where it goes</h2>
        <p>
          Form submissions are emailed to us via Resend (our email provider)
          and stored in our business mailbox. We use privacy-friendly,
          cookieless analytics to count page visits. We do not sell, rent or
          share your details with anyone else.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">How long we keep it</h2>
        <p>
          Enquiries that go nowhere are deleted within 12 months. Client
          records are kept for as long as the engagement requires and as UK
          law demands.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">Your rights</h2>
        <p>
          Under UK GDPR you can ask us what we hold about you, ask us to
          correct it, or ask us to delete it. Email us and we will sort it —
          usually within a few days, always within a month. If you are not
          happy with how we handle your data you can complain to the ICO
          (ico.org.uk).
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";

export const metadata = { title: "Workspace guide | Client workspace" };

export default function WorkspaceGuidePage() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-[-.03em]">How to use the workspace</h1>
      <p className="mt-2 max-w-2xl text-sm text-[#4d534e]">
        Use this process for genuine prospects only. Never add invented contacts, activity or results.
      </p>

      <ol className="mt-6 border-2 border-black bg-white">
        <li className="border-b border-black p-5">
          <strong>1. Add and verify the lead.</strong>
          <p className="mt-1 text-sm text-[#4d534e]">Record the company, a real email or phone number, where the details came from and the contact basis.</p>
        </li>
        <li className="border-b border-black p-5">
          <strong>2. Set the next action.</strong>
          <p className="mt-1 text-sm text-[#4d534e]">Choose the current status, add useful notes and set a follow-up date. Update it after every genuine interaction.</p>
        </li>
        <li className="border-b border-black p-5">
          <strong>3. Prepare the message.</strong>
          <p className="mt-1 text-sm text-[#4d534e]">Start from an approved template, personalise it for the real company and check the subject and recipient before saving.</p>
        </li>
        <li className="p-5">
          <strong>4. Respect objections and opt-outs.</strong>
          <p className="mt-1 text-sm text-[#4d534e]">Stop follow-ups immediately after an objection, opt-out or bounce. Mark the lead suppressed so it cannot be contacted again.</p>
        </li>
      </ol>

      <section className="mt-6 border-2 border-black bg-[#fff4df] p-5">
        <h2 className="font-bold">Before sending</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          <li>Confirm the email belongs to the real business contact.</li>
          <li>Record the source and contact basis.</li>
          <li>Read the complete message and remove anything unverified.</li>
          <li>Stop immediately after an opt-out, objection or hard bounce.</li>
        </ul>
      </section>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/account/leads" className="border-2 border-black bg-copper px-5 py-3 font-bold">Open leads</Link>
        <Link href="/account/templates" className="border-2 border-black bg-white px-5 py-3 font-bold">Review templates</Link>
      </div>
    </>
  );
}

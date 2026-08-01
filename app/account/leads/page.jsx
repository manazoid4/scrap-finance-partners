import Link from "next/link";

import { addLead, deleteLead, updateLeadStatus } from "../actions";
import { getWorkspace } from "@/lib/workspace-server";

const statuses = ["new", "qualified", "contacted", "replied", "meeting", "won", "lost", "suppressed"];

export const metadata = { title: "Leads | Client workspace" };

export default async function LeadsPage({ searchParams }) {
  const params = await searchParams;
  const workspace = await getWorkspace();
  let leads = [];
  if (workspace.configured) {
    const { data } = await workspace.supabase
      .from("leads")
      .select("id, company_name, contact_name, email, phone, source, consent_basis, status, notes, next_follow_up_at, updated_at")
      .eq("organization_id", workspace.organization.id)
      .order("updated_at", { ascending: false });
    leads = data ?? [];
  }

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><h1 className="text-3xl font-bold tracking-[-.03em]">Leads</h1><p className="mt-1 max-w-2xl text-sm text-[#4d534e]">Keep every genuine prospect, contact route, source, permission and next action in one place.</p></div>
        <span className="border border-black bg-white px-3 py-1 font-mono text-xs">{leads.length} real record{leads.length === 1 ? "" : "s"}</span>
      </div>
      {params?.error && <p role="alert" className="mt-5 border-2 border-red-900 bg-red-50 p-4 text-sm text-red-950">{params.error}</p>}
      {params?.notice && <p role="status" className="mt-5 border-2 border-[#815322] bg-[#fff4df] p-4 text-sm">{params.notice}</p>}

      <section className="mt-6 flex flex-wrap items-center justify-between gap-4 border-2 border-black bg-white p-5">
        <div>
          <h2 className="font-bold">New to the workspace?</h2>
          <p className="mt-1 max-w-2xl text-sm text-[#4d534e]">Follow the verification, follow-up and opt-out process before contacting a lead.</p>
        </div>
        <Link href="/account/guide" className="border-2 border-black bg-graphite px-4 py-2 text-sm font-bold text-white">Read the guide</Link>
      </section>

      <details className="mt-6 border-2 border-black bg-white" open={leads.length === 0}>
        <summary className="cursor-pointer px-5 py-4 font-bold">Add a verified lead</summary>
        <form action={addLead} className="grid gap-4 border-t-2 border-black p-5 sm:grid-cols-2 xl:grid-cols-3">
          <label className="text-sm font-bold">Company<input name="companyName" required disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
          <label className="text-sm font-bold">Contact name<input name="contactName" disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
          <label className="text-sm font-bold">Work email<input name="email" type="email" disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
          <label className="text-sm font-bold">Phone<input name="phone" type="tel" disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
          <label className="text-sm font-bold">Website<input name="website" type="url" disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
          <label className="text-sm font-bold">Source<input name="source" disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
          <label className="text-sm font-bold">Contact basis<select name="consentBasis" disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black bg-white px-3 font-normal disabled:bg-[#e5e5e0]"><option value="not_recorded">Not recorded</option><option value="consent">Consent</option><option value="legitimate_interest">Legitimate interest</option><option value="existing_customer">Existing customer</option></select></label>
          <label className="text-sm font-bold">Next follow-up<input name="nextFollowUp" type="datetime-local" disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
          <label className="text-sm font-bold sm:col-span-2 xl:col-span-3">Notes<textarea name="notes" rows={3} disabled={!workspace.configured} className="mt-1 w-full border-2 border-black p-3 font-normal disabled:bg-[#e5e5e0]" /></label>
          <button disabled={!workspace.configured} className="min-h-11 border-2 border-black bg-copper px-4 font-bold disabled:bg-[#c6c6bf]">Save lead</button>
        </form>
      </details>

      <section className="mt-6 overflow-hidden border-2 border-black bg-white">
        {leads.length === 0 ? (
          <div className="px-6 py-12 text-center"><h2 className="text-xl font-bold">No leads yet</h2><p className="mx-auto mt-2 max-w-lg text-sm text-[#4d534e]">Add the first verified company above. Nothing is preloaded, and no activity is invented.</p></div>
        ) : (
          <div className="overflow-x-auto"><table className="w-full min-w-[880px] border-collapse text-left text-sm"><thead className="bg-graphite text-white"><tr><th className="px-4 py-3">Company</th><th className="px-4 py-3">Contact</th><th className="px-4 py-3">Source / basis</th><th className="px-4 py-3">Follow-up</th><th className="px-4 py-3">Status</th><th className="px-4 py-3"><span className="sr-only">Actions</span></th></tr></thead><tbody>{leads.map((lead) => <tr key={lead.id} className="border-t border-black align-top"><td className="px-4 py-4 font-bold">{lead.company_name}{lead.notes && <p className="mt-1 max-w-xs font-normal text-[#4d534e]">{lead.notes}</p>}</td><td className="px-4 py-4">{lead.contact_name && <div>{lead.contact_name}</div>}{lead.email && <a className="block underline" href={"mailto:" + lead.email}>{lead.email}</a>}{lead.phone && <a className="block underline" href={"tel:" + lead.phone}>{lead.phone}</a>}</td><td className="px-4 py-4"><div>{lead.source || "Not recorded"}</div><div className="mt-1 font-mono text-xs">{lead.consent_basis.replaceAll("_", " ")}</div></td><td className="px-4 py-4">{lead.next_follow_up_at ? new Date(lead.next_follow_up_at).toLocaleString("en-GB") : "Not set"}</td><td className="px-4 py-4"><form action={updateLeadStatus} className="flex gap-2"><input type="hidden" name="leadId" value={lead.id} /><select name="status" defaultValue={lead.status} className="min-h-10 border border-black bg-white px-2">{statuses.map((status) => <option key={status}>{status}</option>)}</select><button className="font-bold underline">Save</button></form></td><td className="px-4 py-4"><form action={deleteLead}><input type="hidden" name="leadId" value={lead.id} /><button className="text-red-900 underline">Delete</button></form></td></tr>)}</tbody></table></div>
        )}
      </section>
    </>
  );
}

import EmailComposer from "@/components/email-composer";
import { getWorkspace } from "@/lib/workspace-server";

export const metadata = { title: "Email & send log | Client workspace" };

export default async function OutboxPage({ searchParams }) {
  const params = await searchParams;
  const workspace = await getWorkspace();
  let leads = [];
  let templates = [];
  let messages = [];
  if (workspace.configured) {
    const [leadResult, templateResult, messageResult] = await Promise.all([
      workspace.supabase.from("leads").select("id, company_name, email").eq("organization_id", workspace.organization.id).neq("status", "suppressed").order("company_name"),
      workspace.supabase.from("email_templates").select("id, name, subject, body").eq("organization_id", workspace.organization.id).eq("is_active", true).order("name"),
      workspace.supabase.from("outbound_messages").select("id, recipient_email, subject, status, created_at, sent_at, error_message").eq("organization_id", workspace.organization.id).order("created_at", { ascending: false }).limit(100),
    ]);
    leads = leadResult.data ?? [];
    templates = templateResult.data ?? [];
    messages = messageResult.data ?? [];
  }
  const liveSending = process.env.SEND_EMAILS_ENABLED === "true";
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-3xl font-bold tracking-[-.03em]">Email &amp; send log</h1><p className="mt-1 max-w-2xl text-sm text-[#4d534e]">Review the recipient, contact basis and message before delivery. Every attempt is logged.</p></div><span className={"border border-black px-3 py-1 font-mono text-xs " + (liveSending ? "bg-green-100" : "bg-[#fff4df]")}>{liveSending ? "Live sending enabled" : "Draft-only mode"}</span></div>
      {params?.error && <p role="alert" className="mt-5 border-2 border-red-900 bg-red-50 p-4 text-sm text-red-950">{params.error}</p>}
      {params?.notice && <p role="status" className="mt-5 border-2 border-[#815322] bg-[#fff4df] p-4 text-sm">{params.notice}</p>}
      <div className="mt-6"><EmailComposer leads={leads} templates={templates} enabled={workspace.configured} /></div>
      <section className="mt-6 overflow-hidden border-2 border-black bg-white">
        <div className="border-b-2 border-black px-5 py-4"><h2 className="font-bold">Message history</h2></div>
        {messages.length === 0 ? <div className="px-6 py-12 text-center"><h3 className="text-xl font-bold">No messages yet</h3><p className="mt-2 text-sm text-[#4d534e]">Drafts and genuine delivery attempts will appear here.</p></div> : <div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-graphite text-white"><tr><th className="px-4 py-3">Recipient</th><th className="px-4 py-3">Subject</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Created</th></tr></thead><tbody>{messages.map((message) => <tr key={message.id} className="border-t border-black"><td className="px-4 py-4">{message.recipient_email}</td><td className="px-4 py-4 font-bold">{message.subject}{message.error_message && <p className="mt-1 font-normal text-red-900">{message.error_message}</p>}</td><td className="px-4 py-4 font-mono text-xs">{message.status}</td><td className="px-4 py-4">{new Date(message.sent_at || message.created_at).toLocaleString("en-GB")}</td></tr>)}</tbody></table></div>}
      </section>
    </>
  );
}

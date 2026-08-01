import { addTemplate, deleteTemplate } from "../actions";
import { getWorkspace } from "@/lib/workspace-server";

export const metadata = { title: "Email templates | Client workspace" };

export default async function TemplatesPage({ searchParams }) {
  const params = await searchParams;
  const workspace = await getWorkspace();
  let templates = [];
  if (workspace.configured) {
    const { data } = await workspace.supabase.from("email_templates").select("id, name, subject, body, is_active, updated_at").eq("organization_id", workspace.organization.id).order("updated_at", { ascending: false });
    templates = data ?? [];
  }
  return (
    <>
      <h1 className="text-3xl font-bold tracking-[-.03em]">Email templates</h1>
      <p className="mt-1 max-w-2xl text-sm text-[#4d534e]">Write reusable messages once. Personal details are inserted only when you choose a real lead.</p>
      {params?.error && <p role="alert" className="mt-5 border-2 border-red-900 bg-red-50 p-4 text-sm text-red-950">{params.error}</p>}
      {params?.notice && <p role="status" className="mt-5 border-2 border-[#815322] bg-[#fff4df] p-4 text-sm">{params.notice}</p>}
      <form action={addTemplate} className="mt-6 grid gap-4 border-2 border-black bg-white p-5">
        <label className="text-sm font-bold">Template name<input name="name" required disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
        <label className="text-sm font-bold">Subject<input name="subject" required disabled={!workspace.configured} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
        <label className="text-sm font-bold">Message<textarea name="body" rows={7} required disabled={!workspace.configured} className="mt-1 w-full border-2 border-black p-3 font-normal disabled:bg-[#e5e5e0]" /></label>
        <p className="font-mono text-xs">Available fields: {"{{contact_name}}"}, {"{{company_name}}"}, {"{{email}}"}, {"{{phone}}"}</p>
        <button disabled={!workspace.configured} className="min-h-11 w-fit border-2 border-black bg-copper px-5 font-bold disabled:bg-[#c6c6bf]">Save template</button>
      </form>
      <section className="mt-6 border-2 border-black bg-white">
        {templates.length === 0 ? <div className="px-6 py-12 text-center"><h2 className="text-xl font-bold">No templates yet</h2><p className="mt-2 text-sm text-[#4d534e]">Create only the messages you intend to review and use.</p></div> : templates.map((template) => <article key={template.id} className="border-t border-black p-5 first:border-t-0"><div className="flex flex-wrap justify-between gap-4"><div><h2 className="font-bold">{template.name}</h2><p className="mt-1 text-sm">{template.subject}</p></div><form action={deleteTemplate}><input type="hidden" name="templateId" value={template.id} /><button className="text-sm text-red-900 underline">Delete</button></form></div><pre className="mt-4 whitespace-pre-wrap font-sans text-sm text-[#4d534e]">{template.body}</pre></article>)}
      </section>
    </>
  );
}

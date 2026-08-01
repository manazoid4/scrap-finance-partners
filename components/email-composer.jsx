"use client";

import { useState } from "react";

import { sendEmail } from "@/app/account/actions";

export default function EmailComposer({ leads, templates, enabled }) {
  const [templateId, setTemplateId] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function chooseTemplate(event) {
    const id = event.target.value;
    setTemplateId(id);
    const template = templates.find((item) => item.id === id);
    setSubject(template?.subject ?? "");
    setBody(template?.body ?? "");
  }

  const disabled = !enabled || leads.length === 0;
  return (
    <form action={sendEmail} className="grid gap-4 border-2 border-black bg-white p-5">
      <label className="text-sm font-bold">Lead<select name="leadId" required disabled={disabled} className="mt-1 min-h-11 w-full border-2 border-black bg-white px-3 font-normal disabled:bg-[#e5e5e0]"><option value="">Choose a real lead</option>{leads.map((lead) => <option key={lead.id} value={lead.id}>{lead.company_name}{lead.email ? " — " + lead.email : " — no email"}</option>)}</select></label>
      <label className="text-sm font-bold">Template<select name="templateId" value={templateId} onChange={chooseTemplate} disabled={!enabled} className="mt-1 min-h-11 w-full border-2 border-black bg-white px-3 font-normal disabled:bg-[#e5e5e0]"><option value="">Write without a template</option>{templates.map((template) => <option key={template.id} value={template.id}>{template.name}</option>)}</select></label>
      <label className="text-sm font-bold">Subject<input name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required disabled={disabled} className="mt-1 min-h-11 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
      <label className="text-sm font-bold">Message<textarea name="body" value={body} onChange={(event) => setBody(event.target.value)} rows={9} required disabled={disabled} className="mt-1 w-full border-2 border-black p-3 font-normal disabled:bg-[#e5e5e0]" /></label>
      {leads.length === 0 && <p className="text-sm">Add a lead with an email address before composing a message.</p>}
      <div className="flex flex-wrap gap-3"><button name="intent" value="draft" disabled={disabled} className="min-h-11 border-2 border-black bg-white px-5 font-bold disabled:bg-[#e5e5e0]">Save draft</button><button name="intent" value="send" disabled={disabled} className="min-h-11 border-2 border-black bg-copper px-5 font-bold disabled:bg-[#c6c6bf]">Send now</button></div>
    </form>
  );
}

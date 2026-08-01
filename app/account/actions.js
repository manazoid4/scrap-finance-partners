"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { normaliseLead, renderTemplate } from "@/lib/workspace.mjs";
import { requireWorkspace } from "@/lib/workspace-server";

function field(formData, name) {
  return String(formData.get(name) ?? "").trim();
}

function notice(path, message, kind = "notice") {
  redirect(path + "?" + kind + "=" + encodeURIComponent(message));
}

export async function addLead(formData) {
  const { supabase, userId, organization } = await requireWorkspace();
  let lead;
  try {
    lead = normaliseLead({
      companyName: field(formData, "companyName"),
      email: field(formData, "email"),
      phone: field(formData, "phone"),
    });
  } catch (error) {
    notice("/account/leads", error.message, "error");
  }

  const { error } = await supabase.from("leads").insert({
    organization_id: organization.id,
    company_name: lead.companyName,
    contact_name: field(formData, "contactName") || null,
    email: lead.email || null,
    phone: lead.phone || null,
    website: field(formData, "website") || null,
    source: field(formData, "source") || null,
    consent_basis: field(formData, "consentBasis") || "not_recorded",
    notes: field(formData, "notes") || null,
    next_follow_up_at: field(formData, "nextFollowUp") || null,
    created_by: userId,
  });
  if (error) notice("/account/leads", "The lead could not be saved.", "error");
  revalidatePath("/account/leads");
  notice("/account/leads", "Lead saved.");
}

export async function updateLeadStatus(formData) {
  const { supabase, organization } = await requireWorkspace();
  const { error } = await supabase
    .from("leads")
    .update({ status: field(formData, "status"), updated_at: new Date().toISOString() })
    .eq("id", field(formData, "leadId"))
    .eq("organization_id", organization.id);
  if (error) notice("/account/leads", "Status could not be updated.", "error");
  revalidatePath("/account/leads");
}

export async function deleteLead(formData) {
  const { supabase, organization } = await requireWorkspace();
  const { error } = await supabase
    .from("leads")
    .delete()
    .eq("id", field(formData, "leadId"))
    .eq("organization_id", organization.id);
  if (error) notice("/account/leads", "Lead could not be deleted.", "error");
  revalidatePath("/account/leads");
}

export async function addTemplate(formData) {
  const { supabase, userId, organization } = await requireWorkspace();
  const name = field(formData, "name");
  const subject = field(formData, "subject");
  const body = field(formData, "body");
  if (name.length < 2 || subject.length < 2 || body.length < 10) {
    notice("/account/templates", "Complete the template name, subject and message.", "error");
  }
  const { error } = await supabase.from("email_templates").insert({
    organization_id: organization.id,
    name,
    subject,
    body,
    created_by: userId,
  });
  if (error) notice("/account/templates", "The template could not be saved.", "error");
  revalidatePath("/account/templates");
  notice("/account/templates", "Template saved.");
}

export async function deleteTemplate(formData) {
  const { supabase, organization } = await requireWorkspace();
  const { error } = await supabase
    .from("email_templates")
    .delete()
    .eq("id", field(formData, "templateId"))
    .eq("organization_id", organization.id);
  if (error) notice("/account/templates", "Template could not be deleted.", "error");
  revalidatePath("/account/templates");
}

export async function sendEmail(formData) {
  const { supabase, userId, organization } = await requireWorkspace();
  const leadId = field(formData, "leadId");
  const templateId = field(formData, "templateId") || null;
  const subjectInput = field(formData, "subject");
  const bodyInput = field(formData, "body");
  const intent = field(formData, "intent");

  const { data: lead } = await supabase
    .from("leads")
    .select("id, company_name, contact_name, email, phone, consent_basis, status")
    .eq("id", leadId)
    .eq("organization_id", organization.id)
    .single();

  if (!lead?.email) notice("/account/outbox", "Choose a lead with an email address.", "error");
  if (lead.consent_basis === "not_recorded") {
    notice("/account/outbox", "Record the contact basis before creating outreach.", "error");
  }

  const email = lead.email.toLowerCase();
  const domain = email.split("@")[1];
  const [{ data: emailSuppression }, { data: domainSuppression }] = await Promise.all([
    supabase.from("suppressions").select("id").eq("organization_id", organization.id).eq("email", email).maybeSingle(),
    supabase.from("suppressions").select("id").eq("organization_id", organization.id).eq("domain", domain).maybeSingle(),
  ]);
  if (emailSuppression || domainSuppression || lead.status === "suppressed") {
    notice("/account/outbox", "This recipient is suppressed and cannot be contacted.", "error");
  }

  const templateLead = {
    companyName: lead.company_name,
    contactName: lead.contact_name,
    email: lead.email,
    phone: lead.phone,
  };
  const subject = renderTemplate(subjectInput, templateLead);
  const body = renderTemplate(bodyInput, templateLead);
  if (subject.length < 2 || body.length < 10) {
    notice("/account/outbox", "Complete the subject and message.", "error");
  }

  const liveEnabled = process.env.SEND_EMAILS_ENABLED === "true";
  const shouldSend = intent === "send" && liveEnabled;
  const { data: message, error: insertError } = await supabase
    .from("outbound_messages")
    .insert({
      organization_id: organization.id,
      lead_id: lead.id,
      template_id: templateId,
      recipient_email: email,
      subject,
      body,
      status: shouldSend ? "approved" : "draft",
      created_by: userId,
    })
    .select("id")
    .single();
  if (insertError) notice("/account/outbox", "The message could not be saved.", "error");

  if (!shouldSend) {
    revalidatePath("/account/outbox");
    notice("/account/outbox", intent === "send" ? "Saved as draft because live sending is disabled." : "Draft saved.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM || process.env.OUTREACH_FROM_EMAIL;
  if (!apiKey || !from) notice("/account/outbox", "Email delivery is not configured.", "error");

  const privacyUrl = process.env.OUTREACH_PRIVACY_URL || ((process.env.NEXT_PUBLIC_SITE_URL ?? "") + "/privacy");
  const footer = "\n\n—\nScrap Finance Partners\nPrivacy: " + privacyUrl + "\nReply “stop” to opt out.";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [email], subject, text: body + footer }),
  });
  const result = await response.json().catch(() => ({}));
  await supabase.from("outbound_messages").update({
    status: response.ok ? "sent" : "failed",
    sent_at: response.ok ? new Date().toISOString() : null,
    provider_message_id: response.ok ? result.id ?? null : null,
    error_message: response.ok ? null : "Provider returned " + response.status,
    updated_at: new Date().toISOString(),
  }).eq("id", message.id).eq("organization_id", organization.id);

  revalidatePath("/account/outbox");
  notice("/account/outbox", response.ok ? "Email sent and logged." : "Delivery failed; review the send log.", response.ok ? "notice" : "error");
}

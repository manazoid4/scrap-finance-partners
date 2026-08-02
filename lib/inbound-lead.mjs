const contextLabels = [
  ["Challenge", "challenge"],
  ["Timing", "timing"],
  ["Message", "message"],
  ["Page", "page"],
  ["Referrer", "referrerDomain"],
  ["UTM source", "utmSource"],
  ["UTM medium", "utmMedium"],
  ["UTM campaign", "utmCampaign"],
  ["UTM content", "utmContent"],
  ["UTM term", "utmTerm"],
];

export function buildInboundLead(body, organizationId, createdBy, now = new Date()) {
  const captured = now.toISOString();
  const context = contextLabels
    .filter(([, key]) => body[key])
    .map(([label, key]) => `${label}: ${body[key]}`)
    .join("\n");

  return {
    organization_id: organizationId,
    company_name: body.company,
    contact_name: body.name,
    email: body.email.toLowerCase(),
    phone: body.phone || null,
    source: `Website — ${body.source || body.intent || "enquiry"}`,
    consent_basis: "direct_enquiry",
    status: "new",
    notes: [`Website enquiry received ${captured}.`, context].filter(Boolean).join("\n"),
    next_follow_up_at: new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(),
    created_by: createdBy,
  };
}

export function mergeInboundLead(existing, incoming) {
  const existingFollowUp = existing.next_follow_up_at ? new Date(existing.next_follow_up_at) : null;
  const incomingFollowUp = new Date(incoming.next_follow_up_at);
  const nextFollowUp = existingFollowUp && existingFollowUp < incomingFollowUp
    ? existingFollowUp.toISOString()
    : incoming.next_follow_up_at;

  return {
    contact_name: incoming.contact_name,
    phone: incoming.phone || existing.phone || null,
    source: incoming.source,
    consent_basis: "direct_enquiry",
    notes: [incoming.notes, existing.notes].filter(Boolean).join("\n\n---\n\n"),
    next_follow_up_at: nextFollowUp,
    updated_at: new Date().toISOString(),
  };
}

export async function processLeadSubmission(body, { persist, notify }) {
  await persist(body);
  try {
    await notify(body);
    return { ok: true, notificationSent: true };
  } catch {
    return { ok: true, notificationSent: false };
  }
}

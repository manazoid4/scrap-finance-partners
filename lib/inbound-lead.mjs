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
    utm_source: body.utmSource || null,
    utm_medium: body.utmMedium || null,
    utm_campaign: body.utmCampaign || null,
    utm_content: body.utmContent || null,
    utm_term: body.utmTerm || null,
    landing_page: body.page || null,
    referrer_domain: body.referrerDomain || null,
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
    utm_source: incoming.utm_source || existing.utm_source || null,
    utm_medium: incoming.utm_medium || existing.utm_medium || null,
    utm_campaign: incoming.utm_campaign || existing.utm_campaign || null,
    utm_content: incoming.utm_content || existing.utm_content || null,
    utm_term: incoming.utm_term || existing.utm_term || null,
    landing_page: incoming.landing_page || existing.landing_page || null,
    referrer_domain: incoming.referrer_domain || existing.referrer_domain || null,
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

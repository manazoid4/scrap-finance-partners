import { NextResponse } from "next/server";

const limits: Record<string, number> = { name: 100, company: 120, email: 254, phone: 40, challenge: 120, timing: 80, message: 2000, source: 100, intent: 100, page: 300, referrerDomain: 255, utmSource: 100, utmMedium: 100, utmCampaign: 150, utmContent: 150, utmTerm: 150 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) return NextResponse.json({ error: "Request too large" }, { status: 413 });

  let raw: Record<string, unknown>;
  try { raw = await request.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  if (raw.website) return NextResponse.json({ ok: true });

  const body = Object.fromEntries(Object.entries(limits).map(([key, max]) => [key, clean(raw[key], max)])) as Record<string, string>;
  const startedAt = Number(raw.startedAt || 0);
  if (startedAt && Date.now() - startedAt < 1200) return NextResponse.json({ error: "Please try again" }, { status: 400 });
  if (!body.name || !body.company || !emailPattern.test(body.email) || !body.challenge || !body.timing) return NextResponse.json({ error: "Please complete the required fields" }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM;
  const to = process.env.LEAD_TO;
  if (!apiKey || !from || !to) {
    console.error("Lead delivery environment is incomplete");
    return NextResponse.json({ error: "Email service unavailable" }, { status: 503 });
  }

  const lines = [
    `Name: ${body.name}`, `Company: ${body.company}`, `Email: ${body.email}`, `Phone: ${body.phone || "-"}`,
    `Challenge: ${body.challenge}`, `Timing: ${body.timing}`, `Intent: ${body.intent || "website"}`, `Source: ${body.source || "website"}`,
    `Page: ${body.page || "-"}`, `Referrer domain: ${body.referrerDomain || "-"}`,
    `UTM source: ${body.utmSource || "-"}`, `UTM medium: ${body.utmMedium || "-"}`, `UTM campaign: ${body.utmCampaign || "-"}`, `UTM content: ${body.utmContent || "-"}`, `UTM term: ${body.utmTerm || "-"}`,
    "", "Context:", body.message || "-",
  ];

  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: to.split(",").map((value) => value.trim()).filter(Boolean), reply_to: body.email, subject: `Health Check enquiry: ${body.company}`, text: lines.join("\n") }) });
  if (!response.ok) { console.error("Lead delivery failed", response.status); return NextResponse.json({ error: "Failed to send" }, { status: 502 }); }
  return NextResponse.json({ ok: true });
}
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    message?: string;
    source?: string;
    website?: string; // honeypot
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not configured");
    return NextResponse.json({ error: "Email service unavailable" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Scrap Finance Partners <onboarding@resend.dev>",
      to: ["manazoid4@gmail.com"],
      reply_to: email,
      subject: `New lead (${body.source || "website"}): ${name}${body.company ? " — " + body.company : ""}`,
      text: [
        `Name: ${name}`,
        `Company: ${body.company || "-"}`,
        `Email: ${email}`,
        `Phone: ${body.phone || "-"}`,
        `Source: ${body.source || "website"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

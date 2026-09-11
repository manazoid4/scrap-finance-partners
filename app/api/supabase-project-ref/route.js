import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  const raw = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  let projectRef = null;
  try {
    const host = new URL(raw).hostname;
    projectRef = host.match(/^([a-z]{20})\.supabase\.co$/)?.[1] ?? null;
  } catch {
    projectRef = null;
  }
  return NextResponse.json({ projectRef });
}

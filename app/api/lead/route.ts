import { NextResponse } from "next/server";

// Fail closed even if an old browser tab or a direct request bypasses the demo UI.
export async function POST() {
  return NextResponse.json(
    { error: "Demo build — enquiries are disabled. No details are collected or sent." },
    { status: 403 },
  );
}

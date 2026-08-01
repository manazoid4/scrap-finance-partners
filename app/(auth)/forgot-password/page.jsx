import Link from "next/link";

import { hasSupabaseConfig } from "@/lib/supabase/server";
import { requestPasswordReset } from "../actions";

export default function ForgotPasswordPage() {
  const configured = hasSupabaseConfig();
  return (
    <>
      <h1 className="font-serif text-4xl font-bold tracking-[-.03em]">Reset password</h1>
      <p className="mt-3 text-sm">We will email a secure reset link if the account exists.</p>
      <form action={requestPasswordReset} className="mt-6 space-y-4">
        <label className="block text-sm font-bold">Email<input name="email" type="email" required disabled={!configured} autoComplete="email" className="mt-1 min-h-12 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
        <button disabled={!configured} className="min-h-12 w-full border-2 border-black bg-copper px-4 font-bold disabled:bg-[#c6c6bf]">Send reset link</button>
      </form>
      <Link href="/login" className="mt-6 inline-block text-sm underline">Back to login</Link>
    </>
  );
}

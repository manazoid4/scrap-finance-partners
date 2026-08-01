import Link from "next/link";

import { hasSupabaseConfig } from "@/lib/supabase/server";
import { signUp } from "../actions";

export default async function SignUpPage({ searchParams }) {
  const params = await searchParams;
  const configured = hasSupabaseConfig();
  return (
    <>
      <p className="font-mono text-xs font-bold uppercase tracking-[.1em] text-[#815322]">Private client account</p>
      <h1 className="mt-2 font-serif text-4xl font-bold tracking-[-.03em]">Create account</h1>
      {params?.error && <p role="alert" className="mt-5 border-2 border-red-900 bg-red-50 p-4 text-sm text-red-950">{params.error}</p>}
      {!configured && <p className="mt-5 border-2 border-black bg-[#fff4df] p-4 text-sm">Signup will open after the database connection is configured.</p>}
      <form action={signUp} className="mt-6 space-y-4">
        <label className="block text-sm font-bold">Email<input name="email" type="email" required disabled={!configured} autoComplete="email" className="mt-1 min-h-12 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
        <label className="block text-sm font-bold">Password <span className="font-normal">(12+ characters)</span><input name="password" type="password" minLength={12} required disabled={!configured} autoComplete="new-password" className="mt-1 min-h-12 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
        <button disabled={!configured} className="min-h-12 w-full border-2 border-black bg-copper px-4 font-bold disabled:bg-[#c6c6bf]">Create secure account</button>
      </form>
      <Link href="/login" className="mt-6 inline-block text-sm underline">Back to login</Link>
    </>
  );
}

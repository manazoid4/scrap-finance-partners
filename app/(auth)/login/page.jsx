import Link from "next/link";

import { hasSupabaseConfig } from "@/lib/supabase/server";
import { signIn } from "../actions";

export const metadata = { title: "Client login | Scrap Finance Partners" };

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const configured = hasSupabaseConfig();
  return (
    <>
      <p className="font-mono text-xs font-bold uppercase tracking-[.1em] text-[#815322]">Secure workspace</p>
      <h1 className="mt-2 font-serif text-4xl font-bold tracking-[-.03em]">Client login</h1>
      {!configured && (
        <p role="status" className="mt-5 border-2 border-black bg-[#fff4df] p-4 text-sm">
          Account setup is awaiting the secure database connection. The lead manager is visible from the workspace link below.
        </p>
      )}
      {params?.error && <p role="alert" className="mt-5 border-2 border-red-900 bg-red-50 p-4 text-sm text-red-950">{params.error}</p>}
      {params?.notice && <p role="status" className="mt-5 border-2 border-[#815322] bg-[#fff4df] p-4 text-sm">{params.notice}</p>}
      <form action={signIn} className="mt-6 space-y-4">
        <label className="block text-sm font-bold">Email<input name="email" type="email" required disabled={!configured} autoComplete="email" className="mt-1 min-h-12 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
        <label className="block text-sm font-bold">Password<input name="password" type="password" required disabled={!configured} autoComplete="current-password" className="mt-1 min-h-12 w-full border-2 border-black px-3 font-normal disabled:bg-[#e5e5e0]" /></label>
        <button disabled={!configured} className="min-h-12 w-full border-2 border-black bg-copper px-4 font-bold shadow-[3px_3px_0_#1f231f] disabled:cursor-not-allowed disabled:bg-[#c6c6bf] disabled:shadow-none">Log in</button>
      </form>
      <div className="mt-6 flex flex-wrap justify-between gap-4 text-sm underline">
        <Link href="/forgot-password">Forgot password?</Link>
        <Link href="/sign-up">Create account</Link>
      </div>
      {!configured && <Link href="/account/leads" className="mt-6 block border-t border-black pt-5 text-center text-sm font-bold underline">View the empty lead workspace</Link>}
    </>
  );
}

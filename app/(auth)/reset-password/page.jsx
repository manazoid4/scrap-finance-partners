import { updatePassword } from "../actions";

export default async function ResetPasswordPage({ searchParams }) {
  const params = await searchParams;
  return (
    <>
      <h1 className="font-serif text-4xl font-bold tracking-[-.03em]">Choose a new password</h1>
      {params?.error && <p role="alert" className="mt-5 border-2 border-red-900 bg-red-50 p-4 text-sm text-red-950">{params.error}</p>}
      <form action={updatePassword} className="mt-6 space-y-4">
        <label className="block text-sm font-bold">New password<input name="password" type="password" minLength={12} required autoComplete="new-password" className="mt-1 min-h-12 w-full border-2 border-black px-3 font-normal" /></label>
        <button className="min-h-12 w-full border-2 border-black bg-copper px-4 font-bold">Update password</button>
      </form>
    </>
  );
}

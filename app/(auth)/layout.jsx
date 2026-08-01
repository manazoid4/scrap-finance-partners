import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <main id="main" className="min-h-screen bg-[#ecece7] px-4 py-10 text-graphite sm:px-6">
      <div className="mx-auto max-w-md">
        <Link href="/" className="font-serif text-xl font-bold tracking-[-.02em]">Scrap Finance Partners</Link>
        <section className="mt-8 border-2 border-black bg-white p-6 shadow-[5px_5px_0_#1f231f] sm:p-8">
          {children}
        </section>
      </div>
    </main>
  );
}

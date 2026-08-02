import Link from "next/link";

import { signOut } from "@/app/(auth)/actions";
import { getWorkspace } from "@/lib/workspace-server";

const navigation = [
  { href: "/account/guide", label: "Start here" },
  { href: "/account/leads", label: "Leads" },
  { href: "/account/campaigns", label: "Campaign links" },
  { href: "/account/templates", label: "Email templates" },
  { href: "/account/outbox", label: "Email & send log" },
];

export const dynamic = "force-dynamic";

export default async function AccountLayout({ children }) {
  const workspace = await getWorkspace();
  return (
    <div className="min-h-screen bg-[#ecece7] text-graphite">
      <header className="border-b-2 border-black bg-graphite text-white">
        <div className="mx-auto flex min-h-16 max-w-[1440px] items-stretch justify-between">
          <Link href="/" className="flex items-center px-4 font-serif text-lg font-bold sm:px-6">Scrap Finance Partners</Link>
          <div className="flex items-center gap-3 border-l border-[#4d534e] px-4 text-sm sm:px-6">
            <span className="hidden text-[#c8ccc8] sm:inline">{workspace.organization?.name ?? "Setup mode"}</span>
            {workspace.configured ? <form action={signOut}><button className="font-bold underline">Sign out</button></form> : <Link href="/login" className="font-bold underline">Login</Link>}
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-[1440px] md:flex">
        <aside className="border-b-2 border-black bg-white md:min-h-[calc(100vh-4rem)] md:w-60 md:border-b-0 md:border-r-2">
          <nav aria-label="Client workspace" className="flex overflow-x-auto md:block">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="block min-w-max border-r border-black px-4 py-4 text-sm font-bold hover:bg-copper md:border-b md:border-r-0 md:px-6">{item.label}</Link>)}
          </nav>
        </aside>
        <main id="main" className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {!workspace.configured && <div className="mb-6 border-2 border-black bg-[#fff4df] p-4 text-sm"><strong>Setup required:</strong> connect the dedicated Supabase project to enable secure accounts and persistent records. No sample data has been loaded.</div>}
          {children}
        </main>
      </div>
    </div>
  );
}

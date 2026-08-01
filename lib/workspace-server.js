import { redirect } from "next/navigation";

import { createClient, hasSupabaseConfig } from "@/lib/supabase/server";

export async function getWorkspace() {
  if (!hasSupabaseConfig()) return { configured: false, supabase: null, userId: null, organization: null, role: null };

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;
  if (error || !userId) redirect("/login");

  const { data: membership } = await supabase
    .from("organization_members")
    .select("organization_id, role")
    .eq("user_id", userId)
    .limit(1)
    .maybeSingle();

  let organizationId = membership?.organization_id;
  let role = membership?.role;

  if (!organizationId) {
    const email = String(data.claims.email ?? "");
    const label = email.includes("@") ? email.split("@")[0] : "Client";
    const { data: organization, error: organizationError } = await supabase
      .from("organizations")
      .insert({ name: label + " workspace", created_by: userId })
      .select("id, name")
      .single();
    if (organizationError) throw new Error("Unable to create the client workspace.");

    const { error: memberError } = await supabase.from("organization_members").insert({
      organization_id: organization.id,
      user_id: userId,
      role: "owner",
    });
    if (memberError) throw new Error("Unable to secure the client workspace.");
    return { configured: true, supabase, userId, organization, role: "owner" };
  }

  const { data: organization } = await supabase
    .from("organizations")
    .select("id, name")
    .eq("id", organizationId)
    .single();

  return { configured: true, supabase, userId, organization, role };
}

export async function requireWorkspace() {
  const workspace = await getWorkspace();
  if (!workspace.configured || !workspace.organization) {
    throw new Error("Client workspace is not configured.");
  }
  return workspace;
}

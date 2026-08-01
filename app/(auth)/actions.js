"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

function field(formData, name) {
  return String(formData.get(name) ?? "").trim();
}

function go(path, key, message) {
  redirect(path + "?" + key + "=" + encodeURIComponent(message));
}

export async function signIn(formData) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: field(formData, "email"),
    password: field(formData, "password"),
  });
  if (error) go("/login", "error", "Email or password was not recognised.");
  redirect("/account/leads");
}

export async function signUp(formData) {
  const password = field(formData, "password");
  if (password.length < 12) go("/sign-up", "error", "Use at least 12 characters.");
  const supabase = await createClient();
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const { error } = await supabase.auth.signUp({
    email: field(formData, "email"),
    password,
    options: { emailRedirectTo: origin + "/auth/callback?next=/account/leads" },
  });
  if (error) go("/sign-up", "error", error.message);
  go("/login", "notice", "Check your email to confirm your account.");
}

export async function requestPasswordReset(formData) {
  const supabase = await createClient();
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  await supabase.auth.resetPasswordForEmail(field(formData, "email"), {
    redirectTo: origin + "/auth/callback?next=/reset-password",
  });
  go("/login", "notice", "If that account exists, a reset link is on its way.");
}

export async function updatePassword(formData) {
  const password = field(formData, "password");
  if (password.length < 12) go("/reset-password", "error", "Use at least 12 characters.");
  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });
  if (error) go("/reset-password", "error", "The reset link is invalid or expired.");
  redirect("/account/leads");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

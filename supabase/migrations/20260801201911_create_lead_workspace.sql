create schema if not exists private;

revoke all on schema private from public;
grant usage on schema private to authenticated;

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 120),
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.organization_members (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'admin', 'member')),
  created_at timestamptz not null default now(),
  primary key (organization_id, user_id)
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  company_name text not null check (char_length(trim(company_name)) between 2 and 160),
  contact_name text,
  email text,
  phone text,
  website text,
  company_type text,
  source text,
  consent_basis text not null default 'not_recorded' check (
    consent_basis in ('not_recorded', 'consent', 'legitimate_interest', 'existing_customer')
  ),
  status text not null default 'new' check (
    status in ('new', 'qualified', 'contacted', 'replied', 'meeting', 'won', 'lost', 'suppressed')
  ),
  pain_points text,
  notes text,
  next_follow_up_at timestamptz,
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (email is not null or phone is not null)
);

create table public.email_templates (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null check (char_length(trim(name)) between 2 and 120),
  subject text not null check (char_length(trim(subject)) between 2 and 180),
  body text not null check (char_length(trim(body)) between 10 and 12000),
  is_active boolean not null default true,
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id, name)
);

create table public.suppressions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  email text,
  domain text,
  reason text not null check (char_length(trim(reason)) between 2 and 500),
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  check (email is not null or domain is not null)
);

create unique index suppressions_email_unique
  on public.suppressions (organization_id, lower(email)) where email is not null;
create unique index suppressions_domain_unique
  on public.suppressions (organization_id, lower(domain)) where domain is not null;

create table public.outbound_messages (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  lead_id uuid not null references public.leads(id) on delete cascade,
  template_id uuid references public.email_templates(id) on delete set null,
  recipient_email text not null,
  subject text not null check (char_length(trim(subject)) between 2 and 180),
  body text not null check (char_length(trim(body)) between 10 and 12000),
  status text not null default 'draft' check (
    status in ('draft', 'approved', 'scheduled', 'sent', 'failed', 'suppressed')
  ),
  scheduled_for timestamptz,
  sent_at timestamptz,
  provider_message_id text,
  error_message text,
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.revenue_entries (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete set null,
  invoice_reference text,
  status text not null default 'pending' check (status in ('pending', 'paid', 'refunded')),
  net_collected_pence bigint not null check (net_collected_pence >= 0),
  commission_rate numeric(5, 4) not null default 0.1500 check (
    commission_rate >= 0 and commission_rate <= 1
  ),
  paid_at timestamptz,
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index leads_org_status_idx on public.leads (organization_id, status, updated_at desc);
create index leads_org_follow_up_idx on public.leads (organization_id, next_follow_up_at)
  where next_follow_up_at is not null;
create index templates_org_active_idx on public.email_templates (organization_id, is_active, updated_at desc);
create index messages_org_status_idx on public.outbound_messages (organization_id, status, created_at desc);
create index revenue_org_status_idx on public.revenue_entries (organization_id, status, created_at desc);

create or replace function private.is_org_member(target_organization_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select auth.uid() is not null and exists (
    select 1
    from public.organization_members
    where organization_id = target_organization_id
      and user_id = (select auth.uid())
  );
$$;

create or replace function private.has_org_role(target_organization_id uuid, allowed_roles text[])
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select auth.uid() is not null and exists (
    select 1
    from public.organization_members
    where organization_id = target_organization_id
      and user_id = (select auth.uid())
      and role = any(allowed_roles)
  );
$$;

revoke all on function private.is_org_member(uuid) from public;
revoke all on function private.has_org_role(uuid, text[]) from public;
grant execute on function private.is_org_member(uuid) to authenticated;
grant execute on function private.has_org_role(uuid, text[]) to authenticated;

alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;
alter table public.leads enable row level security;
alter table public.email_templates enable row level security;
alter table public.suppressions enable row level security;
alter table public.outbound_messages enable row level security;
alter table public.revenue_entries enable row level security;

create policy "Members can view organizations"
on public.organizations for select to authenticated
using (created_by = (select auth.uid()) or private.is_org_member(id));

create policy "Users can create organizations"
on public.organizations for insert to authenticated
with check (created_by = (select auth.uid()));

create policy "Owners and admins can update organizations"
on public.organizations for update to authenticated
using (private.has_org_role(id, array['owner', 'admin']))
with check (private.has_org_role(id, array['owner', 'admin']));

create policy "Owners can delete organizations"
on public.organizations for delete to authenticated
using (private.has_org_role(id, array['owner']));

create policy "Members can view memberships"
on public.organization_members for select to authenticated
using (
  private.is_org_member(organization_id)
  or exists (
    select 1 from public.organizations
    where id = organization_id and created_by = (select auth.uid())
  )
);

create policy "Owners can bootstrap or manage memberships"
on public.organization_members for insert to authenticated
with check (
  (
    user_id = (select auth.uid())
    and role = 'owner'
    and exists (
      select 1 from public.organizations
      where id = organization_id and created_by = (select auth.uid())
    )
  )
  or private.has_org_role(organization_id, array['owner'])
);

create policy "Owners can update memberships"
on public.organization_members for update to authenticated
using (private.has_org_role(organization_id, array['owner']))
with check (private.has_org_role(organization_id, array['owner']));

create policy "Owners can delete memberships"
on public.organization_members for delete to authenticated
using (private.has_org_role(organization_id, array['owner']));

create policy "Members can view leads"
on public.leads for select to authenticated
using (private.is_org_member(organization_id));
create policy "Members can create leads"
on public.leads for insert to authenticated
with check (private.is_org_member(organization_id) and created_by = (select auth.uid()));
create policy "Members can update leads"
on public.leads for update to authenticated
using (private.is_org_member(organization_id))
with check (private.is_org_member(organization_id));
create policy "Members can delete leads"
on public.leads for delete to authenticated
using (private.is_org_member(organization_id));

create policy "Members can view templates"
on public.email_templates for select to authenticated
using (private.is_org_member(organization_id));
create policy "Members can create templates"
on public.email_templates for insert to authenticated
with check (private.is_org_member(organization_id) and created_by = (select auth.uid()));
create policy "Members can update templates"
on public.email_templates for update to authenticated
using (private.is_org_member(organization_id))
with check (private.is_org_member(organization_id));
create policy "Members can delete templates"
on public.email_templates for delete to authenticated
using (private.is_org_member(organization_id));

create policy "Members can view suppressions"
on public.suppressions for select to authenticated
using (private.is_org_member(organization_id));
create policy "Members can create suppressions"
on public.suppressions for insert to authenticated
with check (private.is_org_member(organization_id) and created_by = (select auth.uid()));
create policy "Members can delete suppressions"
on public.suppressions for delete to authenticated
using (private.is_org_member(organization_id));

create policy "Members can view outbound messages"
on public.outbound_messages for select to authenticated
using (private.is_org_member(organization_id));
create policy "Members can create outbound messages"
on public.outbound_messages for insert to authenticated
with check (private.is_org_member(organization_id) and created_by = (select auth.uid()));
create policy "Members can update outbound messages"
on public.outbound_messages for update to authenticated
using (private.is_org_member(organization_id))
with check (private.is_org_member(organization_id));
create policy "Members can delete draft outbound messages"
on public.outbound_messages for delete to authenticated
using (private.is_org_member(organization_id) and status = 'draft');

create policy "Members can view revenue"
on public.revenue_entries for select to authenticated
using (private.is_org_member(organization_id));
create policy "Owners and admins can create revenue"
on public.revenue_entries for insert to authenticated
with check (
  private.has_org_role(organization_id, array['owner', 'admin'])
  and created_by = (select auth.uid())
);
create policy "Owners and admins can update revenue"
on public.revenue_entries for update to authenticated
using (private.has_org_role(organization_id, array['owner', 'admin']))
with check (private.has_org_role(organization_id, array['owner', 'admin']));
create policy "Owners can delete revenue"
on public.revenue_entries for delete to authenticated
using (private.has_org_role(organization_id, array['owner']));

revoke all on public.organizations from anon;
revoke all on public.organization_members from anon;
revoke all on public.leads from anon;
revoke all on public.email_templates from anon;
revoke all on public.suppressions from anon;
revoke all on public.outbound_messages from anon;
revoke all on public.revenue_entries from anon;
grant select, insert, update, delete on public.organizations to authenticated;
grant select, insert, update, delete on public.organization_members to authenticated;
grant select, insert, update, delete on public.leads to authenticated;
grant select, insert, update, delete on public.email_templates to authenticated;
grant select, insert, update, delete on public.suppressions to authenticated;
grant select, insert, update, delete on public.outbound_messages to authenticated;
grant select, insert, update, delete on public.revenue_entries to authenticated;

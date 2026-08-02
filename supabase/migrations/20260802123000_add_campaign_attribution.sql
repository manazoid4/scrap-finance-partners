alter table public.leads
  add column utm_source text,
  add column utm_medium text,
  add column utm_campaign text,
  add column utm_content text,
  add column utm_term text,
  add column landing_page text,
  add column referrer_domain text;

create index leads_org_campaign_idx
  on public.leads (organization_id, utm_campaign, created_at desc)
  where utm_campaign is not null;

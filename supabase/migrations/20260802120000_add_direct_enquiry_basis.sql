alter table public.leads drop constraint leads_consent_basis_check;

alter table public.leads add constraint leads_consent_basis_check check (
  consent_basis in ('not_recorded', 'direct_enquiry', 'consent', 'legitimate_interest', 'existing_customer')
);

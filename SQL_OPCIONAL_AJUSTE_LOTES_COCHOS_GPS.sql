-- APP COCHO CENTRAL V6.2 — AJUSTE OPCIONAL LOTES + COCHOS GPS
-- Rode SOMENTE se a V6.2 acusar coluna inexistente em lotes ou cochos.

alter table public.lotes
  add column if not exists nome_lote text,
  add column if not exists categoria_lote text,
  add column if not exists quantidade_animais integer default 0,
  add column if not exists area_pasto text,
  add column if not exists status_lote text default 'ATIVO',
  add column if not exists observacoes text,
  add column if not exists created_at timestamptz default now(),
  add column if not exists updated_at timestamptz default now();

alter table public.cochos
  add column if not exists nome_cocho text,
  add column if not exists codigo_cocho text,
  add column if not exists tipo_cocho text,
  add column if not exists lote_id uuid,
  add column if not exists area_pasto text,
  add column if not exists gps_lat numeric,
  add column if not exists gps_lng numeric,
  add column if not exists gps_precisao_m numeric,
  add column if not exists gps_data_hora timestamptz,
  add column if not exists responsavel_gps text,
  add column if not exists status_cocho text default 'ATIVO',
  add column if not exists observacoes text,
  add column if not exists raio_aceito_m numeric default 50,
  add column if not exists created_at timestamptz default now(),
  add column if not exists updated_at timestamptz default now();

create unique index if not exists ux_lotes_prop_nome_ativo on public.lotes (propriedade_id, upper(nome_lote)) where status_lote = 'ATIVO';
create unique index if not exists ux_cochos_prop_codigo_ativo on public.cochos (propriedade_id, upper(codigo_cocho)) where status_cocho = 'ATIVO' and codigo_cocho is not null;

-- APP COCHO CENTRAL V6.3.1 — AJUSTE OPCIONAL LANÇAMENTOS + HISTÓRICO POR COCHO
-- Rode SOMENTE se aparecer erro de coluna inexistente em lancamentos_cocho.

create table if not exists public.lancamentos_cocho (
  id uuid primary key default gen_random_uuid()
);

alter table public.lancamentos_cocho
  add column if not exists propriedade_id uuid,
  add column if not exists cocho_id uuid,
  add column if not exists produto_id uuid,
  add column if not exists usuario_id uuid,
  add column if not exists quantidade_kg numeric,
  add column if not exists data_hora_brasilia text,
  add column if not exists data_hora_iso timestamptz,
  add column if not exists gps_lat numeric,
  add column if not exists gps_lng numeric,
  add column if not exists gps_precisao_m numeric,
  add column if not exists status_gps text default 'SEM_GPS',
  add column if not exists observacoes text,
  add column if not exists id_operacao_cliente text,
  add column if not exists origem_lancamento text,
  add column if not exists status_sync text default 'SINCRONIZADO',
  add column if not exists created_at timestamptz default now(),
  add column if not exists updated_at timestamptz default now();

create unique index if not exists ux_lancamentos_cocho_operacao_cliente
on public.lancamentos_cocho (id_operacao_cliente)
where id_operacao_cliente is not null;

# APP COCHO CENTRAL V6.0 SUPABASE — Fundação

Esta é a primeira Central Supabase separada da linha Apps Script.

## Arquivos
- index.html
- manifest.json
- service-worker.js
- icons/
- SUPABASE_POLICIES_DEV_TESTE_APP_COCHO.sql

## Objetivo
Testar a fundação:
1. Config Supabase
2. Testar conexão
3. Criar/Listar propriedades
4. Ativar propriedade
5. Criar/Listar usuários
6. Criar/Listar produtos
7. Bloquear produto duplicado pelo índice do banco

## Antes de testar
Você já criou as tabelas com `SUPABASE_SCHEMA_APP_COCHO_V1.sql`.

Como as tabelas estão com RLS ativo, para teste inicial rode no SQL Editor:

`SUPABASE_POLICIES_DEV_TESTE_APP_COCHO.sql`

Atenção: essas políticas são temporárias de desenvolvimento e liberam acesso via publishable/anon key. Para produção, substituir por Supabase Auth + políticas por usuário/propriedade.

## GitHub Pages
Subir:
- index.html
- manifest.json
- service-worker.js
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Cria Central Cocho V6.0 Supabase Fundação`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.0.0-supabase`

## Configuração
Na Central:
- Config Supabase
- SUPABASE_URL: https://wxnsyozjiosbdwxpodb.supabase.co
- SUPABASE_PUBLISHABLE_KEY: sua chave sb_publishable_...
- Salvar Config
- Testar conexão

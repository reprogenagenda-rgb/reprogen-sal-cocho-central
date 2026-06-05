# APP COCHO CENTRAL V6.2.2 SUPABASE — Supabase OK Fix

## Objetivo
Hotfix da V6.2.1. Corrige erro visual que fazia o teste Supabase retornar:
`Cannot set properties of null (setting 'textContent')`.

## SUPABASE — fazer agora
Nada.

- Rodar SQL? NÃO.
- Alterar tabela? NÃO.
- Alterar policy? NÃO.

## GITHUB — subir agora
Substituir:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/

Mensagem de commit:
`Corrige teste Supabase Central Cocho V6.2.2`

Abrir com quebra de cache:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.2.2-supabase-ok-fix`

## Teste
1. Abrir com quebra de cache.
2. Config Supabase → Testar conexão.
3. Esperado: Supabase OK.
4. Depois testar Lotes e Cochos GPS.

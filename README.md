# APP COCHO CENTRAL V6.8.1 SUPABASE — Estoque Cloud Fix

## Objetivo
Corrigir a etapa observada na V6.8: a lógica funcionou, mas a entrada ficou em fallback local. Esta versão padroniza `movimentacoes_estoque` para gravar em nuvem.

## SUPABASE
Para estoque 100% em nuvem, rode o arquivo:
`SQL_OPCIONAL_V6_8_1_ESTOQUE_CLOUD_FIX.sql`

## Teste
1. Rodar SQL V6.8.1 no Supabase.
2. Abrir Central V6.8.1.
3. Ir em Estoque.
4. Registrar entrada de 1000 kg.
5. Ver JSON: `destino: CLOUD_SUPABASE`.
6. Atualizar estoque.
7. Conferir `movimentos_cloud: 1` ou mais.
8. Saídas devem continuar 930 kg.
9. Saldo esperado: 70 kg, se houver só uma entrada de 1000 kg.

## GitHub
Substituir:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Corrige estoque cloud Central Cocho V6.8.1`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.8.1-estoque-cloud-fix`

JS validado com node --check: True

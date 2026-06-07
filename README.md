# APP COCHO CENTRAL V7.1.7 — Seleção Persistente Fix

## Correção
A tela mostrava o ID provisório preenchido, mas ao confirmar retornava:
`SELECIONE_PROVISORIO`

## Causa
A lista interna `_provisoriosCentral` podia perder estado ao rolar, recarregar ou trocar de aba. O campo visual continuava preenchido, mas o objeto interno selecionado não existia mais.

## O que a V7.1.7 faz
- Aceita o ID provisório preenchido na tela.
- Se a lista interna perdeu estado, busca o provisório novamente no Supabase pela tabela `cochos`.
- Mantém as regras da V7.1.6:
  - não cria cocho oficial duplicado por nome/código;
  - não cria cocho oficial duplicado por GPS até 15 m;
  - transfere histórico para o cocho oficial existente.

## SUPABASE
Não precisa SQL novo.

## GitHub
Substituir no repositório da Central:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Commit:
`Corrige Central Cocho V7.1.7 selecao persistente`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=7.1.7-selecao-persistente-fix`

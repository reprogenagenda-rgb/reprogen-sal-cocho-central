# APP COCHO CENTRAL V7.2.2 — Diagnóstico Cochos

## Objetivo
Separar se o problema é:
1. a Central não está puxando os cochos do Supabase; ou
2. está puxando, mas não encontra duplicados.

## Nova função
Na aba **Higienizar Cochos**, usar o botão:

`Diagnosticar cochos`

Ele mostra:
- total de cochos puxados;
- ativos;
- provisórios;
- arquivados;
- com GPS;
- sem GPS;
- status encontrados;
- pares de cochos até 300 m.

## SUPABASE
Não precisa SQL novo.

## GitHub
Substituir:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Commit:
`Adiciona Central Cocho V7.2.2 diagnostico cochos`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=7.2.2-diagnostico-cochos`

## Teste
1. Abrir Higienizar Cochos.
2. Clicar Diagnosticar cochos.
3. Enviar o print do quadro preto.
4. Depois clicar Listar duplicados.

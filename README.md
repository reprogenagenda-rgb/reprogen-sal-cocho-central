# APP COCHO CENTRAL V7.2.1 — Higienização Ampliada

## Correção
A V7.2 podia não listar duplicados porque analisava apenas cochos com status exatamente ATIVO e por raio curto.

## O que mudou
A aba Higienizar Cochos agora:
- permite analisar oficiais ativos, provisórios ou todos não arquivados;
- tem modo GPS até raio;
- tem modo PROXIMOS até 200 m;
- agrupa também coordenadas arredondadas em 5 casas;
- mostra total de cochos analisados e pares detectados.

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
`Corrige Central Cocho V7.2.1 higienizacao ampliada`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=7.2.1-higienizacao-ampliada`

## Teste recomendado
1. Abrir Higienizar Cochos.
2. Selecionar: Todos não arquivados.
3. Modo: Mostrar próximos até 200 m.
4. Clicar Listar duplicados.
5. Se aparecer grupo, selecionar e mesclar.
6. Depois testar Oficiais ativos + GPS até raio 15 m.

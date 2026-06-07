# APP COCHO CENTRAL V7.2 — Higienizar Cochos Duplicados

## Objetivo
Depois dos testes, alguns cochos oficiais podem ter nascido duplicados no mesmo ponto. Esta versão adiciona uma aba para mesclar duplicados sem apagar histórico.

## Nova aba
**Higienizar Cochos**

## O que faz
1. Lista cochos oficiais ativos duplicados por GPS.
2. Usa raio configurável, padrão 15 m.
3. Sugere um cocho principal.
4. Transfere lançamentos dos duplicados para o principal.
5. Marca duplicados como `DUPLICADO_ARQUIVADO`.

## Regra de segurança
Nada é deletado. O histórico é preservado e os duplicados ficam arquivados.

## SUPABASE
Não precisa SQL novo se as políticas permitem update em:
- cochos
- lancamentos_cocho

## GitHub
Substituir no repositório da Central:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Commit:
`Adiciona Central Cocho V7.2 higienizar duplicados`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=7.2-higienizar-duplicados`

## Teste
1. Abrir Central V7.2.
2. Ir em Higienizar Cochos.
3. Raio 15 m.
4. Clicar Listar duplicados.
5. Selecionar grupo.
6. Clicar Mesclar duplicados no principal.
7. Conferir em Cochos GPS se duplicados ficaram como DUPLICADO_ARQUIVADO.
8. Conferir em Histórico se os lançamentos ficaram no cocho principal.

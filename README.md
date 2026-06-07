# APP COCHO CENTRAL V7.1.4 — Consolidar Provisório Duplicado

## Correção
A V7.1.3 transferia o histórico apenas do UUID provisório selecionado. Em teste real, havia mais de um provisório com o mesmo código PROV-90385.

## O que a V7.1.4 faz
Ao confirmar um provisório:
1. cria um cocho oficial;
2. encontra todos os provisórios da mesma família:
   - mesmo código provisório; ou
   - GPS até 15 m; ou
   - mesmo ID selecionado;
3. transfere todos os lançamentos dos provisórios da família para o cocho oficial;
4. marca todos os provisórios cloud da família como PROVISORIO_CONFIRMADO;
5. usa fallback por observação/código provisório quando necessário.

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
`Corrige Central Cocho V7.1.4 consolidar provisorio duplicado`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=7.1.4-consolidar-provisorio-duplicado`

## Teste
1. Abrir Central V7.1.4.
2. Cochos Provisórios → Listar.
3. Selecionar um PROV-90385.
4. Confirmar como oficial + consolidar duplicados.
5. Ir em Histórico.
6. Conferir se todos os lançamentos PROV-90385 foram transferidos para o cocho oficial.
7. Ir em Cochos Provisórios.
8. Conferir se PROV-90385 saiu da lista ativa.

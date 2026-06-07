# APP COCHO CENTRAL V7.2.4 — Diagnóstico Botão Independente

## Correção
A aba Higienizar Cochos permanecia em `Sem consulta`.

## O que muda
O botão `Puxar cochos agora` agora usa uma função independente:
- confirma primeiro que o botão executou;
- consulta a tabela `cochos` diretamente;
- mostra total de cochos puxados;
- mostra pares de cochos até 300 m;
- mostra os primeiros cochos encontrados.

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
`Corrige Central Cocho V7.2.4 diagnostico independente`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=7.2.4-diagnostico-independente`

## Teste
1. Abrir Higienizar Cochos.
2. Clicar Puxar cochos agora.
3. O quadro preto deve mostrar BOTAO_EXECUTOU e depois total_cochos_puxados.

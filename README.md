# APP COCHO CENTRAL V7.1.3 — Confirmar e Transferir Histórico

## Prioridade corrigida
Depois que a Central lista os cochos provisórios, o passo mais importante é confirmar o provisório e transferir o histórico para o cocho oficial.

## O que esta versão faz
Ao confirmar um cocho provisório:
1. cria um novo cocho oficial;
2. transfere os lançamentos vinculados ao provisório para o cocho oficial;
3. marca o provisório como PROVISORIO_CONFIRMADO;
4. atualiza a lista de cochos e provisórios.

## Por que isso é importante
A coleta nasce no cocho provisório, mas o histórico final deve ficar no cocho oficial. Assim o relatório por cocho/lote não fica quebrado.

## SUPABASE
Não precisa SQL novo se as políticas atuais permitem update em:
- lancamentos_cocho
- cochos

## GitHub
Substituir no repositório da Central:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Commit:
`Atualiza Central Cocho V7.1.3 transferir historico provisorio`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=7.1.3-transferir-historico`

## Teste
1. Abrir Central V7.1.3.
2. Ir em Cochos Provisórios.
3. Listar provisórios.
4. Selecionar PROV-90385.
5. Preencher nome/código oficial.
6. Confirmar como oficial + transferir histórico.
7. Verificar em Cochos GPS se o cocho oficial apareceu.
8. Verificar em Histórico se o lançamento ficou vinculado ao cocho oficial.

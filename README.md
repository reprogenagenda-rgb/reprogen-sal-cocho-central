# APP COCHO CENTRAL V7.1.6 — Bloqueio Oficial Duplicado por GPS

## Correção
A versão anterior evitava duplicidade por nome/código, mas ainda podia criar dois cochos oficiais nas mesmas coordenadas.

## Regra nova
Antes de criar cocho oficial, a Central procura:
1. cocho oficial ativo com mesmo nome;
2. cocho oficial ativo com mesmo código;
3. cocho oficial ativo com GPS até 15 m.

Se encontrar, usa o cocho oficial existente e transfere o histórico para ele. Só cria novo se realmente não houver cocho oficial compatível.

## Por que isso é importante
O cocho é objeto fixo. GPS é mais importante que nome/código para evitar duplicidade física.

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
`Corrige Central Cocho V7.1.6 bloqueio duplicado GPS`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=7.1.6-bloqueio-duplicado-gps`

## Teste
1. Abrir Central V7.1.6.
2. Cochos Provisórios → Listar.
3. Selecionar provisório em coordenada onde já existe cocho oficial.
4. Confirmar/usar oficial + transferir histórico.
5. Conferir se não cria novo cocho oficial duplicado.
6. Conferir se histórico foi transferido para o cocho oficial existente.

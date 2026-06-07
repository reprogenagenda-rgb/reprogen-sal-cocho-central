# APP COCHO CENTRAL V7.2.5 — Sessão Global Fix

## Correção
A V7.2.4 mostrou `SEM_PROPRIEDADE_ATIVA`, apesar da tela exibir a fazenda ativa.

## Causa
O diagnóstico independente estava fora da sessão interna da Central e procurava a fazenda em chaves erradas do localStorage.

## O que mudou
O botão `Puxar cochos agora` agora executa dentro da sessão real da Central:
- usa `session.propriedade.id`;
- se necessário, chama `loadSession()`;
- consulta `cochos` pela propriedade ativa;
- mostra total de cochos puxados, status, tipos e pares até 300 m.

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
`Corrige Central Cocho V7.2.5 sessao global diagnostico`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=7.2.5-sessao-global-fix`

## Teste
1. Abrir Higienizar Cochos.
2. Clicar Puxar cochos agora.
3. Esperado: `DIAGNOSTICO_COCHOS_SEGURO_V7_2_5` com `total_cochos_puxados`.

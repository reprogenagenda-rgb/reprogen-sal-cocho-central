# APP COCHO CENTRAL V6.4.2 SUPABASE — Botões Fix

## Correção
A V6.4.1 abriu com botões sem funcionar por erro de sintaxe JavaScript no bloco de entidades do histórico.

Erro corrigido:
`produtos:(res[1]&&!res[1].error)?res[1].data||[],`

Agora o JavaScript foi validado com `node --check`.

## SUPABASE
Não mexer no Supabase.
Não rodar SQL.
Não alterar tabela.

## GITHUB — subir
Substituir:
- index.html
- manifest.json
- service-worker.js
- README.md

Mensagem de commit:
`Corrige botoes Central Cocho V6.4.2`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.4.2-botoes-fix`

## Teste
1. Abrir V6.4.2.
2. Clicar em Config.
3. Testar Supabase.
4. Abrir Histórico.
5. Consultar Histórico.
6. Conferir distância e status raio.

# APP COCHO CENTRAL V6.0.1 SUPABASE — SW Fix

Correção crítica da V6.0: o Service Worker antigo podia retornar o próprio `index.html` quando uma chamada externa falhava, fazendo a Central mostrar um bloco gigante de HTML como erro do Supabase.

## Subir no GitHub
Substituir:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/

Mensagem de commit:
`Corrige Service Worker da Central Cocho V6.0.1 Supabase`

Abrir com quebra de cache:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.0.1-sw-fix`

## Importante no Android
Depois de subir:
1. Feche a aba antiga.
2. Abra a URL com `?v=6.0.1-sw-fix`.
3. Se ainda aparecer HTML no erro, vá em Config Supabase > Limpar, salve novamente URL/key e teste.
4. Em último caso, remova o app instalado e instale novamente, pois o service worker antigo pode estar preso no navegador.

## Config Supabase
SUPABASE_URL:
`https://wxnsyozjiosbdwxpodb.supabase.co`

SUPABASE_PUBLISHABLE_KEY:
cole a chave completa `sb_publishable_...`

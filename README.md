# APP COCHO CENTRAL V5.8.4 — Login obrigatório por usuário

Evolução de segurança: acesso operacional por CHAVE_FAZENDA + LOGIN_USUARIO + PIN_USUARIO.

## Atualização
1. Substituir `index.html`, `manifest.json`, `service-worker.js`, `README.md` e `icons/` no GitHub Pages.
2. Abrir a Central com `?v=5.8.4` para quebrar cache.
3. Testar Cloud e validar sessão com login do usuário.

## Teste mínimo
- Proprietário: CHAVE_FAZENDA + login do proprietário + PIN do proprietário.
- Operador: CHAVE_FAZENDA + login do operador + PIN do operador.

O PIN da fazenda fica reservado para validação/recuperação e não deve substituir o login do usuário em operação normal.

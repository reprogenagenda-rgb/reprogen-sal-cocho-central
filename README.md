# REPROGEN CENTRAL V5.3.6 — Atualização Forçada + Diagnóstico API

Versão para corrigir a Central quando a API V1.3 já entrega registros, mas o navegador ainda segura dados antigos.

## Novidades

- Botão **Diagnóstico API** em Registros.
- Botão **Atualização Forçada** em Registros.
- Limpeza opcional dos dados locais quando trocar a URL do Apps Script.
- Service Worker com cache novo V5.3.6.

## Subir no GitHub

Envie:

```text
index.html
manifest.json
service-worker.js
README.md
icons/icon-192.png
icons/icon-512.png
```

Mensagem de commit:

```text
Atualiza Central V5.3.6 com diagnóstico API e atualização forçada
```

## Teste

1. Config > Testar Conexão = REPROGEN_APPS_SCRIPT_V1_3_PLANILHA_NOVA.
2. Registros > Diagnóstico API.
3. Registros > Atualização Forçada.
4. Mapa > Atualizar Pontos GPS.

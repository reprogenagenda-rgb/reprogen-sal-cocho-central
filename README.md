# REPROGEN CENTRAL V5.3.5 — PWA Instalável + Mapa GPS Híbrido

Central web do sistema **REPROGEN SAL COCHO**, pronta para GitHub Pages e instalação no Android/Chrome.

## Arquivos principais

- `index.html` — Central completa.
- `manifest.json` — configuração PWA.
- `service-worker.js` — cache/offline do app shell.
- `icons/icon-192.png` — ícone Android/PWA.
- `icons/icon-512.png` — ícone Android/PWA.
- `README.md` — documentação do repositório.

## O que esta versão mantém

- Central V5.3.4 com mapa GPS híbrido.
- GPS de REGISTROS + COCHOS.
- Diagnóstico GPS.
- Data/hora local protegida.
- Tipos de mapa: Padrão, Satélite, Topográfico, Claro e Sem base.
- Painel, notas, estoque, propriedades, cochos, lotes, produtos, movimentações e registros.

## O que esta versão adiciona

- Manifest PWA.
- Service Worker.
- Ícones.
- Instalação pelo Android/Chrome.
- Abertura offline do app shell quando já carregado uma vez.

## Observação importante sobre offline

A Central pode abrir como PWA, mas a sincronização com Google Apps Script e mapas online dependem de internet.

O app shell pode abrir offline; já:
- Apps Script precisa de internet;
- mapas base online precisam de internet;
- dados novos precisam ser sincronizados online.

## Como subir no GitHub

Suba todos os arquivos e pastas:

```text
index.html
manifest.json
service-worker.js
README.md
icons/icon-192.png
icons/icon-512.png
```

Mensagem de commit sugerida:

```text
Atualiza Central V5.3.5 como PWA instalável com ícones
```

## Teste de instalação

1. Abra a Central pelo GitHub Pages com internet.
2. Aguarde carregar.
3. No Android/Chrome, toque nos três pontinhos.
4. Toque em **Adicionar à tela inicial** ou **Instalar app**.
5. Abra pelo ícone instalado.
6. Teste **Config > Testar Conexão**.
7. Teste **Registros > Atualizar**.
8. Teste **Mapa > Atualizar Pontos GPS**.
9. Teste **Diagnóstico GPS**.

## Critério de aprovação

- O ícone aparece na tela inicial.
- A Central abre pelo ícone.
- O painel abre normalmente.
- A conexão com Apps Script funciona com internet.
- O mapa mostra pontos GPS usando REGISTROS e/ou COCHOS.

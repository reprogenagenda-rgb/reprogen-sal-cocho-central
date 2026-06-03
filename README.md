# APP COCHO CENTRAL V5.5 — Mapa Satélite Restaurado

## Objetivo

Correção de regressão da Central Cocho, restaurando mapa padrão, mapa satélite Esri, pontos dos lançamentos, registros sem GPS e filtros por fazenda/lote/cocho/produto/usuário.

## Requisito

Usar com SCRIPT COCHO CLOUD V2.1 — GPS, Mapas e Auditoria Geográfica.

## Arquivos para subir

index.html, manifest.json, service-worker.js, README.md e pasta icons com icon-192.png e icon-512.png.

## Commit

Adicionar Central Cocho V5.5 com mapa satelite GPS e auditoria

## Testes

1. Config Cloud: colar URL do Cloud V2.1 e testar conexão.
2. Validar CHAVE_FAZENDA + PIN.
3. Teste Sync: enviar com GPS e enviar sem GPS.
4. Mapa: carregar Fazenda e Consultoria, alternar Padrão/Satélite.
5. Confirmar que com GPS aparece no mapa e sem GPS aparece na lista, sem cair em DADOS_SEM_VINCULO.

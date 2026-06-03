# APP COCHO CENTRAL V5.5.1 — HOTFIX MAPA

## Por que esta versão existe

A V5.5 pode ter sido carregada com cache antigo ou index compactado/incompleto no GitHub.
Esta versão corrige com:

- título visível APP COCHO CENTRAL V5.5.1;
- index.html completo e legível;
- quebra de cache no manifest;
- service-worker novo;
- mapa padrão OpenStreetMap;
- mapa satélite Esri;
- rotas Cloud V2.1:
  - listarPontosMapaFazenda;
  - listarPontosMapaConsultoria;
  - listarRegistrosSemGPS;
  - validarGPSRegistro.

## Arquivos a subir

Substitua no repositório da Central:

- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

## Commit

Adicionar Central Cocho V5.5.1 hotfix mapa satelite cache

## Como testar

1. Abra o GitHub e confirme que o index.html tem:
   APP COCHO CENTRAL V5.5.1 — HOTFIX MAPA

2. Abra a URL com:
   ?v=5.5.1

3. Configure a URL do Cloud V2.1.

4. Teste conexão.

5. Valide CHAVE_FAZENDA + PIN.

6. Envie teste com GPS.

7. Envie teste sem GPS.

8. Abra Mapa Satélite.

Aprovado se:

- aparecer V5.5.1;
- mapa abre;
- satélite Esri aparece;
- pontos com GPS aparecem;
- sem GPS aparece na tabela;
- sem GPS não cai em DADOS_SEM_VINCULO.

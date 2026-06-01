# REPROGEN CENTRAL V5.3.8 — GPS V1.3 Definitivo

Correção para quando a API mostra `Com gpsLat/gpsLng`, mas o mapa ainda mostra GPS zero.

## Subir no GitHub

Suba:

- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:

Atualiza Central V5.3.8 com GPS definitivo

## Teste

1. Abrir com `?v=538`
2. Registros > Atualização Forçada
3. Registros > Diagnóstico API
4. Mapa > Atualizar Pontos GPS
5. Mapa > GPS Local V1.3 Definitivo

Critério: REGISTROS com GPS válido maior que 0.

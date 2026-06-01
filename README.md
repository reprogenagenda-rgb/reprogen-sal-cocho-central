# REPROGEN CENTRAL V5.3.9 — GPS Debug Definitivo

Correção cirúrgica para quando a API `getRegistros` mostra GPS, mas o mapa ainda indica zero pontos.

## O que foi alterado

- Mantém layout e módulos existentes.
- Não mexe no Campo.
- Não mexe no Apps Script.
- Não troca URL.
- Usa a mesma chave local: `DB + '_regs'`.
- Adiciona:
  - **API x Local**
  - **DEBUG Registro Local**
  - **Reset Local**
  - **GPS Local Debug**
- Simplifica temporariamente a plotagem: **um ponto por registro com GPS válido**.
- Extrator GPS flexível para:
  - gpsLat, gpslat, gps_lat, GPS_LAT, GpsLat, lat, latitude
  - gpsLng, gpslng, gps_lng, GPS_LNG, GpsLng, lng, lon, longitude
  - gpsAcc, gpsacc, gps_acc, accuracy, acc
  - r.gps, r.payload, r.payloadJson

## Arquivos para subir no GitHub

```text
index.html
manifest.json
service-worker.js
README.md
icons/icon-192.png
icons/icon-512.png
```

## Mensagem de commit

```text
Corrige GPS definitivo da Central V5.3.9
```

## Teste obrigatório

Abrir com:

```text
https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/?v=539
```

Depois:

1. **Registros > Reset Local**
2. **Registros > Atualização Forçada**
3. **Registros > Diagnóstico API**
4. **Registros > API x Local**
5. **Mapa > DEBUG Registro Local**
6. **Mapa > GPS Local Debug**
7. **Mapa > Atualizar Pontos GPS**

Critério de aprovação:

```text
API mostra GPS
Local mostra GPS
Mapa plota pontos
Pontos GPS > 0
```

# APP COCHO CENTRAL V6.4.1 SUPABASE — Histórico GPS Raio CORRIGIDO

## Correção
O pacote anterior de V6.4 saiu com index.html ainda marcado como V6.3.1.  
Este pacote corrige o index.html e exibe corretamente V6.4.1.

## Base preservada
Evolução sobre a V6.3.1 aprovada:
- Supabase OK
- Propriedade ativa
- Lote
- Cocho com GPS
- Campo V1.0 sincronizando
- Histórico por cocho funcionando

## O que muda
- Histórico mostra nome do cocho, produto e operador quando possível.
- Calcula distância entre GPS do lançamento e GPS do cocho.
- Classifica:
  - DENTRO_DO_RAIO
  - FORA_DO_RAIO
  - SEM_GPS
  - GPS_IMPRECISO
  - COCHO_SEM_GPS

## SUPABASE
Não precisa rodar SQL novo.

## GITHUB
Substituir principalmente:
- index.html
- manifest.json
- service-worker.js
- README.md

Mensagem de commit:
`Corrige index Central Cocho V6.4.1 Historico GPS Raio`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.4.1-corrigido`

## Conferência
Dentro do index.html precisa aparecer:
`APP COCHO CENTRAL V6.4.1 SUPABASE`

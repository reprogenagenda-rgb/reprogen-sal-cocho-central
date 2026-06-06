# APP COCHO CENTRAL V6.4 SUPABASE — Histórico GPS Raio

## Base preservada
Evolução sobre a V6.3.1 aprovada:
- Supabase OK
- Propriedade ativa
- Lote
- Cocho com GPS
- Campo V1.0 sincronizando
- Histórico por cocho funcionando

## O que mudou
- Histórico mostra nome do cocho, produto e operador quando possível.
- Calcula distância entre GPS do lançamento e GPS do cocho.
- Classifica o lançamento:
  - DENTRO_DO_RAIO
  - FORA_DO_RAIO
  - SEM_GPS
  - GPS_IMPRECISO
  - COCHO_SEM_GPS
- Mantém kg total, número de lançamentos e kg/lançamento.
- Não altera a lógica de gravação já aprovada.

## SUPABASE
Não precisa rodar SQL novo.

## GITHUB
Substituir:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/

Mensagem de commit:
`Atualiza Central Cocho V6.4 Historico GPS Raio`

Abrir com quebra de cache:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.4-historico-gps-raio`

## Teste
1. Testar Supabase.
2. Confirmar propriedade ativa.
3. Histórico → Consultar Histórico.
4. Conferir se aparecem cocho, produto, kg, GPS, distância e status raio.
5. Fazer um novo lançamento pelo Campo.
6. Voltar no histórico e confirmar aumento do total.

# APP COCHO CENTRAL V6.5.1 SUPABASE — Consumo Animais Fix

## Diagnóstico
A V6.5 calculou corretamente 930 kg e 8 lançamentos, mas mostrou:
`animais_vinculados: 0`
`kg_animal_dia: 0`

Isso ocorreu porque o relatório não encontrou o vínculo explícito cocho → lote/quantidade de animais.

## Correção
A V6.5.1 melhora o cálculo:
- lê vários possíveis nomes de vínculo do cocho com lote: lote_id, id_lote, lote_atual_id, lote_vinculado_id;
- se houver apenas 1 lote na fazenda, usa fallback seguro `FALLBACK_LOTE_UNICO`;
- adiciona campo manual opcional `Qtd. animais manual`;
- exibe origem dos animais e origem do lote no relatório;
- exporta essas informações no CSV.

## Como testar no banco atual
Como a Fazenda Teste tem 1 lote e 1 cocho, o relatório deve conseguir usar fallback do lote único.
Se ainda aparecer 0, informe manualmente `30` no campo Qtd. animais manual.

## Regra de cálculo
`kg/animal/dia = kg total / animais / dias`

Exemplo:
`930 kg / 30 animais / 1 dia = 31,0000 kg/animal/dia`

## SUPABASE
Não precisa rodar SQL novo.

## GITHUB
Substituir no repositório da Central:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Corrige consumo animais Central Cocho V6.5.1`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.5.1-consumo-animais-fix`

## Validação técnica
JS validado com node --check: True

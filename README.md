# APP COCHO CENTRAL V6.6 SUPABASE — Fechamento de Consumo por Período

## Base preservada
Evolução sobre a Central V6.5.1 aprovada:
- Relatório por cocho funcionando.
- 930 kg, 8 lançamentos, 30 animais e 31,0000 kg/animal/dia validados.
- Campo V1.1.7 preservado.

## O que entrou
Nova aba **Fechamento**:
- data inicial e final;
- quantidade de animais manual opcional;
- preço R$/kg opcional;
- consumo mínimo e máximo para alerta;
- kg total;
- lançamentos;
- kg/animal/dia;
- custo total;
- alerta OK / BAIXO / ALTO;
- fechamento por produto;
- exportação CSV.

## Regra
`kg/animal/dia = kg total / animais / dias`

`custo total = kg total * preço R$/kg`

## SUPABASE
Não precisa rodar SQL.

## GITHUB
Substituir no repositório da Central:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Atualiza Central Cocho V6.6 fechamento consumo`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.6-fechamento-consumo`

## Teste
1. Abrir Central V6.6.
2. Ativar Fazenda Teste.
3. Ir em Fechamento.
4. Gerar sem data e sem preço.
5. Deve calcular 930 kg / 30 animais / 1 dia = 31,0000.
6. Informar preço R$/kg e gerar novamente.
7. Conferir custo total.
8. Exportar CSV.

## Validação técnica
JS validado com node --check: True

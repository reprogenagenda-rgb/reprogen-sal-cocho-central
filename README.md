# APP COCHO CENTRAL V6.5 SUPABASE — Relatório por Cocho e Consumo

## Base preservada
Evolução sobre a Central V6.4.2 aprovada:
- Supabase OK
- Propriedade ativa
- Histórico GPS funcionando
- Produto/operador em nome
- Distância e status do raio
- Compatibilidade com Campo V1.1.7

## O que entrou
Nova aba **Relatórios** com:
- filtro por data inicial e final;
- filtro por cocho;
- filtro por produto;
- total kg no período;
- total de lançamentos;
- cochos abastecidos;
- animais vinculados ao lote do cocho;
- dias analisados;
- consumo kg/animal/dia com 4 casas decimais;
- tabela por cocho;
- exportação CSV.

## Regra de cálculo
`kg/animal/dia = kg total do cocho / quantidade de animais do lote vinculado / dias analisados`

Se o cocho não tiver lote vinculado ou o lote não tiver quantidade de animais, o consumo fica `0,0000` e deve ser corrigido no cadastro.

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
`Atualiza Central Cocho V6.5 relatorio consumo`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.5-relatorio-consumo`

## Teste
1. Abrir Central V6.5.
2. Testar Supabase.
3. Ativar FAZENDA TESTE SUPABASE 01.
4. Ir em Relatórios.
5. Gerar relatório sem filtro.
6. Conferir 930 kg e 8 lançamentos no banco teste.
7. Conferir consumo kg/animal/dia.
8. Exportar CSV.

## Validação técnica
JS validado com node --check: True

# APP COCHO CENTRAL V6.8 SUPABASE — Estoque do Produto

## Base preservada
Evolução sobre a Central V6.7 aprovada:
- Fechamento por período.
- Custo total e R$/animal/dia.
- Campo V1.1.7 preservado.

## O que entrou
Nova aba **Estoque**:
- registrar entrada de produto em kg;
- preço R$/kg opcional na entrada;
- ajuste positivo/negativo;
- saídas automáticas calculadas pelos abastecimentos já sincronizados;
- saldo por produto;
- valor estimado do estoque;
- alerta OK / BAIXO / ZERADO;
- exportação CSV.

## Regra
`saldo kg = entradas kg - ajustes negativos kg - saídas por abastecimento`

`valor estoque = saldo kg × preço kg`

## Compatibilidade Supabase
A versão tenta gravar em `movimentacoes_estoque`.
Se a tabela/coluna não aceitar, salva a movimentação localmente na Central como fallback e avisa no JSON.

## SUPABASE
Não precisa rodar SQL para testar.
Para uso definitivo em nuvem, depois padronizamos a tabela `movimentacoes_estoque`.

## GITHUB
Substituir no repositório da Central:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Atualiza Central Cocho V6.8 estoque produto`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.8-estoque-produto`

## Teste
1. Abrir Central V6.8.
2. Ativar Fazenda Teste.
3. Ir em Estoque.
4. Selecionar produto.
5. Registrar entrada, exemplo: 1000 kg.
6. Atualizar estoque.
7. Confirmar saídas automáticas de 930 kg.
8. Conferir saldo de 70 kg.
9. Exportar CSV.

## Validação técnica
JS validado com node --check: True

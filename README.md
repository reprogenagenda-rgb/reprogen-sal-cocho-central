# APP COCHO CENTRAL V6.3.1 SUPABASE — Lançamentos sem regressão

## Base estável preservada
Evolução sobre a V6.2.2 aprovada:
- Supabase OK
- Propriedade ativa
- Usuário
- Produto
- Lote
- Cocho com GPS
- Base Campo

## O que entrou
- Aba Lançamentos.
- Registro de abastecimento por cocho.
- Quantidade colocada em kg.
- Produto/sal usado.
- Operador.
- Data/hora Brasília.
- GPS opcional do lançamento.
- ID operação cliente para evitar duplicidade.
- Aba Histórico por Cocho.

## SUPABASE
Primeiro teste SEM rodar SQL.

Rode o SQL opcional somente se aparecer erro de coluna inexistente em:
- lancamentos_cocho
- quantidade_kg
- cocho_id
- produto_id
- status_gps
- id_operacao_cliente

Arquivo:
SQL_OPCIONAL_V6_3_1_LANCAMENTOS_COCHO.txt

## GITHUB
Substituir:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/
- SQL_OPCIONAL_V6_3_1_LANCAMENTOS_COCHO.sql
- SQL_OPCIONAL_V6_3_1_LANCAMENTOS_COCHO.txt

Mensagem de commit:
`Atualiza Central Cocho V6.3.1 Lancamentos sem regressao`

Abrir com quebra de cache:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.3.1-lancamentos-sem-regressao`

## Teste oficial
1. Testar Supabase.
2. Confirmar propriedade ativa.
3. Confirmar que Lote e Cocho GPS continuam aparecendo.
4. Lançamentos → Preencher Teste.
5. Selecionar cocho e produto, se necessário.
6. Capturar GPS do lançamento, se quiser.
7. Salvar Lançamento.
8. Listar Lançamentos.
9. Histórico → Consultar Histórico.

## Regra de GPS
- Cocho fixo: GPS obrigatório ou coordenada manual.
- Lançamento: GPS opcional nesta fase; sem GPS salva como SEM_GPS.

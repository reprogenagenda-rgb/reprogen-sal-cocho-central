# APP COCHO CENTRAL V6.7 SUPABASE — Custo do Produto

## Base preservada
Evolução sobre a Central V6.6 aprovada:
- fechamento por período;
- 930 kg, 8 lançamentos, 30 animais e 31,0000 kg/animal/dia;
- Campo V1.1.7 preservado.

## O que entrou
- Produto agora aceita preço por unidade e preço por kg.
- O app calcula preço/kg quando preço/unidade e kg/unidade forem informados.
- Fechamento passa a usar:
  1. preço manual R$/kg, quando preenchido;
  2. preço/kg do cadastro do produto, quando disponível.
- Fechamento mostra:
  - custo total;
  - R$/animal/dia;
  - custo por produto;
  - CSV com custo e R$/animal/dia.

## Compatibilidade Supabase
Se as colunas de preço ainda não existirem no banco, o app cria produto sem preço e avisa.
Assim não quebra a base atual.

## SUPABASE
Nesta versão, não é obrigatório rodar SQL.
Mas para salvar preço no cadastro do produto, no futuro devemos adicionar colunas:
- preco_unidade numeric
- preco_kg numeric

## GITHUB
Substituir no repositório da Central:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Atualiza Central Cocho V6.7 custo produto`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.7-custo-produto`

## Teste
1. Abrir Central V6.7.
2. Ativar Fazenda Teste.
3. Ir em Fechamento.
4. Informar preço manual R$/kg.
5. Gerar fechamento.
6. Conferir custo total e R$/animal/dia.
7. Exportar CSV.

## Validação técnica
JS validado com node --check: True

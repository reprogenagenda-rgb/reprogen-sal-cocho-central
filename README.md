# APP COCHO CENTRAL V5.6 — Estoque, Consumo, Lotes, Sons e GPS

## Objetivo

Central gerencial conectada ao SCRIPT COCHO CLOUD V2.2.

Inclui:

- Produtos
- Estoque
- Entrada de Estoque
- Dashboard Consumo
- Lotes
- Movimentação de Lotes
- Mapa Satélite
- Registros sem GPS
- Sons nos botões
- Sons de sucesso/alerta/erro/GPS
- Botão Minha posição / Onde estou

## Arquivos a subir no GitHub

- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

## Commit sugerido

Adicionar Central Cocho V5.6 estoque consumo lotes sons gps

## Como abrir sem cache

Use:

```text
/reprogen-sal-cocho-central/?v=5.6
```

## Teste obrigatório

1. Config Cloud → colar URL do Script V2.2 → Testar conexão.
2. Acesso → validar CHAVE_FAZENDA + PIN.
3. Produtos → criar SAL MINERAL.
4. Entrada Estoque → registrar 300 kg.
5. Estoque → conferir saldo.
6. Teste Sync → enviar 25 kg de SAL MINERAL.
7. Estoque → conferir baixa automática.
8. Dashboard Consumo → atualizar.
9. Lotes → criar LOTE 01 com quantidade de animais.
10. Mov. Lotes → registrar movimentação.
11. Mapa Satélite → carregar mapa.
12. Mapa Satélite → Onde estou.

## Critério de aprovação

- Cloud V2.2 responde.
- Produto é criado.
- Entrada de estoque aumenta saldo.
- Lançamento de cocho baixa estoque.
- Dashboard calcula consumo.
- Lote é criado e movimentado.
- Mapa continua com pontos.
- Botão Onde estou centraliza posição.
- Sons funcionam e podem ser desligados.

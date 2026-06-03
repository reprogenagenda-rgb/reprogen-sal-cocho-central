# CENTRAL COCHO — Pasta de ícones e imagem para GitHub Pages

Esta pasta foi preparada para o repositório da **Central Cocho / REPROGEN Cocho**.

## Estrutura da pasta

```text
central-cocho/
├── icons/
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-180.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
├── assets/
│   ├── logo-central-cocho.png
│   ├── logo-central-cocho-quadrada.png
│   └── logo-central-cocho.svg
├── central-cocho-logo.png
├── manifest.json
├── index-exemplo.html
└── README.md
```

## O que subir no GitHub

Suba no repositório da **Central Cocho**:

1. A pasta `icons/`
2. A pasta `assets/`
3. O arquivo `manifest.json`
4. O arquivo `central-cocho-logo.png`
5. O seu `index.html` completo da Central Cocho

O arquivo `index-exemplo.html` é apenas modelo. Não precisa substituir seu app por ele.

## Como ligar no index.html da Central

Dentro do `<head>` do seu `index.html`, conferir se existem estas linhas:

```html
<meta name="theme-color" content="#0f5132">
<link rel="manifest" href="./manifest.json">
<link rel="apple-touch-icon" href="./icons/icon-180.png">
<link rel="icon" href="./icons/icon-192.png">
```

## Mensagem de commit sugerida

```text
Adicionar ícones e manifest da Central Cocho PWA
```

## Teste rápido

Depois de subir no GitHub Pages:

1. Abra a URL da Central no celular.
2. No Android/Chrome, toque em **Adicionar à tela inicial**.
3. No iPhone/Safari, toque em **Compartilhar > Adicionar à Tela de Início**.
4. Confirme se aparece o nome **Cocho Central** e o ícone verde com cocho.
5. Abra o app instalado e confira se não aparece apenas como aba comum do navegador.

## Observação importante

Para instalar como app/PWA, o repositório também precisa ter um `service-worker.js` funcional e o `index.html` precisa registrar esse service worker. Esta pasta resolve a parte visual/ícones/manifest.

# Central Studio Automotivo + Braga Insulfilms — Landing Page

Site único (`index.html`), autocontido — sem dependências externas além das fontes do Google Fonts.

## O que foi ajustado nesta versão
- Endereço atualizado: Rua Armando Siegel, Ponte do Imaruim, Palhoça, SC
- Braga agora descrita como "insulfilm automotivo e residencial"
- Imagem do hero recortada/tratada para ficar mais limpa (menos "poluída")
- Grid de cards (Central e Braga) agora responsivo com `auto-fit`, sem quebrar em telas médias — os dois usam exatamente a mesma estrutura visual
- Instagram: Central → @central.studio_automotiva_ph · Braga → @braga_
- Depoimentos reais de clientes (Renan, Alex, Miguel, João)
- Nomes das marcas em texto normal (sem caixa alta forçada), só o "+" entre elas ganha destaque em gradiente
- Botão "Orçamento" removido do menu
- Cores da Central (verde) e da Braga (vermelho) mais vivas e com mais destaque em botões, bordas e glows
- Menu mobile (hambúrguer) agora funcional

## Como configurar os dados de contato
Abra `index.html` e procure por `window.SITE_CONFIG` perto do topo do `<body>`:

```js
window.SITE_CONFIG = {
  central: { whatsapp: "55...", instagram: "https://instagram.com/central.studio_automotiva_ph" },
  braga:   { whatsapp: "55...", instagram: "https://instagram.com/braga_" },
  address: "Rua Armando Siegel, Ponte do Imaruim, Palhoça, SC",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=..."
};
```

Troque os números de WhatsApp (`5548...`) pelos números reais, no formato DDI+DDD+número, sem espaços ou símbolos.

**Importante:** GitHub Pages é hospedagem estática. Qualquer valor colocado neste arquivo (incluindo o WhatsApp) pode ser visto por quem inspecionar o código-fonte da página. Não é um segredo protegido — é só um contato público, então tudo bem manter aqui. Se um dia vocês precisarem esconder informação de verdade, isso exige um backend.

## Como publicar no GitHub Pages
1. Crie (ou use) um repositório no GitHub.
2. Suba os arquivos deste zip para a raiz do repositório (ou para a pasta `/docs`, se preferir).
3. Vá em **Settings → Pages** do repositório.
4. Em "Source", selecione a branch (geralmente `main`) e a pasta (`/root` ou `/docs`).
5. Salve. O GitHub vai gerar uma URL do tipo `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.
6. Atualize esse link em `sitemap.xml` se quiser manter o SEO correto.

## Trocar/adicionar fotos
As fotos atuais (Central e Braga) já estão embutidas no próprio `index.html` como imagens em base64, extraídas dos catálogos que vocês enviaram — não dependem de nenhuma pasta externa. Se quiser trocar alguma, é só substituir a respectiva `data:image/jpeg;base64,...` pela nova imagem convertida em base64, ou me pedir para trocar.

# Central × Braga — Landing Page

Landing page estática para **Central Studio Automotivo** e **Braga Insulfilms**.

## Estrutura

- `index.html` — estrutura da página
- `style.css` — visual, responsividade, glassmorphism e animações
- `app.js` — configuração e interações
- `config/site-config.example.js` — modelo dos dados locais
- `config/site-config.js` — dados locais, ignorado pelo Git
- `assets/` — fotos, logos e vídeos
- `.github/workflows/` — automação opcional do GitHub Pages

## Dados comerciais

O número de WhatsApp e links privados podem ficar em `config/site-config.js`.

**Importante:** GitHub Pages é estático. Se o navegador usa um dado, ele pode ser descoberto no site publicado. O objetivo aqui é evitar colocar o dado no repositório público. Para segredo real, use backend/serverless.

## Colocando imagens reais

Adicione as imagens em `assets/` e substitua os blocos da galeria por `<img src="assets/nome.jpg" ...>`.

## Publicar no GitHub Pages

1. Crie um repositório.
2. Envie os arquivos.
3. Em Settings → Pages, selecione GitHub Actions ou o branch de publicação.
4. Se usar apenas este site estático, ele funciona sem Node ou banco de dados.

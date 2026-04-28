# Lumen Studio — Website de amostra

Site de demonstração de um estúdio profissional fictício de web design e criação de websites.
Construído com HTML, CSS e JavaScript puro — sem dependências de build.

## Estrutura

- `index.html` — página inicial
- `servicos.html` — catálogo de serviços
- `processo.html` — metodologia em 4 fases
- `portfolio.html` — casos de estudo
- `precos.html` — pacotes e care plans
- `sobre.html` — equipa e empresa
- `faq.html` — 20 perguntas frequentes
- `contacto.html` — formulário e dados de contacto
- `politica-privacidade.html` — RGPD
- `termos-servico.html` — Termos e Condições
- `politica-cookies.html` — Política de Cookies
- `404.html` — página de erro
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`
- `assets/css/styles.css` — design system completo
- `assets/js/main.js` — tema escuro/claro, banner de cookies, formulário, animações

## Funcionalidades

- Tema claro/escuro com persistência em `localStorage`
- Animações de scroll (IntersectionObserver)
- Banner de cookies com 3 escolhas (RGPD)
- Formulário de contacto com validação
- Schema.org (ProfessionalService, FAQPage)
- Open Graph, canonical, sitemap
- Acessibilidade WCAG 2.2 AA (skip links, foco visível, contrast)

## Como abrir

Basta abrir `index.html` no browser ou servir com qualquer servidor estático:

```bash
python3 -m http.server 8080
```

## Aviso

Todas as referências a empresas, NIPC, moradas, telefones e clientes são fictícias e
servem apenas para fins demonstrativos.

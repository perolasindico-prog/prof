# Lumen Studio — Website de amostra

Site de demonstração de um estúdio profissional fictício de web design e criação de websites.
Construído com HTML, CSS e JavaScript puro — sem dependências de build.

## 🚀 Abrir o website (clica nos links)

A forma mais fácil de ver o site **sem instalar nada**: clica nos links abaixo. Eles abrem o site renderizado diretamente a partir desta branch do GitHub.

### Pré-visualização ao vivo (recomendado)

👉 **[Abrir Home](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/index.html)**

Outras páginas:

- [Início](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/index.html)
- [Serviços](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/servicos.html)
- [Processo](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/processo.html)
- [Portfólio](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/portfolio.html)
- [Preços](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/precos.html)
- [Sobre](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/sobre.html)
- [FAQ](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/faq.html)
- [Contacto](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/contacto.html)
- [Política de Privacidade](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/politica-privacidade.html)
- [Termos e Condições](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/termos-servico.html)
- [Política de Cookies](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/politica-cookies.html)

> Os links usam **raw.githack.com** que serve os ficheiros diretamente com os tipos MIME corretos (CSS e JS carregam bem). Não precisas de instalar nada.

### Alternativa: GitHub Pages (URL definitivo)

Para um link mais bonito e estável, ativa o GitHub Pages:

1. Vai a **Settings → Pages** no repositório
2. Em *Source* escolhe **Deploy from a branch**
3. Branch: `claude/web-design-service-site-hLBTw` · pasta: `/ (root)` · clica **Save**
4. Em 1–2 minutos o site fica em: `https://perolasindico-prog.github.io/prof/`

### Localmente (opcional)

Se quiseres correr no teu computador:

```bash
git clone -b claude/web-design-service-site-hLBTw https://github.com/perolasindico-prog/prof.git
cd prof
python3 -m http.server 8080
# abre http://localhost:8080 no browser
```

> ⚠️ Duplo-clique em `index.html` (`file://`) também funciona, mas o browser pode bloquear o `manifest.webmanifest` e gerar warnings na consola. Os links acima são mais fiáveis.

---

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

## Aviso

Todas as referências a empresas, NIPC, moradas, telefones e clientes são fictícias e
servem apenas para fins demonstrativos.

# Daily More — Sample website

Demo website for a fictional professional web design and development studio.
Built with plain HTML, CSS and JavaScript — no build step required.

Domain (when deployed): **daily-more.info**

## 🚀 Open the website (click the links)

The easiest way to view the site **without installing anything**: click the links below. They open the site rendered directly from GitHub.

### ⭐ Always up-to-date version (recommended)

These links follow the latest commit on the branch. If you see a stale version, force-refresh (`Ctrl`+`Shift`+`R` / `Cmd`+`Shift`+`R`) or open in a private window.

👉 **[Open Home](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/index.html)**

Other pages:

- [Home](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/index.html)
- [Services](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/servicos.html)
- [Process](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/processo.html)
- [Portfolio](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/portfolio.html)
- [Pricing](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/precos.html)
- [About](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/sobre.html)
- [FAQ](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/faq.html)
- [Contact](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/contacto.html)
- [Privacy Policy](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/politica-privacidade.html)
- [Terms & Conditions](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/termos-servico.html)
- [Cookie Policy](https://raw.githack.com/perolasindico-prog/prof/claude/web-design-service-site-hLBTw/politica-cookies.html)

### Deploying to your own domain

To go live on **daily-more.info**, the easiest options are:

1. **GitHub Pages** — In **Settings → Pages**, choose this branch as source. Then add a `CNAME` file with `daily-more.info` and point your DNS to GitHub.
2. **Netlify / Vercel / Cloudflare Pages** — Connect the repo, choose the branch, set the custom domain to `daily-more.info`. No build command needed (it's pure static files).

### Run locally

```bash
git clone -b claude/web-design-service-site-hLBTw https://github.com/perolasindico-prog/prof.git
cd prof
python3 -m http.server 8080
# open http://localhost:8080
```

---

## Structure

- `index.html` — home page
- `servicos.html` — services catalogue
- `processo.html` — 4-phase methodology
- `portfolio.html` — case studies
- `precos.html` — packages and care plans
- `sobre.html` — team and company
- `faq.html` — 20 frequently asked questions
- `contacto.html` — form and contact details
- `politica-privacidade.html` — privacy policy (NDPR/GDPR)
- `termos-servico.html` — terms and conditions
- `politica-cookies.html` — cookie policy
- `404.html` — error page
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`
- `assets/css/styles.css` — full design system
- `assets/js/main.js` — light/dark theme, cookie banner, form, animations

## Features

- Light/dark theme with `localStorage` persistence
- Scroll-reveal animations (IntersectionObserver)
- Cookie banner with 3 consent choices (NDPR/GDPR)
- Contact form with client-side validation
- Schema.org markup (ProfessionalService, FAQPage)
- Open Graph, canonical, sitemap
- WCAG 2.2 AA accessibility (skip links, focus-visible, contrast)

## Notice

All references to companies, registration numbers, addresses, phone numbers and clients are fictional and serve only as a demonstration.

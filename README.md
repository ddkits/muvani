# MUVANI – Division of Reallexi LLC (Static React + SEO)

- Multipage React site (Vite + HashRouter) for GitHub Pages
- Brand palette applied (Deep Teal #1D4C4F, Mustard #E7B94B, Coral #E77951, Cream #F6EDE1, Fuchsia #E75D7E)
- SEO: react-helmet-async per page, OpenGraph/Twitter tags, robots.txt, sitemap.xml, manifest.json

## Quick Start
npm i
npm run dev

## Deploy to GitHub Pages
- Set `base` in vite.config.js to `/<repo>/` (your repository name).
- Push to GitHub → Settings → Pages → use GitHub Actions or deploy from branch.
- Replace `<username>` and `<repo>` placeholders in `robots.txt`, `sitemap.xml`, and Helmet canonical/og:url.

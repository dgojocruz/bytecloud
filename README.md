# Bytecloud Website

Rebuild of bytecloud.com.ph — React + Vite, deployed on Vercel.
Built following the `bytecloud-web-team` skill (Designer, Frontend Dev, Content/SEO,
Brand/Copywriter, ERP Platform Engineer, QA/Deployment roles).

## Stack

- React + Vite
- React Router
- ESLint + Prettier (enforced via Husky pre-commit hook)
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run format` — Prettier, writes in place
- `npm run preview` — preview the production build locally

## Git workflow

1. Work locally on a feature branch or directly against `staging`.
2. Push to `origin staging`, verify on the Vercel preview deploy.
3. Promote `staging` → `main` once verified.
4. If conflicts arise and `staging` is the source of truth:
   `git reset --hard origin/staging`
5. Tag meaningful releases (e.g. `v1.0.0-pre-launch`) for clean rollback points.

Commits follow [Conventional Commits](https://www.conventionalcommits.org/)
(`feat:`, `fix:`, `chore:`, `docs:`, etc.).

## Structure

```
src/
├── components/
│   ├── atoms/        # smallest reusable pieces
│   ├── molecules/     # e.g. ServiceCard
│   └── organisms/     # Header, Footer, larger composed sections
├── pages/              # route-level components
├── data/               # typed content config (services, case studies)
└── assets/
```

Service and case-study content lives in `src/data/`, not hardcoded in JSX —
adding a new service or case study should not require touching layout code.

## Layout & responsive conventions

- **Mobile-first CSS**: base rules in `src/index.css` target small screens.
  Complexity is added with `min-width` media queries (`640px`, `900px`,
  `1100px`), never `max-width` overrides. Keep new component styles
  consistent with this — write the mobile layout first, then progressively
  enhance.
- **Container width**: `--max-width: 1440px` (`src/index.css`) is the site's
  content boundary, matching wider modern B2B/SaaS site standards. Body text
  blocks use the narrower `--measure: 640px` for readable line length —
  don't stretch paragraphs to the full container width.
- Test any new section at ~375px (mobile), ~768px (tablet), and ~1440px+
  (desktop) before considering it done.
- **Full-bleed sections** (like the homepage hero): use the `width: 100vw;
left: 50%; margin-left: -50vw` pattern (see `.hero` in `src/index.css`) to
  break out of `main`'s max-width/padding, then wrap inner content in a
  container that re-applies `--max-width`/`--container-pad` so text still
  lines up with the rest of the page.

## Brand assets

- `src/assets/brand/bytecloud-logo.svg` — primary wordmark (light text, blue
  accent on the "Y"), for dark backgrounds. Used in Header/Footer.
- `public/favicon.svg` — compact "Y" monogram on navy, used as the browser
  favicon.
- Wordmark font is Poppins (300 weight), loaded via Google Fonts in
  `index.html`. Distinct from the site's body/heading fonts (Inter/Space
  Grotesk) — intentional, logos commonly use their own typeface.
- TODO: a light-background version of the wordmark (navy text) doesn't exist
  yet — needed if the logo is ever placed on a light surface (print,
  partner co-branding, etc.).

## Known TODOs (do not treat placeholders as final)

- [ ] Hero video (`src/pages/Home.jsx`) is a free Pexels stock clip reused
      from the previous Hostinger site as an interim asset -- flagged in-code.
      Swap for real Bytecloud footage when available.
- [ ] Real color palette + typography — current palette in `src/index.css` is a
      starting direction (graphite/blue, technical), not locked in. Confirm with Darwin.
- [ ] Contact form: `CONTACT_FORM_URL` in `src/pages/Contact.jsx` is unset —
      create the Bytecloud Google Form (same pattern as Avocadoria's careers/
      franchise forms) and wire it in. Alternative: serverless function + email API.
- [ ] Case study content in `src/data/caseStudies.js` is a placeholder
      (`placeholder: true`) — do not ship without real, confirmed copy.
- [ ] About page copy is still boilerplate-adjacent — needs real differentiators
      (certifications, partner status, years active, notable clients) confirmed
      with Darwin.
- [ ] Structured data (schema.org ProfessionalService) not yet implemented.
- [ ] Domain migration (bytecloud.com.ph currently on Hostinger) — need
      registrar info before planning DNS/SSL cutover.
- [ ] `vercel.json` already excludes `/assets/` from the SPA rewrite — this was
      a hard-learned lesson from the Avocadoria build (catch-all rewrites can
      intercept JS/CSS MIME types and blank-page the site). Don't remove it.

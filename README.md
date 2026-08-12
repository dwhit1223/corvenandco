# Corven & Company — website

Single-page marketing site for Corven & Company LLC, built with Vite + React
(no framework beyond React itself). Static output, suitable for Cloudflare
Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview   # serve the built dist/ locally to sanity-check
```

Build output goes to `dist/`. `npm run build` runs three steps in sequence
(`build:client` → `build:ssr` → `prerender`): it builds the normal client
bundle, builds a throwaway server-side bundle from `src/entry-server.jsx`,
then `scripts/prerender.mjs` renders the app to static HTML and injects it
into `dist/index.html`'s `#root`, so the shipped HTML contains real page
content (not just an empty div) before any JavaScript runs. The client
still hydrates normally on load — see `src/main.jsx`. Run
`npm run build:client` alone if you ever need the plain client-only build.

## Linting

```bash
npm run lint
```

## Deploying to Cloudflare Pages (GitHub integration)

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a project connected to the repo.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Connect the `corvenandco.com` domain once the project is live.

## Project structure

- `src/config/site.js` — all unresolved/owner-supplied values (contact email,
  scheduling URL, social links, privacy page URL). Nothing here renders to
  visitors until it's filled in.
- `src/components/` — one component per page section, each with a
  co-located CSS module.
- `src/assets/logo/` — approved logo files (currently the horizontal navy
  wordmark used in the header).
- `public/` — static assets served as-is: approved favicon set,
  `robots.txt`, `sitemap.xml`, and a stable-path copy of the logo used only
  as the JSON-LD `logo` URL (the header itself uses the hashed, bundled copy
  from `src/assets/logo/`).
- `src/entry-server.jsx` / `scripts/prerender.mjs` — the static-prerendering
  build step described above.

## SEO configuration

- `src/config/site.js` has a clearly labeled, unfilled section for
  `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`, and
  `ANALYTICS_MEASUREMENT_ID`. None are wired into `index.html` yet — do
  that only once real, approved values exist.
- `public/robots.txt` and `public/sitemap.xml` are static files; edit them
  directly if the canonical domain or homepage URL ever changes.

## Unresolved launch items

These are intentionally not filled in and are called out in code where
relevant:

- Final contact email (`CONTACT_EMAIL` in `src/config/site.js`) — until set,
  the Contact CTA renders as a disabled button rather than exposing a
  placeholder address
- Contact form endpoint or scheduling URL, if either replaces the mailto
  CTA
- Confirmed social profile URLs (`SOCIAL_LINKS` in `src/config/site.js`)
- Privacy policy page and URL (`PRIVACY_URL` in `src/config/site.js`)
- A dedicated 1200×630 social-sharing image — `og:image` is intentionally
  omitted from `index.html` until one exists (see comment there)
- Google Search Console verification, Bing Webmaster verification, and an
  analytics measurement ID — see "SEO configuration" above
- Cloudflare Pages project + custom domain connection, including
  confirming Cloudflare's automatic HTTPS/hostname redirect behavior once
  the domain is attached

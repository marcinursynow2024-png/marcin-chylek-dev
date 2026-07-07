# marcin-chylek-dev

Static bilingual (PL/EN) portfolio site built with Astro + React islands, deployed to GitHub Pages.

## Cursor Cloud specific instructions

- Stack: Astro 6 + React 19 islands, plain CSS, npm. Node 22 (matches CI in `.github/workflows/deploy.yml`). No backend, database, or external services — it's a purely static front-end.
- Dependencies are installed by the startup update script (`npm install`). No extra setup is required.
- Run the dev server with `npm run dev` (see `package.json`). Because `astro.config.mjs` sets `base` to `/` only when `NODE_ENV === 'development'`, the dev URL is `http://localhost:4321/` (and `/en/` for English) — NOT `/marcin-chylek-dev`. The README's `/marcin-chylek-dev` local URL is stale; that base path only applies to the production build.
- Build/preview: `npm run build` outputs static files to `dist/` (uses the `/marcin-chylek-dev` base since `NODE_ENV` is not `development`); `npm run preview` serves that build.
- There is no lint script and no automated test suite. Type generation runs as part of `astro build`; `npx astro check` can be used for type checking if needed.
- Core interactive functionality lives in React islands: `ThemeToggle` (light/dark) and `LangSwitch` (PL/EN). Verify these when smoke-testing.

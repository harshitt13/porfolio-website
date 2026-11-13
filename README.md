# harshitt13.in

Personal portfolio for **Harshit Kushwaha** — Software Engineer and open-source
contributor (CNCF / OpenTelemetry). A single-page terminal emulator: boot
sequence, shell prompts, and a live session clock.

**Live:** <https://harshitt13.in>

## Stack

|           |                                                               |
| --------- | ------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack)                            |
| Language  | TypeScript 5.7 (strict)                                       |
| Styling   | Tailwind CSS v4 — palette defined in `@theme`, no config file |
| Analytics | Vercel Analytics + Speed Insights (production only)           |
| Hosting   | Vercel                                                        |

Runtime dependencies are deliberately minimal: React, Next, and the two Vercel
analytics packages. No UI kit, no CSS-in-JS, no icon library.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Script                            | What it does                                          |
| --------------------------------- | ----------------------------------------------------- |
| `npm run dev`                     | Dev server                                            |
| `npm run build`                   | Production build                                      |
| `npm run start`                   | Serve the production build                            |
| `npm run qa`                      | `format:check` + `type-check` + `lint` — what CI runs |
| `npm run lint` / `lint:fix`       | ESLint 9 (flat config)                                |
| `npm run format` / `format:check` | Prettier                                              |
| `npm run type-check`              | `tsc --noEmit`                                        |

Run `npm run qa` and `npm run build` before deployment.

For production regression checks, start the built site with `npm start`, then
run `npm test` in another terminal. Set `SITE_TEST_URL` to use another local port.
These checks cover IP validation, response headers, metadata, contribution links,
the sitemap, and 404 responses.

## Dependency maintenance

ESLint 10 is currently blocked by the peer dependencies of
`eslint-plugin-react@7.37.5` and `eslint-plugin-import@2.32.0`, both pulled in by
`eslint-config-next@16.4.6`. Keep ESLint 9 until these plugins support version 10
or the lint configuration is deliberately migrated. Do not use `--force` or
`--legacy-peer-deps` to bypass this check. ESLint 9 is end-of-life, so this is a
temporary compatibility constraint, not a long-term maintenance solution.

The `allowScripts` entry approves only `unrs-resolver@1.12.2`. Its postinstall
helper checks for the platform-specific native binding and may install or
download the matching binary from the configured npm registry if it is missing.
Review the script and its helper again before approving a newer version. The
policy requires an npm version supporting `allowScripts`; older npm versions
such as 11.9 do not enforce it.

## Layout

```
app/
  layout.tsx            Root layout, metadata, schema.org @graph
  page.tsx              The single page — composes the sections
  globals.css           @theme palette + terminal effects
  opengraph-image.tsx   Generated 1200x630 social card
  manifest.ts           Web app manifest
  robots.ts             robots.txt
  sitemap.ts            sitemap.xml
  error.tsx             Route error boundary
  global-error.tsx      Root error boundary
  not-found.tsx         404
  api/ip/route.ts       Echoes the visitor IP for the boot sequence
  quotes/               Standalone quote page (not linked from the portfolio)
components/             One component per section, plus the terminal chrome
lib/
  config.ts             All content — projects, contributions, career, skills
  types.ts              Shared interfaces
  utils.ts              Date/time formatting, reduced-motion check
  use-interval-value.ts useSyncExternalStore hook backing the clocks
```

### Editing content

Everything shown on the page lives in `lib/config.ts`. Adding a project or a
pull request means adding an object there — no component changes.

### Colors

`app/globals.css` owns the palette in its `@theme` block, which Tailwind turns
into `bg-term-panel`, `text-term-accent`, and so on. `THEME` in `lib/config.ts`
mirrors those values for the OG images only, because Satori renders outside a
browser and cannot resolve CSS variables. Change one, change the other.

## Accessibility

Every section has a heading and a matching `aria-labelledby`. Decorative shell
prompts are `aria-hidden`. Interactive targets meet WCAG 2.2 minimum sizes, and
animations are disabled under `prefers-reduced-motion`.

## License

[MIT](LICENSE) for the code. The written content, résumé, and personal
likeness are not covered.

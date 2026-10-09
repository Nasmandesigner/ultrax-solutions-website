# UltraX Solutions Website

The official website for UltraX Solutions. The site presents the company’s positioning, capabilities, documented work, company information, and contact details.

## Prerequisites

- Node.js 20.9.0 or newer, as required by the installed Next.js version.
- pnpm 11.25.0, pinned by the `packageManager` field in `package.json`.

## Install dependencies

From the project root, install the exact dependency versions recorded in the lockfile:

```sh
pnpm install --frozen-lockfile
```

## Run locally

Start the Next.js development server:

```sh
pnpm dev
```

Then open <http://localhost:3000>.

Local development defaults the site origin to `http://localhost:3000`; no secret environment values are needed to preview the current site. `.env.example` documents the public origin setting used for production metadata.

## Available project scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server. |
| `pnpm typecheck` | Run TypeScript without emitting files. |
| `pnpm build` | Create the optimized production build. |
| `pnpm start` | Serve a production build locally; run `pnpm build` first. |

A production build requires `NEXT_PUBLIC_SITE_URL` to be set to the verified public HTTPS origin before the build runs. For example, in PowerShell:

```powershell
$env:NEXT_PUBLIC_SITE_URL = "https://your-verified-domain.example"
pnpm build
pnpm start
```

Replace the example origin with the actual production domain. The value is used for canonical metadata, the sitemap, and the robots file. Do not use the local preview origin for a deployment build.

## Project structure

- `src/app/` — App Router pages, global styles, metadata, icons, sitemap, and robots rules.
- `src/components/` — shared navigation, footer, project, capability, and call-to-action components.
- `src/data/` — site, team, capability, and documented project content.
- `src/app/fonts/` — local Lufga font files loaded by the app.
- `public/brand/` and `public/images/` — approved runtime brand and image assets.
- `Assets/` and `Reference/` — source material and working asset archive; review before sharing publicly.

The company profile PDF in `Reference/` is intentionally excluded by `.gitignore`. Do not force-add it to a public repository. Only the runtime assets the site uses should be staged from the source asset archives.

## Before deployment

- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain and verify its DNS and TLS configuration.
- Confirm web-use rights for the local font files; see `ASSET-GUIDE.md`.
- The Contact page currently provides email and telephone links; it does not include a form submission service.
- Add approved project or team imagery only after confirming usage rights and credits.

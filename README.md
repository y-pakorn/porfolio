# yoisha — Personal Portfolio

A single-page personal portfolio for **yoisha** — a software developer and
cryptography engineer — showcasing projects and hackathon work. Built with the
Next.js App Router, React 19, and Tailwind CSS v4.

> The content (projects, hackathons, links) is data-driven: it lives in a few
> typed config files, so updating the site never means touching component code.

## Tech stack

| Area        | Choice                                                        |
| ----------- | ------------------------------------------------------------- |
| Framework   | [Next.js 15](https://nextjs.org) (App Router) + React 19      |
| Language    | TypeScript 5 (strict, `ES2022`)                               |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config) |
| UI          | [shadcn/ui](https://ui.shadcn.com) + [magicui](https://magicui.design) |
| Motion      | [motion](https://motion.dev) (parallax) + [lenis](https://lenis.darkroom.engineering) (smooth scroll) |
| Env safety  | [@t3-oss/env-nextjs](https://env.t3.gg) + zod                 |
| Tooling     | pnpm · ESLint 9 (flat config) · Prettier                      |
| Analytics   | Vercel Analytics · Google Analytics (optional)               |

## Features

- ⚡ Next.js 15 App Router with React 19 Server Components
- 🎨 Tailwind v4 design tokens, dark theme, custom local fonts
- 🪄 Scroll-driven parallax hero and smooth scrolling
- 🧩 Fully data-driven content (`src/config/*`)
- 🔎 SEO out of the box: dynamically generated Open Graph / Twitter image,
  `robots.txt`, `sitemap.xml`, and canonical metadata
- ✅ Type-safe environment variables and content config

## Getting started

**Prerequisites:** Node.js 18.18+ and [pnpm](https://pnpm.io).

1. Clone and install dependencies:

   ```bash
   git clone https://github.com/y-pakorn/porfolio
   cd porfolio
   pnpm install
   ```

2. Create your local env file:

   ```bash
   cp .env.example .env.local
   ```

   | Variable              | Required | Description                          |
   | --------------------- | -------- | ------------------------------------ |
   | `NEXT_PUBLIC_APP_URL` | yes      | Base URL used for canonical/OG/sitemap |
   | `NEXT_PUBLIC_GA_ID`   | no       | Google Analytics measurement ID      |

3. Start the dev server:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command            | What it does                                    |
| ------------------ | ----------------------------------------------- |
| `pnpm dev`         | Start the development server                    |
| `pnpm build`       | Production build (also type-checks and lints)   |
| `pnpm start`       | Serve the production build                      |
| `pnpm lint`        | Lint with ESLint flat config                    |
| `pnpm lint:fix`    | Lint and auto-fix                               |
| `pnpm format`      | Format `src` with Prettier                      |
| `pnpm format:check`| Check formatting without writing                |

## Customizing the content

Everything you see on the page comes from `src/config`:

- **`site.ts`** — name, description, social links, and SEO keywords.
- **`works.ts`** — the `PROJECTS` and `HACKATHONS` arrays. This is where you add
  or edit entries. A project references an organization (`w`) and `chain` by
  name; those names must exist in `registry.ts` (enforced at compile time).
- **`registry.ts`** — metadata (logo, description, website) for the chains and
  organizations referenced by projects.

Theme tokens, fonts, and keyframes live in `src/styles/globals.css`.

## Project structure

```
src/
  app/        # layout, page, OG/twitter image, robots, sitemap, fonts
  components/ # section components, providers, shadcn/ui + magicui
  config/     # site.ts, works.ts, registry.ts  ← edit content here
  lib/        # utils (cn)
  styles/     # globals.css (Tailwind v4 theme)
```

## Deployment

Deploy on [Vercel](https://vercel.com): import the repo and set
`NEXT_PUBLIC_APP_URL` (and optionally `NEXT_PUBLIC_GA_ID`) in the project's
environment variables. Any Node.js host that runs `pnpm build` / `pnpm start`
works too.

## License

See [LICENSE](./LICENSE).

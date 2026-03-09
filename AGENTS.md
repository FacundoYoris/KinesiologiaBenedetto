# AGENTS.md
This repository is a single-page marketing/booking landing built with Next.js (App Router), TailwindCSS, and Framer Motion.
Primary goal: conversion to WhatsApp/Instagram with fast load + good a11y + clean medical/startup aesthetic.

## Commands
### Install
```bash
npm install
```
### Dev
```bash
npm run dev
```
If you're on Windows using Git Bash and `npm run ...` fails with `"node" no se reconoce...`, run Next directly:
```bash
./node_modules/.bin/next dev
```
### Build (also runs TypeScript checks)
```bash
npm run build
```
Fallback (Git Bash PATH issues):
```bash
./node_modules/.bin/next build
```
### Start (production)
```bash
npm run start
```
Fallback:
```bash
./node_modules/.bin/next start
```
### Type-check only
```bash
./node_modules/.bin/tsc -p tsconfig.json --noEmit
```
### Lint / Tests
- Lint not configured (no ESLint dependency / no `lint` script).
- Tests not configured (no unit/e2e runner). If/when added: Playwright single test `npx playwright test tests/foo.spec.ts`, Vitest single test `npx vitest run path/to/test.test.ts`.

## Repo Layout

- `app/layout.tsx`: fonts + `metadata` (SEO) + global layout.
- `app/page.tsx`: page composition (sections, navbar, floating WhatsApp).
- `app/globals.css`: Tailwind layers + global styles.
- `components/`: shared UI building blocks.
  - `components/sections/*`: landing sections.
  - `components/Reveal.tsx`: Framer Motion reveal-on-scroll helper.
  - `components/FaqAccordion.tsx`: accessible accordion.
- `lib/links.ts`: canonical external links (WhatsApp/Instagram/Maps).
- `public/imagenes/*`: brand + content images.

## Stack Conventions

### Next.js (App Router)

- Default to Server Components.
- Add `'use client'` only when needed (Framer Motion, state, effects, DOM access).
- Prefer `next/image` for all images (local assets in `public/`).
- Keep `metadata` accurate in `app/layout.tsx`.

### TailwindCSS

- Brand colors are defined in `tailwind.config.js` under `colors.brand.*`.
  - Use dashed utilities: `bg-brand-primary`, `text-brand-text`, `ring-brand-dark/10`.
  - Do NOT use dot notation like `bg-brand.primary` (Tailwind will not generate those classes).
- Prefer subtle depth: `shadow-soft`, `shadow-card`, translucent surfaces (`bg-white/80`) + `ring-*`.
- Mobile-first: ensure tap targets >= 44px (buttons should be `py-3`+).

### Framer Motion

- Use motion for:
  - section reveals (already centralized in `components/Reveal.tsx`)
  - small micro-interactions (hover/tap)
- Respect reduced motion:
  - use `useReducedMotion()` and disable/soften animations when true.

## Code Style Guidelines

### Formatting

- Keep existing formatting style (2-space indentation).
- Keep JSX attributes on multiple lines when long.
- Avoid huge Tailwind class strings duplicated across files; if repetition grows, extract a small component.

### Imports

- Order imports:
  1) React / Next / third-party
  2) internal imports via `@/*`
- Use `import type { ... }` for type-only imports.
- Prefer the `@/*` alias (configured in `tsconfig.json`).

### Naming

- Components: `PascalCase` (e.g., `Navbar`, `WhatsappFloatingButton`).
- Files: React components in `PascalCase.tsx` (current convention in `components/`).
- IDs/anchors: kebab-case section IDs (`#sobre-mi`, `#turnos`).

### Types

- `strict: true` in `tsconfig.json`: avoid `any`.
- Prefer explicit prop types for exported components.
- For small local constants, let TS infer unless it becomes ambiguous.

### Accessibility (non-negotiable)

- All interactive elements must have:
  - visible `focus-visible` styles (ring + offset)
  - adequate contrast (WCAG-ish; don’t ship low-contrast text)
- Icon-only buttons must have `aria-label`.
- Accordion must remain keyboard-accessible (already implemented).
- Decorative images: `alt=""`; meaningful images: descriptive `alt`.

### Error Handling / Safety

- Guard DOM queries and browser-only APIs in client components.
- For external links use `target="_blank"` + `rel="noreferrer"`.
- When constructing URLs with query params, always `encodeURIComponent` (see `lib/links.ts`).

## UI/UX Rules For This Repo

- Aesthetic: modern healthcare startup (clean, trustworthy, calm).
- Color strategy: dominant blues (brand), restrained accents, no random rainbow.
- Motion strategy: subtle, purposeful. Avoid distracting loops; keep durations ~150–300ms for micro-interactions.
- Conversion: primary CTA must be visually dominant and readable in all states (default/hover/focus/active).

## SEO & Performance Checklist

- Keep one clear `h1` on the page; section titles as `h2`.
- Update `metadata` in `app/layout.tsx` when copy/offer changes.
- Use `next/image` with correct `sizes`; set `priority` only for the LCP image.
- Prefer local images in `public/imagenes/`; keep file sizes reasonable.
- Avoid adding heavy dependencies; prefer CSS/Tailwind for simple effects.
- Keep animations to `transform`/`opacity`; respect `prefers-reduced-motion`.

## Cursor/Copilot Rules

- No `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` found in this repo.

## Known Gotchas

- On some Windows shells (Git Bash), `npm run build/dev` may fail to find `node`. Use `./node_modules/.bin/next ...` as a fallback.
- If a style looks “broken”, first check for invalid Tailwind class names (e.g., `bg-brand.primary`).

## When Making Changes

- Prefer minimal diffs: adjust one section/component at a time.
- Run `./node_modules/.bin/next build` before declaring work done.
- Keep `lib/links.ts` as the single source of truth for WhatsApp/Instagram/Maps.

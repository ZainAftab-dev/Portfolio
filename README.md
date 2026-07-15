# Zain Aftab — Portfolio

Personal portfolio site for [Zain Aftab](https://github.com/ZainAftab-dev) — full-stack developer and founder of [Strategeon Softwares](https://strategeonsoftwares.com/). Built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** _add your deployed URL here once live on Vercel_

## Features

- **Interactive particle-network hero** — custom Canvas animation with cursor-repulsion physics, built in TypeScript, with `prefers-reduced-motion` support and a mobile-safe fallback
- **Bento-grid project showcase** with custom SVG decorative visuals (`TechVisual`) and a hover/focus reveal for each project's links and tech stack
- **Rolling-list process section** with hover-activated thumbnail reveals
- **Infinite auto-scrolling skills marquee**
- **Dynamically-balanced testimonials masonry** — measures real rendered card heights client-side and bin-packs them into the shortest column, so the layout stays visually balanced at any viewport width
- **Live GitHub contribution graph**
- Fully responsive, dark-themed, accessible (WCAG-conscious contrast and motion handling)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for scroll/hover animation
- [Lucide](https://lucide.dev/) icons

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
  app/                 # Next.js App Router entry (layout, page, global styles)
  components/
    sections/          # Hero, About, Skills, Projects, Process, Testimonials, Certifications, GithubStats, Footer
    decorative/         # TechVisual — reusable SVG decorative art for project/process tiles
    icons/               # Custom inline icons (e.g. GithubIcon)
  data/                # Content data (projects, skills, process steps, testimonials, certifications)
  lib/                 # Shared utilities
public/                # Static assets (headshot, résumé PDF)
```

## Deployment

This project is designed to deploy on [Vercel](https://vercel.com/) with zero configuration:

1. Push this repo to GitHub
2. Import it in Vercel
3. Deploy — no environment variables required

## License

Personal project — all rights reserved.

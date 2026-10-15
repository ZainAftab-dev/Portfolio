# Zain Aftab — Portfolio

[![Live Site](https://img.shields.io/badge/Live-zainaftab--dev.vercel.app-000000?logo=vercel&logoColor=white)](https://zainaftab-dev.vercel.app/)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

Personal portfolio site for [Zain Aftab](https://github.com/ZainAftab-dev) — full-stack developer and founder of [Strategeon Softwares](https://strategeonsoftwares.com/). Built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** https://zainaftab-dev.vercel.app

## Features

- **Interactive particle-network hero** — custom Canvas animation with cursor-repulsion physics, built in TypeScript, with `prefers-reduced-motion` support and a mobile-safe fallback
- **Bento-grid project showcase** with custom SVG decorative visuals (`TechVisual`) and a hover/focus reveal for each project's links and tech stack
- **Rolling-list process section** with hover-activated thumbnail reveals
- **Infinite auto-scrolling skills marquee**
- **Dynamically-balanced testimonials masonry** — measures real rendered card heights client-side and bin-packs them into the shortest column, so the layout stays visually balanced at any viewport width
- **Live GitHub stats:** contribution streak and activity graph pulled from the GitHub profile
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

All site content (projects, skills, testimonials, certifications, contact links) lives in `src/data/`, so updating the portfolio never requires touching component code.

## Deployment

Deployed on [Vercel](https://vercel.com/) at **https://zainaftab-dev.vercel.app** with zero configuration (no environment variables needed).

## License

Personal project — all rights reserved.

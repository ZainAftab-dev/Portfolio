# Zain Aftab — Portfolio

[![Live Site](https://img.shields.io/badge/Live-zainaftab--dev.vercel.app-000000?logo=vercel&logoColor=white)](https://zainaftab-dev.vercel.app/)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

Personal portfolio site for [Zain Aftab](https://github.com/ZainAftab-dev) — full-stack developer and founder of [Strategeon Softwares](https://strategeonsoftwares.com/). Built with Next.js and TypeScript.

**Live site:** https://zainaftab-dev.vercel.app

## Features

- **Arctic Light design** — a light, indigo → sky theme with self-hosted Plus Jakarta Sans, JetBrains Mono, Instrument Serif and Cormorant Garamond
- **Particle-network hero** — Canvas animation with an indigo → sky gradient and cursor repulsion; pauses off-screen and renders a static frame for `prefers-reduced-motion`
- **Container-scroll About section** — a laptop screen that tilts flat as you scroll (port of the 21st.dev ContainerScroll)
- **Laptop project showcase** of three selected projects, plus an **All work** page (`/work`) listing every public GitHub project with filters, screenshots, code and live links
- Grouped skills marquee, rolling-list process, certificate-paper certifications, editorial testimonials, a chat-style FAQ and a flip business card
- Fully responsive with no horizontal scroll, keyboard-accessible, reduced-motion aware

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static output)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- Hand-written CSS (`src/app/globals.css`) and [Fontsource](https://fontsource.org/) fonts — no UI or animation libraries

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
  app/
    page.tsx           # Homepage
    work/page.tsx      # All work page
    globals.css        # Arctic Light design system
  components/
    sections/          # Server-rendered homepage sections
    client/            # Interactive pieces (particles, container scroll, FAQ chat, card flip, filters)
    Icon.tsx           # Inline SVG icons
  data/
    projects.ts        # Every GitHub project; `featured` controls the homepage order
    content.ts         # Skills, process, certificates, testimonials, FAQ
    site.ts            # Contact links and nav
public/
  images/projects/     # Homepage laptop screenshots
  images/work/         # All work screenshots
  logos/               # Footer profile logos
```

All site content lives in `src/data/`, so updating the portfolio never requires touching component code. To add a project, add an entry to `projects.ts` (and a screenshot in `public/images/work/`); set `featured: 1–3` to put it on the homepage.

## Deployment

Deployed on [Vercel](https://vercel.com/) at **https://zainaftab-dev.vercel.app** with zero configuration (no environment variables needed).

## License

Personal project — all rights reserved.

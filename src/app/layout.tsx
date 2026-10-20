import type { Metadata, Viewport } from "next";
// Self-hosted fonts (latin subset) — family names match the design's CSS exactly.
import "@fontsource/plus-jakarta-sans/latin-400.css";
import "@fontsource/plus-jakarta-sans/latin-500.css";
import "@fontsource/plus-jakarta-sans/latin-600.css";
import "@fontsource/plus-jakarta-sans/latin-700.css";
import "@fontsource/plus-jakarta-sans/latin-800.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-600.css";
import "@fontsource/jetbrains-mono/latin-700.css";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zainaftab-dev.vercel.app"),
  title: "Zain Aftab — Full-Stack Developer",
  description:
    "Full-stack developer and founder of Strategeon Softwares. Production web apps built end to end — React, Next.js, NestJS, PostgreSQL.",
  openGraph: {
    title: "Zain Aftab — Full-Stack Developer",
    description: "Production web apps built end to end — React, Next.js, NestJS, PostgreSQL.",
    url: "/",
    siteName: "Zain Aftab",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f7fb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="arctic" data-hero="center" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}

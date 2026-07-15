import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  // 600 added (font-semibold body text was missing its real weight and got
  // browser-synthesized fake-bold instead). 700 dropped — every font-bold
  // usage in the codebase is paired with font-heading (Space Grotesk), so
  // DM Sans never actually needs a bold weight.
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  // Only ever used for small uppercase mono labels at the default weight —
  // trimmed from [400,500,600] since 500/600 are never actually requested.
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Zain Aftab — Full-Stack Developer",
  description:
    "Full-stack developer and founder of Strategeon Softwares. React, Next.js, NestJS, and cloud systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-body"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

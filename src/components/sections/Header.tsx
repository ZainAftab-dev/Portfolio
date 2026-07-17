import Image from "next/image";
import { site } from "@/data/site";
import { GithubIcon } from "@/components/icons/GithubIcon";

const PROFILE_LINKS = [
  { label: "GitHub", href: site.github, kind: "svg" as const, Icon: GithubIcon },
  { label: "LinkedIn", href: site.linkedin, kind: "img" as const, src: "/logos/linkedin.png" },
  { label: "Upwork", href: site.upwork, kind: "img" as const, src: "/logos/upwork.png" },
  { label: "Fiverr", href: site.fiverr, kind: "img" as const, src: "/logos/fiverr.png" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#hero"
          className="font-heading text-lg font-bold text-foreground transition-colors hover:text-accent cursor-pointer"
        >
          ZA
        </a>

        <nav
          className="flex items-center gap-4 sm:gap-6"
          aria-label="Profile links"
        >
          {PROFILE_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent cursor-pointer"
            >
              {link.kind === "svg" ? (
                <link.Icon className="h-3.5 w-3.5" />
              ) : (
                <Image
                  src={link.src}
                  alt=""
                  width={16}
                  height={16}
                  className="h-3.5 w-3.5 rounded-sm transition-all duration-200 sm:grayscale sm:hover:grayscale-0"
                />
              )}
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

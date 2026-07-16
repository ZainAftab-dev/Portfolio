import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon } from "@/components/icons/GithubIcon";

const PROFILE_LINKS = [
  { label: "GitHub", href: site.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.linkedin, Icon: ArrowUpRight },
  { label: "Upwork", href: site.upwork, Icon: ArrowUpRight },
  { label: "Fiverr", href: site.fiverr, Icon: ArrowUpRight },
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
          {PROFILE_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent cursor-pointer"
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

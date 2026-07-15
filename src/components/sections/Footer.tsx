"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon } from "@/components/icons/GithubIcon";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 pt-24 pb-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 flex flex-col items-start gap-6 border-b border-border pb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Contact
            </span>
            <h2 className="max-w-xl font-heading text-3xl font-bold text-foreground md:text-5xl">
              Let&apos;s build something.
            </h2>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
          >
            Get In Touch
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent cursor-pointer"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {site.phone}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                {site.location}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Elsewhere
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent cursor-pointer"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent cursor-pointer"
                >
                  <ArrowUpRight className="h-4 w-4 text-accent" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.companySite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent cursor-pointer"
                >
                  <ArrowUpRight className="h-4 w-4 text-accent" />
                  Strategeon Softwares
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Site
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-accent cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href="#hero"
            aria-label="Back to top"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

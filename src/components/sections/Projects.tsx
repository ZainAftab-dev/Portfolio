"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { TechVisual } from "@/components/decorative/TechVisual";

const sizeClasses: Record<Project["size"], string> = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  small: "md:col-span-1",
  full: "md:col-span-4",
};

function ProjectTile({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "group relative min-h-[220px] overflow-hidden rounded-2xl border border-border",
        sizeClasses[project.size]
      )}
    >
      <TechVisual
        icon={project.icon}
        variant={project.variant}
        compact={project.size === "full"}
        className="absolute inset-0"
      />

      {/* Always-visible label so project identity isn't hover-only */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background/90 to-transparent p-5 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {project.name}
        </h3>
      </div>

      {/* Hover / focus reveal overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end bg-background/85 p-5 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
        <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
          {project.name}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub repository`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105 cursor-pointer"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition-transform hover:scale-105 cursor-pointer"
          >
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <m.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent"
        >
          Projects
        </m.span>

        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-12 max-w-2xl font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Things I&apos;ve built and shipped.
        </m.h2>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-4 md:auto-rows-[220px]"
        >
          {projects.map((project) => (
            <ProjectTile key={project.name} project={project} />
          ))}
        </m.div>
      </div>
    </section>
  );
}

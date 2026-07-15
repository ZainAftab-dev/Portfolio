"use client";

import { m } from "framer-motion";
import { skills } from "@/data/skills";

export function Skills() {
  // Duplicated once so the -50% translateX loop is seamless.
  const loop = [...skills, ...skills];

  return (
    <section className="border-y border-border bg-background py-16">
      <div className="mx-auto mb-8 max-w-5xl px-6">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl"
        >
          Built with tools that scale from first commit to production.
        </m.h2>
      </div>

      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        role="list"
        aria-label="Skills and technologies"
      >
        <div className="marquee-track flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {loop.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              role="listitem"
              aria-hidden={i >= skills.length}
              className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5"
            >
              <skill.icon className="h-4 w-4 text-accent" />
              <span className="whitespace-nowrap text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

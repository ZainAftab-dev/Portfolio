"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import { TechVisual } from "@/components/decorative/TechVisual";

export function Process() {
  return (
    <section id="process" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent"
        >
          Process
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-12 max-w-2xl font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          How a project actually gets built.
        </motion.h2>

        <div className="border-t border-border">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group flex cursor-pointer items-center justify-between gap-2 border-b border-border py-8 sm:gap-4 md:py-10"
            >
              <h3 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground transition-all duration-300 group-hover:italic group-hover:text-accent sm:text-4xl md:text-6xl">
                {step.title}
              </h3>

              <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                <div
                  aria-hidden="true"
                  className="hidden h-[64px] w-[96px] -translate-x-4 overflow-hidden rounded-lg opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                >
                  <TechVisual icon={step.icon} variant={step.variant} iconClassName="h-7 w-7" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {step.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

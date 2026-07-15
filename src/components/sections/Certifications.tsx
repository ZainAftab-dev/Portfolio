"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent"
        >
          Certifications
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-12 max-w-2xl font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Continuous, verifiable learning.
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.verifyUrl}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50 cursor-pointer"
            >
              <BadgeCheck className="mb-4 h-6 w-6 text-accent" />
              <span className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {cert.issuer}
              </span>
              <h3 className="mb-4 flex-1 font-heading text-sm font-semibold leading-snug text-foreground">
                {cert.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-accent">
                Verify
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

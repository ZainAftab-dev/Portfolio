"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-48 md:mx-0 md:w-full"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/zain.jpeg"
              alt="Zain Aftab"
              fill
              sizes="(min-width: 768px) 280px, 192px"
              className="object-cover"
              priority
            />
          </div>
        </m.div>

        <div>
          <m.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent"
          >
            About
          </m.span>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl"
          >
            One developer who owns the entire stack.
          </m.h2>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            <p>
              I&apos;m Zain, founder of{" "}
              <span className="text-foreground">Strategeon Softwares</span> —
              a full-stack agency building complete, production-ready web
              applications for clients end to end. I handle everything from
              database design and backend architecture to interactive
              frontend experiences and cloud deployment.
            </p>
            <p>
              That&apos;s meant hotel booking systems with live Stripe
              payments, an 18-module Hospital Management System, real-time
              dashboards, e-commerce platforms, and interactive 3D/WebGL hero
              sections that make a homepage impossible to scroll past. I&apos;m
              also finishing a BS in Software Engineering at COMSATS
              University Islamabad, which keeps the fundamentals sharp
              alongside the client work.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4"
          >
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground md:text-base">
              <span className="font-medium text-foreground">
                Currently:
              </span>{" "}
              expanding into more 3D/WebGL and interactive-motion work, and
              taking on new full-stack projects.
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}

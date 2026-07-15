"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const ACCENT = "FF5A1F";
const FOREGROUND = "F5F5F0";
const MUTED = "A1A1AA";

const streakUrl = `https://streak-stats.demolab.com/?user=${site.githubUsername}&theme=transparent&hide_border=true&background=00000000&stroke=${ACCENT}&ring=${ACCENT}&fire=${ACCENT}&currStreakLabel=${FOREGROUND}&currStreakNum=${FOREGROUND}&sideNums=${FOREGROUND}&sideLabels=${MUTED}&dates=${MUTED}`;

const activityUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${site.githubUsername}&bg_color=00000000&color=${FOREGROUND}&line=${ACCENT}&point=${ACCENT}&area=true&hide_border=true&custom_title=Contribution%20Activity`;

function StatWidget({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 py-8 text-sm font-medium text-muted-foreground transition-colors hover:text-accent cursor-pointer"
      >
        View activity on GitHub
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-full"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export function GithubStats() {
  return (
    <section id="github" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent"
        >
          GitHub Activity
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-12 max-w-2xl font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Still shipping, one commit at a time.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-4 md:p-6"
        >
          <StatWidget
            src={activityUrl}
            alt={`${site.name}'s GitHub contribution activity graph`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto flex max-w-md items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-4"
        >
          <StatWidget
            src={streakUrl}
            alt={`${site.name}'s GitHub contribution streak`}
          />
        </motion.div>
      </div>
    </section>
  );
}

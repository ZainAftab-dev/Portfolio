"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";

const AVATAR_COLORS = [
  "#FF5A1F",
  "#E0491A",
  "#FF7A47",
  "#C23E14",
  "#FF8F5E",
  "#B33612",
];

const COLUMN_COUNT = 3;

function naiveColumns(): number[][] {
  const columns: number[][] = Array.from({ length: COLUMN_COUNT }, () => []);
  testimonials.forEach((_, i) => columns[i % COLUMN_COUNT].push(i));
  return columns;
}

/** Greedy bin-packing: always add the next card to the currently-shortest column. */
function balanceColumns(heights: number[]): number[][] {
  const columnHeights = new Array(COLUMN_COUNT).fill(0);
  const columns: number[][] = Array.from({ length: COLUMN_COUNT }, () => []);
  heights.forEach((height, i) => {
    let shortest = 0;
    for (let c = 1; c < COLUMN_COUNT; c++) {
      if (columnHeights[c] < columnHeights[shortest]) shortest = c;
    }
    columns[shortest].push(i);
    columnHeights[shortest] += height;
  });
  return columns;
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const colorIndex = testimonials.indexOf(t);
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <Quote className="mb-4 h-5 w-5 text-accent" />
      <p className="mb-6 text-sm leading-relaxed text-foreground">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold text-accent-foreground"
          style={{ backgroundColor: AVATAR_COLORS[colorIndex % AVATAR_COLORS.length] }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [columns, setColumns] = useState<number[][]>(naiveColumns);

  // Real card heights depend on font rendering and container width, so a
  // static estimate can't reliably balance columns. Measure actual rendered
  // heights once mounted and bin-pack into the shortest column each time —
  // the same approach masonry libraries use.
  useLayoutEffect(() => {
    const heights = cardRefs.current.map((el) => el?.offsetHeight ?? 0);
    if (heights.some((h) => h === 0)) return;
    setColumns(balanceColumns(heights));
  }, []);

  return (
    <section id="testimonials" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <m.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent"
        >
          Testimonials
        </m.span>

        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-12 max-w-2xl font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          What people say after working with me.
        </m.h2>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {columns.map((colIndexes, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-5">
              {colIndexes.map((idx, rowIndex) => (
                <m.div
                  key={testimonials[idx].name}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: rowIndex * 0.15 + colIndex * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <TestimonialCard t={testimonials[idx]} />
                </m.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

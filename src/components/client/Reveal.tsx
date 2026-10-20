"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Adds `.in` once the element scrolls into view (fade/slide-up reveal). */
export function Reveal({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article className={className} ref={ref}>
      {children}
    </article>
  );
}

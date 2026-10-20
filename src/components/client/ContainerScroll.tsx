"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Port of the 21st.dev / Aceternity ContainerScroll.
 * Progress is 0 when the section's top meets the viewport top and 1 when its
 * bottom meets the viewport bottom (framer's useScroll({ target })).
 * rotateX 20° → 0°, scale 1.05 → 1 (mobile .7 → .9), title translateY 0 → -100px.
 */
export function ContainerScroll({ title, children }: { title: ReactNode; children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titleEl = titleRef.current;
    const card = cardRef.current;
    if (!section || !titleEl || !card) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    const update = () => {
      ticking = false;
      if (reduced) {
        card.style.transform = "none";
        titleEl.style.transform = "none";
        return;
      }
      const mobile = innerWidth <= 768;
      const r = section.getBoundingClientRect();
      const span = Math.max(1, r.height - innerHeight);
      const p = Math.max(0, Math.min(1, -r.top / span));
      const [s0, s1] = mobile ? [0.7, 0.9] : [1.05, 1];
      card.style.transform = `rotateX(${20 * (1 - p)}deg) scale(${s0 + (s1 - s0) * p})`;
      titleEl.style.transform = `translateY(${-100 * p}px)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="cs" id="about" ref={sectionRef}>
      <div className="cs-stage">
        <div className="cs-title" ref={titleRef}>
          {title}
        </div>
        <div className="cs-card" ref={cardRef}>
          {children}
        </div>
      </div>
    </section>
  );
}

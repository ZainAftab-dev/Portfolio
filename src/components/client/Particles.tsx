"use client";

import { useEffect, useRef } from "react";

type RGB = [number, number, number];
type Config = { dot: RGB; line: RGB; line2?: RGB; hover: RGB; max: number; dist: number; alpha: number };

/* Arctic palette: dots/lines blend indigo → sky from left to right (matching the
   "Aftab" gradient); lines near the cursor turn violet. */
const ARCTIC: Config = {
  dot: [79, 70, 229], // indigo-600
  line: [99, 102, 241], // indigo-500
  line2: [14, 165, 233], // sky-500
  hover: [124, 58, 237], // violet-600
  max: 140,
  dist: 135,
  alpha: 0.42,
};

type Pt = { x: number; y: number; dx: number; dy: number; s: number };

/** Hero particle network: drifts, repels from the cursor, pauses off-screen,
    and renders a single static frame for prefers-reduced-motion. */
export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const cfg = ARCTIC;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = matchMedia("(pointer: coarse)").matches;
    let pts: Pt[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    const mouse: { x: number | null; y: number | null; r: number } = { x: null, y: null, r: 180 };

    const init = () => {
      pts = [];
      const small = w < 768;
      const count = Math.min(
        Math.floor((w * h) / (small ? 14000 : 9000)),
        small ? Math.min(60, cfg.max) : cfg.max,
      );
      for (let i = 0; i < count; i++) {
        const s = Math.random() * 2 + 1;
        pts.push({ x: Math.random() * w, y: Math.random() * h, dx: Math.random() * 0.4 - 0.2, dy: Math.random() * 0.4 - 0.2, s });
      }
    };

    const frame = (move: boolean) => {
      ctx.clearRect(0, 0, w, h);
      const [dr, dg, db] = cfg.dot;
      const [lr, lg, lb] = cfg.line;
      const [hr, hg, hb] = cfg.hover;
      for (const p of pts) {
        if (move) {
          if (p.x > w || p.x < 0) p.dx = -p.dx;
          if (p.y > h || p.y < 0) p.dy = -p.dy;
          if (mouse.x !== null && mouse.y !== null) {
            const ddx = mouse.x - p.x;
            const ddy = mouse.y - p.y;
            const d = Math.hypot(ddx, ddy);
            if (d < mouse.r + p.s && d > 0) {
              const f = (mouse.r - d) / mouse.r;
              p.x -= (ddx / d) * f * 5;
              p.y -= (ddy / d) * f * 5;
            }
          }
          p.x += p.dx;
          p.y += p.dy;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        const kd = cfg.line2 ? Math.min(1, Math.max(0, p.x / w)) : 0;
        const d2 = cfg.line2 || cfg.dot;
        ctx.fillStyle = `rgba(${(dr + (d2[0] - dr) * kd) | 0},${(dg + (d2[1] - dg) * kd) | 0},${(db + (d2[2] - db) * kd) | 0},${Math.min(1, cfg.alpha + 0.4)})`;
        ctx.fill();
      }
      const L = cfg.dist;
      for (let a = 0; a < pts.length; a++) {
        for (let b = a + 1; b < pts.length; b++) {
          const dx = pts[a].x - pts[b].x;
          const dy = pts[a].y - pts[b].y;
          const d = Math.hypot(dx, dy);
          if (d < L) {
            const o = 1 - d / L;
            const near =
              mouse.x !== null && mouse.y !== null && Math.hypot(pts[a].x - mouse.x, pts[a].y - mouse.y) < mouse.r;
            const k = cfg.line2 ? Math.min(1, Math.max(0, (pts[a].x + pts[b].x) / 2 / w)) : 0;
            const c2 = cfg.line2 || cfg.line;
            const cr = lr + (c2[0] - lr) * k;
            const cg = lg + (c2[1] - lg) * k;
            const cb = lb + (c2[2] - lb) * k;
            ctx.strokeStyle = near
              ? `rgba(${hr},${hg},${hb},${o * 0.85})`
              : `rgba(${cr | 0},${cg | 0},${cb | 0},${o * cfg.alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pts[a].x, pts[a].y);
            ctx.lineTo(pts[b].x, pts[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      frame(true);
      raf = requestAnimationFrame(loop);
    };

    const size = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
      if (reduced) frame(false);
    };

    const ro = new ResizeObserver(size);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    if (!reduced && !coarse) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onOut);
    }

    // Pause the animation loop while the hero is off-screen.
    const io = new IntersectionObserver(([e]) => {
      if (reduced) return;
      if (e.isIntersecting && !raf) loop();
      else if (!e.isIntersecting && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(canvas);

    return () => {
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <canvas id="particles" ref={ref} aria-hidden="true" />;
}

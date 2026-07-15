"use client";

import { useEffect, useRef } from "react";
import { m, type Variants } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

const ACCENT = "255, 90, 31"; // --accent (#FF5A1F) as r,g,b for rgba()
const BACKGROUND = "#0b0b0e";

class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;

  constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(${ACCENT}, 0.85)`;
    ctx.fill();
  }

  update(canvas: HTMLCanvasElement, mouse: { x: number | null; y: number | null; radius: number }) {
    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius + this.size) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        this.x -= forceDirectionX * force * 5;
        this.y -= forceDirectionY * force * 5;
      }
    }

    this.x += this.directionX;
    this.y += this.directionY;
  }
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 200,
    };

    function init(width: number, height: number) {
      particles = [];
      if (width <= 0 || height <= 0) return;
      const isSmallScreen = width < 768;
      const divisor = isSmallScreen ? 14000 : 9000;
      const cap = isSmallScreen ? 60 : 160;
      const count = Math.min(Math.floor((height * width) / divisor), cap);

      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (width - size * 4) + size * 2;
        const y = Math.random() * (height - size * 4) + size * 2;
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;
        particles.push(new Particle(x, y, directionX, directionY, size));
      }
    }

    let started = false;
    function applySize(width: number, height: number) {
      if (!canvas || width <= 0 || height <= 0) return;
      canvas.width = width;
      canvas.height = height;
      init(width, height);
      if (prefersReducedMotion) {
        renderStaticFrame();
      } else if (!started) {
        started = true;
        animate();
      }
    }

    // Try an immediate synchronous measurement first (works in the common
    // case). Also set up a ResizeObserver as a robust fallback/updater in
    // case the stylesheet hadn't applied yet when this ran, or the window
    // resizes later.
    applySize(canvas.offsetWidth, canvas.offsetHeight);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        applySize(Math.floor(entry.contentRect.width), Math.floor(entry.contentRect.height));
      }
    });
    resizeObserver.observe(canvas);

    function connect() {
      if (!canvas || !ctx) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dist =
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y);

          if (dist < (canvas.width / 7) * (canvas.height / 7)) {
            const opacityValue = 1 - dist / 20000;
            const dxMouseA = mouse.x !== null ? particles[a].x - mouse.x : Infinity;
            const dyMouseA = mouse.y !== null ? particles[a].y - mouse.y : Infinity;
            const distMouseA = Math.sqrt(dxMouseA * dxMouseA + dyMouseA * dyMouseA);

            ctx.strokeStyle =
              mouse.x !== null && distMouseA < mouse.radius
                ? `rgba(245, 245, 240, ${opacityValue})`
                : `rgba(${ACCENT}, ${opacityValue * 0.6})`;

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function renderStaticFrame() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = BACKGROUND;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) particle.draw(ctx);
      connect();
    }

    function animate() {
      if (!canvas || !ctx) return;
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = BACKGROUND;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update(canvas, mouse);
        particle.draw(ctx);
      }
      connect();
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX - canvas.getBoundingClientRect().left;
      mouse.y = event.clientY - canvas.getBoundingClientRect().top;
    };
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    if (!prefersReducedMotion && !isCoarsePointer) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      <ParticleField />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <m.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 backdrop-blur-sm"
        >
          <Terminal className="h-4 w-4 text-accent" />
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Full-Stack Development · 3D / WebGL
          </span>
        </m.div>

        <m.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-4 font-heading text-6xl font-bold tracking-tight text-foreground md:text-8xl"
        >
          Zain Aftab
        </m.h1>

        <m.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-2 font-heading text-xl font-medium text-accent md:text-2xl"
        >
          Full-Stack Developer &amp; Founder, Strategeon Softwares
        </m.p>

        <m.p
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          I design and ship production web apps end-to-end — interactive
          3D/WebGL hero sections, real-time dashboards, and full-stack
          platforms with Stripe payments, from database to deployment.
        </m.p>

        <m.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
          >
            View My Work
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="/Zain_Aftab_CV.pdf"
            className="text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground cursor-pointer"
          >
            Download Résumé
          </a>
        </m.div>
      </div>
    </section>
  );
}

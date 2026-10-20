"use client";

import { useState } from "react";
import { testimonials } from "@/data/content";

/** Editorial serif testimonial with a name switcher (real Upwork reviews only). */
export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <div className="ts-box">
      <blockquote className="ts-q" aria-live="polite">
        <span key={`q${i}`} className="ts-fade" style={{ display: "block" }}>
          “{t.quote}”
        </span>
      </blockquote>
      <div className="ts-who">
        <div key={`w${i}`} className="ts-fade">
          <span className={`ts-av${t.alt ? " alt" : ""}`} aria-hidden="true">
            {t.initials}
          </span>
          <span>
            <b>
              {t.name} <span className="ts-src">via Upwork</span>
            </b>
            <small>{t.role}</small>
          </span>
        </div>
      </div>
      <div className="ts-names" role="tablist" aria-label="Choose a client review">
        {testimonials.map((x, n) => (
          <button key={x.name} role="tab" aria-selected={n === i} onClick={() => setI(n)}>
            {x.name}
          </button>
        ))}
      </div>
    </div>
  );
}

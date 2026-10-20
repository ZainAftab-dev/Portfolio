"use client";

import { useState, type ReactNode } from "react";

/** Flip card: hover flips on pointer devices; click / Enter / Space toggles. */
export function BusinessCard({ front, back }: { front: ReactNode; back: ReactNode }) {
  const [on, setOn] = useState(false);

  return (
    <div
      className={`bc${on ? " on" : ""}`}
      tabIndex={0}
      role="button"
      aria-label="Flip business card"
      aria-pressed={on}
      onClick={(e) => {
        if (!(e.target as HTMLElement).closest("a")) setOn((v) => !v);
      }}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOn((v) => !v);
        }
      }}
    >
      <div className="bc-in">
        <div className="bc-f bc-fr">{front}</div>
        <div className="bc-f bc-bk">{back}</div>
      </div>
    </div>
  );
}

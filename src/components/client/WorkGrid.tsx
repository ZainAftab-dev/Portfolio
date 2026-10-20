"use client";

import { useState, type CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/client/Reveal";
import { categories, type Project, type ProjectCategory } from "@/data/projects";

/** Filterable grid of every GitHub project. */
export function WorkGrid({ projects }: { projects: Project[] }) {
  const [cat, setCat] = useState<ProjectCategory | "all">("all");
  const shown = cat === "all" ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <div className="wk-bar">
        <div className="wk-filter" role="group" aria-label="Filter projects">
          {categories.map((c) => {
            const n = c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
            return (
              <button key={c.id} aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
                {c.label} <span>{n}</span>
              </button>
            );
          })}
        </div>
        <span className="wk-count" aria-live="polite">
          Showing {shown.length} of {projects.length}
        </span>
      </div>

      <div className="wk-grid">
        {shown.map((p) => (
          <Reveal className="wk-card" key={p.slug}>
            <div
              className={`wk-shot${p.imageFit === "contain" ? " contain" : ""}`}
              style={p.imageBg ? ({ "--shot-bg": p.imageBg } as CSSProperties) : undefined}
            >
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element -- static screenshots, pre-compressed to WebP
                <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
              ) : (
                <span className="wk-noshot" aria-hidden="true">
                  {p.name}
                </span>
              )}
              {p.featured && <span className="wk-badge">Featured</span>}
            </div>
            <div className="wk-body">
              <span className="pc-num">{p.kicker}</span>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <div className="wk-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="wk-links">
                <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on GitHub`}>
                  <Icon name="github" /> Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name} live site`} className="live">
                    <Icon name="link" /> Live
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

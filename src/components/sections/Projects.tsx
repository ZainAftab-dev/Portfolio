import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/client/Reveal";
import { featuredProjects, projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">Selected work</span>
            <h2>
              Things I&apos;ve built <em>&amp; shipped.</em>
            </h2>
          </div>
          <p>
            Three projects that show the range — my agency&apos;s own site, an 18-module hospital system and an
            AI-powered finance app.
          </p>
        </div>

        <div className="projects">
          {featuredProjects.map((p, i) => (
            <Reveal className="pc" key={p.slug}>
              <div className="pc-copy">
                <div className="pc-actions">
                  <a className="icon-btn" href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on GitHub`}>
                    <Icon name="github" />
                  </a>
                  {p.live && (
                    <a className="icon-btn" href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name} live site`}>
                      <Icon name="link" />
                    </a>
                  )}
                </div>
                <span className="pc-num">
                  {String(i + 1).padStart(2, "0")} / {p.kicker}
                </span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="tech">
                  {(p.featuredTech ?? p.tech).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="pc-media">
                <div className="laptop">
                  <div className="lid">
                    <div className="screen">
                      {/* eslint-disable-next-line @next/next/no-img-element -- sized by the laptop mockup's aspect-ratio */}
                      <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
                    </div>
                  </div>
                  <div className="base"></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="work-more">
          <Link href="/work" className="btn btn-ghost">
            View all work <Icon name="arrowRight" />
          </Link>
          <span>{projects.length} projects on GitHub</span>
        </div>
      </div>
    </section>
  );
}

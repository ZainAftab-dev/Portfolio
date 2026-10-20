import { Icon } from "@/components/Icon";
import { Particles } from "@/components/client/Particles";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="aurora" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Particles />

      <div className="hero-inner">
        <div className="wrap">
          <div className="hero-main">
            <span className="chip">
              <span className="dot"></span>Full-Stack Development · 3D / WebGL
            </span>
            <h1>
              <span className="n1">Zain</span> <span className="n2">Aftab</span>
            </h1>
            <div className="mega-row">
              <div>
                <p className="role">{site.role}</p>
                <p className="lede">
                  I design and ship production web apps end to end — interactive 3D/WebGL hero sections,
                  real-time dashboards, and full-stack platforms with Stripe payments, from database to deployment.
                </p>
              </div>
              <div className="cta-row">
                <a href="#work" className="btn btn-primary">
                  View my work <Icon name="arrowRight" />
                </a>
                <a href={site.resume} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                  <Icon name="download" /> Résumé
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        Scroll<i></i>
      </div>
    </section>
  );
}

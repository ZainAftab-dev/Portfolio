import { ContainerScroll } from "@/components/client/ContainerScroll";
import { aboutTags } from "@/data/content";

export function About() {
  return (
    <ContainerScroll
      title={
        <>
          <span className="label">About me</span>
          <h2>
            The developer behind
            <strong>
              <em>Strategeon</em> Softwares
            </strong>
          </h2>
        </>
      }
    >
      <div className="cs-screen">
        <div className="cs-photo">
          {/* eslint-disable-next-line @next/next/no-img-element -- fixed-size art-directed crop, styled by CSS */}
          <img src="/images/zain.jpg" alt="Portrait of Zain Aftab" width={695} height={700} />
          <span className="tag">Lahore, PK · Available</span>
        </div>
        <div className="cs-copy">
          <h3>One developer who owns the entire stack.</h3>
          <p>
            I&apos;m Zain, founder of <b>Strategeon Softwares</b> — a full-stack agency building complete,
            production-ready web apps for clients. I handle everything from database design and backend
            architecture to interactive frontends and cloud deployment.
          </p>
          <p>
            That&apos;s meant hotel booking systems with live Stripe payments, an 18-module hospital management
            system, real-time dashboards and e-commerce platforms — alongside a BS in Software Engineering at
            COMSATS.
          </p>
          <div className="tags">
            {aboutTags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </ContainerScroll>
  );
}

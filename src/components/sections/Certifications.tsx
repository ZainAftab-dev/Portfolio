import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { certificates } from "@/data/content";

export function Certifications() {
  return (
    <section className="certs" id="certificates">
      <div className="wrap">
        <div className="certs-head">
          <span className="label">Certifications</span>
          <h2>
            Papers on the <em>wall.</em>
          </h2>
          <p>
            Industry certificates from AWS, NVIDIA, IBM, Google, Meta and the University of Michigan. Hover a
            certificate to lift it, click to verify on Coursera.
          </p>
        </div>
        <div className="papers">
          {certificates.map((c) => (
            <a
              key={c.url}
              className="paper"
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${c.title} by ${c.issuer} on Coursera`}
            >
              <div className="paper-in">
                <span className="paper-k">CERTIFICATE OF COMPLETION</span>
                <h3>{c.title}</h3>
                <span className="paper-by">
                  awarded to Zain Aftab by<b>{c.issuer}</b>
                </span>
                <span className="seal" style={{ "--c": c.color } as CSSProperties} aria-hidden="true">
                  {c.seal}
                </span>
                <span className="paper-v">
                  Verify on Coursera <Icon name="arrowUpRight" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

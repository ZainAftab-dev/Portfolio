import { GithubMark } from "@/components/Icon";
import { Year } from "@/components/client/Year";
import { site } from "@/data/site";

const logos = [
  { href: site.linkedin, label: "LinkedIn", src: "/logos/linkedin.png" },
  { href: site.upwork, label: "Upwork", src: "/logos/upwork.png" },
  { href: site.fiverr, label: "Fiverr", src: "/logos/fiverr.png" },
];

export function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <h3>Find me online</h3>
        <p>Code, work history and client reviews.</p>
        <nav aria-label="Profiles">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <span className="ft-gh" aria-hidden="true">
              <GithubMark />
            </span>
            <span className="tip">GitHub</span>
          </a>
          {logos.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${l.label} profile`}>
              {/* eslint-disable-next-line @next/next/no-img-element -- 96px brand mark, no optimisation needed */}
              <img className="ft-lg" src={l.src} alt="" width={56} height={56} />
              <span className="tip">{l.label}</span>
            </a>
          ))}
        </nav>
        <span className="ft-copy">
          © <Year /> Zain Aftab. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

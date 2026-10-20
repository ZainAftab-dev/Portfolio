import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Nav } from "@/components/client/Nav";
import { WorkGrid } from "@/components/client/WorkGrid";
import { Footer } from "@/components/sections/Footer";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "All work — Zain Aftab",
  description:
    "Every public project on Zain Aftab's GitHub: full-stack web apps, machine learning systems, desktop apps and algorithms work.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Nav base="/" />
      <main>
        <section className="wk-hero" id="top">
          <div className="aurora" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="wrap">
            <Link href="/#work" className="wk-back" prefetch={false}>
              <Icon name="arrowLeft" /> Back to selected work
            </Link>
            <div className="sh left">
              <span className="label">All work</span>
              <h2>
                Everything I&apos;ve <em>built.</em>
              </h2>
              <p>
                Every public project on my GitHub — client and agency builds, full-stack apps, machine learning
                systems and the desktop and algorithms work that started it all.
              </p>
            </div>
          </div>
        </section>

        <section className="wk" aria-label="Projects">
          <div className="wrap">
            <WorkGrid projects={projects} />
          </div>
        </section>

        <section className="wk-cta">
          <div className="wrap">
            <div className="wk-cta-in">
              <div>
                <span className="label">Next project</span>
                <h2>
                  Have something in <em>mind?</em>
                </h2>
              </div>
              <div className="ct-btns">
                <a className="btn btn-primary" href={`mailto:${site.email}?subject=Project%20enquiry`}>
                  <Icon name="mail" /> Email me
                </a>
                <a className="btn btn-ghost" href={site.github} target="_blank" rel="noopener noreferrer">
                  <Icon name="github" /> GitHub profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

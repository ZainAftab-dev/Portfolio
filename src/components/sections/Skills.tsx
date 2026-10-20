import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { skillGroups } from "@/data/content";

const COPIES = 4; // one readable set + three aria-hidden repeats for the seamless loop

export function Skills() {
  return (
    <section className="sk" id="skills">
      <div className="wrap">
        <div className="sh">
          <span className="label">Skills</span>
          <h2>
            My <em>stack.</em>
          </h2>
          <p>The tools I use to design, build and ship production web apps — grouped by where they sit in a project.</p>
        </div>
        <div className="sk-list">
          {skillGroups.map((g) => {
            const c = { "--c": g.color } as CSSProperties;
            return (
              <div className="sk-row" key={g.label}>
                <span className="sk-lab">
                  <span className="sk-gi" style={c}>
                    <Icon name={g.icon} />
                  </span>
                  {g.label}
                </span>
                <div className="sk-mrow">
                  <div className="sk-track" style={{ "--sp": g.speed } as CSSProperties}>
                    {Array.from({ length: COPIES }, (_, copy) =>
                      g.items.map(([name, core]) => (
                        <span
                          key={`${copy}-${name}`}
                          className={core ? "sk-chip core" : "sk-chip"}
                          style={c}
                          aria-hidden={copy > 0 ? true : undefined}
                        >
                          {name}
                        </span>
                      )),
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

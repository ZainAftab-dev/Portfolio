import { Icon } from "@/components/Icon";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section className="pr" id="process">
      <div className="wrap">
        <div className="sh left">
          <span className="label">Process</span>
          <h2>
            How a project <em>gets built.</em>
          </h2>
          <p>A clear, four-step process — so you always know what&apos;s happening and what you&apos;ll get next.</p>
        </div>
        <div className="pr-list">
          {processSteps.map((s) => (
            <div className="pr-row" tabIndex={0} key={s.title}>
              <h3>{s.title}</h3>
              <div className="pr-rt">
                <span className="pr-thumb">
                  <Icon name={s.icon} />
                </span>
                <span className="pr-tag">{s.tag}</span>
              </div>
              <div className="pr-desc">
                <div>
                  <p>{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

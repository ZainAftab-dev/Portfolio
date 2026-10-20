import { FaqChat } from "@/components/client/FaqChat";
import { Testimonials } from "@/components/client/Testimonials";

export function TestimonialsSection() {
  return (
    <section className="ts" id="testimonials">
      <div className="wrap">
        <div className="sh">
          <span className="label">Testimonials</span>
          <h2>
            What clients <em>say.</em>
          </h2>
        </div>
        <Testimonials />
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="fq" id="faq">
      <div className="wrap">
        <div className="sh">
          <span className="label">FAQ</span>
          <h2>
            Ask me <em>anything.</em>
          </h2>
          <p>Tap a question below — I&apos;ll answer like I would in our first call.</p>
        </div>
        <FaqChat />
      </div>
    </section>
  );
}

import { Icon } from "@/components/Icon";
import { BusinessCard } from "@/components/client/BusinessCard";
import { site } from "@/data/site";

const bookCall =
  "mailto:zainaftab589@gmail.com?subject=Book%20a%20call&body=Hi%20Zain%2C%0A%0AI'd%20like%20to%20book%20a%20call%20about%20a%20project.%20Times%20that%20work%20for%20me%3A%0A%0A";

export function Contact() {
  return (
    <section className="ct" id="contact">
      <div className="wrap ct-grid">
        <div>
          <div className="sh left">
            <span className="label">Contact</span>
            <h2>
              Here&apos;s my <em>card.</em>
            </h2>
            <p>Hover or tap the card to flip it — every line on the back is a link. I usually reply within a day.</p>
          </div>
          <div className="ct-btns">
            <a className="btn btn-primary" href={`mailto:${site.email}?subject=Project%20enquiry`}>
              <Icon name="mail" /> Email me
            </a>
            <a className="btn btn-ghost" href={bookCall}>
              <Icon name="calendar" /> Book a call
            </a>
          </div>
        </div>
        <BusinessCard
          front={
            <>
              <span className="bc-mk">STRATEGEON SOFTWARES</span>
              <span>
                <b>Zain Aftab</b>
                <small>Full-Stack Developer &amp; Founder</small>
              </span>
              <small>Lahore, Pakistan · tap to flip</small>
            </>
          }
          back={
            <>
              <span className="bc-mk">CONTACT</span>
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" /> {site.email}
              </a>
              <a href={site.phoneHref}>
                <Icon name="phone" /> {site.phone}
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" /> linkedin.com/in/zain-aftab
              </a>
              <a href={site.companySite} target="_blank" rel="noopener noreferrer">
                <Icon name="globe" /> strategeonsoftwares.com
              </a>
            </>
          }
        />
      </div>
    </section>
  );
}

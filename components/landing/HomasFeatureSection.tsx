"use client";

import { Reveal } from "@/components/landing/Reveal";

const HOMA_ITEMS = [
  { n: 1, title: "Ganesha Chaturthi", detail: "Mahaganapathi Homa" },
  {
    n: 2,
    title: "Navaratri",
    detail: "Durga Homa · Chandika Homa · Deepa Namaskara",
  },
  {
    n: 3,
    title: "Mahashivarathri",
    detail: "Rudra Homa · Rudrabhisheka · Mrutyunjaya Homa",
  },
  { n: 4, title: "Pitru Paksha", detail: "Tila Homa · Pavamana Homa" },
] as const;

export function HomasFeatureSection() {
  return (
    <section className="ld-section" id="annual-homa">
      <div className="container">
        <Reveal>
          <div className="ld-homas-feature">
            <div className="section-kicker" style={{ textAlign: "center" }}>
              Featured Karma offering
            </div>
            <div className="ld-shloka">
              <strong>स्वधर्मे निधनं श्रेयः</strong>
              <span>Swadharme Nidhanam Shreyah</span>
            </div>
            <h2 className="ld-h2" style={{ maxWidth: "none" }}>
              11 Homas in Your Name
            </h2>
            <p className="ld-homas-feature__lead">
              Your name, nakshatra and sankalpa are included in 11 sacred Homas
              performed on important observance days across the year.
            </p>
            <div className="ld-homas-list">
              {HOMA_ITEMS.map((row) => (
                <div key={row.n} className="ld-homas-item">
                  <span>{row.n}</span>
                  <div>
                    <b>{row.title}</b>
                    <div>{row.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="ld-homas-more">
              Also includes Shani Jayanthi, Hanuman Jayanthi, Varaha Swamy
              Jayanthi and Bhadrakali Pooje observances.
            </p>
            <div className="ld-homas-price">
              <strong>₹1,111</strong>
              <span>per person / year</span>
            </div>
            <div className="ld-homas-actions">
              <a className="btn btn-primary" href="#">
                Join 11 Homas →
              </a>
              <a className="btn btn-secondary" href="#">
                Talk to a guide
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

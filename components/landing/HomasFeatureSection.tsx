"use client";

import { Reveal } from "@/components/landing/Reveal";

const HOMA_ITEMS = [
  { n: 1, title: "Bhadrakali Pooje", detail: "Shatru Samharaa" },
  { n: 2, title: "Varaha Swamy Jayanthi", detail: "Bhuvaraha Homa" },
  { n: 3, title: "Navaratri", detail: "Durga Homa" },
  { n: 4, title: "Navaratri", detail: "Deepa Namaskara" },
  { n: 5, title: "Navaratri", detail: "Chandika Homa" },
  { n: 6, title: "Shani Jayanthi", detail: "Shani Shanthi Homa" },
  {
    n: 7,
    title: "Shivarathri",
    detail: "Rudra Homa · Rudrabhisheka · Mrutyunjaya Homa",
  },
  { n: 8, title: "Ganesha Chaturthi", detail: "Mahaganapathi Homa" },
  { n: 9, title: "Hanuman Jayanthi", detail: "Vadavanala Shanthi Homa" },
  { n: 10, title: "Pitru Paksha", detail: "Tila Homa · Pavamana Homa" },
  {
    n: 11,
    title: "Bhadrakali Pooje",
    detail: "Shatru Samhara Homa · Aghora Bali",
  },
] as const;

/** Annual Pooja Sankalpa registration (Google Form). */
const ANNUAL_HOMA_SANKALPA_FORM_URL =
  "https://docs.google.com/forms/d/15txVKdARzL-9JBjfN-LVaqsdmvYRpiD7cyZCgiuJjsY/viewform?edit_requested=true"  
//"https://docs.google.com/forms/d/e/1FAIpQLSf0Rf0Vj6EBFVj9y6trPCuPCsYx-MkUWEPRsiIHfcPtmlipDQ/viewform?usp=publish-editor";

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
            <div className="ld-homas-price">
              <strong>₹5,500</strong>
              <span>per person / year</span>
            </div>
            <div className="ld-homas-actions">
              <a
                className="btn btn-primary"
                href={ANNUAL_HOMA_SANKALPA_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
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

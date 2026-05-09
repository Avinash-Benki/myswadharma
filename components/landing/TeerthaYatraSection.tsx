"use client";

import { Reveal } from "@/components/landing/Reveal";

const BULLETS = [
  "Temple Significance — Sthala purana, deity tradition and sacred geography",
  "Best Time to Visit — Festivals, special days, seva timings and crowd guidance",
  "Ritual Guidance — Suggested sankalpa, stotras, offerings and temple conduct",
  "Family Yatra Planning — Child-friendly tips, nearby kshetras and itinerary support",
] as const;

export function TeerthaYatraSection() {
  return (
    <section className="ld-section ld-section--soft">
      <div className="container">
        <Reveal>
          <div className="ld-teertha">
            <div className="ld-teertha__aside" aria-hidden />
            <div>
              <div className="section-kicker">Featured Dharma experience</div>
              <h2 className="ld-h2">Teertha Yatra Guides</h2>
              <p className="ld-section-intro">
                Plan sacred journeys with temple significance, local customs, seva
                guidance and family-friendly itineraries.
              </p>
              <ul>
                {BULLETS.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              <p className="ld-section-intro" style={{ marginTop: 20 }}>
                Start with popular kshetras, festival yatras and curated family
                pilgrimage routes.
              </p>
              <a className="ld-text-link" href="#" style={{ marginTop: 12, display: "inline-flex" }}>
                Explore Teertha Yatra Packages →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

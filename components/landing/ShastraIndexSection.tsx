"use client";

import { SectionHeader } from "@/components/landing/SectionHeader";
import { Reveal } from "@/components/landing/Reveal";

const COLS = [
  {
    title: "Bhakti Music",
    desc: "Best renditions organized so families can listen, learn and repeat at home.",
    links: [
      "Stotras by Devata",
      "Devaranama Collections",
      "Vedic Chanting",
      "Kids' Shloka Playlist",
      "Classical Bhakti by Raga",
    ],
  },
  {
    title: "Indic Knowledge Studies",
    desc: "Curated study paths for people who want depth without confusion.",
    links: [
      "Smriti Traditions",
      "Purana Chronicles",
      "Bhagavad Gita",
      "Itihasa & Civilizational Memory",
      "Dharma for Modern Families",
    ],
  },
  {
    title: "Pravachanas & Books",
    desc: "Authentic voices, scholar-led explanations and guided reading.",
    links: [
      "Daily Pravachana",
      "Dharma Books",
      "Festival Explainers",
      "Ritual Meaning Guides",
      "Authentic Scholars",
    ],
  },
] as const;

export function ShastraIndexSection() {
  return (
    <section className="ld-section ld-section--soft" id="shastra-detail">
      <div className="container">
        <Reveal>
          <SectionHeader
            kicker="Featured Shastra collections"
            title="Listen, read and learn from authentic sources"
            intro="Explore curated music, pravachanas, books, stotras and learning paths from authentic sources."
          />
          <div className="ld-link-columns">
            {COLS.map((col) => (
              <div key={col.title} className="ld-link-col">
                <h3>{col.title}</h3>
                <p>{col.desc}</p>
                <div className="ld-link-stack">
                  {col.links.map((label) => (
                    <a key={label} className="ld-link-pill" href="#">
                      <span>{label}</span>
                      <span aria-hidden>→</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

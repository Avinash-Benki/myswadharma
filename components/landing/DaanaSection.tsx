"use client";

import { SectionHeader } from "@/components/landing/SectionHeader";
import { Reveal } from "@/components/landing/Reveal";

const CELLS = [
  {
    label: "Temple Daana",
    title: "Nitya Puja & Utsava Support",
    body: "Support nitya puja, deepa seva, utsava, renovation and temple maintenance.",
  },
  {
    label: "Goshala Seva",
    title: "Cow Care & Fodder",
    body: "Support fodder, medical care, shelter and monthly cow protection needs.",
  },
  {
    label: "Vidyadana",
    title: "Pathashalas & Schools",
    body: "Support Veda pathashalas, Sanskrit learning, dharmic schools and scholarships.",
  },
  {
    label: "Annadana",
    title: "Food Sponsorship",
    body: "Sponsor meals during festivals, vrata days and special occasions at trusted institutions.",
  },
] as const;

export function DaanaSection() {
  return (
    <section className="ld-section" id="daana-detail">
      <div className="container">
        <Reveal>
          <SectionHeader
            kicker="Featured Daana opportunities"
            title="Give with Shraddha. Give with Trust."
          />
          <div className="ld-daana-grid">
            {CELLS.map((c) => (
              <div key={c.label} className="ld-daana-cell">
                <div className="ld-daana-cell__label">{c.label}</div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
                <a className="ld-text-link" href="#">
                  Give now →
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

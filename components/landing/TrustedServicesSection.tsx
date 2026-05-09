"use client";

import { SectionHeader } from "@/components/landing/SectionHeader";
import { Reveal } from "@/components/landing/Reveal";

const ROWS = [
  {
    title: "Book a Pandit",
    body: "Choose by ritual, sampradaya, language and location",
    cta: "Book online",
    href: "/support",
  },
  {
    title: "Jyotishya Consultation",
    body: "Vedic, Prashna, Muhurtha and family guidance",
    cta: "Consult online",
    href: "/support",
  },
  {
    title: "Puja Products",
    body: "Kits, malas, samagri, lamps, shankha and sacred items",
    cta: "Shop now",
    href: "/shop",
  },
  {
    title: "Daana Options",
    body: "Temples, goshalas, pathashalas and annadana causes",
    cta: "Give now",
    href: "/daana",
  },
] as const;

export function TrustedServicesSection() {
  return (
    <section className="ld-section" id="offerings">
      <div className="container">
        <Reveal>
          <SectionHeader
            kicker="Trusted products & services"
            title="Book, Consult, Shop"
            intro="One place for curated ritual services, consultations, products and giving options."
          />
          <div className="ld-service-rows">
            {ROWS.map((row) => (
              <a key={row.title} href={row.href} className="ld-service-row">
                <div>
                  <h3>{row.title}</h3>
                  <p>{row.body}</p>
                </div>
                <span className="ld-service-row__cta">{row.cta} →</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

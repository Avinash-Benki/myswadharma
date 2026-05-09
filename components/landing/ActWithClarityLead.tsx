"use client";

import { SectionHeader } from "@/components/landing/SectionHeader";
import { Reveal } from "@/components/landing/Reveal";

export function ActWithClarityLead() {
  return (
    <section
      className="ld-section"
      style={{ paddingTop: 48, paddingBottom: 16 }}
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            kicker="Act with clarity"
            title="Rituals, journeys and trusted services"
            intro="Move from guidance to action through carefully curated Homas, teertha yatra experiences and online services."
          />
        </Reveal>
      </div>
    </section>
  );
}

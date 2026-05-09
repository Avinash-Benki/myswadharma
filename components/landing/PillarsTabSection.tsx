"use client";

import { SectionHeader } from "@/components/landing/SectionHeader";
import { PillarsExpandingCards } from "@/components/landing/PillarsExpandingCards";
import { Reveal } from "@/components/landing/Reveal";

export function PillarsTabSection() {
  return (
    <section className="ld-section" id="pillars">
      <div className="container">
        <Reveal>
          <SectionHeader
            kicker="The four aspects"
            title="Learn. Observe. Perform. Give."
            intro={
              <>
                <p className="ld-section-intro" style={{ margin: 0 }}>
                  Whether you want to understand, observe, perform or contribute,
                  start with the path that matters most to your family today.
                </p>
                <p className="ld-section-intro" style={{ margin: "14px 0 0" }}>
                  mySwadharma brings together four connected ways to live your
                  Dharma: Shastra for knowledge, Dharma for observance, Karma for
                  ritual action and Daana for sacred giving.
                </p>
              </>
            }
          />

          <PillarsExpandingCards />
        </Reveal>
      </div>
    </section>
  );
}

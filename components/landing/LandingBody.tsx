"use client";

import { SectionHeader } from "@/components/landing/SectionHeader";
import { Reveal } from "@/components/landing/Reveal";
import { NextGenerationSection } from "@/components/landing/NextGenerationSection";
import { PillarsTabSection } from "@/components/landing/PillarsTabSection";
import { SacredTimeSection } from "@/components/landing/SacredTimeSection";
import { HomasFeatureSection } from "@/components/landing/HomasFeatureSection";
import { TeerthaYatraSection } from "@/components/landing/TeerthaYatraSection";
import { TrustedServicesSection } from "@/components/landing/TrustedServicesSection";
import { ShastraIndexSection } from "@/components/landing/ShastraIndexSection";
import { DaanaSection } from "@/components/landing/DaanaSection";
import { WhyMySwadharmaSection } from "@/components/landing/WhyMySwadharmaSection";
import { ClosingBandSection } from "@/components/landing/ClosingBandSection";

/** Full single-scroll composition (no footer); prefer route-based pages + layout footer. */
export function LandingBody() {
  return (
    <>
      <NextGenerationSection />
      <PillarsTabSection />
      <SacredTimeSection />
      <section className="ld-section" style={{ paddingTop: 48, paddingBottom: 16 }}>
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
      <HomasFeatureSection />
      <TeerthaYatraSection />
      <TrustedServicesSection />
      <ShastraIndexSection />
      <DaanaSection />
      <WhyMySwadharmaSection />
      <ClosingBandSection />
    </>
  );
}

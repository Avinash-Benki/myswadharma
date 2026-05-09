"use client";

import { PillarsTabSection } from "@/components/landing/PillarsTabSection";
import { HomasTeaserSection } from "@/components/landing/HomasTeaserSection";
import { WhyMySwadharmaSection } from "@/components/landing/WhyMySwadharmaSection";
import { ClosingBandSection } from "@/components/landing/ClosingBandSection";

export function HomeLanding() {
  return (
    <>
      <PillarsTabSection />
      <HomasTeaserSection />
      <WhyMySwadharmaSection />
      <ClosingBandSection />
    </>
  );
}

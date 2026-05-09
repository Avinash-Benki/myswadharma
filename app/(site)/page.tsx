import { HeroIntroFlow } from "@/components/HeroIntroFlow";
import { HeroSection } from "@/components/HeroSection";
import { HomeLanding } from "@/components/landing/HomeLanding";
import { SwadharmaIntroSection } from "@/components/SwadharmaIntroSection";

export default function Home() {
  return (
    <>
      <HeroIntroFlow>
        <HeroSection />
        <SwadharmaIntroSection />
      </HeroIntroFlow>
      <HomeLanding />
    </>
  );
}

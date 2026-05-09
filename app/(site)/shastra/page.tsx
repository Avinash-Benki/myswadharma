import { PageHero } from "@/components/PageHero";
import { NextGenerationSection } from "@/components/landing/NextGenerationSection";
import { ShastraIndexSection } from "@/components/landing/ShastraIndexSection";

export default function ShastraPage() {
  return (
    <>
      <PageHero
        kicker="Shastra — sacred knowledge"
        title="Learn from authentic, time-tested sources"
      >
        <p style={{ margin: 0 }}>
          Shastra is the foundation of practice. mySwadharma curates knowledge
          from credible scholars, traditional sampradayas and authentic voices —
          organized for families to learn, chant and grow.
        </p>
      </PageHero>
      <ShastraIndexSection />
      <NextGenerationSection />
    </>
  );
}

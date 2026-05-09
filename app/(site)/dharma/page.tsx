import { PageHero } from "@/components/PageHero";
import { SacredTimeSection } from "@/components/landing/SacredTimeSection";

export default function DharmaPage() {
  return (
    <>
      <PageHero
        kicker="Dharma — sacred observance"
        title="Know the sacred rhythm of your day and year"
      >
        <p style={{ margin: 0 }}>
          Panchanga, vrata, festivals, samskaras, teertha yatra — all in one
          trusted place.
        </p>
      </PageHero>
      <SacredTimeSection />
    </>
  );
}

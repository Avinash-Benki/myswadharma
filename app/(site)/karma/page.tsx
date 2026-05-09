import { PageHero } from "@/components/PageHero";
import { ActWithClarityLead } from "@/components/landing/ActWithClarityLead";
import { HomasFeatureSection } from "@/components/landing/HomasFeatureSection";
import { TeerthaYatraSection } from "@/components/landing/TeerthaYatraSection";
import { TrustedServicesSection } from "@/components/landing/TrustedServicesSection";

export default function KarmaPage() {
  return (
    <>
      <PageHero
        kicker="Karma — sacred ritual action"
        title="Perform with intention. Act with trust."
      >
        <p style={{ margin: 0 }}>
          Karma is where knowledge becomes action. Book verified Purohitas,
          participate in sacred Homas, consult a Jyotishi — all with clear
          sankalpa and trusted service.
        </p>
      </PageHero>
      <ActWithClarityLead />
      <HomasFeatureSection />
      <TeerthaYatraSection />
      <TrustedServicesSection />
    </>
  );
}

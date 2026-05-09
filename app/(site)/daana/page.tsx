import { PageHero } from "@/components/PageHero";
import { DaanaSection } from "@/components/landing/DaanaSection";

export default function DaanaPage() {
  return (
    <>
      <PageHero kicker="Daana — sacred giving" title="Give with Shraddha. Give with Trust.">
        <p style={{ margin: 0 }}>
          Daana in the Hindu tradition is not charity — it is a sacred act of
          release, gratitude and dharmic responsibility. mySwadharma ensures
          every giving opportunity is verified, purposeful and transparent.
        </p>
      </PageHero>
      <DaanaSection />
    </>
  );
}

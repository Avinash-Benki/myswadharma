import { PageHero } from "@/components/PageHero";

export default function ShopPage() {
  return (
    <>
      <PageHero kicker="Trusted products" title="Authentic items for your puja and home">
        <p style={{ margin: 0 }}>
          Every product is selected for ritual authenticity, material quality
          and dharmic sourcing. Puja samagri, sacred books, traditional decor —
          curated for practicing families.
        </p>
      </PageHero>
      <section className="ld-section ld-section--soft">
        <div className="container">
          <p className="ld-section-intro" style={{ margin: 0 }}>
            The shop experience is coming soon. Until then, explore trusted
            ritual services on the{" "}
            <a className="ld-text-link" href="/karma">
              Karma
            </a>{" "}
            page or reach out via{" "}
            <a className="ld-text-link" href="/support">
              Support
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

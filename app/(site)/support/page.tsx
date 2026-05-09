import { PageHero } from "@/components/PageHero";

export default function SupportPage() {
  return (
    <>
      <PageHero kicker="Support & community" title="We are here to help">
        <p style={{ margin: 0 }}>
          Service providers, temples, institutions and families — onboarding,
          listings, policies and help articles will live here.
        </p>
      </PageHero>
      <section className="ld-section">
        <div className="container">
          <h2 className="ld-h2" style={{ marginBottom: 24 }}>
            Coming next
          </h2>
          <ul className="ld-tab-bullets" style={{ maxWidth: "52ch" }}>
            <li>Contact and help requests</li>
            <li>Become a service provider — application and vetting overview</li>
            <li>List a temple, goshala or pathashala</li>
            <li>Terms, privacy and refund policy</li>
            <li>FAQs: bookings, Homa program, Daana and your account</li>
          </ul>
        </div>
      </section>
    </>
  );
}

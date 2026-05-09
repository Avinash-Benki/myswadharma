"use client";

import { Reveal } from "@/components/landing/Reveal";

export function ClosingBandSection() {
  return (
    <section className="ld-section" id="offerings">
      <div className="container">
        <Reveal>
          <div className="ld-closing">
            <div className="section-kicker">Book, buy and offer</div>
            <h2 className="ld-h2" style={{ maxWidth: "none" }}>
              Move from interest to action
            </h2>
            <div className="ld-closing__body">
              <p>
                We empower you with the ecosystem needed to nurture your
                Swadharma, building satkarma and well-being for your entire
                family and future generations.
              </p>
              <p>
                Choose what your family needs next — bookings, consultations,
                puja products, Homa participation or meaningful Daana — all
                organized with clarity and trust.
              </p>
            </div>
            <div className="ld-closing__actions">
              <a className="btn btn-primary" href="/karma">
                Explore Trusted Services &amp; Products →
              </a>
              <a className="btn btn-secondary" href="/karma#annual-homa">
                11 Homas in Your Name
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

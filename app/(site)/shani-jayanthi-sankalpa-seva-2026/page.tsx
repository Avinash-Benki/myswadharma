import Image from "next/image";
import type { Metadata } from "next";
import { formatShaniJayanthi2026Observance } from "@/lib/seasonal-promos";

const SHANI_HERO_IMAGE = "/section_images/shani-jayanthi-shani-dev.jpg";
const SHANI_JAYANTHI_2026_WHEN = formatShaniJayanthi2026Observance();
const SHANI_HERO_SOURCE =
  "https://www.shanitemple.org/wp-content/uploads/2026/05/shani-temple.jpg";

/** Shani Jayanthi Sankalpa registration (Google Form). */
const SHANI_SANKALPA_REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScoG_zSugSomErw-WZpuOvRlkuBOKPJMVp6aQ0MUe9I8iFcUQ/viewform?usp=header";

const SANKALPA_FIELDS = ["Name", "Gothra", "Rashi", "Nakshatra"] as const;

export const metadata: Metadata = {
  title: "Shani Jayanthi Sankalpa Seva 2026 | mySwadharma",
  description: `Shani Jayanthi 2026 falls on ${SHANI_JAYANTHI_2026_WHEN}. Participate in the Sankalpa Seva — submit Name, Gothra, Rashi, and Nakshatra for individual or family inclusion.`,
  openGraph: {
    title: "Shani Jayanthi Sankalpa Seva 2026 | mySwadharma",
    description: `Observance ${SHANI_JAYANTHI_2026_WHEN}. Collective Sankalpa and prayers for Shani Dev.`,
    images: [
      {
        url: SHANI_HERO_IMAGE,
        width: 1024,
        height: 683,
        alt: "Shani Dev murthi adorned with flowers at the shrine",
      },
    ],
  },
};

export default function ShaniJayanthiSankalpaSeva2026Page() {
  return (
    <>
      <header className="ld-page-hero ld-page-hero--shani-seva">
        <div className="container ld-page-hero--shani-seva__grid">
          <div className="ld-page-hero--shani-seva__copy">
            <p
              className="section-kicker"
              style={{ color: "var(--maroon)" }}
            >
              {SHANI_JAYANTHI_2026_WHEN}
            </p>
            <h1 className="ld-page-hero__title">
              Shani Jayanthi Sankalpa Seva
            </h1>
            <div className="ld-page-hero__body">
              <p style={{ margin: 0 }}>
                Shani Jayanthi in 2026 is observed on{" "}
                <strong>{SHANI_JAYANTHI_2026_WHEN}</strong>. Participate in the
                sacred Sankalpa and receive the divine blessings of Shani Dev for
                peace, protection, discipline, and spiritual well-being.
              </p>
            </div>
          </div>
          <figure className="ld-page-hero--shani-seva__figure">
            <Image
              src={SHANI_HERO_IMAGE}
              alt="Shani Dev — shrine murthi with floral garlands and crown"
              width={1024}
              height={683}
              priority
              sizes="(max-width: 900px) min(100vw, 720px), 480px"
              className="ld-page-hero--shani-seva__img"
            />
            <figcaption className="ld-page-hero--shani-seva__credit">
              <a
                href={SHANI_HERO_SOURCE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: Shani Temple
              </a>
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="ld-section ld-section--soft">
        <div className="container ld-shani-seva-content">
          <div className="ld-shani-seva-content__panel">
            <h2 className="ld-h2 ld-shani-seva-content__title">
              Registration details
            </h2>
            <p className="ld-shani-seva-content__lead">
              When you register, provide the following for each person to be
              named in the collective Sankalpa and in the prayers offered on{" "}
              <strong>{SHANI_JAYANTHI_2026_WHEN}</strong>.
            </p>
            <ul className="ld-shani-sankalpa-chips" aria-label="Sankalpa fields">
              {SANKALPA_FIELDS.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>

          <div
            className="ld-shani-seva-content__panel"
            id="shani-jayanthi-seva-options"
          >
            <h2 className="ld-h2 ld-shani-seva-content__title">
              Seva participation options
            </h2>
            <div className="ld-seva-grid">
              <article className="ld-seva-tier">
                <p className="ld-pillar-card__want">Individual</p>
                <h3 className="ld-pillar-card__title">Individual Sankalpa</h3>
                <p className="ld-seva-tier__price">
                  ₹1000 <span>per person</span>
                </p>
                <p className="ld-pillar-card__desc" style={{ marginBottom: 8 }}>
                  Includes:
                </p>
                <ul className="ld-tab-bullets">
                  <li>Individual name inclusion in Sankalpa</li>
                  <li>Special prayers on Shani Jayanthi</li>
                </ul>
              </article>
              <article className="ld-seva-tier">
                <p className="ld-pillar-card__want">Family</p>
                <h3 className="ld-pillar-card__title">Family Sankalpa</h3>
                <p className="ld-seva-tier__price">
                  ₹2000 <span>for entire family</span>
                </p>
                <p className="ld-pillar-card__desc" style={{ marginBottom: 8 }}>
                  Includes:
                </p>
                <ul className="ld-tab-bullets">
                  <li>Sankalpa for all family members</li>
                  <li>Collective family blessings and prayers</li>
                </ul>
              </article>
            </div>

            <div className="ld-seva-cta-wrap">
              <a
                href={SHANI_SANKALPA_REGISTRATION_FORM_URL}
                className="btn btn-primary"
                id="shani-jayanthi-register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for Seva
              </a>
            </div>
            <p className="ld-seva-footnote">
              Performed with devotion and traditional Vedic procedures.
            </p>
            <p className="ld-seva-closing">Jai Shani Dev</p>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      className={cn("hero", "hero--minimal", "hero--in-flow")}
      id="home"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(250, 242, 229, 0.9) 0%, rgba(250, 242, 229, 0.74) 42%, rgba(250, 242, 229, 0.5) 100%), url('/section_images/Hero_1_clean.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-minimal-inner">
        <div className="hero-eyebrow" aria-hidden="false">
          For practicing Hindu families
        </div>

        <h1 className="hero-minimal-title">
          <span className="hero-title-line hero-title-line--lead">
            Nurture Swadharma.
          </span>
          <span className="hero-title-line hero-title-line--accent">
            Build Satkarma.
          </span>
        </h1>

        <div className="hero-shloka" lang="sa">
          <span className="hero-shloka__sa">स्वधर्मे निधनं श्रेयः</span>
          <span className="hero-shloka__tr">Swadharme Nidhanam Shreyah</span>
        </div>

        <p className="hero-lead hero-lead--minimal">
          An ecosystem for practicing Hindu families to learn from authentic
          sources, observe sacred time, perform rituals with trust, and create
          well-being for generations to come.
        </p>

        <div className="hero-cta-row">
          <Link href="#pillars" className="btn btn-primary hero-cta-primary">
            Start Exploring
          </Link>
          <Link href="/karma#annual-homa" className="hero-cta-link">
            11 Homas in Your Name <span aria-hidden>→</span>
          </Link>
        </div>

      </div>
      <a href="#swadharma" className="hero-scroll-cue" aria-label="Scroll to next section">
        ↓ Begin the path
      </a>
    </section>
  );
}

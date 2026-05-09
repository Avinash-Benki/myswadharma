"use client";

import Link from "next/link";
import { Reveal } from "@/components/landing/Reveal";
import { SectionHeader } from "@/components/landing/SectionHeader";

export function HomasTeaserSection() {
  return (
    <section className="ld-section ld-section--soft ld-homas-teaser">
      <div className="container">
        <Reveal>
          <SectionHeader
            kicker="Featured Karma offering"
            title="11 Homas in Your Name"
            intro={
              <div>
                <p className="ld-section-intro" style={{ margin: 0 }}>
                  Your name, nakshatra and sankalpa can be included in eleven
                  sacred Homas across the year — performed on key observance days
                  with clear sankalpa and trusted officiants.
                </p>
                <p className="ld-section-intro" style={{ margin: "14px 0 0" }}>
                  <Link href="/karma#annual-homa" className="ld-text-link">
                    View the full program and how to join →
                  </Link>
                </p>
              </div>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { Reveal } from "@/components/landing/Reveal";

const ROWS = [
  "Daily deepa and prayer routines",
  "Stotras and bhakti music for children",
  "Festival stories and explainers",
  "Temple visit learning guides",
] as const;

export function NextGenerationSection() {
  return (
    <section className="ld-section ld-section--soft">
      <div className="container">
        <Reveal>
          <div className="ld-nextgen">
            <div className="ld-nextgen__sticky">
              <div className="section-kicker">For the next generation</div>
              <h2 className="ld-h2">Let children see Dharma being lived</h2>
            </div>
            <div>
              <p className="ld-nextgen__lead">
                Children inherit Dharma not only through instruction, but
                through atmosphere — the sound of a stotra, the lamp lit at
                dusk, the story behind a festival, the discipline of vrata and
                the joy of family rituals.
              </p>
              <div className="ld-editorial-rows" style={{ marginTop: 28 }}>
                {ROWS.map((text, i) => (
                  <div key={text} className="ld-editorial-row">
                    <span className="ld-editorial-row__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

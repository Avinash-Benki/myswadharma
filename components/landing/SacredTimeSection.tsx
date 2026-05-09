"use client";

import { SectionHeader } from "@/components/landing/SectionHeader";
import { Reveal } from "@/components/landing/Reveal";

const PANCHANGA_ROWS = [
  { label: "Tithi", value: "Shukla Dwitiya (sample)" },
  { label: "Nakshatra", value: "Rohini · 14:32" },
  { label: "Yoga", value: "Vyatipata" },
  { label: "Rahu Kala", value: "10:48 — 12:18" },
  { label: "Muhurtha", value: "Abhijit · 11:54 — 12:42" },
] as const;

const RHYTHM_CHIPS = [
  {
    tag: "Daily",
    title: "Today’s Panchanga",
    body: "Tithi, nakshatra, rahu kala, muhurtha, vrata and observance notes for your selected location.",
  },
  {
    tag: "Calendar",
    title: "Upcoming Festivals & Events",
    body: "Major festivals, Ekadashi, Amavasya, Poornima, Pradosha, Chaturthi, grahana and important transit days.",
  },
  {
    tag: "Weekly / Monthly",
    title: "Vrata & Upavasa",
    body: "Simple guidance on what to observe, why it matters and how families can prepare.",
  },
  {
    tag: "Pilgrimage",
    title: "Teertha Yatra & Temples",
    body: "Sthala purana, best days to visit, seva guidance, temple conduct and family yatra planning.",
  },
] as const;

const TICKER = [
  {
    tag: "Ekadashi",
    title: "Vrata Reminder",
    body: "Fasting guidance, suggested stotras, temple visit ideas and next-day parana timing.",
  },
  {
    tag: "Pradosha",
    title: "Shiva Observance",
    body: "Evening worship timing, simple family practice and Rudrabhisheka booking options.",
  },
  {
    tag: "Poornima / Amavasya",
    title: "Monthly Sacred Days",
    body: "Suggested japa, daana, tarpanam guidance and temple visit recommendations.",
  },
  {
    tag: "Festival",
    title: "Family Preparation",
    body: "Puja checklist, festival story, music playlist, puja kit and service booking links.",
  },
] as const;

export function SacredTimeSection() {
  return (
    <section className="ld-section ld-section--soft" id="dharma-detail">
      <div className="container">
        <Reveal>
          <SectionHeader
            kicker="Dharma — Sacred Observance"
            title="Know the sacred rhythm of your day and year"
            intro="Dharma helps a family stay connected to sacred time — from daily Panchanga and vrata days to festivals, samskaras, temple visits and teertha yatra."
          />

          <div className="ld-panchanga">
            <div className="ld-panchanga__meta">
              <strong>Today</strong> · Bengaluru (sample Panchanga)
            </div>
            <div className="ld-panchanga__grid">
              {PANCHANGA_ROWS.map((row) => (
                <div key={row.label} className="ld-panchanga__item">
                  <small>{row.label}</small>
                  <strong>{row.value}</strong>
                </div>
              ))}
            </div>
            <a className="ld-text-link" href="#" style={{ marginTop: 8, display: "inline-flex" }}>
              View today&apos;s full Panchanga →
            </a>
          </div>

          <div className="ld-ticker-label" style={{ marginTop: 36 }}>
            Sacred rhythm · day and year
          </div>
          <div className="ld-ticker" aria-label="Sacred rhythm">
            {RHYTHM_CHIPS.map((item) => (
              <div key={item.tag} className="ld-ticker-chip">
                <div className="ld-ticker-chip__tag">{item.tag}</div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>

          <div className="ld-wide-cta">
            <strong>This Week on mySwadharma</strong>
            <span>
              Track the next Ekadashi, upcoming Pradosha, festival preparation
              guides, suggested stotras and puja-kit reminders.
            </span>
            <a className="btn btn-secondary" href="#">
              View This Week&apos;s Sacred Calendar →
            </a>
          </div>

          <h2
            className="ld-h2"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              marginTop: 48,
              marginBottom: 12,
            }}
          >
            Plan around sacred days
          </h2>
          <p className="ld-section-intro" style={{ marginBottom: 20, maxWidth: "56ch" }}>
            A living calendar of festivals, vrata days, eclipses, temple events and
            family observances helps families prepare in advance.
          </p>

          <div className="ld-ticker" aria-label="Sample upcoming observances">
            {TICKER.map((item) => (
              <div key={item.tag} className="ld-ticker-chip">
                <div className="ld-ticker-chip__tag">{item.tag}</div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

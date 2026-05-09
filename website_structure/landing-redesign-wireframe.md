# mySwadharma — Landing Redesign Wireframe

> Goal: keep every word and offer that exists today, but stop showing it through "card after card after card." Move from a marketing-template page to an **editorial, calm, authoritative** experience that earns trust from a Hindu family within a 30-second skim.

Sources reviewed:
- Current production page: `app/page.tsx`, `content/landing-body.html` (14 blocks)
- Existing wireframe: `website_structure/sitemap.md`, `site_structure.json`
- Design system: `app/design-system.css` (warm ivory, maroon, saffron, gold, leaf — keep all)
- Inspiration patterns from 21st.dev, Linear, Vercel, Stripe, Apple product pages, Maven

---

## 1) Audit — what is making the page feel cluttered

| # | Problem | Evidence in current page |
|---|---------|--------------------------|
| 1 | **Cards everywhere.** ~10 of 14 sections render a card grid. Same surface, same shadow, same radius — the eye can't tell what is important. | `story-card`, `family-card`, `interest-card`, `pillar-card`, `event` (×8), `triad-card` (×3), `preview-block`, `commerce-card`, `curation-point`, `wide-cta` |
| 2 | **The four pillars are explained three times.** Hero service list → "Choose where you want to begin" → "Learn. Observe. Perform. Give." pillars. Same four ideas, three card grids. | Hero `hero-service` ×4; section 5 `interest-card` ×4; section 6 `pillar-card` ×4 |
| 3 | **Two near-identical "event row" sections back-to-back.** Both are 4 cards with `event-date` label + `h4` + `p`. | Section 7 (Daily/Calendar/Weekly/Pilgrimage) and section 8 (Ekadashi/Pradosha/Poornima/Festival) |
| 4 | **Closing commerce band duplicates the triad.** "Move from interest to action" lists 11 Homas + Pooja booking + Jyotishya + Store again, after the same items appeared in the triad and pillars. | Section 9 triad vs. section 13 commerce-band |
| 5 | **Triad cards behave like a SaaS pricing table.** Three vertical columns, each with mini-label, h3, intro, numbered list of 4, footnote, price, CTA. Reads as "buy a tier." | Section 9 `triad-grid` |
| 6 | **Hero is overloaded.** Eyebrow, h1, sanskrit quote, lead, two CTAs, four trust chips, medallion image, four service rows, footnote — competing for first impression. | Section 2 (already simplified in this branch) |
| 7 | **Footer underdelivers.** Six inline links. After 13 dense sections, no calm wayfinding. | Section 14 |
| 8 | **Hierarchy is flat.** Almost every section uses the same "kicker → h2 → intro p → 3–4 cards" recipe — no editorial rhythm, no rest. | All "section.section" blocks |

---

## 2) Design Principles (the new rules)

These rules apply to every section that follows. They are the source of "uniformity" the user is asking for.

### 2.1 Card budget
> **Cards exist only where someone is choosing between transactional options.**
> Knowledge, narrative, principles, indices → **no card**.

| Allowed to be a card | Must NOT be a card |
|----------------------|--------------------|
| 11 Homas inclusion (purchase) | "What is Swadharma?" narrative |
| Book a Pandit / Jyotishya consult | "Why mySwadharma" curation principles |
| Puja Store & Daana entry points | "Plan around sacred days" |
| Teertha Yatra package preview | "Listen, read and learn" indices |
|  | "For the next generation" story |
|  | The pillars overview |

### 2.2 Section rhythm (alternation, not repetition)
Page must alternate between three section *types* so the eye gets rest:

```
   EDITORIAL   →   FEATURE   →   INDEX   →   EDITORIAL   →   FEATURE …

   editorial = single column, ≤64ch, headline + paragraphs, 0 cards
   feature   = asymmetric grid, one hero cell + supporting cells (bento)
   index     = typographic list / link rail / horizontal reel
```

### 2.3 Type rules
- **Display (Fraunces):** H1 hero, H2 section titles only
- **Body (Manrope):** everything else
- **Sanskrit (Cinzel/Fraunces serif):** quoted shlokas only — never UI labels
- **Kicker:** 0.74rem, uppercase, `tracking-widest`, `--fg-accent` (saffron), one fixed style site-wide
- **Body sizes** drop from 6 to 3: `text-md` (1rem), `text-lg` (1.125rem), `text-xl` (1.25rem)

### 2.4 Color application
- **Warm ivory `--bg-base`** is the default canvas. ~60% of viewport area.
- `--bg-card` only when card budget allows.
- `--maroon-dark` reserved for H1/H2/H3 headings.
- `--fg-accent` (saffron) reserved for kickers, primary CTAs, key numbers ("11", "₹1,111").
- `--leaf` may appear once per page (Daana / giving) for semantic warmth.
- **No gradients on cards** unless the card is a featured purchase (11 Homas).

### 2.5 Motion budget
- GLSL hills: hero only (already implemented)
- Progressive blur: "What is Swadharma" only (already implemented)
- All other sections: **fade-up + slight stagger on intersect, once.** No parallax. No marquee outside the calendar ticker.

### 2.6 Spacing scale
- Section vertical padding: **`clamp(96px, 12vh, 160px)`** between major editorial blocks
- Internal block gap: **40px**
- Grid gap: **24px** (down from current 28–38px)
- Container max-width: **1120px** (down from current 1200+ feel)

---

## 3) Content inventory (every word kept)

> Mapping: every existing block has a new home. No content lost.

| # | Old block | Old class | New home |
|---|-----------|-----------|----------|
| 1 | Sticky nav | `nav.nav` | **§1 Island Nav** (already done) |
| 2 | Hero (overloaded) | `section.hero` | **§2 Hero** (simplified — already done) |
| 3 | What is Swadharma | `story-card` | **§3 What is Swadharma** (single column, progressive blur — already done) |
| 4 | For the next generation | `nextgen` | **§4 For the next generation** (editorial split, no card) |
| 5 | Choose where you want to begin | `interest-grid` | **MERGED into §5 Pillars tab viewer** (the "I want to ___" copy becomes the tab labels) |
| 6 | Learn. Observe. Perform. Give. | `pillars` | **§5 Pillars tab viewer** (one stage, four tabs, full pillar detail) |
| 7 | Know the sacred rhythm | `events-row` | **MERGED into §6 Sacred Time** (becomes the categorized rail) |
| 8 | Plan around sacred days | `events-row` | **§6 Sacred Time** (specific upcoming days as horizontal ticker) |
| 9 | Rituals, journeys, services (triad) | `triad-grid` | **SPLIT**: 11 Homas → §7 dedicated feature; Teertha Yatra → §8 quiet block; Book/Consult/Shop → §9 quiet rows |
| 10 | Featured Shastra collections | `preview-tabs` | **§10 Listen, read, learn** (3-column index, no card chrome) |
| 11 | Give with Shraddha | `events-row` | **§11 Daana** (editorial 4-up row, no card chrome) |
| 12 | Curated for trust | `curation-grid` | **§12 Why mySwadharma** (6 principles as inline list, no card chrome) |
| 13 | Move from interest to action | `commerce-band` | **§13 Closing CTA Band** (single statement + two CTAs only — drop the duplicate 4 cards) |
| 14 | Footer | `footer` | **§14 Mega Footer** (sitemap columns + brand + legal) |

> Sanskrit quote `स्वधर्मे निधनं श्रेयः / Swadharme Nidhanam Shreyah` moves to **§7** (the 11 Homas feature) where it gives sankalpa weight, not §2 where it competed with the H1.
> Trust chips (Authentic sources / Curated practitioners / No fear-based selling / Family-first guidance) become a calm strip directly above **§12** (Why mySwadharma) since they are the same idea expanded.

---

## 4) New page map (14 blocks → 14 blocks, fewer cards, more rhythm)

```
 §1   Island Nav                              [chrome]
 §2   Hero (centered, GLSL hills)             [editorial]
 §3   What is Swadharma                       [editorial]   ┐
 §4   For the next generation                 [editorial]   │ continuous narrative arc
 §5   The Four Pillars (tab stage)            [feature]     │
 §6   Sacred Time (Panchanga + ticker)        [index]       │
 §7   11 Homas in Your Name (signature)       [feature]     │
 §8   Teertha Yatra (companion to §7)         [editorial]   │
 §9   Trusted Services (Pandit/Jyotishya/Shop)[index]       │
 §10  Listen, Read, Learn (Shastra)           [index]       │
 §11  Give with Shraddha (Daana)              [feature]     │
 §12  Why mySwadharma (principles)            [index]       │
 §13  Closing Sankalpa Band                   [editorial]   ┘
 §14  Mega Footer                             [chrome]
```

Card-bearing sections: **§5 (one tab stage card), §7 (one signature card), §9 (three booking rows), §11 (Daana entry tiles)** = 4 of 12 content sections. Down from ~10.

---

## 5) Per-section wireframes

### §1 Island Nav (no change — keep current implementation)

```
┌────────────────────────────────────────────────────────────────────────┐
│  ●●●  MYSWADHARMA      Home Shastra Dharma Karma Daana   [11 Homas →]  │
│       Learn · Observe · Perform · Give                                  │
└────────────────────────────────────────────────────────────────────────┘
```

---

### §2 Hero (centered, GLSL hills — keep current; one tweak)

```
                              ┌──────────────────┐
                              │   GLSL hills     │
                              │   (hero only)    │
                              └──────────────────┘

                    Nurture Swadharma.   ← italic Manrope 300, --muted
                    Build Satkarma.      ← Fraunces 700, --maroon-dark

           An ecosystem for practicing Hindu families to learn from
           authentic sources, observe sacred time, perform rituals
           with trust and create well-being for generations to come.

                    ┌──────────────────────────────────┐
                    │  ↓  begin the path               │  hairline pill, hover lifts
                    └──────────────────────────────────┘
```

**Tweak:** add one tiny low-fi "scroll cue" pill below the lead (link to `#swadharma`). Remove `Start Exploring →` and `11 Homas` CTAs from the hero — they reappear in §13 and the island nav. Hero is for **arrival**, not action.

**Motion:** hills already animate; copy stays still.

---

### §3 What is Swadharma (already redesigned — keep)

```
                              ┌─ progressive frost ─┐
                              │ (scroll-sharpens)    │
                              └─────────────────────┘

           WHAT IS SWADHARMA?            ← saffron kicker

           Your own rightful way
           of living Dharma              ← single-column Fraunces H2

           Swadharma is the Dharma that becomes personal —
           shaped by one's family tradition, stage of life,
           community, sampradaya, duties, temperament and
           sincere spiritual aspiration.

           For a practicing Hindu family, it is expressed
           through daily discipline, sacred observances,
           rituals, learning, temple visits, seva and the
           values passed to the next generation.

           mySwadharma exists because many families want to
           practice sincerely, but face scattered guidance,
           commercialized services and contradictory
           information. The platform brings authentic
           knowledge, sacred calendars, trusted practitioners,
           curated resources and verified giving opportunities
           into one clear ecosystem.
```

> Note: hero hills already flow into this section through `HeroIntroFlow`. Keep.

---

### §4 For the next generation (rebuild without `family-card`)

```
   FOR THE NEXT GENERATION

   Let children see Dharma          Children inherit Dharma not only through
   being lived                      instruction, but through atmosphere —
                                    the sound of a stotra, the lamp lit at
                                    dusk, the story behind a festival, the
                                    discipline of vrata, the joy of family
                                    rituals.

   ────────────────────────────────────────────────────────────────────────
   01  Daily deepa and prayer routines
   ────────────────────────────────────────────────────────────────────────
   02  Stotras and bhakti music for children
   ────────────────────────────────────────────────────────────────────────
   03  Festival stories and explainers
   ────────────────────────────────────────────────────────────────────────
   04  Temple visit learning guides
   ────────────────────────────────────────────────────────────────────────
```

**Layout:** sticky asymmetric — left column (title + sub) is sticky for the section's scroll height; right column scrolls through a numbered editorial list with hairline rows (no card surfaces).
**Motion:** rows fade-up on intersect with a 60ms stagger. No icons (the emoji icons go away — emoji-as-icon was contributing to the busy feeling).
**Width:** 1120px container. Left col 5/12, right col 7/12.

---

### §5 The Four Pillars — Tab Stage (replaces both §5 and §6 of the old page)

```
   THE FOUR ASPECTS

   Learn. Observe. Perform. Give.        Whether you want to understand,
                                         observe, perform or contribute,
                                         start with the path that matters
                                         most to your family today.

   ┌────────────────────────────────────────────────────────────────────┐
   │  Shastra ▎ Dharma  │ Karma  │ Daana                                │  ← tabs (left aligned, hairline indicator)
   │  ─────────                                                         │
   │                                                                    │
   │   Sacred Knowledge                                                 │  ← changes per tab
   │                                                                    │
   │   For families who want reliable sources before they practice.     │
   │                                                                    │
   │   ·  Bhakti music and chanting                                     │
   │   ·  Pravachanas and books                                         │
   │   ·  Children's learning                                           │
   │                                                                    │
   │              ┌──────────────────────┐                              │
   │              │  Explore Shastra →   │                              │
   │              └──────────────────────┘                              │
   └────────────────────────────────────────────────────────────────────┘
```

**Why this works:** the old page had the same four pillars as (a) hero service list, (b) "I want to ___" interest cards, (c) `pillar-card` grid. Collapsing them into **one tab stage** with the "I want to learn / observe / perform / give" copy as the tab label keeps every word but presents it once.

**Behavior:**
- Tabs animate width-fitted hairline underline (200ms ease).
- Content swaps with `motion.div key={tab}` fade+y(8) crossfade (180ms).
- Auto-cycles every 5s on first viewport (pauses on hover/focus).
- Mobile: tabs stack horizontally and become a scrollable rail.

**Tab content (kept from existing):**

| Tab | "I want to…" sub-label | Sacred title | Bullet list (3) | CTA |
|-----|------------------------|--------------|-----------------|-----|
| Shastra | I want to learn | Sacred Knowledge | Bhakti music · Pravachanas & books · Children's learning | Explore Shastra → |
| Dharma | I want to observe | Sacred Observance | Daily Panchanga · Festivals & events · Vrata, temples & teertha | Explore Dharma → |
| Karma | I want to perform | Sacred Ritual Action | 11 Homas in your name · Pooja & Purohitas · Jyotishya | Explore Karma → |
| Daana | I want to give | Sacred Giving | Temples & goshalas · Vidyadana & annadana · Dharmic institutions | Explore Daana → |

---

### §6 Sacred Time — Panchanga + Upcoming days (merges §7 + §8 of old page)

```
   DHARMA — SACRED OBSERVANCE

   Know the sacred rhythm           Dharma helps a family stay connected to
   of your day and year             sacred time — from daily Panchanga and
                                    vrata days to festivals, samskaras,
                                    temple visits and teertha yatra.

   ┌──────────── Today ────────────────────────────────────────────────┐
   │                                                                   │
   │   Friday  ·  Bengaluru                                            │  ← Panchanga module
   │                                                                   │     (one card — calm,
   │   Tithi      Shukla Dwitiya                                       │      because it shows
   │   Nakshatra  Rohini · 14:32                                       │      live data, not a
   │   Yoga       Vyatipata                                            │      sales pitch)
   │   Rahu Kala  10:48 — 12:18                                        │
   │   Muhurtha   Abhijit · 11:54 — 12:42                              │
   │                                                                   │
   │            View today's full Panchanga →                          │
   └───────────────────────────────────────────────────────────────────┘

   Upcoming sacred days                                       this week →

   ╭─ Ekadashi ────╮ ╭─ Pradosha ───╮ ╭─ Poornima ────╮ ╭─ Festival ───╮
   │ Vrata Reminder│ │Shiva Observ. │ │Monthly Sacred │ │Family Prep   │   ← horizontal ticker /
   │ Fasting…      │ │Evening…      │ │Suggested japa │ │Puja checklist│      scroll-snap reel
   ╰───────────────╯ ╰──────────────╯ ╰───────────────╯ ╰──────────────╯      (mobile = swipe)

   ┌───────────────────────────────────────────────────────────────────┐
   │   This week on mySwadharma                                        │
   │   Track the next Ekadashi, upcoming Pradosha, festival            │
   │   preparation guides, suggested stotras and puja-kit reminders.   │
   │                                                                   │
   │            View this week's sacred calendar  →                    │
   └───────────────────────────────────────────────────────────────────┘
```

**Why this works:** the old page had **two consecutive event-row sections** doing the same job. Merge into one editorial section with three pieces: a **Panchanga snapshot** (live, useful), a **horizontal ticker** of upcoming days, and the **"This Week" wide CTA**. The two old "Daily / Calendar / Weekly / Pilgrimage" type labels (§7 of old) become tab chips above the ticker if you want to filter.

**Component types:**
- Panchanga: card (allowed — transactional/data-dense)
- Ticker: scroll-snap rail with hairline-bordered chips (not full cards)
- This-week CTA: existing `wide-cta` style but no shadow, hairline border

**Mobile:** Panchanga full width, ticker becomes horizontal swipe with snap, CTA full width.

---

### §7 11 Homas in Your Name (the signature feature — gets its own breathing room)

```
   ┌─ FEATURED KARMA OFFERING ──────────────────────────────────────────┐
   │                                                                    │
   │           स्वधर्मे निधनं श्रेयः                                       │  ← Sanskrit quote
   │           Swadharme Nidhanam Shreyah                                │     (moved here from hero)
   │                                                                    │
   │           11 Homas in Your Name                                     │  ← H2 Fraunces
   │                                                                    │
   │   Your name, nakshatra and sankalpa are included in 11 sacred      │
   │   Homas performed on important observance days across the year.    │
   │                                                                    │
   │                                                                    │
   │   01  Ganesha Chaturthi    Mahaganapathi Homa                      │
   │   02  Navaratri            Durga Homa · Chandika Homa · Deepa…     │  ← editorial numbered
   │   03  Mahashivarathri      Rudra Homa · Rudrabhisheka · Mrutyun…   │     list (NOT a card list)
   │   04  Pitru Paksha         Tila Homa · Pavamana Homa               │
   │   05  …                                                            │  ← expand to 11 on click
   │   ────────────────────────────────────────────────────────────────  │
   │   View all 11 homas (Shani Jayanthi, Hanuman Jayanthi, Varaha       │
   │   Swamy Jayanthi, Bhadrakali Pooje and more)                       │
   │                                                                    │
   │                                                                    │
   │   ₹1,111   per person · per year                                    │  ← oversized number,
   │                                                                    │     saffron, Fraunces
   │   ┌──────────────────────────┐  ┌──────────────────────┐           │
   │   │  Begin your sankalpa →   │  │  Talk to a guide     │           │
   │   └──────────────────────────┘  └──────────────────────┘           │
   │                                                                    │
   └────────────────────────────────────────────────────────────────────┘
   ◇ this is the only place on the page with a gradient surface ◇
```

**Why this works:** the old triad shoved 11 Homas into one of three vertical columns alongside Yatra and Book/Consult/Shop. It deserved more weight. Now it gets a **dedicated editorial spread** with the Sanskrit quote earning its keep on the page where the user is being asked to commit.

**Surface:** ONE allowed gradient card on the page — soft saffron→gold radial like the existing `hero-quote`. This signals "this is the offer."
**Interaction:** "View all 11 homas" expands the list inline (no modal). Smooth height animation (Framer Motion `<motion.div layout>`).

---

### §8 Teertha Yatra Guides (editorial companion to §7 — no card)

```
                                          TEERTHA YATRA GUIDES

   [ optional small temple silhouette     Plan sacred journeys with temple
     illustration, single line art,       significance, local customs, seva
     no photos ]                          guidance and family-friendly
                                          itineraries.

                                          ·  Temple significance — sthala
                                             purana, deity tradition,
                                             sacred geography
                                          ·  Best time to visit — festivals,
                                             special days, seva timings
                                          ·  Ritual guidance — sankalpa,
                                             stotras, offerings, conduct
                                          ·  Family yatra planning —
                                             child-friendly tips, nearby
                                             kshetras, itinerary support

                                          Start with popular kshetras,
                                          festival yatras and curated family
                                          pilgrimage routes.

                                          Explore Teertha Yatra packages →
```

**Layout:** asymmetric editorial split. Left = optional minimal SVG line illustration (or empty space — restraint is fine). Right = title + intro + 4-bullet rhythm. **No card.**

---

### §9 Trusted Services (Karma — Pandit / Jyotishya / Puja Products)

```
   TRUSTED PRODUCTS & SERVICES

   Book, consult, shop                    One place for curated ritual
                                          services, consultations, products
                                          and giving options.


   ┌─────────────────────────────────────────────────────────────────────┐
   │  Book a Pandit                                                      │
   │  Choose by ritual, sampradaya, language and location                │
   │                                                  Book online  →     │
   ├─────────────────────────────────────────────────────────────────────┤
   │  Jyotishya Consultation                                             │
   │  Vedic, Prashna, Muhurtha and family guidance                       │
   │                                                  Consult online →   │
   ├─────────────────────────────────────────────────────────────────────┤
   │  Puja Products                                                      │
   │  Kits, malas, samagri, lamps, shankha and sacred items              │
   │                                                  Shop now  →        │
   ├─────────────────────────────────────────────────────────────────────┤
   │  Daana Options                                                      │
   │  Temples, goshalas, pathashalas and annadana causes                 │
   │                                                  Give now  →        │
   └─────────────────────────────────────────────────────────────────────┘
```

**Why this works:** the old triad's third column had four numbered items each 3-deep. Promoting them to **full-width quiet rows** (single shared card with hairlines between rows) gives each its own readable line and removes the SaaS-pricing-table feel.

**Hover:** entire row gets a subtle warm tint (`--bg-tint-saffron`); CTA text shifts +4px right.
**Mobile:** rows become full-width stacked tap targets.

---

### §10 Listen, Read, Learn (Shastra — keep 3-column index, drop card chrome)

```
   FEATURED SHASTRA COLLECTIONS

   Listen, read and learn                 Explore curated music, pravachanas,
   from authentic sources                 books, stotras and learning paths
                                          from authentic sources.


   Bhakti Music              Indic Knowledge Studies      Pravachanas & Books

   Best renditions           Curated study paths for      Authentic voices,
   organized so families     people who want depth        scholar-led
   can listen, learn and     without confusion.           explanations and
   repeat at home.                                        guided reading.


   Stotras by Devata     →   Smriti Traditions       →    Daily Pravachana    →
   Devaranama            →   Purana Chronicles       →    Dharma Books        →
   Vedic Chanting        →   Bhagavad Gita           →    Festival Explainers →
   Kids' Shloka Playlist →   Itihasa & Civilizational →   Ritual Meaning      →
   Classical Bhakti      →   Dharma for Modern         →   Authentic Scholars →
                              Families
```

**Why this works:** these were already the closest thing on the page to a clean index. Just drop the card surfaces — the columns themselves create rhythm. Vertical hairlines between columns. Link items get a hover underline animation (left→right).

---

### §11 Give with Shraddha (Daana — editorial 4-up, no card chrome)

```
   FEATURED DAANA OPPORTUNITIES

   Give with Shraddha. Give with Trust.


   Temple Daana            Goshala Seva          Vidyadana             Annadana
   ──────────────          ──────────────        ──────────────        ──────────────
   Nitya Puja & Utsava     Cow Care & Fodder     Pathashalas &         Food Sponsorship
   Support                                       Schools

   Support nitya puja,     Support fodder,       Support Veda          Sponsor meals during
   deepa seva, utsava,     medical care,         pathashalas,          festivals, vrata days
   renovation and temple   shelter and monthly   Sanskrit learning,    and special occasions
   maintenance.            cow protection.       dharmic schools and   at trusted institutions.
                                                 scholarships.

   Give to a temple →      Support a goshala →   Support a school →    Sponsor annadana →
```

**Layout:** 4-column equal grid, separated by **hairlines only**, no shadows, no rounded surfaces.
**One-color accent:** kicker uses `--leaf` here (Daana = giving = green) — the only place on the page leaf appears.

---

### §12 Why mySwadharma (principles — replaces curation card grid)

```
   ────────────────────────── trust strip ──────────────────────────
   Authentic sources  ·  Curated practitioners  ·  No fear-based selling  ·  Family-first
   ─────────────────────────────────────────────────────────────────


   WHY MYSWADHARMA?

   Curated for trust, clarity and authentic practice


      01   Verified practitioners
           Purohitas, astrologers and service providers are curated, not blindly listed.

      02   No fear-based selling
           Guidance should be devotional and practical, not anxiety-driven.

      03   Source-based content
           Shastra and knowledge resources are anchored in serious voices.

      04   Transparent Daana
           Clear purpose, beneficiary information, receipts and periodic updates.

      05   Regional sensitivity
           Respect for family tradition, sampradaya, language and local practice.

      06   Family-first design
           Built for elders, parents, children and modern Hindu households.
```

**Why this works:** the old `curation-grid` had 6 cards in a 3×2 grid that all looked identical to the curation principles next door. As a **numbered editorial list** the principles read like a manifesto and feel earned.

**Trust strip** (originally in the hero) sits as a one-line ribbon above this section — they reinforce each other.

---

### §13 Closing Sankalpa Band (replaces "commerce-band" with its 4 duplicate cards)

```
   ╔═══════════════════════════════════════════════════════════════════╗
   ║                                                                   ║
   ║                       BOOK · BUY · OFFER                          ║
   ║                                                                   ║
   ║                Move from interest to action                       ║
   ║                                                                   ║
   ║      We empower you with the ecosystem to nurture your            ║
   ║      Swadharma — building satkarma and well-being for your        ║
   ║      entire family and future generations. Choose what your       ║
   ║      family needs next: bookings, consultations, puja products,   ║
   ║      Homa participation or meaningful Daana.                      ║
   ║                                                                   ║
   ║      ┌──────────────────────────┐  ┌──────────────────────┐       ║
   ║      │  Begin your sankalpa →   │  │  Talk to a guide     │       ║
   ║      └──────────────────────────┘  └──────────────────────┘       ║
   ║                                                                   ║
   ╚═══════════════════════════════════════════════════════════════════╝
```

**Why this works:** the old page closed with a 2-column section that had the heavy editorial copy on the **left** and **four more cards** (11 Homas / Pooja / Jyotishya / Store) on the **right** — all of which were the same items already presented in §5, §6, §7, §9. Drop those four cards entirely. The closing band is now **one calm full-width statement** with the same two CTAs as the 11 Homas signature, reinforcing the page's main offer.

**Surface:** soft warm gradient band (saffron tint), full-bleed background, container-constrained content.

---

### §14 Mega Footer (replaces 6-link inline footer)

```
   ┌──────────────────────────────────────────────────────────────────────┐
   │                                                                      │
   │  mySwadharma                  Shastra              Karma             │
   │  Learn · Observe ·            Bhakti Music         11 Homas          │
   │  Perform · Give               Pravachanas          Book Pooja        │
   │                               Indic Studies       Jyotishya          │
   │  A curated platform for       Children's Corner   Puja Products      │
   │  practicing Hindu families.                                          │
   │                               Dharma              Daana              │
   │                               Daily Panchanga     Temple Daana       │
   │                               Festivals           Goshala Seva       │
   │                               Vrata & Upavasa     Vidyadana          │
   │                               Teertha Yatra       Annadana           │
   │                                                                      │
   │                               Support              Legal             │
   │                               Contact              Terms             │
   │                               Become a provider    Privacy           │
   │                               List a temple        Refund policy     │
   │                                                                      │
   ├──────────────────────────────────────────────────────────────────────┤
   │  © 2026 mySwadharma                            हरि ॐ तत् सत्            │
   └──────────────────────────────────────────────────────────────────────┘
```

**Why this works:** every existing footer link is preserved (Contact / Become a Service Provider / List a Temple / Terms / Privacy / Refund Policy), now organized into named columns alongside a sitemap that mirrors the page sections. Closing line with `हरि ॐ तत् सत्` keeps brand voice without being heavy.

---

## 6) Shared component library (build once, use across sections)

| Component | Where used | Spec |
|-----------|------------|------|
| `SectionHeader` | §3, §4, §5, §6, §9, §10, §11, §12 | kicker (uppercase saffron) + H2 (Fraunces, maroon-dark) + optional `intro` (right column on ≥1024px, below on mobile) |
| `EditorialList` | §4, §7, §12 | Numbered (`01 02 03…` saffron), full-width hairline rows, hover tint, no card |
| `LinkRail` | §10 | Vertical stack of `<a>` rows with `→` glyph; hover underline-from-left |
| `Ticker` | §6 | Horizontal scroll-snap rail with hairline-bordered chips; on desktop arrows fade in on hover |
| `WideCta` | §6, §13 | Full-width band, hairline border, optional gradient. Single H3 + one short paragraph + 1–2 CTAs |
| `TabStage` | §5 | Tab strip with motion underline + cross-fade content panel; auto-advance with pause-on-hover |
| `FeatureCard` | §7 only | Soft saffron gradient surface, large numeric callout, primary + secondary CTA |
| `RowList` | §9 | Single shared card subdivided by hairlines into rows |
| `IconlessRowGrid` | §11 | 4-up equal grid separated by hairlines; no surfaces |
| `MegaFooter` | §14 | 4-column sitemap + brand block + bottom legal row |

> **Card-vs-no-card rule made concrete:** only `FeatureCard`, `RowList`, and the Panchanga snapshot are allowed visual cards. Everything else is type, hairlines, and whitespace.

---

## 7) Inspiration references (for review)

- **21st.dev** — progressive blur (already used in §3); tab/stage components for §5 pillar viewer
- **Linear** — full-bleed editorial sections, type rhythm, restraint with shadows
- **Vercel** — sticky asymmetric scroll for §4 (next-gen) and §8 (teertha yatra)
- **Stripe** — quiet feature rows for §9 and footnoted CTAs at §13
- **Apple product pages** — long-form editorial with breathing room (§7 11 Homas spread)
- **Maven / Stripe pricing** — but inverted: avoid pricing-table look on §9 (we deliberately do not stack)
- **Notion** — mega footer with sitemap columns (§14)

---

## 8) Implementation phases (recommended order)

1. **Phase A — content move only, no visual change**
   - Build `SectionHeader`, `EditorialList`, `RowList`, `IconlessRowGrid`, `LinkRail`, `MegaFooter` as shared components
   - Rewrite each section using these components, **keep all current copy**
   - Update `app/page.tsx` to render new section components (server-rendered React, no `dangerouslySetInnerHTML`)

2. **Phase B — motion + interaction**
   - Tab stage (§5)
   - Ticker (§6)
   - Numbered list expand (§7 "View all 11 homas")
   - Sticky scroll for §4

3. **Phase C — polish**
   - Final spacing pass against the new spacing scale (§2.6)
   - Replace emoji icons with thin line SVGs (lucide-react is already installed) — applied sparingly, only in §5 tab labels, §6 Panchanga, §11 Daana
   - Trust strip ribbon above §12

---

## 9) Open questions for the user

1. The Sanskrit quote `स्वधर्मे निधनं श्रेयः` — keep it in §7 (the 11 Homas signature) as proposed, or also keep a smaller version inside §3?
2. Panchanga (§6): should we ship a real live data integration in v1 or static "today" placeholder?
3. Pricing display (§7 11 Homas): keep `₹1,111` always visible, or reveal after a sankalpa intent click for a more contemplative feel?
4. Footer mantra (`हरि ॐ तत् सत्`): include or skip — stylistic preference.
5. Photography: should we plan for any real imagery (temple stone reliefs, lamps), or stay illustration-light as proposed?

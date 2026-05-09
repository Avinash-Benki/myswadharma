# MySwadharma Design System

## About the Brand
**mySwadharma** is a platform serving the Hindu community — helping families **Learn, Observe, Perform and Give** with authenticity, clarity and trust. The four pillars are: **Shastra** (scripture & learning), **Dharma** (righteous living), **Karma** (rituals & ceremonies), and **Daana** (giving & seva).

**Tagline:** *Shastra · Dharma · Karma · Daana*

## Sources
- Primary: `uploads/myswadharma_homepage_v20_clean_marble_refinement.html` — Full homepage HTML

---

## CONTENT FUNDAMENTALS
- **Tone:** Reverent yet accessible. Warm, knowledgeable, trustworthy. Never preachy.
- **Voice:** Second person ("you", "your family"). Inclusive and welcoming.
- **Casing:** Title case for headings. Sentence case for body. ALL CAPS for eyebrow labels (small, tracked).
- **Sanskrit terms** are used naturally and briefly glossed when needed (e.g., "Homa · Fire Ritual").
- **No emoji** — symbols and iconography are used sparingly and with cultural meaning.
- **Numbers** used with purpose — "200+ pandits", "50+ rituals" — building trust.

---

## VISUAL FOUNDATIONS

### Colors
- **Background:** Ivory `#fffaf0` with warm radial gradients in saffron and maroon
- **Primary accent:** Saffron `#d97706` — CTAs, highlights, active states
- **Deep accent:** Deep Saffron `#9a4f05` — hover states, strong emphasis
- **Brand red:** Maroon `#6e1f17` — headings, borders, cultural anchor
- **Dark maroon:** `#3f100d` — darkest text, strong headings
- **Gold:** `#d6a43b` — decorative, secondary accent
- **Copper:** `#a6632b` — warm mid-tones
- **Leaf green:** `#2f5d46` — trust signals, verified, nature
- **Ink:** `#251813` — body text base
- **Muted:** `#75645d` — secondary text

### Typography
- **Brand/Logo:** Cinzel — classical Roman letterforms evoking Sanskrit inscriptions
- **Display/Headings:** Fraunces — optical-size serif with warmth and authority
- **Body/UI:** Manrope — geometric sans with high legibility

### Backgrounds & Texture
- Warm ivory base with radial gradient halos (saffron top-left, maroon top-right)
- Cards use frosted glass: `rgba(255,255,255,0.72)` with backdrop blur
- Subtle border: `rgba(110,31,23,0.12)` — maroon-tinted

### Corner Radii
- XL: 30px — hero panels, major cards
- LG: 22px — section cards
- MD: 16px — list items, chips
- Pills: 999px — buttons, nav links, tags

### Shadows
- Strong: `0 22px 55px rgba(63,16,13,0.13)`
- Soft: `0 14px 35px rgba(63,16,13,0.08)`

### Animations
- Reveal on scroll: `opacity 0 → 1`, `translateY(18px → 0)`, 0.65s ease
- Button hover: `translateY(-2px)` + shadow intensify
- No bounces or spring physics — dignified, measured transitions

### Hover/Press States
- Buttons: background darkens + slight lift
- Nav links: warm saffron background tint
- Cards: subtle shadow increase

### Imagery
- Warm, saturated photography of temples, rituals, families
- Filter: `saturate(0.95) contrast(1.03)` — slightly enriched
- Always rounded corners, never raw edges

### Layout
- Max content width: 1180px
- Grid-based layouts, typically 2–3 columns
- Generous padding: 56–74px vertical sections

---

## ICONOGRAPHY
- No external icon set — icons are drawn as simple inline SVGs or represented as styled divs
- Cultural symbols: Om (ॐ), lotus, flame, mandala motifs used sparingly as decorative accents
- Icon containers: `42×42px`, rounded 13px, saffron-tinted background `rgba(242,140,0,0.14)`

---

## FILE INDEX
- `README.md` — this file
- `colors_and_type.css` — all CSS custom properties (tokens)
- `preview/` — design system card previews
- `ui_kits/web/` — homepage UI kit components
- `MySwadharma Design System.html` — full design system overview
- `MySwadharma Homepage.html` — homepage with hero section
- `SKILL.md` — agent skill manifest

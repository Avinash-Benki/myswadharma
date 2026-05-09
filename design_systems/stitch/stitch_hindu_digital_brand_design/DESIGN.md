---
name: Clean Marble
colors:
  surface: '#fff8f5'
  surface-dim: '#e8d7cd'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e9'
  surface-container: '#fdeae0'
  surface-container-high: '#f7e5da'
  surface-container-highest: '#f1dfd5'
  on-surface: '#231a14'
  on-surface-variant: '#554337'
  inverse-surface: '#392e28'
  inverse-on-surface: '#ffede3'
  outline: '#887365'
  outline-variant: '#dbc2b2'
  surface-tint: '#934b00'
  primary: '#934b00'
  on-primary: '#ffffff'
  primary-container: '#d97a26'
  on-primary-container: '#472100'
  inverse-primary: '#ffb782'
  secondary: '#b4271f'
  on-secondary: '#ffffff'
  secondary-container: '#fe5c4c'
  on-secondary-container: '#610002'
  tertiary: '#7b5800'
  on-tertiary: '#ffffff'
  tertiary-container: '#b78b2d'
  on-tertiary-container: '#3a2800'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc5'
  primary-fixed-dim: '#ffb782'
  on-primary-fixed: '#301400'
  on-primary-fixed-variant: '#703800'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#910809'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#f1bf5c'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#fff8f5'
  on-background: '#231a14'
  surface-variant: '#f1dfd5'
typography:
  h1:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The design system is centered on the concept of a modern sanctuary. It balances the weight of ancient tradition with the clarity of contemporary minimalism. The target audience includes practicing Hindu families seeking a digital space that feels as sacred and serene as a home mandir, yet functions with the efficiency of a premium modern application.

The visual style is **Clean Marble**, a hybrid of **Minimalism** and **Tactile/Skeuomorphism**. It avoids heavy ornamentation in favor of high-quality "materials"—specifically polished white stone, soft light dispersion, and precise, etched typography. The emotional response is one of reverence, calm, and clarity.

## Colors
The palette is rooted in the earth and the altar. **Deep Saffron** serves as the primary energetic driver, used for key actions and progress. **Kumkum Red** acts as a powerful secondary color for ceremonial highlights and critical interactions.

**Sacred Gold** is reserved for iconography, borders, and accents that signify premium or spiritual value. The background system utilizes **White Marble** (a very warm, off-white) to prevent eye strain and evoke the feeling of a temple floor. **Sandalwood** and **Light Sandal** are used for secondary surfaces and container backgrounds to create subtle depth without introducing harsh grays.

## Typography
This design system uses a high-contrast typographic pairing. Headings utilize **Noto Serif** to mimic the look of stone-carved inscriptions or traditional manuscripts, providing an authoritative and timeless feel. Large headings should be set with slightly tighter letter spacing to emphasize their monumental quality.

For all functional and long-form text, **Manrope** provides a geometric yet warm sans-serif experience. Its open counters ensure readability even at small sizes. Labels and small metadata should use Manrope with increased letter spacing and uppercase styling to maintain a clean, organized hierarchy.

## Layout & Spacing
The layout philosophy follows a **Fixed Grid** model for desktop to maintain a sense of structured composition, while transitioning to a fluid model for mobile. We use an 8px base unit to ensure a consistent rhythmic scale.

To evoke serenity, whitespace is treated as a primary design element. Padding within containers should be generous (the `lg` or `xl` tokens) to prevent the UI from feeling cluttered. Alignment should be centered for hero sections and spiritual content to evoke a sense of balance (Symmetry), while functional dashboards should follow a strict left-aligned grid.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Ambient Shadows** rather than stark outlines. 
1.  **Base Layer:** The White Marble background.
2.  **Surface Layer:** Sandalwood-tinted containers with soft, diffuse shadows (Blur: 20px, Opacity: 4%, Color: Saffron-tinted Umber).
3.  **Glow Effects:** Use subtle radial gradients (e.g., a soft glow of #fff0d2 transitioning to 0% opacity) behind primary buttons or sacred icons to simulate "Diya Light."
4.  **Engraving:** For certain headers or dividers, use a 1px "inner shadow" to create an etched-into-stone effect.

## Shapes
The shape language is **Rounded**. It prioritizes a friendly, approachable feel that mimics the weathered edges of ancient stone temples. This more pronounced curvature softens the interface significantly compared to sharper styles. Larger components like cards and modals should use the `rounded-lg` (1.0rem) setting, while buttons use the base `rounded` (0.5rem) setting.

## Components
-   **Buttons:** Primary buttons use a Deep Saffron background with white text and a subtle "Diya" glow on hover. They feature a 0.5rem corner radius. Secondary buttons use an Ivory background with a Sacred Gold border.
-   **Cards:** Use a "White Marble" surface with a 1px border in Sandalwood. They utilize a 1.0rem corner radius. On hover, the card elevation increases with an ambient shadow.
-   **Inputs:** Fields are minimal, featuring only a bottom border in Sandalwood that turns Sacred Gold on focus. Labels sit inside the field in a smaller, uppercase Manrope font.
-   **Chips/Tags:** Used for categorization (e.g., "Mantra," "Satsang"), these have highly rounded `xl` corners (1.5rem) and a soft Sandalwood fill with Kumkum Red text.
-   **Icons:** Use thin-stroke (1.5px) vector icons. Spiritual icons (lotus, diya, om) should be rendered in Sacred Gold.
-   **Dividers:** Use a horizontal line with a small diamond or floral motif in the center to mimic traditional architectural details.
-   **Progress Bars:** Use a Deep Saffron fill with a Sandalwood track, featuring a slight inner glow and fully rounded (pill) ends.
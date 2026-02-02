# FlagVault Technologies — Website Styleguide

## Brand Identity

FlagVault Technologies builds focused, well-crafted software tools. The website serves as a product portfolio hub — each product gets its own section/page but shares a unified visual system. The brand conveys **technical credibility, craftsmanship, and restraint**.

Current product lineup includes MoraFyn (macOS Pomodoro timer) and 1NinetyFive (country learning app), with more planned.

---

## Color Palette

### Core Brand Colors
- **Background**: `#0A0A0A` (near-black)
- **Surface**: `#141414` (cards, elevated sections)
- **Surface Hover**: `#1E1E1E`
- **Border**: `#2A2A2A` (subtle dividers)

### Brand Accent
- **Primary accent**: `#3B82F6` (clean blue — neutral across all products, conveys trust/technology)
- **Primary accent hover**: `#2563EB`
- **Accent muted**: `rgba(59, 130, 246, 0.12)` (backgrounds, tags)

### Per-Product Accent Colors

Each product page may use its own accent color **in place of** the primary accent for CTAs and highlights. The core brand colors (backgrounds, surfaces, borders, text) remain constant.

| Product | Accent | Hover | Usage |
|---------|--------|-------|-------|
| FlagVault (brand) | `#3B82F6` | `#2563EB` | Landing page, shared pages |
| MoraFyn | `#E05A33` | `#C94E2B` | MoraFyn product page only |
| 1NinetyFive | `#6366F1` | `#4F46E5` | 1NinetyFive product page only |

When adding a new product, assign it an accent that has sufficient contrast on `#0A0A0A` (minimum 4.5:1 for text, 3:1 for large UI elements) and does not duplicate an existing product accent.

### Text Colors
- **Primary text**: `#F0F0F0`
- **Secondary text**: `#8A8A8A`
- **Muted text**: `#555555`

### Gradients
- Use sparingly — hero sections only
- **Brand gradient**: linear gradient from `#3B82F6` to `#8B5CF6`
- **Product pages**: may substitute the product accent as the gradient start color
- **Background ambient glow**: radial gradient of the relevant accent at 5-8% opacity behind hero sections

---

## Typography

### Font Stack
- **Headings**: `"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Body**: `"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Monospace** (technical details, code): `"SF Mono", "Fira Code", "Cascadia Code", monospace`

### Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 (hero) | 56px / 3.5rem | 700 | 1.1 | -0.02em |
| H2 (section) | 36px / 2.25rem | 600 | 1.2 | -0.01em |
| H3 (subsection) | 24px / 1.5rem | 600 | 1.3 | 0 |
| Body large | 18px / 1.125rem | 400 | 1.6 | 0 |
| Body | 16px / 1rem | 400 | 1.6 | 0 |
| Caption | 14px / 0.875rem | 400 | 1.5 | 0.01em |
| Label/tag | 12px / 0.75rem | 500 | 1.4 | 0.04em |

---

## Spacing System

8px base grid:
- `4px` — tight
- `8px` — xs
- `16px` — sm
- `24px` — md
- `32px` — lg
- `48px` — xl
- `64px` — 2xl
- `96px` — 3xl (section padding vertical)
- `128px` — 4xl (hero padding vertical)

---

## Layout

- **Max content width**: 1120px, centered
- **Page margins**: 24px mobile, 48px tablet, auto-centered desktop
- **Section vertical padding**: 96px top/bottom
- **Grid**: 12-column desktop, single column mobile
- **Product cards on landing page**: 2 columns desktop, stack mobile

---

## Components

### Buttons

**Primary (CTA)**:
- Background: current page accent color (brand blue by default)
- Text: `#FFFFFF`, 16px, weight 600
- Padding: `14px 28px`
- Border radius: `10px`
- Hover: darker accent variant, subtle `translateY(-1px)`
- Transition: `all 150ms ease`

**Secondary**:
- Background: transparent
- Border: 1px solid `#2A2A2A`
- Text: `#F0F0F0`
- Same padding/radius as primary
- Hover: border `#555555`, background `#141414`

**Ghost/text link**:
- No background or border
- Text: `#8A8A8A`
- Hover: text `#F0F0F0`
- Underline offset 4px on hover

### Cards

- Background: `#141414`
- Border: 1px solid `#2A2A2A`
- Border radius: `16px`
- Padding: `32px`
- No box-shadow by default
- Hover (if interactive): border `#3A3A3A`, `translateY(-2px)`, `box-shadow: 0 8px 32px rgba(0,0,0,0.3)`

### Product Cards (Landing Page)

Same base card styles, plus:
- A small colored dot or pill in the top-left using the product's accent color
- Product icon/logo at 48px
- Product name in H3
- One-line description in secondary text
- Platform tags (e.g., "macOS", "iOS") in `12px` label style with `#1E1E1E` background and `border-radius: 6px`

### Navigation

- Fixed top, blurred: `background: rgba(10,10,10,0.8); backdrop-filter: blur(12px)`
- Border bottom: 1px solid `#2A2A2A`
- Height: 64px
- "FlagVault" wordmark on left (no elaborate logo — plain text in heading font, weight 700, 18px)
- Nav links on right: Products (dropdown), About, Contact
- Links: `#8A8A8A`, hover `#F0F0F0`, weight 500, 15px
- Mobile: hamburger, slide-in from right

### Product Page Header

Each product page includes a header banner with:
- Product name and one-line tagline
- Ambient glow using the product accent color
- Screenshot or app icon
- Download/install CTA using the product accent color

### App Screenshots

- `border-radius: 12px`
- Border: 1px solid `#2A2A2A`
- Optional ambient glow behind hero screenshot
- Flat presentation — no lifted drop shadows

---

## Iconography

- Lucide icons or SF Symbols style (1.5px stroke)
- Body context: 20px
- Color: `#8A8A8A` default, `#F0F0F0` active/hover
- Feature icons: 40px inside 64px rounded container (`border-radius: 14px`, background `#1E1E1E`)

---

## Motion & Animation

- **Default**: `150ms ease` for colors, borders
- **Layout**: `300ms ease` for transforms, height
- **Scroll enter**: fade-in-up, 400ms, 40px translate, stagger 80ms per child
- **No continuous animation** — nothing pulses or spins at idle
- **Respect `prefers-reduced-motion`**: disable transforms, use instant opacity only

---

## Tone & Copy Guidelines

- **Company voice**: Understated and direct. We build tools, not hype.
- **Headlines**: Short declarative statements. No exclamation marks.
- **Product descriptions**: Lead with what it does, then how. One sentence each.
- **Technical credibility**: Mention native platforms, languages, lightweight footprint where relevant.
- **Avoid**: "revolutionary", "game-changing", "supercharge", or any marketing superlatives.
- **Company references**: "FlagVault Technologies" on first mention per page, "FlagVault" thereafter.

---

## Site Structure (Reference)

```
/                   → Landing: tagline, product grid, company summary
/morafyn            → MoraFyn product page (uses MoraFyn accent)
/1ninetyfive        → 1NinetyFive product page (uses 1NinetyFive accent)
/about              → Company info, team if applicable
```

Each product page follows:
1. **Hero**: Product name + tagline + screenshot + download CTA
2. **Features**: 3-4 cards
3. **How it works**: 3-step minimal flow
4. **Download / Install**: Platform, requirements, size
5. **Back to all products** link

---

## Responsive Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| Mobile | < 640px | Single column, stacked |
| Tablet | 640–1024px | 2-column grids |
| Desktop | > 1024px | Full layout |

---

## Do / Don't

**Do:**
- Keep whitespace generous
- Let product screenshots do the selling
- Use accent color sparingly — CTAs and key highlights only
- Maintain WCAG AA contrast minimums
- Keep the brand layer consistent across all product pages

**Don't:**
- Use light/white backgrounds
- Add decorative illustrations or mascots
- Use a product's accent color outside its own page
- Animate anything continuously
- Mix product identities on the landing page — each card is self-contained

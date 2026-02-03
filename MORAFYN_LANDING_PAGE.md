# MoraFyn Landing Page — Implementation Prompt

## Overview

Create a product landing page for **MoraFyn** at `/morafyn`. MoraFyn is a macOS Pomodoro timer that lives in a persistent sidebar at the edge of your screen, visible across all desktops and spaces.

**Tagline**: "A Pomodoro timer that stays with you."

---

## Page Structure

Follow the standard product page structure from STYLEGUIDE.md:

### 1. Hero Section

- **Headline**: "A Pomodoro timer that stays with you."
- **Subheadline** (1-2 sentences): "MoraFyn is a floating sidebar timer for macOS. It remains visible across all your desktops — no hunting for windows, no context switching."
- **Primary CTA**: "Download for macOS" (links to `.dmg` download)
- **Secondary text**: "Requires macOS 13.0 or later • Free"
- **Hero visual**: Screenshot showing MoraFyn's expanded sidebar on a desktop, ideally with the circular progress ring mid-session. Use the terracotta work color (#C8725E) as the ambient glow behind the screenshot.

### 2. Key Differentiator Section

A short section (2-3 sentences max) emphasizing what makes MoraFyn different:

> "Most timer apps disappear behind windows. MoraFyn's sidebar floats at the edge of your screen — always one glance away. Collapse it to a 5-pixel progress bar when you need focus."

Include a small animation or two-frame visual showing expanded → collapsed state.

### 3. Features Section (4 cards)

| Feature | Icon suggestion | Description |
|---------|-----------------|-------------|
| **Always visible** | Window/layers icon | Persistent floating sidebar stays on top across all desktops and Spaces. |
| **55 color themes** | Palette icon | Choose from built-in themes or create your own with custom work, short break, and long break colors. |
| **Global hotkeys** | Keyboard icon | Control your timer from anywhere with system-wide shortcuts. Start, pause, skip, or toggle the sidebar without switching apps. |
| **Works quietly** | Moon/bell-off icon | Respects Do Not Disturb. No dock icon. Pauses automatically when you lock your screen. |

### 4. How It Works (3 steps)

1. **Launch** — MoraFyn appears as a sidebar at the screen edge. No dock icon, no clutter.
2. **Focus** — Start a work session. The circular progress ring counts down. Collapse the sidebar to a thin progress bar when you need more screen space.
3. **Break** — When the session ends, you're notified and the break timer begins (if auto-advance is enabled).

### 5. Full Feature List (expandable or secondary section)

Bullet list of all current features:

- Pomodoro timer with work, short break, and long break modes
- Customizable durations (work 1–90 min, short break 1–30 min, long break 1–60 min)
- Long break every N sessions (configurable)
- Auto-advance toggle
- Session counter
- Circular progress ring with collapse/expand animation
- Collapsed 5px vertical progress bar at screen edge
- 55 built-in color themes + custom color pickers
- 5 configurable global hotkeys (default: ⌃⌥P to start/pause, ⌃⌥M to toggle sidebar)
- Menu bar icon with timer controls
- Pause on screen lock (work sessions only — breaks continue)
- Launch at login
- Completion sound with Do Not Disturb awareness
- macOS notifications on session complete
- App Nap prevention during work sessions
- First-launch onboarding
- Preferences window with 5 tabs (General, Timer, Behavior, Appearance, Shortcuts)
- Automatic updates via Sparkle

### 6. Download Section

- **CTA button**: "Download MoraFyn" (primary style, #C8725E)
- **Version**: 1.0.0
- **Platform**: macOS 13.0 (Ventura) or later
- **File type**: DMG
- **Price**: Free
- Optional: link to release notes or changelog

### 7. Footer

- "Back to all products" link → `/`
- Standard footer with FlagVault Technologies copyright

---

## Accent Color

Use MoraFyn's accent color throughout the page:

- **Primary accent**: `#C8725E` (terracotta)
- **Hover**: `#B5654F`

All other colors (backgrounds, text, borders) use the shared brand palette from STYLEGUIDE.md.

---

## Assets & Placeholders

### Required Assets

| Asset | Dimensions | Usage | Placeholder |
|-------|------------|-------|-------------|
| App icon | 48px, 128px | Feature cards, hero | Use a rounded rectangle with `#C8725E` fill and "M" text |
| Hero screenshot | 800×600 or similar | Hero section | Gray rounded rect (`#1A1614`) with "Screenshot: Expanded sidebar" label |
| Collapsed state | 400×300 | Differentiator section | Gray rounded rect with "Screenshot: Collapsed progress bar" label |
| Expand/collapse animation | GIF or video | Differentiator section | Two-frame placeholder showing expanded → collapsed states |

### Placeholder Guidelines

Until final screenshots are available:

1. **Use placeholder containers** with the correct aspect ratio and border radius (`12px`)
2. **Label each placeholder** with what the final asset should show (e.g., "Screenshot: Work session in progress")
3. **Apply the standard screenshot styling**: `border: 1px solid #2E2723`, `border-radius: 12px`
4. **For the hero**, still apply the ambient glow effect (`#C8725E` at 5-8% opacity) behind the placeholder
5. **Placeholder background**: Use `#1A1614` (surface color) with `#5C5550` text for labels

Example placeholder markup:
```html
<div class="screenshot-placeholder" style="
  aspect-ratio: 4/3;
  background: #1A1614;
  border: 1px solid #2E2723;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5C5550;
  font-size: 14px;
">
  Screenshot: Expanded sidebar with work session
</div>
```

### Asset Checklist

- [ ] App icon (source: `Morafyn Logo.png` in project root)
- [ ] Hero screenshot — expanded sidebar, work session active, terracotta progress ring
- [ ] Collapsed state screenshot — 5px progress bar at screen edge
- [ ] Optional: GIF showing collapse/expand animation
- [ ] Optional: Screenshot of preferences window (Appearance tab showing themes)

---

## Copy Tone

Per STYLEGUIDE.md:

- Understated, direct
- Lead with what it does, then how
- Mention "native macOS", "SwiftUI", "lightweight" for technical credibility
- Avoid: "revolutionary", "game-changing", "supercharge", exclamation marks

---

## Technical Notes

- **URL path**: `/morafyn`
- **Download URL**: Host the `.dmg` at `/morafyn/MoraFyn.dmg` or use GitHub Releases
- **Appcast URL** (for Sparkle auto-updates): `https://www.flagvault.com/morafyn/appcast.xml`
- Use the same component library and layout system as the main FlagVault landing page

---

## Implementation Checklist

- [ ] Create `/morafyn` route
- [ ] Hero section with headline, subheadline, CTA, placeholder screenshot
- [ ] Key differentiator section with expand/collapse visual
- [ ] 4-card features grid
- [ ] 3-step "How it works" section
- [ ] Full feature list (collapsible accordion or secondary section)
- [ ] Download section with version info
- [ ] Footer with "Back to all products" link
- [ ] Replace placeholders with final screenshots
- [ ] Test responsive layout (mobile, tablet, desktop)
- [ ] Verify accent color usage matches MoraFyn palette

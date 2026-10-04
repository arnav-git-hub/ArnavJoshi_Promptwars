---
name: Obsidian Telemetry
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#56e5a9'
  on-tertiary: '#003824'
  tertiary-container: '#30c88f'
  on-tertiary-container: '#004e34'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 1.875rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.625rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.5rem
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.125rem
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.625rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a high-density, mission-critical cognitive intelligence interface. Designed for executives, risk architects, and autonomous system operators, it evokes unwavering precision, forensic clarity, and forward-looking command. The aesthetic merges technical brutalism with dark-field glassmorphism: pitch surfaces, luminous optical borders, and tactical telemetry data. The emotional target is authoritative confidence—conveying that unseen variables, edge-case risks, and automated decisions are brought into sharp focus without ambient noise.

## Colors

The palette operates under an absolute dark-field model:

- **Base Canvas & Canvas Inset (`#0B0F19` & `#070A10`)**: Low-reflectance, deep obsidian layers engineered for dark-room monitoring and zero visual fatigue.
- **Glass Surfaces (`#111827` at 60%–80% opacity)**: Modular containers overlaid with ultra-fine alpha-blended structural borders (`rgba(255, 255, 255, 0.08)`).
- **Primary / Critical Alert (`#F59E0B`)**: Radiant amber utilized for critical pathway interventions, priority metrics, active states, and focal calls to action.
- **Secondary / Synthetic Core (`#8B5CF6` to `#6366F1`)**: Dual-tone violet/indigo gradients reserved for algorithmic confidence bands, neural network telemetry, predictive paths, and interactive hover shifts.
- **Tertiary / Nominal Verification (`#10B981`)**: Saturated emerald dedicated to deterministic validity, live system health, and secure states.
- **Structural White / High-contrast Data (`#F9FAFB` to `#9CA3AF`)**: Clean neutral steps for primary and secondary telemetry readouts.

## Typography

Typographic scale is structured around technical density and strict visual hierarchy. 

- **Space Grotesk** powers display modules, critical key performance indicator values, and section anchors, offering an engineered, geometric precision.
- **Inter** provides high-legibility body, analysis breakdowns, and narrative reasoning panels across sustained sessions.
- **JetBrains Mono** anchors numerical telemetry, timestamps, confidence indices, threshold bounds, and node identifiers. Numerical fields must enforce tabular figures (`font-variant-numeric: tabular-nums`) to prevent optical shifting during real-time data streaming.

## Layout & Spacing

The interface deploys an adaptive 12-column fluid grid built for dense multi-pane telemetry:

- **Desktop (1440px+)**: 12 columns with `1.5rem` gutters and `2.5rem` outer canvas padding. Core analytics leverage 3- and 4-column modular blocks; primary cognitive maps span 8 to 12 columns.
- **Tablet / Mid-tier (768px - 1439px)**: 8 columns with `1rem` gutters and `1.5rem` margins. Side-by-side modules collapse to 4-column balanced splits; auxiliary node trees convert into drawer overlays.
- **Mobile (< 768px)**: 4 columns with `1rem` gutters and `1rem` margins. Visual modules stack linearly with priority metrics anchored at the upper fold.

Vertical rhythm adheres strictly to a 4px/8px modular base scale to maintain aligned edges across interconnected analytical cards.

## Elevation & Depth

Visual hierarchy uses dark glassmorphism combined with optical illumination instead of traditional dropped shadows:

- **Base Layer (Level 0)**: Pitch slate (`#0B0F19`) canvas, non-elevated.
- **Surface Layer (Level 1)**: Translucent surface container (`rgba(17, 24, 39, 0.7)`) backed by a `16px` to `24px` backdrop blur (`backdrop-filter: blur(20px)`). Framed by a subtle sub-pixel edge border: `1px solid rgba(255, 255, 255, 0.08)`.
- **Interactive Focus / Alert (Level 2)**: Elevated glass (`rgba(22, 30, 49, 0.85)`) complemented by a dynamic accent glow:
  - Critical/Decision: `0 0 24px -4px rgba(245, 158, 11, 0.25)` and `border: 1px solid rgba(245, 158, 11, 0.5)`.
  - Machine Core: `0 0 24px -4px rgba(139, 92, 246, 0.3)` and `border: 1px solid rgba(139, 92, 246, 0.5)`.
- **Modal / Flyout Overlays (Level 3)**: Ultra-dense glass (`rgba(11, 15, 25, 0.95)`) backed by a deep, light-occluding perimeter blur (`0 20px 40px -10px rgba(0, 0, 0, 0.7)`).

## Shapes

The interface embraces a disciplined, technical shape grammar (`Soft` / `0.25rem` base roundedness). Micro-radii (`4px`) on chips, inputs, and analytical metrics reinforce an industrial, military-spec computing aesthetic. Intermediate modules and cards employ `8px` (`rounded-lg`), ensuring borders remain sharp without appearing harsh. Large flyouts and telemetry containers cap at `12px` (`rounded-xl`), avoiding excessive softness that conflicts with dense analytics.

## Components

### Buttons
- **Primary Amber Glow**: Background `#F59E0B`, text `#0B0F19` (bold weight), border `1px solid rgba(245, 158, 11, 0.8)`. Hover triggers a radiant outer glow `0 0 16px rgba(245, 158, 11, 0.45)`.
- **Secondary Synth-Glass**: Background `linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.15))`, border `1px solid rgba(139, 92, 246, 0.35)`, text `#F9FAFB`. Hover amplifies violet gradient brightness and border luminance.
- **Ghost Telemetry**: Transparent background, border `1px solid rgba(255, 255, 255, 0.1)`, text `#9CA3AF`, monospaced uppercase labels.

### Badges & Status Chips
- **Nominal Badge**: Background `rgba(16, 185, 129, 0.12)`, text `#10B981`, border `1px solid rgba(16, 185, 129, 0.3)`. Paired with a pulsing `4px` emerald dot indicator.
- **Vulnerability / Critical Chip**: Background `rgba(245, 158, 11, 0.12)`, text `#F59E0B`, border `1px solid rgba(245, 158, 11, 0.4)`. JetBrains Mono typography.

### Modular Analytical Cards
- Surface `rgba(17, 24, 39, 0.65)`, backdrop blur `16px`, corner radius `8px`, border `1px solid rgba(255, 255, 255, 0.07)`.
- Top-right corner dedicated to monospaced coordinate tags or confidence status indicators. Header divided from analytical body via a `1px` subtle divider (`rgba(255, 255, 255, 0.05)`).

### Input Fields & Search Shells
- Background `rgba(7, 10, 16, 0.8)`, text `#F9FAFB`, placeholder `#4B5563`, border `1px solid rgba(255, 255, 255, 0.12)`.
- Active focus state: `border: 1px solid #8B5CF6`, subtle ambient halo `0 0 10px rgba(139, 92, 246, 0.25)`. Includes monospaced hotkey indicator (`⌘K`) right-aligned.

### Checkboxes & Radios
- Crisp `4px` square boxes for checks, circular `2px` offset rings for radios.
- Unchecked: `1px solid rgba(255, 255, 255, 0.2)` on dark background.
- Checked: `#F59E0B` fill with pitch `#0B0F19` iconography and fine glow ring.

### Telemetry / Metric Nodes
- Dedicated split-statistic components displaying large tabular JetBrains Mono metrics stacked over small uppercase category titles, featuring real-time sparklines rendered in violet-to-emerald gradient strokes.
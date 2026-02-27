# Design Guidelines: Anya Von Diessl Portfolio Website

## Design Approach
**Reference-Based Tech Portfolio**: Drawing inspiration from Linear's clean precision, GitHub's developer-focused aesthetics, and Vercel's modern technical sophistication. The design emphasizes technical credibility through subtle animations, geometric precision, and a monospace-forward typography system.

## Color Palette
**Primary Green System** (from provided image):
- Primary: `#66BB6A` (Medium green) - Main accent, CTAs, interactive elements
- Dark: `#2E7D32` (Deep forest green) - Headers, primary text, hover states
- Light: `#A5D6A7` (Mint green) - Secondary accents, highlights, code snippets
- Glow: `#7CB342` (Vibrant lime) - Particle effects, animated elements, borders

**Supporting Colors**:
- Background: `#0A0E14` (Almost black with blue undertone)
- Surface: `#1A1F2E` (Dark slate)
- Text Primary: `#E8EAF0` (Cool white)
- Text Secondary: `#8892A6` (Muted gray-blue)
- Code Background: `#161B22` (GitHub-style dark)

## Typography
**Tech-Forward Font System**:
- **Primary Display**: Space Grotesk (700-800 weight) - Headers, name, section titles
- **Monospace**: JetBrains Mono (400-600 weight) - Technical details, code-like elements, labels
- **Body**: Inter (400-500 weight) - Descriptions, body copy

**Hierarchy**:
- Hero Name: 4xl-6xl, Space Grotesk Bold, letter-spacing tight
- Section Headers: 3xl-4xl, Space Grotesk Bold, green accent underline (4px)
- Subsection Titles: xl-2xl, JetBrains Mono Medium
- Body Text: base-lg, Inter Regular, line-height relaxed (1.7)
- Labels/Tags: sm, JetBrains Mono, uppercase, letter-spacing wide, green text

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 24, 32
- Section padding: `py-32` desktop, `py-16` mobile
- Component spacing: `gap-8` between cards, `gap-4` within components
- Container: `max-w-6xl` for content sections, `max-w-7xl` for full-width
- Grid columns: Single column mobile, 2-column for education/experience cards on desktop

**Grid Structure**:
- Hero: Full viewport height, centered content with particle background
- Sections: Asymmetric layouts - alternate between left/right content emphasis
- Experience Cards: Staggered grid with hover expansions

## Component Library

### Navigation
Sticky header with glassmorphic background blur, slim profile (h-16), logo left, nav links right with smooth scroll, green underline animation on active section

### Hero Section
- Full viewport (100vh) with animated particle system background
- Profile photo: Circular (w-48), subtle green glow border (shadow-lg shadow-green/30)
- Animated typing effect for role/title
- Floating geometric shapes (hexagons, circuits) in background
- Dual CTAs: "View Work" (primary green) + "Download Resume" (outline)

### About Section
Single column centered prose (max-w-3xl), animated text reveal on scroll, technical stats sidebar with animated counters (years at Stanford, projects completed, etc.)

### Education Cards
Timeline layout with connecting vertical line (green, 2px), cards with:
- University logo area (left)
- Degree + Major (Space Grotesk, large)
- Dates (JetBrains Mono, small, muted)
- Animated entrance from left/right alternating
- Hover: Lift effect (translateY -4px), green border glow

### Experience Cards
Expandable card system:
- Collapsed: Company + Role + Dates visible, green left border (4px)
- Expanded: Full description slides down, technical tags appear
- Hover state: Slight scale (1.02), green shadow glow
- Stagger animation on page load (cascade effect)

### Coursework Section
Interactive grid of course chips/tags:
- Grid: 3-4 columns desktop, wrap on mobile
- Each chip: Dark background, green border, JetBrains Mono
- Hover: Fill with green, white text, slight rotation (2deg)
- Animated scatter entrance effect

### Skills Display
Horizontal scrolling marquee with technology logos/names, infinite loop, pause on hover, green highlight on active items

### Footer
Minimal, centered, social links (LinkedIn, GitHub, Email) with icon-only buttons, green on hover, copyright in small mono font

## Interactive Elements

**Animations** (subtle, performant):
- Particle system: Canvas-based, 50-100 particles, green trails, responsive to mouse movement
- Scroll-triggered: Fade-in + slide-up for sections (stagger by 100ms)
- Card hovers: Transform scale 1.02, shadow expansion, 200ms ease
- Navigation: Smooth scroll with easing, active section indicator slides
- Typing effect: Hero subtitle, cursor blink
- Progress indicators: Animated skill bars (if added), fill from left

**Micro-interactions**:
- CTA buttons: Ripple effect on click, subtle pulse animation
- Links: Underline slide-in from left on hover
- Cards: Border glow intensity increases on hover
- Background: Parallax shift on scroll (subtle, 0.3 factor)

## Images

**Hero Section**:
- Profile Photo: Use provided headshot, circular crop, center-positioned
- Treatment: Subtle green glow border (`shadow-2xl shadow-green-500/50`), optional: animated rotating border gradient

**No other images required** - design relies on geometric elements, particle effects, and typography for visual interest

## Technical Implementation Notes
- Use CSS Grid for section layouts, Flexbox for components
- Implement smooth scroll behavior for navigation
- Particle system via Canvas API or lightweight library (particles.js alternative)
- All animations use CSS transforms for GPU acceleration
- Responsive breakpoints: 640px, 1024px, 1280px
- Dark mode only (no toggle needed - matches tech aesthetic)
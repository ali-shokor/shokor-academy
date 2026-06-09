# Shokor Academy — Portfolio Website

A modern, polished CS instructor portfolio for **Ali Shokor** — Computer Science instructor, AWS Certified trainer, and founder of Shokor Academy. Built with a premium **BitFlux** dark theme, 3D animated hero, custom cursor effects, and full mobile responsiveness.

**Live:** [`https://ali-shokor.github.io/shokor-academy`](https://ali-shokor.github.io/shokor-academy)

---

## Design System

### BitFlux Color Palette

The site uses a premium dark/purple theme inspired by **BitFlux** design language:

| Color | Hex Value | Usage |
|-------|-----------|-------|
| **Background** | `#080810` | Main page background, dark surfaces |
| **Surface** | `#13131B` | Cards, sections, raised elements |
| **Accent** (Purple) | `#7c3aed` | Primary interactive elements, highlights, accents |
| **Accent Soft** | `rgba(124, 58, 237, 0.15)` | Badges, soft backgrounds, hover states |
| **Muted Text** | `#9CA3AF` | Secondary text, descriptions |
| **Light Text** | `#F3F4F6` | Primary text, headings |
| **Borders** | `rgba(124, 58, 237, 0.3)` | Subtle outlines, dividers |

### Typography

**Fonts:** [Google Fonts](https://fonts.google.com/)
- **Headings:** [Syne](https://fonts.google.com/specimen/Syne) (wght: 400, 600, 700, 800) — bold, modern, confident
- **Body:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) (opsz: 9–40, wght: 300, 400, 500, 600) — clean, readable, professional

**Font Sizes (Responsive Clamp):**
- `h1.hero-title`: `1.8rem` (fixed inline) → `2.8rem` desktop
- `h2`: `clamp(1.8rem, 4vw, 2.6rem)`
- `p.lead`: `clamp(1rem, 2.5vw, 1.2rem)`
- `p`: `1rem` (16px)
- `small`: `0.875rem` (14px)

---

## UI Components & Sections

### 1. Header & Navigation
- Fixed sticky header with brand logo and navigation menu
- Links: About, Services, Courses, Resources, Contact
- **Mobile (≤768px):** Hamburger menu toggle with smooth dropdown overlay
- Navigation items include inline SVG icons for visual hierarchy

### 2. Hero Section
**Background:** Vanta.NET 3D animated network
- **Desktop:** 14 network points, maxDistance 30, fast animation
- **Mobile:** 8 points, maxDistance 25, optimized for performance
- **Canvas Settings:** `z-index: 0`, parent `.hero` has `position: relative`

**Hero Content (Overlay):**
- Eyebrow badge: "Welcome to Shokor Academy" with SVG icon
- **Title:** "Master Code / Build Systems / Earn Your Cloud Cert" (3 lines, `1.8rem`)
- **Subtitle:** Course overview with purple accents
- **CTAs:** Primary button (Book a Session) + Ghost button (View Services)
- **Stats Grid:** 1,000+ Mentored, 350+ Taught, AWS Certified, 15+ Videos
  - Desktop: 4-column grid
  - Tablet (≤1024px): 2-column grid
  - Mobile (≤480px): 1-column

### 3. About Section
**Layout:** 2-column grid (col 1: bio, col 2: experience list)
- Bio text with purple accents on key qualifications
- Experience list with SVG icons:
  - What I Teach: C, Python, DSA, OS, AWS Cloud
  - Formats: 1-on-1, group classes, workshops
  - Students: 1,000+ mentored, 350+ taught
  - Experience: AWS Instructor + 3 yrs teaching

### 4. Services Section
**Grid:** 3 cards (AWS Cert Prep, CS Foundations, Exam Prep & Mentoring)
- Responsive: 3 columns (≤1024px) → 2 columns → 1 column (mobile)
- Each card has:
  - Purple SVG icon
  - Title
  - Description with inline accents
  - Rounded glassmorphic surface, hover lift effect

### 5. Courses Section
**Grid:** 3 course cards (I1101, I2206, I2204)
- Course image, number, title, description, duration
- Responsive same as services
- Glassmorphic design with subtle shadows

### 6. Resources Section
**Layout:** Vertical list of YouTube videos
- Video thumbnail, title, channel, duration
- Links to YouTube (embedded or external)

### 7. Testimonials Section
**Carousel/Scroll:**
- **Desktop (>600px):** Grid + card cycling (auto-rotate, left/right arrows)
- **Mobile (≤600px):** Horizontal flex scroll (scrollBy)
- 4 student testimonial cards with:
  - Profile image
  - Student name
  - Testimonial quote
  - Rating/credentials

### 8. Contact Section
**Layout:**
- Left: Spline 3D robot (hidden on mobile ≤900px)
- Right: Floating-label form + action buttons

**Form Fields:**
- Name (required)
- Email (required, validated)
- Course dropdown (required)
- Message (optional, pre-populated)

**Action Buttons:**
- WhatsApp: Opens `https://wa.me/96178957416?text=...`
- Email: Opens mailto with formatted subject/body
- Form submit: Validated, sends to `ali.shokor.dev@gmail.com`

**Contact Info:**
- Email: `ali.shokor.dev@gmail.com`
- WhatsApp/Phone: `+961 78 957 416`

### 9. Footer
- Wordmark (logo + "Shokor Academy")
- Tagline: "Structured mentorship in CS & Cloud"
- Social icons: Instagram, LinkedIn, GitHub, YouTube
- Navigation links
- CTA button: "Start Learning"
- Scroll-to-top button (appears on scroll down)

---

## Custom Features

### Custom Cursor
**Implementation:** Pure CSS + JavaScript
- **Dot:** Small purple circle following exact mouse position
- **Ring:** Larger hollow circle, smooth lag animation (0.1s)
- **Trail:** Fading purple particles on mouse move
- **Performance:** Lightweight, uses `requestAnimationFrame`
- **Mobile:** Hidden on screens ≤768px (touch-optimized)

**CSS Classes:**
```css
.cursor { /* main dot */ }
.cursor-ring { /* outer ring */ }
.cursor-trail { /* particle */ }
```

### Vanta.NET 3D Hero
**Config:**
```javascript
Vanta.NET({
  el: '#hero',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 400.00,
  minWidth: 400.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x7c3aed,  // Purple accent
  backgroundColor: 0x080810,  // Dark background
  points: 14,  // desktop
  maxDistance: 30.00,
  spacing: 15.00
});
```

**Mobile Variant:**
- `points: 8`
- `maxDistance: 25`
- Reduced complexity for performance

### Floating Labels
**Form inputs** use custom floating-label pattern:
- Labels animate up on focus or when field has value
- Smooth `translateY` + opacity transition
- Works with text inputs, textarea, select

### Glassmorphism
**Surface Design:**
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(124, 58, 237, 0.2);
backdrop-filter: blur(10px);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

---

## Responsive Breakpoints

| Breakpoint | Usage |
|------------|-------|
| **1024px** | 2-column grids (services, courses) |
| **900px** | Hide Spline 3D robot in contact section |
| **768px** | Nav toggle + mobile menu, hide custom cursor |
| **600px** | Testimonials: switch to horizontal scroll |
| **480px** | Tight spacing, hero stats: 2x2 → 1 column |

**Mobile-First Padding:**
- Sections: `padding: 60px 20px`
- Hero: `padding: 100px 0 60px` (auto min-height)
- Small screens: Proportional font sizes via `clamp()`

---

## File Structure

```
personal-website/
├── index.html              # Main HTML (all sections, hero, nav, footer)
├── css/
│   └── styles.css         # Complete styling (colors, layout, responsive)
├── js/
│   └── main.js            # JavaScript (cursor, nav, Vanta, form, testimonials)
├── images/
│   ├── logo.png           # Brand logo
│   ├── I1101-intro.jpg    # Course image
│   ├── I2206-intro.jpg    # Course image
│   └── [testimonial images]
├── README.md              # This file
└── .gitignore             # Git ignore rules
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure, forms, sections |
| **CSS3** | Styling, animations, responsiveness (no framework) |
| **JavaScript** | Interactivity (vanilla, no jQuery/React) |
| **Vanta.js** | 3D animated hero background |
| **Three.js** (r134) | 3D graphics engine (required by Vanta) |
| **Spline Viewer** | 3D robot in contact section |
| **Google Fonts** | Syne (headings) + DM Sans (body) |
| **GitHub Pages** | Static hosting, auto-deploys on push |

---

## Key Implementation Details

### Cursor System
- **HTML:** Dot, ring, trail elements in body
- **JavaScript:** Track mousemove, update positions with slight lag
- **CSS:** Smooth transitions, fade-out for trail particles
- Hidden on mobile via `@media (max-width: 768px) { display: none; }`

### Navigation Toggle
- **HTML:** `<button class="nav-toggle">☰</button>`
- **JavaScript:** Click toggles `.open` class on `.nav`
- **CSS:** `.nav.open { display: block; }` on mobile
- Closes on link click or window resize >768px

### Testimonials Carousel
- **Desktop:** Grid + cycling (appendChild/prepend to rotate)
- **Mobile:** Horizontal `flex-scroll` with `scrollBy()` on arrow click
- Manual control + auto-rotation options

### Form Validation
- Required fields: name, email, course
- Email regex validation
- Pre-populated messages for WhatsApp/Email
- Success message on form submit

### Vanta Canvas
- Targets `#hero` element
- Canvas created inside with `z-index: 0`
- Content overlay has `position: relative; z-index: 1`
- Responsive point count based on device

---

## Deployment

**Hosting:** [GitHub Pages](https://pages.github.com/)

**Live URL:** [`https://ali-shokor.github.io/shokor-academy`](https://ali-shokor.github.io/shokor-academy)

**Deploy Process:**
1. Push to `main` branch
2. GitHub Actions auto-builds and deploys (1–3 minutes)
3. Hard refresh browser (**Ctrl+Shift+R** on Windows, **Cmd+Shift+R** on Mac) to clear cache

**GitHub Repository:**  
[`https://github.com/ali-shokor/shokor-academy`](https://github.com/ali-shokor/shokor-academy)

---

## Future Enhancements

### Optional Upgrades
1. **Custom Domain** — Use Cloudflare Registrar (free, no credit card needed)
2. **Database Backend** — Cloudflare D1 + Workers for form submissions
3. **Analytics** — Cloudflare Web Analytics or Google Analytics
4. **Email Integration** — Nodemailer, Sendgrid, or Mailgun for auto-replies
5. **Testimonial Admin Panel** — CMS for managing student feedback
6. **Video Hosting** — Self-hosted or YouTube integration

### Performance Optimizations
- Image lazy-loading (`loading="lazy"`)
- WebP format conversion
- CSS minification
- JavaScript code-splitting
- Service Worker for offline support

---

## Color Reference

Use these values in any CSS or component updates:

```css
:root {
  --bg: #080810;
  --surface: #13131B;
  --accent: #7c3aed;
  --accent-soft: rgba(124, 58, 237, 0.15);
  --muted: #9CA3AF;
  --light: #F3F4F6;
  --border: rgba(124, 58, 237, 0.3);
  
  --font-head: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

---

## Credits

- **Instructor:** Ali Shokor
- **Design Inspiration:** BitFlux design language
- **3D Assets:** Vanta.js, Spline, Three.js
- **Typography:** Google Fonts (Syne, DM Sans)
- **Hosting:** GitHub Pages

---

**Last Updated:** June 2026  
**Status:** ✅ Live and fully responsive

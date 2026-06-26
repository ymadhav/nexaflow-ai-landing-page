# NexaFlow AI — Next-Gen AI Data Automation Platform

NexaFlow AI is a competition-ready premium SaaS landing page for an AI-driven data automation platform.

The project is built with React + Vite, custom CSS, semantic HTML, responsive layouts, dynamic pricing logic, and lightweight CSS/native browser animations. No external UI component libraries or runtime animation libraries are used.

## Live Links

**Live Website:** https://nexaflow-ai-landing-page.vercel.app/

**GitHub Repository:** https://github.com/ymadhav/nexaflow-ai-landing-page

**Demo Video:** https://drive.google.com/file/d/1QrtYJMjLj3DlHjpMk7YZKlTs1yn-h0hm/view?usp=drive_link

## Tech Stack

* React + Vite
* Plain JSX
* Custom CSS
* Native CSS transitions
* Web APIs:

  * IntersectionObserver
  * window.matchMedia
  * Intl.NumberFormat

## No External UI Libraries

This project does not use:

* Shadcn
* Radix UI
* Headless UI
* Tailwind UI
* Framer Motion
* GSAP
* Any external UI component library
* Any external runtime animation library

## Key Features

### 1. Premium SaaS Landing Page

The website includes:

* Hero section
* Metrics section
* Platform overview
* Technical feature showcase
* Dynamic pricing section
* Testimonials
* FAQ accordion
* Final CTA
* Footer

The visual design follows a premium dark AI SaaS style with glassmorphism cards, subtle grid backgrounds, gradient accents, and responsive spacing.

### 2. Dynamic Pricing Matrix

The pricing section supports:

* Monthly billing
* Annual billing
* INR currency
* USD currency
* EUR currency

Pricing is calculated dynamically using configuration objects instead of hardcoded final UI values.

The pricing engine uses:

* Base monthly tier price
* Currency conversion rate
* Regional tariff multiplier
* Billing multiplier
* Flat 20% annual discount

Formula:

```txt
finalPrice = baseMonthlyUSD × currency.rate × currency.tariff × billing.multiplier
```

### 3. Pricing State Isolation

Pricing logic is isolated inside the Pricing component.

Billing and currency changes do not store state in App, Header, Hero, or surrounding layout components.

The pricing section keeps billing and currency behavior localized, and the displayed price values are updated from the pricing matrix logic.

### 4. Bento-to-Accordion Feature Experience

The FeatureExperience section adapts based on viewport size:

* Desktop: Bento Grid layout
* Mobile: Accordion layout

The same feature data powers both layouts.

A single activeIndex value controls the active feature. When the viewport changes between desktop and mobile, the selected feature remains active instead of resetting.

### 5. Active Index Persistence

If a user selects a Bento card on desktop and resizes to mobile, the matching Accordion item remains open.

If a user opens an Accordion item on mobile and resizes back to desktop, the matching Bento card remains highlighted.

### 6. Responsive Design

The website is optimized for:

* Mobile
* Tablet
* Desktop

The layout avoids horizontal overflow and keeps navigation, cards, pricing, FAQ, and footer sections readable across screen sizes.

### 7. Semantic HTML and SEO

The project uses semantic HTML structure:

* header
* nav
* main
* section
* article
* footer

SEO metadata and Open Graph tags are included in `index.html`.

### 8. Lightweight Motion

All interactions use custom CSS transitions or native browser APIs.

Motion is kept lightweight for performance and accessibility.

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open local site:

```txt
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```txt
src/
  components/
    Header.jsx
    Hero.jsx
    Metrics.jsx
    PlatformOverview.jsx
    FeatureExperience.jsx
    Pricing.jsx
    Testimonials.jsx
    FAQ.jsx
    FinalCTA.jsx
    Footer.jsx

  data/
    features.js
    pricing.js
    testimonials.js
    faq.js

  hooks/
    useMediaQuery.js

  utils/
    pricingEngine.js

  App.jsx
  main.jsx
  index.css

public/
  icons/
```

## Deployment

The project is deployed on Vercel.

Production build command:

```bash
npm run build
```

Output directory:

```txt
dist
```

## Competition-Focused Notes

* Public GitHub repository is available.
* Live deployment is available.
* Pricing values are calculated through a dynamic matrix.
* Annual billing applies a flat 20% discount.
* Feature showcase uses Bento Grid on desktop and Accordion on mobile.
* Active feature context is preserved across viewport changes.
* Semantic HTML and SEO metadata are included.
* No banned UI or animation component libraries are used.

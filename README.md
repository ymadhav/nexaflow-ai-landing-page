# NexaFlow AI — Next-Gen AI Data Automation Platform

A competition-ready premium SaaS landing page built with React + Vite, custom CSS, and no external UI libraries.

## Tech Stack
- **React 19** + **Vite 6** (no TypeScript, plain JSX)
- **Custom CSS only** — no Tailwind, no Shadcn, no UI kit
- **Native WAAPI / CSS Transitions** — no GSAP, no Framer Motion
- **Web APIs**: `IntersectionObserver`, `window.matchMedia`, `Intl.NumberFormat`

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
npm run preview    # preview production build
```

## Key Features
1. **Dynamic Pricing Matrix** — multi-dimensional config drives all prices
2. **Pricing State Isolation** — billing/currency changes never re-render App, Header, or Hero
3. **Bento-to-Accordion** — feature grid switches layout based on viewport
4. **Active Index Persistence** — card/panel selection preserved across resize
5. **Animated Metrics Strip** — IntersectionObserver counter animation on scroll
6. **Full Responsive** — mobile, tablet, desktop breakpoints

## State Isolation Strategy
The `Pricing` component is wrapped in `React.memo`. Billing and currency are stored in both:
- **React state** (for button active styles only — local to Pricing)
- **`useRef`** (current values for computation — no renders triggered)

Price `<span>` elements are updated via `ref.current.textContent = ...` — pure DOM mutation, zero React re-render cascade.

## Bento-to-Accordion Strategy
`FeatureExperience` holds a single `activeIndex` state. `useMediaQuery('(max-width: 768px)')` determines which layout to render. When switching layouts, `activeIndex` is **never reset** — the Accordion reads it to open the matching panel, and the Bento reads it to highlight the matching card.

## Deployment
- **Demo**: [placeholder — add URL here]
- **Demo Video**: [placeholder — add URL here]
- Deploy to Vercel: `vercel --prod` from project root
- Deploy to Netlify: drag-and-drop the `dist/` folder after `npm run build`

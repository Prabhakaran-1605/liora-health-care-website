# Liora Health Care — Website

A premium, responsive marketing website for Liora Health Care, a holistic
wellness / TCM-inspired clinic, built with React, Tailwind CSS, and React
Router.

## Getting started

```bash
npm install
npm run dev       # start the local dev server
npm run build      # production build, output in dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
├── components/     Reusable UI: Header, Footer, Button, ServiceCard, etc.
├── pages/          Home, About, Services, Contact
├── data/
│   ├── services.js Copy + metadata for all 5 services (single source of truth)
│   └── images.js   Centralized image URLs — swap these for real brand photography
├── hooks/          useReveal.js — scroll-reveal animation hook
├── App.jsx         Router + layout shell
└── main.jsx        Entry point
```

## Replacing placeholder content

- **Images** — everything lives in `src/data/images.js`. Replace each `src`
  with the client's own photography (and update the matching `alt` text).
- **Contact details** — phone, email, address and hours are marked with
  `[Placeholder]` labels in `src/components/Footer.jsx` and
  `src/pages/Contact.jsx`. No real contact information was invented.
- **Testimonials** — `src/pages/Home.jsx` contains 3 clearly-labeled
  placeholder testimonials, ready to be swapped for real client reviews.
- **Contact form** — client-side validated, but not wired to a backend.
  Connect the `handleSubmit` function in `src/pages/Contact.jsx` to a real
  booking/email service when one is available.

## Notes

- Built with Tailwind CSS v4 (config lives in `src/index.css` via the
  `@theme` block — no separate `tailwind.config.js` needed).
- Respects `prefers-reduced-motion` for all animations.
- Typefaces: Fraunces (serif, headings) + Inter (sans-serif, body), loaded
  via Google Fonts in `src/index.css`.

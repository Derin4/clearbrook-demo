# Clearbrook Family Clinic

A demo website for a fictional family medical clinic, built by [MyClickAid](https://myclickaid.com) for its portfolio gallery.

**Live demo:** https://clearbrook-demo.derin-obasa.workers.dev/

> **A fictional clinic.** Clearbrook Family Clinic, its doctors, services and hours are made up for this demo. Nothing here is medical advice, and no forms or bookings send any data.

## What it shows

- **Home page:** a quick-book panel, today's opening hours, animated counters and a team carousel.
- **Services:** a filterable list of clinic services.
- **Our team:** provider profiles.
- **Online booking:** a step-by-step appointment flow with a demo confirmation.
- **New patients:** what to bring and what to expect.
- **Contact & hours:** a contact form and opening hours.
- **Details:** a newsletter form in the footer, scroll animations, reduced-motion support and keyboard-friendly menus.

## Built with

- [Next.js](https://nextjs.org/) (App Router, JavaScript, static export)
- [Tailwind CSS](https://tailwindcss.com/) v4
- Fonts: Young Serif and Figtree, self-hosted with `@fontsource`
- Hosted on Cloudflare

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To create the production build (a static site in the `out` folder):

```bash
npm run build
```

## Project structure

```
app/
  _components/   Header, Footer, BookingFlow, QuickBook, ServiceFilter, TeamCarousel, ...
  _libs/         site.js, data.js, pictures.js, helpers.js
  _styles/       globals.css
  services/  providers/  new-patients/  book/  contact/
public/          Photos (.webp)
```

## Photos

Photos are optional. Each slot shows a placeholder until you add an image. Put the files in `public/` and register them in `app/_libs/pictures.js`.

| Slot          | File                                                 | Ratio       |
| ------------- | ---------------------------------------------------- | ----------- |
| Hero          | `cb-hero.webp`                                       | 4:5         |
| Feature cards | `cb-feature-0.webp` to `cb-feature-2.webp`           | 16:10       |
| Lead provider | `cb-lead.webp`                                       | 1:1         |
| Providers     | `cb-prov-amara.webp`, `-daniel`, `-priya`, `-marcus` | 4:5 and 1:1 |

## Deployment

The site is a static export (`output: "export"` in `next.config.mjs`) and deploys to Cloudflare from this repository. Every push to the main branch rebuilds and redeploys it.

## About MyClickAid

MyClickAid is a bespoke web design studio. This site is one of several demo projects that show what a custom-designed website can look like for different kinds of businesses.

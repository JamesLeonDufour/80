# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static single-page website for Guy Léon-Dufour's 80th birthday celebration — July 25, 2026 at Manoir de Bareït, Brassempouy, France. Hosted on GitHub Pages at `80.bareit.fr`.

No build step. Edit files directly; GitHub Pages serves them automatically from `main`.

## Structure

```
index.html          — single-page site (all sections)
assets/
  css/style.css     — all styles (CSS custom properties, no preprocessor)
  js/main.js        — YouTube background, navbar, scroll reveal, RSVP form
  img/              — photos (hero-poster.jpg used as video fallback)
```

## Key details

- **YouTube background video**: ID `_tPZjXA5xFA` — injected via YouTube IFrame API in `main.js`. The iframe is sized to always cover the viewport using `max(100vw, ...)` / `max(100vh, ...)`.
- **RSVP form**: Formspree (`https://formspree.io/f/YOUR_FORM_ID`). To activate: create account at formspree.io, add form for `80@bareit.fr`, replace `YOUR_FORM_ID` in `index.html` with the actual form ID.
- **DNS**: `80.bareit.fr` → add a CNAME record pointing to `jamesleondufour.github.io`, then add a `CNAME` file to the repo root containing `80.bareit.fr`.
- **Colors**: gold `#c9a84c`, dark `#080b14`, cream `#f5f0e8` — defined as CSS variables in `:root`.
- **Fonts**: Cormorant Garant (headings, serif) + Montserrat (body, sans) via Google Fonts.

## Deployment checklist

1. Go to repo Settings → Pages → Source: Deploy from branch `main`, root `/`
2. Add `CNAME` file containing `80.bareit.fr`
3. Add DNS CNAME record: `80` → `jamesleondufour.github.io`
4. Replace `YOUR_FORM_ID` in `index.html` with real Formspree ID

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Note: CLAUDE.md and .claude/ are listed in .gitignore — they are local only and not pushed to GitHub.

## Project

Static single-page website celebrating Guy Léon-Dufour's 80th birthday — **25 July 2026** at Manoir de Bareït, Brassempouy, Landes (GPS: 43.63179, -0.69429). Hosted on GitHub Pages at `80.bareit.fr` (repo: github.com/JamesLeonDufour/80).

No build step. Edit files directly; GitHub Pages serves from `main` branch root.

## Structure

```
index.html              — main single-page site
hebergements.html       — interactive accommodation map (separate full-page app)
assets/
  css/style.css         — all styles, CSS custom properties
  js/main.js            — YouTube background, navbar, scroll reveal, RSVP form AJAX
  img/
    1975-monthléry.jpg  — Guy's portrait photo (racing at Montlhéry, 1975 victory)
CNAME                   — 80.bareit.fr
.nojekyll               — disables Jekyll on GitHub Pages
```

## Key technical details

**Hero video:** YouTube ID `_tPZjXA5xFA`, injected via YouTube IFrame API in `main.js`. The `<video>` tag was removed — the YouTube player is the only background. The 1975 Montlhéry photo is used only in the portrait section, not as hero fallback.

**RSVP form:** Formspree (`https://formspree.io/f/YOUR_FORM_ID`). Replace `YOUR_FORM_ID` in `index.html` with the actual ID from formspree.io (destination: 80@bareit.fr). Not yet activated.

**Accommodation map (`hebergements.html`):**
- Leaflet.js + CartoDB Light tiles
- 16 real verified properties within 30km radius (researched from Booking.com, Gîtes de France, Airbnb, official sites)
- Booking links pre-filled with dates: check-in 2026-07-25, check-out 2026-07-26
- Pin-style markers (CSS teardrop div icons); gold star pin for the manor
- `CHECKIN` / `CHECKOUT` constants at top of script — change dates there if needed

**Design system (style.css):**
- `--gold: #b8902e`, `--bg: #FAFAF8`, `--text: #1A1612`
- Fonts: Cormorant Garant (headings/serif) + Montserrat (body/sans)
- White/cream background with gold accents ("blanc et chic")
- Hero section intentionally stays dark (video overlay)

**DNS:** CNAME `80` → `jamesleondufour.github.io` at bareit.fr DNS provider. Already live.

## Deployment

Push to `main` → GitHub Pages auto-deploys. No build needed.

## Change history

| Date | Change |
|------|--------|
| 2026-03-21 | Project initialized. Single-page site built: hero (YouTube video `_tPZjXA5xFA`), L'Événement, Programme, RSVP (Formspree), Accès sections. White/chic design. |
| 2026-03-21 | GPS corrected to 43.63179, -0.69429. Accommodation map page added (hebergements.html). CNAME created. |
| 2026-03-21 | hebergements.html restyled to match white/chic theme (CartoDB light tiles, Cormorant Garant fonts, gold accents). |
| 2026-03-21 | Guy's 1975 Montlhéry racing photo added. Portrait section added to index.html between event cards and programme. |
| 2026-03-21 | Accommodation data replaced with 16 real verified properties (Booking.com, Gîtes de France, Airbnb research). Booking links pre-filled with July 25 dates. Map: pin-style markers, 30km radius, zoom level 11. Hero video-only (background-image removed). .gitignore created excluding .claude/ and CLAUDE.md. |

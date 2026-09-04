# Amandine — Patisserie Website

A responsive website for a fine patisserie, built from scratch with HTML, CSS and JavaScript. It presents the shop, its menu by category, a gallery, and location — with an interactive product filter and a Google Maps embed.

**Live:** <!-- adaugă aici linkul de Netlify după publicare, ex: https://amandine-cofetarie.netlify.app -->

---

## About

A demo website made as a presentation site for a local patisserie / cake shop. Elegant, warm design with a cream, chocolate-brown and gold palette. Built as a portfolio piece and a template for real bakery clients.

---

## Features

- Responsive layout — works on desktop, tablet and mobile
- Hero section with floating product images and a subtle floating animation
- Interactive menu filter (All / Cakes / Pastries / Desserts) built with vanilla JavaScript
- Product cards with photo, description and price, organized by category
- Photo gallery
- Interactive Google Maps embed showing the location
- Direct-action contact (phone, email)

---

## Tech stack

- **HTML5** — semantic structure
- **CSS3** — custom styling, CSS variables, Flexbox, Grid, media queries, keyframe animations
- **JavaScript (vanilla)** — menu category filtering
- **Google Fonts** — Playfair Display (headings) and Inter (body)

---

## How the menu filter works

Each product card has a `data-categorie` attribute (e.g. `torturi`, `prajituri`, `deserturi`). Each filter button has a `data-filter` attribute. On click, the script compares the two: products matching the selected category are shown, the rest are hidden with `display`. The `All` button shows every product.

---

## Project structure

```
index.html      — page structure and content
style.css       — all styling, palette (design tokens), responsive rules
index.js        — menu filtering logic
assets/         — product and about photos
```

---

## Running locally

Just open `index.html` in a browser — no build step needed.

Or, with a simple local server:

```bash
# Python
python -m http.server

# or VS Code Live Server extension
```

---

## Notes

This is a demo / template. For a real client, the content (shop name, products, prices, photos, address and contact details) would be replaced with the client's own.

---

## Contact

- **GitHub:** [raulVM7](https://github.com/raulVM7)
- **Location:** Craiova, Romania

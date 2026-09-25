# Add Webdesign & Google SEO Silver/Gold Packages

## Goal
Add a new "Our Packages" section to the homepage with 4 package cards — no prices shown. Clicking a package scrolls to the contact form and pre-selects the matching service.

## What gets built

### 1. New Packages section (`src/components/Packages.tsx`)
Placed directly after the Services section on the homepage. 4 cards in a responsive grid:

- **Webdesign Silver** — Responsive website (up to 5 pages), modern professional design, contact form integration, mobile optimized, basic SEO setup
- **Webdesign Gold** — Everything in Silver, up to 10 pages, custom premium design, advanced on-page SEO, blog/news area, priority support *(highlighted as "Recommended")*
- **Google SEO Silver** — Keyword & competitor analysis, on-page optimization, Google My Business optimization, monthly performance report
- **Google SEO Gold** — Everything in Silver, content creation, link building, review management, local SEO focus, monthly strategy call *(highlighted as "Recommended")*

Card design matches the existing Services cards (glass card style, icons, hover effects). No price anywhere — each card has a "Request Offer" button.

### 2. Click → contact form with pre-selected service
- Clicking a package smoothly scrolls to the contact form
- The form's "Service Needed" dropdown is automatically set:
  - Webdesign packages → "Web Design"
  - Google SEO packages → "SEO Services"
- Implemented via a custom browser event the contact form listens for (no page reload, works with the existing form)

### 3. Translations (bilingual)
New `packages` keys added to `src/i18n/translations/en.ts` and `de.ts` so the section works in both English and German, including the section heading/subheading and all card texts.

## Files changed
- `src/components/Packages.tsx` (new)
- `src/pages/Index.tsx` (add `<Packages />` after `<Services />`)
- `src/components/ContactForm.tsx` (listen for pre-selection event)
- `src/i18n/translations/en.ts`, `src/i18n/translations/de.ts` (new texts)

## Verification
- Build check via the observability logs
- Playwright check on desktop and mobile: section renders, clicking a Gold card scrolls to the form and pre-selects the right service

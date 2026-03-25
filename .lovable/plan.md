

## Update Email, Address & Company Name Across the Site

### Changes Summary

**Email**: `kontakt.abmedia@gmail.com` → `alice@myreviewmedia.com`
**Address**: Weselerstraße 73, 47169 Duisburg → Spitalerstraße 23, 20095 Hamburg
**Company**: AB Media Team → My Review Media (remove "legally registered as AB Media Team" references)

### Files to Edit (8 files)

**1. `src/components/ContactBar.tsx`** (lines 40-44)
- Email href and display text → `alice@myreviewmedia.com`

**2. `src/components/Footer.tsx`** (lines 38-39, 51-53, 62)
- Email href and display → `alice@myreviewmedia.com`
- Address → Spitalerstraße 23, 20095 Hamburg
- Representative line: keep Andreas Berger but remove "AB Media Team" context if needed

**3. `src/components/ContactForm.tsx`** (lines 128-130, 139-142)
- Email href and display → `alice@myreviewmedia.com`
- Address → Spitalerstraße 23, 20095 Hamburg

**4. `src/components/FloatingActionButton.tsx`** (line 61)
- Email href → `alice@myreviewmedia.com`

**5. `src/components/FAQ.tsx`** (lines 62-63)
- Email href → `alice@myreviewmedia.com`

**6. `src/pages/Impressum.tsx`**
- Company name: "AB Media Team" → "My Review Media" (lines 41, 86)
- Address: Spitalerstraße 23, 20095 Hamburg (lines 55-57, 87-89)
- Email → `alice@myreviewmedia.com` (line 67)
- Meta description update (line 11)
- Remove "Geschäftstätigkeit unter der Marke" line since company IS My Review Media now (lines 44-46)

**7. `src/i18n/translations/en.ts` & `src/i18n/translations/de.ts`** (line 251 each)
- Update disclaimer text: remove "(legally registered as AB Media Team at Weselerstraße 73, 47169 Duisburg)" and replace with new address

**8. `index.html`** (structured data, lines 58-66, 87-97, 73)
- Email → `alice@myreviewmedia.com`
- legalName → "My Review Media"
- Address fields → Spitalerstraße 23, Hamburg, 20095

**9. `supabase/functions/send-contact-email/index.ts`** (lines 174, 294-295)
- Email and address in email footer templates


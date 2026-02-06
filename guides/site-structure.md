# Site Structure Overview

A quick look at how the site is organized so you know where everything is.

---

## File Map

```
hcjkorg2/
├── app/                        ← All the pages
│   ├── page.tsx                ← HOME page (heatherkrystecki.com/)
│   ├── layout.tsx              ← Shared wrapper (fonts, metadata, header/footer)
│   ├── globals.css             ← Global styles (colors, animations, buttons)
│   ├── about/
│   │   └── page.tsx            ← ABOUT page (/about)
│   ├── shop/
│   │   └── page.tsx            ← SHOP page (/shop)
│   └── contact/
│       └── page.tsx            ← CONTACT page (/contact)
│
├── components/                 ← Reusable pieces
│   ├── header.tsx              ← Navigation bar (top of every page)
│   ├── footer.tsx              ← Footer (bottom of every page)
│   └── contact-form.tsx        ← The contact form (used on /contact)
│
├── public/                     ← Static files (favicons, robots.txt)
├── guides/                     ← These guides you're reading now
│
├── tailwind.config.ts          ← Design system (colors, fonts, spacing)
├── next.config.mjs             ← Build configuration
└── package.json                ← Project dependencies
```

---

## The Pages

### Home (`app/page.tsx`)
The landing page. Sections from top to bottom:
1. **Hero** — Full-screen title with "Order the Book" button
2. **Featured Poem** — First poem on linen background
3. **About the Poet** — Two-column: decorative quote + bio teaser
4. **Book Showcase** — Dark charcoal section with book cover + info
5. **Second Poem** — Another poem on cream background
6. **Instagram** — Follow section on linen background
7. **Final CTA** — "Let the words find you."

### About (`app/about/page.tsx`)
Two-column editorial layout:
- **Left sidebar** — Sticky decorative quote box + Instagram link
- **Right content** — Full bio, pull quote poem, "On Writing" section, Shop CTA

### Shop (`app/shop/page.tsx`)
Book showcase page:
1. **Book Cover** — Large styled book representation
2. **Book Details** — Title, description, purchase button, metadata grid
3. **Featured Poem** — On linen background
4. **"Who is this book for?"** — Three-column reader descriptions
5. **Final CTA** — Dark section with order button

### Contact (`app/contact/page.tsx`)
Two-column layout:
- **Left** — Inquiry info, email, Instagram, decorative element
- **Right** — Contact form (Name, Email, Subject, Message)

---

## Design System

### Colors (defined in `tailwind.config.ts`)

| Name | Hex | Used For |
|---|---|---|
| `cream` | `#faf8f5` | Main background |
| `linen` | `#f5f0eb` | Alternate section backgrounds |
| `charcoal` | `#2a2a2a` | Primary text, dark sections |
| `stone` | `#8a8580` | Secondary/body text |
| `blush` | `#c4a7a3` | Accents, dividers, hover states |
| `rose` | `#d4b5b0` | Light accent |
| `warm` | `#b8a088` | Warm accent |

### Fonts
- **Headings & Poems:** Cormorant Garamond (serif)
- **Body text & UI:** Inter (sans-serif)

Both are loaded from Google Fonts in `app/layout.tsx`.

---

## What Each Component Does

### Header (`components/header.tsx`)
- Fixed to the top of the screen
- Turns from transparent to frosted glass on scroll
- Has a hamburger menu on mobile
- Links: Home, About, Shop, Contact

### Footer (`components/footer.tsx`)
- Dark charcoal background
- Three columns: Brand/tagline, Navigation links, Connect (social + email)
- Copyright line at bottom

### Contact Form (`components/contact-form.tsx`)
- Powered by Formspree (no backend server needed)
- Fields: Name, Email, Subject, Message
- Shows a "Thank you" message after successful submission

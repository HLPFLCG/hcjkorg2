# Site Structure Overview

A quick look at how the site is organized so you know where everything is.

---

## File Map

```
hcjkorg2/
├── app/                          <- All the pages
│   ├── page.tsx                  <- HOME page (hcjk.org/)
│   ├── layout.tsx                <- Shared wrapper (fonts, metadata, loading screen)
│   ├── globals.css               <- Global styles (colors, animations, buttons)
│   ├── sitemap.ts                <- Auto-generated sitemap for SEO
│   ├── about/
│   │   └── page.tsx              <- ABOUT page (/about)
│   ├── shop/
│   │   └── page.tsx              <- SHOP page (/shop)
│   └── contact/
│       └── page.tsx              <- CONTACT page (/contact)
│
├── components/                   <- Reusable pieces
│   ├── header.tsx                <- Navigation bar (top of every page)
│   ├── footer.tsx                <- Footer (bottom of every page)
│   ├── contact-form.tsx          <- The contact form (used on /contact)
│   ├── instagram-embed.tsx       <- Instagram post embeds (used on home page)
│   └── newsletter-signup.tsx     <- Newsletter email signup form (used on home page)
│
├── lib/                          <- Shared utilities
│   ├── metadata.ts               <- SEO constants (site URL, author name, keywords)
│   ├── structured-data.ts        <- JSON-LD schemas (Person, Book, Website)
│   ├── types.ts                  <- TypeScript type definitions
│   └── utils.ts                  <- Utility functions (cn class merger)
│
├── public/                       <- Static files
│   ├── _headers                  <- Security headers (CSP, etc.)
│   ├── robots.txt                <- Search engine crawl rules
│   ├── site.webmanifest          <- PWA manifest
│   ├── favicon.ico               <- Browser tab icon
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
│
├── guides/                       <- These guides you're reading now
│
├── tailwind.config.ts            <- Design system (colors, fonts, spacing)
├── next.config.mjs               <- Build configuration
└── package.json                  <- Project dependencies
```

---

## The Pages

### Home (`app/page.tsx`)
The landing page. Sections from top to bottom:
1. **Hero** -- Full-screen title with "Order the Book" button
2. **Featured Poem** -- First poem on linen background
3. **About the Poet** -- Two-column: decorative quote + bio teaser
4. **Book Showcase** -- Dark charcoal section with book cover + info
5. **Second Poem** -- Another poem on cream background
6. **Instagram Feed** -- Embedded Instagram posts + follow button
7. **Newsletter Signup** -- Email signup form
8. **Final CTA** -- "Let the words find you."

### About (`app/about/page.tsx`)
Two-column editorial layout:
- **Left sidebar** -- Sticky decorative quote box + Instagram link
- **Right content** -- Full bio, pull quote poem, "On Writing" section, HLPFL partnership, Press & Media section, Shop CTA

### Shop (`app/shop/page.tsx`)
Book showcase page:
1. **Book Cover** -- Large styled book representation
2. **Book Details** -- Title, description, 3 purchase buttons, metadata grid
3. **Featured Poem** -- On linen background
4. **"Who is this book for?"** -- Three-column reader descriptions
5. **Final CTA** -- Dark section with order button

### Contact (`app/contact/page.tsx`)
Two-column layout:
- **Left** -- Inquiry info, email, Instagram, decorative element
- **Right** -- Contact form (Name, Email, Subject, Message)

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

### Button Styles
- **`btn-primary`** -- Outlined button that fills on hover (main CTAs)
- **`btn-secondary`** -- Underlined text link (secondary actions)
- **`btn-outline`** -- Full-width outlined button (purchase links on shop page)

---

## What Each Component Does

### Header (`components/header.tsx`)
- Fixed to the top of the screen
- Turns from transparent to frosted glass on scroll
- Has a hamburger menu on mobile (animated X when open)
- Links: Home, About, Shop, Contact

### Footer (`components/footer.tsx`)
- Dark charcoal background
- Three columns: Brand/tagline, Navigation links, Connect (Instagram, email, B&N)
- Copyright line + "Built with HLPFL" credit at bottom

### Contact Form (`components/contact-form.tsx`)
- Powered by Formspree (no backend server needed)
- Fields: Name, Email, Subject, Message
- Shows a "Thank you" message after successful submission

### Instagram Embed (`components/instagram-embed.tsx`)
- Embeds real Instagram posts on the home page
- Uses Instagram's official embed.js script
- Loads lazily for performance
- Shows posts in a 3-column grid on desktop

### Newsletter Signup (`components/newsletter-signup.tsx`)
- Email signup form on the home page
- Sends to Formspree (shares the contact form ID for now)
- Shows "Thank you" after signup
- Can be switched to a dedicated Formspree form or other email service

---

## SEO & Structured Data

### Metadata (`lib/metadata.ts`)
Central place for all SEO constants -- site URL, author name, book title, social links, and keywords. If any of these change, update them here and they'll update everywhere.

### Structured Data (`lib/structured-data.ts`)
JSON-LD schemas that help search engines understand the site:
- **Person** -- Heather Krystecki as a poet/author
- **Book** -- "I See You, I See Me" with purchase links
- **Website** -- Site-level metadata

### Sitemap (`app/sitemap.ts`)
Auto-generates a sitemap.xml listing all 4 pages. Search engines use this to find and index every page.

---

## Loading Screen

The site shows a branded loading screen ("Heather Krystecki" + animated progress bar) while the page loads. The loading screen is defined in:
- **HTML:** `app/layout.tsx` (the `#loading-screen` div)
- **CSS:** `app/globals.css` (the `.loading-screen` styles)

It automatically fades out once the page is ready.

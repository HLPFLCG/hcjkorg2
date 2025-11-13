# HCJK Collection Photography Website

A luxury photography portfolio website built with Next.js 16, featuring elegant animations, comprehensive SEO, and a sophisticated user experience.

## 🌟 Features

- **Modern Stack**: Next.js 16 with React 19, TypeScript, Tailwind CSS
- **Elegant Design**: Luxury aesthetic with smooth animations and transitions
- **SEO Optimized**: Complete metadata, Open Graph, Twitter Cards, structured data
- **PWA Ready**: Progressive Web App with manifest and service worker support
- **Analytics**: Google Tag Manager integration
- **Responsive**: Mobile-first design with elegant mobile menu
- **Performance**: Optimized images, fonts, and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels and focus states

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
hcjk-nextjs/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO and GTM
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles and animations
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services section
│   ├── Portfolio.tsx      # Portfolio gallery
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer
│   └── Loading.tsx        # Loading screen
├── public/                # Static assets
│   ├── images/            # Image assets
│   │   ├── portfolio/     # Portfolio images
│   │   ├── services/      # Service images
│   │   ├── about/         # About section images
│   │   ├── hero/          # Hero images
│   │   └── gallery/       # Gallery images
│   ├── favicon.ico        # Favicon
│   └── site.webmanifest   # PWA manifest
└── styles/                # Additional styles
    └── variables.css      # CSS variables
```

## 🎨 Design System

### Colors
- **Primary (Merlot)**: `#722f37`
- **Background (Beige)**: `#F2EDE3`
- **Text (Black)**: `#1a1a1a`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Lato (sans-serif)
- **Script**: Great Vibes / Eyesome Script (cursive)

### Spacing
- Mobile: 24px container padding
- Tablet: 80px container padding
- Desktop: 96px container padding
- Large screens: 128px container padding

## 🔧 Configuration

### Google Tag Manager
Update the GTM ID in `app/layout.tsx`:
```typescript
// Replace GTM-XXXXXXX with your actual GTM ID
'https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX'
```

### Business Information
Update structured data in `app/layout.tsx` with your:
- Phone number
- Physical address
- Coordinates
- Social media links

### SEO Metadata
Update `app/layout.tsx` with your:
- Site URL
- Social media handles
- Google verification code

## 📦 Deployment

### Cloudflare Pages (Current)
The site is automatically deployed to Cloudflare Pages on push to main branch.

**Live URL**: https://6fd64b1e.hcjkorg2.pages.dev

### Build Commands
```bash
# Build command
npm run build

# Output directory
.next
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting (recommended)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: All green
- Image optimization with Next/Image
- Font optimization with next/font
- Code splitting and lazy loading

## 📄 Documentation

See [COMPREHENSIVE_UPDATES.md](./COMPREHENSIVE_UPDATES.md) for detailed information about all features and recent updates.

## 🤝 Contributing

This is a private project for HCJK Collection Photography.

## 📞 Support

For questions or issues, contact HCJK Collection Photography.

## 📝 License

Copyright © 2024 HCJK Collection Photography. All rights reserved.

---

Built with ❤️ using Next.js
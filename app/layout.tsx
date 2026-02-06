import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getPersonSchema, getWebsiteSchema } from "@/lib/structured-data"
import { SEO_KEYWORDS } from "@/lib/metadata"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://hcjk.org'),
  title: {
    default: 'Heather Krystecki — Poet & Author | Raw, Emotional Poetry',
    template: '%s | Heather Krystecki',
  },
  description:
    'Raw, emotional poetry about love, loss, self-discovery, and mental health by Heather Krystecki. Read poems from I See You, I See Me — a modern poetry collection about the courage of being truly seen.',
  keywords: SEO_KEYWORDS,
  authors: [{ name: 'Heather Krystecki', url: 'https://hcjk.org' }],
  creator: 'Heather Krystecki',
  openGraph: {
    title: 'Heather Krystecki — Poet & Author',
    description:
      'I See You, I See Me — raw, emotional poetry about love, loss, self-discovery, and mental health. A modern poetry collection by Heather Krystecki.',
    url: 'https://hcjk.org',
    siteName: 'Heather Krystecki',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heather Krystecki — Poet & Author',
    description:
      'I See You, I See Me — raw, emotional poetry about love, loss, self-discovery, and mental health.',
    creator: '@hcjk_collection',
  },
  alternates: {
    canonical: 'https://hcjk.org',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: 'any' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
        />
      </head>
      <body className="bg-cream">
        {/* Loading Screen */}
        <div id="loading-screen" className="loading-screen">
          <div className="loading-content">
            <p className="loading-logo">Heather Krystecki</p>
            <p className="loading-subtitle">Poet & Author</p>
            <div className="loading-bar-track">
              <div className="loading-bar-fill" />
            </div>
          </div>
        </div>

        <Header />
        <main>{children}</main>
        <Footer />

        {/* Inline script to hide loading screen once page is ready */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                var loader = document.getElementById('loading-screen');
                if (loader) {
                  setTimeout(function() {
                    loader.classList.add('loaded');
                    setTimeout(function() { loader.style.display = 'none'; }, 600);
                  }, 400);
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}

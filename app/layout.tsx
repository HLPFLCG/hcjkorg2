import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";
import Loading from "../components/Loading";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hcjk.org'),
  title: {
    default: "HCJK Collection | Luxury Wedding & Portrait Photography",
    template: "%s | HCJK Collection"
  },
  description: "Capturing life's most precious moments with artistry, passion, and authenticity. Specializing in wedding photography, portrait sessions, and fine art photography.",
  keywords: ["photography", "wedding photography", "portrait photography", "luxury photography", "HCJK", "professional photographer", "wedding photographer", "portrait photographer", "fine art photography", "event photography"],
  authors: [{ name: "HCJK Photography", url: "https://hcjk.org" }],
  creator: "HCJK Collection",
  publisher: "HCJK Collection",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "HCJK Collection | Luxury Wedding & Portrait Photography",
    description: "Capturing life's most precious moments with artistry, passion, and authenticity.",
    url: "https://hcjk.org",
    siteName: "HCJK Collection",
    images: [
      {
        url: "https://hcjk.org/assets/images/webp/flags.webp",
        width: 1200,
        height: 630,
        alt: "HCJK Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HCJK Collection | Luxury Wedding & Portrait Photography",
    description: "Capturing life's most precious moments with artistry, passion, and authenticity.",
    images: ["https://hcjk.org/assets/images/webp/flags.webp"],
    creator: "@hcjkcollection",
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','TM-T3NKKV8P"');
          `}
        </Script>
        
        {/* Structured Data - Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "HCJK Collection Photography",
              "image": "https://hcjk.org/images/logo.png",
              "url": "https://hcjk.org",
              "telephone": "+1-XXX-XXX-XXXX",
              "priceRange": "$$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "postalCode": "Your ZIP",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0.0,
                "longitude": 0.0
              },
              "sameAs": [
                "https://www.instagram.com/hcjkcollection",
                "https://www.facebook.com/hcjkcollection"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
        
        {/* Structured Data - Service */}
        <Script
          id="structured-data-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Photography",
              "provider": {
                "@type": "ProfessionalService",
                "name": "HCJK Collection Photography"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Photography Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wedding Photography"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Portrait Photography"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Photography"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3NKKV8P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <Loading />
        {children}
      </body>
    </html>
  );
}
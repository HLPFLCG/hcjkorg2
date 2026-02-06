import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const basePath = process.env.NODE_ENV === 'production' ? '/hcjkorg2' : ''

export const metadata: Metadata = {
  title: "Heather Krystecki — Poet & Author",
  description: "I See You, I See Me — a poetry collection by Heather Krystecki. Exploring love, connection, and the quiet moments that define us.",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: 'any' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' }
    ]
  },
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
      </head>
      <body className="bg-cream">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

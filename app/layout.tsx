import type { Metadata } from "next"
import { Cormorant_Garamond, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SoundEffects from "@/components/sound-effects"
import SafariThemeColor from "@/components/safari-theme-color"
import { ErrorBoundary } from "@/components/error-boundary"


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-opensans",
})


export const metadata: Metadata = {
  title: "HCJK Collection | Professional Photography",
  description: "HCJK Collection - Professional photography portfolio showcasing stunning visual stories from around the world.",
  // Set initial theme-color meta tag for iOS Safari
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2ede3' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ErrorBoundary>
          <SafariThemeColor />
          <SoundEffects />
          <Header />
          <main>{children}</main>
          <Footer />
            </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}

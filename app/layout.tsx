import type { Metadata } from "next"
import { Playfair_Display, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SoundEffects from "@/components/sound-effects"
import SafariThemeColor from "@/components/safari-theme-color"


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"], 
  variable: "--font-roboto",
})


export const metadata: Metadata = {
  title: "HCJK Collection | Professional Photography",
  description: "HCJK Collection - Professional photography portfolio showcasing stunning visual stories from around the world.",
  // Set initial theme-color meta tag for iOS Safari
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2ede3' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SafariThemeColor />
          <SoundEffects />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

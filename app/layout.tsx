import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";

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
  title: "HCJK Collection | Luxury Wedding & Portrait Photography",
  description: "Capturing life's most precious moments with artistry, passion, and authenticity. Specializing in wedding photography, portrait sessions, and fine art photography.",
  keywords: ["photography", "wedding photography", "portrait photography", "luxury photography", "HCJK", "professional photographer"],
  authors: [{ name: "HCJK Photography" }],
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
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
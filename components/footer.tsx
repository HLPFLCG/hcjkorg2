"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <Link
            href="/"
            className="font-serif text-lg tracking-widest-xl uppercase text-foreground"
          >
            HCJK
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/about" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/shop" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
              Shop
            </Link>
            <Link href="/contact" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <a
            href="https://www.instagram.com/hcjk_collection/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

          <div className="w-12 h-px bg-border" />

          <p className="text-xs text-muted-foreground tracking-wide">
            &copy; {new Date().getFullYear()} Heather Krystecki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

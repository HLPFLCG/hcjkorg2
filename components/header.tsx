"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-charcoal">
          HCJK
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-xs tracking-super-wide uppercase text-stone hover:text-charcoal transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-xs tracking-super-wide uppercase text-stone hover:text-charcoal transition-colors">
            About
          </Link>
          <Link href="/shop" className="text-xs tracking-super-wide uppercase text-stone hover:text-charcoal transition-colors">
            Shop
          </Link>
          <Link href="/contact" className="text-xs tracking-super-wide uppercase text-stone hover:text-charcoal transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-charcoal text-sm"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-6">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-xs tracking-super-wide uppercase text-stone">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-xs tracking-super-wide uppercase text-stone">
              About
            </Link>
            <Link href="/shop" onClick={() => setIsOpen(false)} className="text-xs tracking-super-wide uppercase text-stone">
              Shop
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xs tracking-super-wide uppercase text-stone">
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

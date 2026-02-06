import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <Link href="/" className="font-serif text-lg text-charcoal">
          HCJK
        </Link>

        <nav className="flex justify-center gap-8 mt-6 mb-8">
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

        <a
          href="https://www.instagram.com/hcjk_collection/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-stone hover:text-charcoal transition-colors"
        >
          Instagram
        </a>

        <p className="text-xs text-stone mt-8">
          © {new Date().getFullYear()} Heather Krystecki
        </p>
      </div>
    </footer>
  )
}

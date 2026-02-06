import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs tracking-super-wide uppercase text-stone mb-8">
          A Poetry Collection
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-charcoal leading-tight">
          I See You,<br />I See Me
        </h1>
        <div className="w-16 h-px bg-blush my-8" />
        <p className="font-serif text-xl text-stone italic">
          by Heather Krystecki
        </p>
        <Link
          href="/shop"
          className="mt-12 text-xs tracking-super-wide uppercase text-charcoal border-b border-charcoal pb-1 hover:opacity-60 transition-opacity"
        >
          Order the Book →
        </Link>
      </section>

      {/* Poem */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-md mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed">
            in the quiet between us<br />
            i found the words<br />
            i had been searching for—<br />
            the ones that sound like home
          </p>
          <div className="w-8 h-px bg-blush mx-auto my-8" />
          <p className="text-xs tracking-super-wide uppercase text-stone">
            From the Collection
          </p>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-super-wide uppercase text-stone mb-6">
            About the Poet
          </p>
          <p className="font-serif text-2xl text-charcoal font-light leading-relaxed mb-8">
            Heather writes about the spaces between people—the tender,
            unspoken moments where we truly see one another.
          </p>
          <Link
            href="/about"
            className="text-xs tracking-super-wide uppercase text-charcoal border-b border-charcoal pb-1 hover:opacity-60 transition-opacity"
          >
            Read More →
          </Link>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-md mx-auto text-center">
          <p className="font-serif text-xl text-charcoal mb-4">
            Follow the journey
          </p>
          <a
            href="https://www.instagram.com/hcjk_collection/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-super-wide uppercase text-stone hover:text-charcoal transition-colors"
          >
            @hcjk_collection
          </a>
        </div>
      </section>
    </div>
  )
}

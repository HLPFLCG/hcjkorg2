import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero - Full viewport cinematic intro */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-8 md:left-16 w-px h-32 bg-gradient-to-b from-transparent via-blush/30 to-transparent" />
          <div className="absolute bottom-1/4 right-8 md:right-16 w-px h-32 bg-gradient-to-b from-transparent via-blush/30 to-transparent" />
        </div>

        <div className="animate-fade-up">
          <p className="text-[10px] tracking-super-wide uppercase text-stone mb-10">
            A Poetry Collection by Heather Krystecki
          </p>
        </div>

        <h1 className="font-serif text-display-lg text-charcoal font-light animate-fade-up-delay-1">
          I See You,
          <br />
          <em className="italic">I See Me</em>
        </h1>

        <div className="animate-fade-up-delay-2 mt-12 mb-12">
          <div className="divider mx-auto" />
        </div>

        <p className="font-serif text-xl md:text-2xl text-stone font-light italic max-w-md animate-fade-up-delay-2">
          A journey through love, loss, and the quiet courage of being truly seen.
        </p>

        <div className="animate-fade-up-delay-3 mt-14">
          <Link href="/shop" className="btn-primary">
            Order the Book
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in-slow">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] tracking-super-wide uppercase text-stone/40">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-stone/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Poem */}
      <section className="py-30 md:py-40 px-8 bg-linen relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-blush/20" />
        <div className="max-w-prose-narrow mx-auto text-center">
          <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12">
            From the Collection
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed poetry-text">
            in the quiet between us
            <br />
            i found the words
            <br />
            i had been searching for&mdash;
            <br />
            the ones that sound like home
          </blockquote>
          <div className="divider mx-auto mt-12" />
        </div>
      </section>

      {/* About the Poet - Editorial Split */}
      <section className="py-30 md:py-40 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left - Visual element */}
          <div className="relative">
            <div className="aspect-[3/4] bg-linen relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-12">
                  <p className="font-serif text-4xl md:text-5xl font-light text-charcoal/10 leading-tight italic">
                    &ldquo;some things
                    <br />
                    are too true
                    <br />
                    to say out loud&rdquo;
                  </p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute inset-4 border border-blush/20" />
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
              About the Poet
            </p>
            <h2 className="font-serif text-display-sm text-charcoal font-light mb-8">
              Heather Krystecki
            </h2>
            <p className="text-base text-stone leading-relaxed mb-6">
              Heather writes about the spaces between people&mdash;the tender,
              unspoken moments where we truly see one another. Her words trace
              the contours of love, vulnerability, and the quiet revelations
              that emerge when we let ourselves be known.
            </p>
            <p className="text-base text-stone leading-relaxed mb-10">
              Through spare, honest language, she invites readers into the
              intimate geography of human connection.
            </p>
            <Link href="/about" className="btn-secondary">
              Read Her Story
            </Link>
          </div>
        </div>
      </section>

      {/* Book Showcase */}
      <section className="py-30 md:py-40 px-8 bg-charcoal text-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Book visual */}
          <div className="relative flex items-center justify-center">
            <div className="w-64 md:w-72">
              {/* Book cover representation */}
              <div className="aspect-[2/3] bg-gradient-to-b from-cream/8 to-cream/3 border border-cream/10 relative shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                  <p className="text-[9px] tracking-super-wide uppercase text-cream/30 mb-6">
                    Poetry
                  </p>
                  <p className="font-serif text-3xl md:text-4xl font-light text-cream/90 text-center leading-tight">
                    I See You,
                    <br />
                    <em className="italic">I See Me</em>
                  </p>
                  <div className="w-8 h-px bg-blush/50 my-6" />
                  <p className="font-serif text-sm text-cream/50 italic">
                    Heather Krystecki
                  </p>
                </div>
              </div>
              {/* Book shadow effect */}
              <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 blur-xl" />
            </div>
          </div>

          {/* Book info */}
          <div>
            <p className="text-[10px] tracking-super-wide uppercase text-cream/30 mb-8">
              The Debut Collection
            </p>
            <h2 className="font-serif text-display-sm font-light mb-8">
              Now Available
            </h2>
            <p className="text-base text-cream/60 leading-relaxed mb-6">
              A poetry collection about the act of truly seeing&mdash;others,
              ourselves, and the quiet revelations that emerge when we
              let ourselves be known.
            </p>
            <p className="text-base text-cream/60 leading-relaxed mb-10">
              These poems move through love, solitude, healing, and the
              small sacred moments that make up a life.
            </p>
            <Link
              href="/shop"
              className="inline-block py-4 px-12 text-[11px] tracking-super-wide uppercase border border-cream/30 text-cream hover:bg-cream hover:text-charcoal transition-all duration-400"
            >
              Get Your Copy
            </Link>
          </div>
        </div>
      </section>

      {/* Second Poem */}
      <section className="py-30 md:py-40 px-8">
        <div className="max-w-prose-narrow mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed poetry-text">
            you asked me
            <br />
            what i was looking for
            <br />
            and i said&mdash;someone
            <br />
            who makes the silence
            <br />
            feel like enough
          </blockquote>
          <div className="divider mx-auto mt-12 mb-8" />
          <p className="text-[10px] tracking-super-wide uppercase text-stone/50">
            From &ldquo;I See You, I See Me&rdquo;
          </p>
        </div>
      </section>

      {/* Instagram / Follow */}
      <section className="py-26 md:py-30 px-8 bg-linen">
        <div className="max-w-prose-narrow mx-auto text-center">
          <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
            Follow the Journey
          </p>
          <p className="font-serif text-display-sm text-charcoal font-light mb-6">
            New poems weekly
          </p>
          <p className="text-base text-stone leading-relaxed mb-10">
            Follow along on Instagram for new poetry, behind-the-scenes moments,
            and the words that didn&apos;t make it into the book.
          </p>
          <a
            href="https://www.instagram.com/hcjk_collection/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            @hcjk_collection
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-30 md:py-40 px-8 text-center">
        <div className="max-w-prose-narrow mx-auto">
          <p className="font-serif text-display text-charcoal font-light mb-6">
            Let the words find you.
          </p>
          <div className="divider mx-auto mb-10" />
          <Link href="/shop" className="btn-secondary">
            Order Now
          </Link>
        </div>
      </section>
    </div>
  )
}

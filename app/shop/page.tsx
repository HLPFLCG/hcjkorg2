export default function ShopPage() {
  return (
    <div>
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <p className="text-xs tracking-super-wide uppercase text-stone mb-6">
          Shop
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal">
          The Collection
        </h1>
      </section>

      {/* Book */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Book Cover */}
          <div className="aspect-[2/3] bg-cream border border-gray-200 flex items-center justify-center">
            <div className="text-center px-8">
              <p className="text-xs tracking-super-wide uppercase text-stone mb-4">
                Poetry
              </p>
              <p className="font-serif text-3xl font-light text-charcoal leading-tight">
                I See You,<br />I See Me
              </p>
              <div className="w-8 h-px bg-blush mx-auto my-4" />
              <p className="font-serif text-sm text-stone italic">
                Heather Krystecki
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-light text-charcoal mb-2">
                I See You, I See Me
              </h2>
              <p className="text-sm text-stone">by Heather Krystecki</p>
            </div>

            <div className="w-12 h-px bg-gray-200" />

            <div className="space-y-4 text-base leading-relaxed text-stone">
              <p>
                A poetry collection about the act of truly seeing—others,
                ourselves, and the quiet revelations that emerge when we
                let ourselves be known.
              </p>
              <p>
                These poems move through love, solitude, healing, and the
                small sacred moments that make up a life.
              </p>
            </div>

            <div className="w-12 h-px bg-gray-200" />

            <a
              href="https://www.barnesandnoble.com/w/i-see-you-i-see-me-heather-krystecki/1149164117"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 text-center text-xs tracking-super-wide uppercase text-charcoal border border-charcoal hover:bg-charcoal hover:text-white transition-colors"
            >
              Buy on Barnes & Noble →
            </a>

            <p className="text-xs text-stone text-center">
              More retailers coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Poem */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-lg mx-auto text-center">
          <p className="font-serif text-2xl text-charcoal font-light italic leading-relaxed">
            you asked me<br />
            what i was looking for<br />
            and i said—someone<br />
            who makes the silence<br />
            feel like enough
          </p>
          <div className="w-8 h-px bg-blush mx-auto my-8" />
          <p className="text-xs tracking-super-wide uppercase text-stone">
            From the Collection
          </p>
        </div>
      </section>
    </div>
  )
}

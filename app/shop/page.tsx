import Link from "next/link"

export default function ShopPage() {
  return (
    <div>
      {/* Spacer for fixed header */}
      <div className="h-24" />

      {/* Hero */}
      <section className="pt-20 md:pt-30 pb-16 px-8 text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8 animate-fade-up">
          The Collection
        </p>
        <h1 className="font-serif text-display text-charcoal font-light animate-fade-up-delay-1">
          Shop
        </h1>
        <div className="divider mx-auto mt-10 animate-fade-up-delay-2" />
      </section>

      {/* Book Feature - Main showcase */}
      <section className="pb-30 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Book Cover - Premium presentation */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Book shadow */}
              <div className="absolute -bottom-6 left-6 right-6 h-12 bg-charcoal/10 blur-2xl" />

              {/* Main book */}
              <div className="w-72 md:w-80 aspect-[2/3] bg-gradient-to-b from-linen to-cream border border-stone/10 relative shadow-xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
                  <p className="text-[9px] tracking-super-wide uppercase text-stone/40 mb-8">
                    A Poetry Collection
                  </p>
                  <p className="font-serif text-4xl md:text-5xl font-light text-charcoal text-center leading-tight">
                    I See You,
                    <br />
                    <em className="italic">I See Me</em>
                  </p>
                  <div className="w-10 h-px bg-blush my-8" />
                  <p className="font-serif text-base text-stone italic">
                    Heather Krystecki
                  </p>
                </div>
                {/* Inner border */}
                <div className="absolute inset-5 border border-blush/15" />
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-8">
            <div>
              <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-4">
                Debut Collection
              </p>
              <h2 className="font-serif text-display-sm text-charcoal font-light mb-2">
                I See You, I See Me
              </h2>
              <p className="text-sm text-stone italic font-serif">
                by Heather Krystecki
              </p>
            </div>

            <div className="w-12 h-px bg-blush/40" />

            <div className="space-y-5 text-base leading-[1.9] text-stone">
              <p>
                A poetry collection about the act of truly seeing&mdash;others,
                ourselves, and the quiet revelations that emerge when we
                let ourselves be known.
              </p>
              <p>
                These poems move through love, solitude, healing, and the
                small sacred moments that make up a life. They are written
                for anyone who has ever felt the weight of being understood&mdash;
                and the freedom that comes with it.
              </p>
            </div>

            <div className="w-12 h-px bg-blush/40" />

            {/* Purchase Section */}
            <div className="space-y-4 pt-2">
              <a
                href="https://www.barnesandnoble.com/w/i-see-you-i-see-me-heather-krystecki/1149164117"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center w-full"
              >
                Buy on Barnes & Noble
              </a>
            </div>

            {/* Book details list */}
            <div className="pt-6 border-t border-stone/10">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <p className="text-[10px] tracking-widest-plus uppercase text-stone/40 mb-1">
                    Format
                  </p>
                  <p className="text-sm text-charcoal">Paperback</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest-plus uppercase text-stone/40 mb-1">
                    Genre
                  </p>
                  <p className="text-sm text-charcoal">Poetry</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest-plus uppercase text-stone/40 mb-1">
                    Publisher
                  </p>
                  <p className="text-sm text-charcoal">Self-published</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest-plus uppercase text-stone/40 mb-1">
                    Availability
                  </p>
                  <p className="text-sm text-charcoal">Available now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Poem */}
      <section className="py-30 md:py-40 px-8 bg-linen">
        <div className="max-w-prose-narrow mx-auto text-center">
          <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12">
            A Poem from the Collection
          </p>
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
          <div className="divider mx-auto mt-12" />
        </div>
      </section>

      {/* What Readers Say / Praise section */}
      <section className="py-30 md:py-40 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12">
            For the Reader
          </p>
          <h2 className="font-serif text-display-sm text-charcoal font-light mb-12">
            Who is this book for?
          </h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 text-left">
            <div className="space-y-4">
              <div className="w-8 h-px bg-blush" />
              <p className="text-base text-stone leading-relaxed">
                For anyone who has loved quietly and deeply&mdash;who knows that
                the most powerful moments often happen in silence.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-8 h-px bg-blush" />
              <p className="text-base text-stone leading-relaxed">
                For those on a journey of self-discovery&mdash;who are learning
                that seeing yourself clearly is the bravest thing you can do.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-8 h-px bg-blush" />
              <p className="text-base text-stone leading-relaxed">
                For readers who believe that poetry should feel like a
                conversation&mdash;intimate, honest, and true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-26 px-8 bg-charcoal text-cream text-center">
        <div className="max-w-prose-narrow mx-auto">
          <p className="font-serif text-display-sm font-light mb-4">
            Begin the journey
          </p>
          <p className="text-sm text-cream/50 mb-10">
            Available now on Barnes & Noble
          </p>
          <a
            href="https://www.barnesandnoble.com/w/i-see-you-i-see-me-heather-krystecki/1149164117"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-4 px-12 text-[11px] tracking-super-wide uppercase border border-cream/30 text-cream hover:bg-cream hover:text-charcoal transition-all duration-400"
          >
            Order Your Copy
          </a>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <p className="text-xs tracking-super-wide uppercase text-stone mb-6">
          About
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal">
          Heather Krystecki
        </h1>
      </section>

      {/* Bio */}
      <section className="pb-20 px-6">
        <div className="max-w-xl mx-auto space-y-6 text-base leading-relaxed text-stone">
          <p>
            Heather Krystecki is a poet and writer whose work explores the intimate
            geography of human connection—the moments of recognition, vulnerability,
            and quiet understanding that define our relationships.
          </p>
          <p>
            Her debut poetry collection, <em className="text-charcoal">I See You, I See Me</em>, is a meditation
            on seeing and being seen. Through spare, honest language, she traces the
            contours of love, loss, self-discovery, and the courage it takes to be truly
            known by another person.
          </p>
          <p>
            Heather shares her poetry on Instagram{" "}
            <a
              href="https://www.instagram.com/hcjk_collection/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:opacity-60 transition-opacity"
            >
              @hcjk_collection
            </a>
            , where her words have resonated with readers who find themselves in her verses.
          </p>
          <p>
            She believes that poetry lives in the everyday—in the pauses between
            conversations, in the way light falls across a room, in the space between
            two people sitting quietly together.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-lg mx-auto text-center">
          <p className="font-serif text-2xl text-charcoal font-light italic leading-relaxed">
            i write because<br />
            some things are too true<br />
            to say out loud—<br />
            so i give them<br />
            to the page instead
          </p>
          <div className="w-8 h-px bg-blush mx-auto my-8" />
          <p className="text-xs tracking-super-wide uppercase text-stone">
            Heather Krystecki
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <p className="font-serif text-2xl text-charcoal font-light mb-8">
          Read the collection
        </p>
        <Link
          href="/shop"
          className="text-xs tracking-super-wide uppercase text-charcoal border-b border-charcoal pb-1 hover:opacity-60 transition-opacity"
        >
          Shop Now →
        </Link>
      </section>
    </div>
  )
}

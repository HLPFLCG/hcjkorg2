"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Hero */}
      <section className="py-24 md:py-32 px-6 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-widest-2xl uppercase text-muted-foreground mb-6">
            Shop
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground">
            The Collection
          </h1>
        </motion.div>
      </section>

      {/* Book */}
      <section className="pb-24 md:pb-32 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Book Cover Placeholder */}
            <div className="aspect-[2/3] bg-card border border-border flex items-center justify-center">
              <div className="text-center px-8">
                <p className="text-xs tracking-widest-2xl uppercase text-muted-foreground mb-4">
                  Poetry
                </p>
                <p className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight">
                  I See You,
                  <br />
                  I See Me
                </p>
                <div className="w-8 h-px bg-accent mx-auto my-4" />
                <p className="font-serif text-sm text-muted-foreground italic">
                  Heather Krystecki
                </p>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-2">
                  I See You, I See Me
                </h2>
                <p className="text-sm text-muted-foreground">
                  by Heather Krystecki
                </p>
              </div>

              <div className="w-12 h-px bg-border" />

              <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                <p>
                  A poetry collection about the act of truly seeing &mdash;
                  others, ourselves, and the quiet revelations that emerge
                  when we let ourselves be known.
                </p>
                <p>
                  These poems move through love, solitude, healing, and the
                  small sacred moments that make up a life. Written with
                  tenderness and clarity, they invite readers into a space
                  of reflection and recognition.
                </p>
              </div>

              <div className="w-12 h-px bg-border" />

              {/* Purchase Links */}
              <div className="space-y-3">
                <a
                  href="https://www.barnesandnoble.com/w/i-see-you-i-see-me-heather-krystecki/1149164117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full py-3 px-5 border border-foreground text-foreground text-xs tracking-widest-xl uppercase hover:bg-foreground hover:text-primary-foreground transition-colors"
                >
                  Barnes & Noble
                  <ArrowRight size={14} />
                </a>
              </div>

              <p className="text-xs text-muted-foreground">
                More retailers coming soon.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Poem Excerpt */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="font-serif text-xl md:text-2xl leading-relaxed text-foreground font-light italic space-y-2">
            <p>you asked me</p>
            <p>what i was looking for</p>
            <p>and i said &mdash; someone</p>
            <p>who makes the silence</p>
            <p>feel like enough</p>
          </div>
          <div className="w-8 h-px bg-accent mx-auto mt-8 mb-4" />
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            from I See You, I See Me
          </p>
        </motion.div>
      </section>
    </div>
  )
}

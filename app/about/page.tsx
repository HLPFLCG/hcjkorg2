"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
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
            About
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground">
            Heather Krystecki
          </h1>
        </motion.div>
      </section>

      {/* Bio */}
      <section className="pb-24 md:pb-32 px-6">
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p>
              Heather Krystecki is a poet and writer whose work explores the intimate
              geography of human connection &mdash; the moments of recognition, vulnerability,
              and quiet understanding that define our relationships with others and ourselves.
            </p>
            <p>
              Her debut poetry collection, <em>I See You, I See Me</em>, is a meditation
              on seeing and being seen. Through spare, honest language, she traces the
              contours of love, loss, self-discovery, and the courage it takes to be truly
              known by another person.
            </p>
            <p>
              Heather shares her poetry on Instagram
              (<a
                href="https://www.instagram.com/hcjk_collection/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-foreground transition-colors"
              >
                @hcjk_collection
              </a>),
              where her words have resonated with a growing community of readers who find
              themselves in her verses.
            </p>
            <p>
              She believes that poetry lives in the everyday &mdash; in the pauses between
              conversations, in the way light falls across a room, in the space between
              two people sitting quietly together. Her writing invites readers to slow down
              and notice.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="font-serif text-xl md:text-2xl leading-relaxed text-foreground font-light italic space-y-2">
            <p>i write because</p>
            <p>some things are too true</p>
            <p>to say out loud &mdash;</p>
            <p>so i give them</p>
            <p>to the page instead</p>
          </div>
          <div className="w-8 h-px bg-accent mx-auto mt-8 mb-4" />
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Heather Krystecki
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 text-center">
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-serif text-2xl md:text-3xl font-light text-foreground mb-8">
            Read the collection
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-widest-xl uppercase text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Shop Now
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

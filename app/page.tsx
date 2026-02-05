"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Instagram } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-xs tracking-widest-2xl uppercase text-muted-foreground mb-8"
          >
            A poetry collection
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-foreground"
          >
            I See You,
            <br />
            I See Me
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            className="w-12 h-px bg-accent mx-auto my-8"
          />

          <motion.p
            custom={3}
            variants={fadeUp}
            className="font-serif text-xl md:text-2xl text-muted-foreground font-light italic"
          >
            by Heather Krystecki
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-12"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-xs tracking-widest-xl uppercase text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Order Now
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Poem Excerpt */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <div className="font-serif text-xl md:text-2xl leading-relaxed text-foreground font-light italic space-y-2">
            <p>in the quiet between us</p>
            <p>i found the words</p>
            <p>i had been searching for &mdash;</p>
            <p>the ones that sound</p>
            <p>like home</p>
          </div>
          <div className="w-8 h-px bg-accent mx-auto mt-8 mb-4" />
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            from I See You, I See Me
          </p>
        </motion.div>
      </section>

      {/* About Teaser */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-widest-2xl uppercase text-muted-foreground mb-6">
            About the poet
          </p>
          <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed text-foreground mb-8">
            Heather Krystecki writes about the spaces between people &mdash;
            the tender, unspoken moments where we truly see one another.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs tracking-widest-xl uppercase text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Read More
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <Instagram size={24} className="mx-auto text-muted-foreground mb-6" />
          <p className="font-serif text-xl md:text-2xl font-light text-foreground mb-2">
            Follow along
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            New poems, reflections, and behind-the-scenes on Instagram.
          </p>
          <a
            href="https://www.instagram.com/hcjk_collection/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest-xl uppercase text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            @hcjk_collection
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </section>
    </div>
  )
}

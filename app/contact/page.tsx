"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
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
            Get in touch
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground">
            Contact
          </h1>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-base leading-relaxed text-foreground/80 mb-8 text-center">
              For inquiries about readings, collaborations, press, or just to say
              hello &mdash; I&apos;d love to hear from you.
            </p>

            <ContactForm />
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-16 pt-12 border-t border-border text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Find me online
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.instagram.com/hcjk_collection/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={16} />
                @hcjk_collection
              </a>
            </div>
            <div className="mt-6">
              <a
                href="mailto:heather@hcjk.org"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                heather@hcjk.org
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

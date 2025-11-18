"use client"

import Image from "next/image"
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook, Youtube, Linkedin, Github } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"


export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for header
      <div className="header-height"></div> */}

       {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <Image
          src="/images/logo/hcjk-background.svg"
          alt="Contact HCJK Collection"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">Get in Touch</h1>
          <p className="text-white/90 text-lg max-w-2xl">Let's create something beautiful together</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 mt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">Contact HCJK Collection</h1>
            <p className="text-primary/60 mb-8 max-w-md">
              We're always excited to discuss new projects, creative ideas, or opportunities to bring your vision to life through exceptional photography.
            </p>

            <motion.div
              className="space-y-6 mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {[
                {
                  icon: <Mail className="text-primary mt-1" size={20} />,
                  title: "Email",
                  content: "hello@hcjk.org",
                },
                {
                  icon: <MapPin className="text-primary mt-1" size={20} />,
                  title: "Location",
                  content: "Serving clients worldwide",
                },
                {
                  icon: <Phone className="text-primary mt-1" size={20} />,
                  title: "Phone",
                  content: "By appointment only",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {item.icon}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-primary/60">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl mb-4">Follow Our Work</h3>
              <div className="flex flex-wrap gap-1">
                {[
                  { icon: <Instagram size={26} />, label: "Instagram", href: "https://instagram.com" },
                  { icon: <Twitter size={26} />, label: "Twitter", href: "https://twitter.com" },
                  { icon: <Facebook size={26} />, label: "Facebook", href: "https://facebook.com" },
                  { icon: <Youtube size={26} />, label: "Youtube", href: "https://youtube.com" },
                  { icon: <Linkedin size={26} />, label: "Linkedin", href: "https://linkedin.com" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-secondary rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-primary dark:bg-primary-foreground p-8 rounded-2xl shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl mb-6">Send a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-20 my-20 px-4 md:px-8 rounded-3xl border-[1px] border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                question: "What photography services do you offer?",
                answer:
                  "We offer a comprehensive range of photography services including portraits, events, commercial photography, artistic projects, and photo editing services.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "Our pricing varies based on the type of service, duration, and specific requirements. We provide custom quotes for each project to ensure you get exactly what you need.",
              },
              {
                question: "Do you travel for photoshoots?",
                answer:
                  "Yes, we travel both locally and internationally for projects. Travel expenses are discussed and included in the project quote.",
              },
              {
                question: "How long does it take to receive the final photos?",
                answer:
                  "Delivery times vary by project type. Portrait sessions typically deliver within 1-2 weeks, while events and larger projects may take 3-4 weeks for post-production.",
              },
              {
                question: "Do you offer prints and albums?",
                answer:
                  "Yes, we offer high-quality prints, photo albums, and various display options. We can discuss these options during the consultation phase.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-xl mb-2">{item.question}</h3>
                <p className="text-primary/60">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Featured Collections */}
      <section className="mt-20 mb-20 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Featured Work</h2>
            <p className="text-primary max-w-2xl mx-auto">
              Explore some of our most recent photography projects
            </p>
          </motion.div>
          <FeaturedCollections />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={18} />}>
              View Full Portfolio
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
"use client"

import Image from "next/image"
import { ArrowRight, Camera, Globe, Award, Users, Heart, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedButton from "@/components/animated-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <Image
          src="/images/logo/hcjk-background.svg"
          alt="HCJK Collection Photography"
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">Our Services</h1>
          <p className="text-white/90 text-lg max-w-2xl">Professional photography solutions for every occasion</p>
        </motion.div>
      </section>
      <div className="header-height"></div>

      {/* Bio Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">About HCJK Collection</h2>
            <p className="text-primary mb-4">
              HCJK Collection is a premier photography service dedicated to capturing life's most precious moments with artistic vision and technical excellence. Our team of professional photographers brings creativity and passion to every project.
            </p>
            <p className="text-primary mb-4">
              With years of experience across various photography genres, we specialize in creating stunning visual narratives that exceed our clients' expectations. From intimate portraits to grand events, we approach each assignment with fresh eyes and innovative techniques.
            </p>
            <p className="text-primary mb-6">
              We believe that great photography goes beyond just taking pictures – it's about telling stories, preserving memories, and creating art that resonates with viewers for years to come.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Camera size={20} className="text-primary" />
                <span className="text-primary">Professional Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-primary" />
                <span className="text-primary">Worldwide Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-primary" />
                <span className="text-primary">Award-Winning Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-primary" />
                <span className="text-primary">Client-Focused Approach</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[600px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/logo/hcjkstacked.svg"
              alt="HCJK Collection Photography"
              fill
              className="object-contain p-12"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Photography Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Portrait Photography",
                description:
                  "Professional headshots, family portraits, and personal branding sessions that capture your unique personality and style.",
                icon: <Users className="w-8 h-8" />,
              },
              {
                title: "Event Photography",
                description:
                  "Comprehensive coverage of weddings, corporate events, parties, and special occasions with creative and documentary-style approaches.",
                icon: <Camera className="w-8 h-8" />,
              },
              {
                title: "Commercial Photography",
                description:
                  "Product photography, corporate headshots, real estate, and business photography that elevates your brand and marketing materials.",
                icon: <Star className="w-8 h-8" />,
              },
              {
                title: "Artistic Projects",
                description:
                  "Creative photography projects, fine art prints, and artistic collaborations that push creative boundaries and explore visual storytelling.",
                icon: <Heart className="w-8 h-8" />,
              },
              {
                title: "Photo Editing & Retouching",
                description:
                  "Professional post-processing services including color correction, retouching, and creative editing to perfect your images.",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: "Photography Workshops",
                description:
                  "Educational workshops and mentoring sessions for aspiring photographers looking to improve their skills and techniques.",
                icon: <Award className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-primary dark:text-primary-secondary bg-primary-secondary dark:bg-primary p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-primary-secondary dark:text-primary-foreground text-xl mb-4">{item.title}</h3>
                <p className="text-primary-secondary dark:text-primary-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>
        <div className="space-y-12">
          {[
            {
              step: "01",
              title: "Consultation",
              description:
                "We begin with a thorough consultation to understand your vision, requirements, and goals for the photography project.",
            },
            {
              step: "02",
              title: "Planning",
              description:
                "Our team develops a detailed shot list, timeline, and creative concept to ensure we capture everything you need.",
            },
            {
              step: "03",
              title: "Execution",
              description:
                "We execute the photoshoot with professionalism and creativity, ensuring comfortable and enjoyable experience.",
            },
            {
              step: "04",
              title: "Post-Production",
              description:
                "Our editing team perfects each image with professional retouching, color correction, and artistic enhancements.",
            },
            {
              step: "05",
              title: "Delivery",
              description:
                "We deliver your final images through a secure online gallery with options for prints, albums, and digital files.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/4">
                <h3 className="text-3xl font-bold text-primary">{item.step}</h3>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-medium text-2xl mb-2">{item.title}</h4>
                <p className="text-primary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-20 my-20 px-4 md:px-8 rounded-3xl border-[1px] border-border">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-3xl md:text-4xl mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-primary max-w-2xl mx-auto mb-8">
            Let's discuss your photography needs and create stunning images that tell your story.
          </p>
          <AnimatedButton href="/contact" variant="primary" icon={<ArrowRight size={18} />}>
            Get Started Today
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  )
}
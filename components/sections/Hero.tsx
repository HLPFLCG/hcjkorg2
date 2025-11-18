'use client';

import Link from 'next/link';
import HeroCarousel from '@/components/ui/HeroCarousel';

// Array of hero images for carousel
const heroImages = [
  '/images/big-mountain.webp',
  '/images/nightime-peninsula.webp',
  '/images/beach-greenery.webp',
  '/images/clay-roof-house-panoramic.webp',
  '/images/flags.webp',
  '/images/panoramic-river-mountains-wow-this-is-gorgeous.webp',
  '/images/sunset1.webp',
];

export default function Hero() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel
        images={heroImages}
        title="HCJK Collection"
        subtitle="Photography"
        autoRotate={true}
        rotationInterval={6000}
        showOverlay={true}
      />

      {/* Additional Content Section */}
      <section className="relative bg-gradient-to-b from-black/50 to-transparent -mt-32 z-30">
        <div className="relative z-20 text-center px-8 max-w-7xl mx-auto py-16">
          <div className="max-w-5xl mx-auto mb-24">
            <p className="font-lato text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg leading-relaxed animate-fade-in-up">
              Capturing life&apos;s most precious moments with artistry, passion, and authenticity.
            </p>
            <p className="font-lato text-xl md:text-2xl lg:text-3xl text-white/90 mt-6 drop-shadow-lg leading-relaxed animate-fade-in-up delay-200">
              Every image tells a story, every moment becomes art.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up delay-300">
            <Link
              href="/portfolio"
              className="btn btn-primary text-xl px-16 py-7 shadow-strong hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="btn btn-secondary text-xl px-16 py-7 border-2 border-white text-white hover:bg-white hover:text-merlot shadow-strong hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg
            className="w-8 h-8 text-white drop-shadow-lg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
    </>
  );
}
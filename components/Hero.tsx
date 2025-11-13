'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Array of hero images - add your best images here
const heroImages = [
  '/big-mountain.webp',
  '/nightime-peninsula.webp',
  '/beach-greenery.webp',
  '/clay-roof-house-panoramic.webp',
  '/flags.webp',
  '/panoramic-river-mountains-wow-this-is-gorgeous.webp',
  '/sunset1.webp',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    // Get day of year to rotate image daily
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Select image based on day of year
    const imageIndex = dayOfYear % heroImages.length;
    setCurrentImage(heroImages[imageIndex]);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: currentImage ? `url(${currentImage})` : 'url(/big-mountain.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-8 max-w-7xl mx-auto py-32">
        <h1 className="font-playfair text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 drop-shadow-2xl tracking-tight">
          HCJK Collection
        </h1>
        
        {/* Eyesome Script Font for "Photography" */}
        <p className="font-eyesome text-7xl md:text-8xl lg:text-9xl text-merlot mb-20 drop-shadow-2xl italic font-light tracking-wide">
          Photography
        </p>
        
        <div className="max-w-5xl mx-auto mb-24">
          <p className="font-lato text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg leading-relaxed">
            Capturing life&apos;s most precious moments with artistry, passion, and authenticity.
          </p>
          <p className="font-lato text-xl md:text-2xl lg:text-3xl text-white/90 mt-6 drop-shadow-lg leading-relaxed">
            Every image tells a story, every moment becomes art.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
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
  );
}
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://hcjk.org/assets/images/webp/flags.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-8 max-w-6xl mx-auto py-20">
        <h1 className="font-playfair heading-display font-bold text-white mb-8 drop-shadow-2xl tracking-tight">
          HCJK Collection
        </h1>
        
        {/* Eyesome Script Font for "Photography" */}
        <p className="font-eyesome text-6xl md:text-7xl lg:text-8xl text-merlot mb-12 drop-shadow-2xl">
          Photography
        </p>
        
        <p className="font-lato text-lead text-white mb-16 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
          Capturing life&apos;s most precious moments with artistry, passion, and authenticity.
          <br className="hidden md:block" />
          Every image tells a story, every moment becomes art.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="#portfolio"
            className="btn btn-primary text-lg px-10 py-5 shadow-strong"
          >
            View Portfolio
          </Link>
          <Link
            href="#contact"
            className="btn btn-secondary text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-merlot shadow-strong"
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
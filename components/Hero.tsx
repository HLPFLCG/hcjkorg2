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
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-lg">
          HCJK Collection
        </h1>
        
        {/* Eyesome Script Font for "Photography" */}
        <p className="font-eyesome text-5xl md:text-6xl lg:text-7xl text-merlot mb-8 drop-shadow-lg">
          Photography
        </p>
        
        <p className="font-lato text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto drop-shadow-md">
          Capturing life&apos;s most precious moments with artistry, passion, and authenticity.
          <br />
          Every image tells a story, every moment becomes art.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#portfolio"
            className="inline-block px-8 py-4 bg-merlot text-white font-semibold rounded hover:bg-merlot-dark transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Portfolio
          </Link>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-merlot transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
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
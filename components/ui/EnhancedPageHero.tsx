'use client';

import { useState } from 'react';

// Page-specific image sets
const pageImageSets = {
  about: ['/images/big-mountain.webp', '/images/nightime-peninsula.webp', '/images/beach-greenery.webp'],
  services: ['/images/flags.webp', '/images/sunset1.webp', '/images/panoramic-river-mountains-wow-this-is-gorgeous.webp'],
  contact: ['/images/clay-roof-house-panoramic.webp', '/images/beach-greenery.webp', '/images/big-mountain.webp'],
  default: ['/images/big-mountain.webp', '/images/nightime-peninsula.webp', '/images/sunset1.webp']
};

interface EnhancedPageHeroProps {
  title: string;
  subtitle?: string;
  pageType?: keyof typeof pageImageSets;
  customImagePath?: string;
}

export default function EnhancedPageHero({ 
  title, 
  subtitle, 
  pageType = 'default',
  customImagePath 
}: EnhancedPageHeroProps) {
  const [currentImage] = useState(() => {
    // Get day of year to rotate image daily
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Select image based on day of year and page type
    const images = customImagePath ? [customImagePath] : pageImageSets[pageType];
    const imageIndex = dayOfYear % images.length;
    
    return images[imageIndex];
  });
  const [isLoaded] = useState(true);

  return (
    <section
      className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: currentImage ? `url(${currentImage})` : 'url(/images/big-mountain.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-8 max-w-5xl mx-auto py-24">
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="font-lato text-xl md:text-2xl lg:text-3xl text-white drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-merlot z-30" />
    </section>
  );
}
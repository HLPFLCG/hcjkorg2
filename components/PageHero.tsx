'use client';

import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imagePath: string;
}

export default function PageHero({ title, subtitle, imagePath }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-lato text-2xl md:text-3xl text-white/90 drop-shadow-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
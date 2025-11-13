'use client';

import Image from 'next/image';
import { useState } from 'react';

const portfolioItems = [
  {
    title: 'Scenic Sunset',
    category: 'Landscape',
    image: 'https://hcjk.org/assets/images/webp/nightime-peninsula.webp',
  },
  {
    title: 'Window Scene',
    category: 'Still Life',
    image: 'https://hcjk.org/assets/images/webp/window-with-curtain.webp',
  },
  {
    title: 'Natural Beauty',
    category: 'Landscape',
    image: 'https://hcjk.org/assets/images/webp/beach-greenery.webp',
  },
  {
    title: 'Yearbook Portrait',
    category: 'Portrait',
    image: 'https://hcjk.org/assets/images/webp/brother20.webp',
  },
  {
    title: 'Star Detail',
    category: 'Macro',
    image: 'https://hcjk.org/assets/images/webp/star.webp',
  },
  {
    title: 'Countryside',
    category: 'Landscape',
    image: 'https://hcjk.org/assets/images/webp/clay-roof-house-panoramic.webp',
  },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-beige-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Work
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection of recent photography showcasing diverse styles and subjects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-merlot/90 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-lato text-sm text-beige-light uppercase tracking-wider">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-merlot text-white font-semibold rounded hover:bg-merlot-dark transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}
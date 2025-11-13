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
    <section id="portfolio" className="section bg-white border-t-4 border-merlot">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair heading-xl font-bold text-black mb-6">
            Featured Work
          </h2>
          <p className="text-lead text-gray-600 max-w-3xl mx-auto">
            A curated selection of recent photography showcasing diverse styles and subjects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group shadow-medium hover:shadow-strong transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-merlot via-merlot/80 to-transparent flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="font-playfair text-3xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="font-lato text-base text-beige-light uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="btn btn-primary text-lg shadow-medium"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}
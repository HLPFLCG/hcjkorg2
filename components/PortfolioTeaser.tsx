'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const portfolioItems = [
  { title: 'Wedding Moment', category: 'Wedding', image: '/images/portfolio/portfolio-1.webp' },
  { title: 'Portrait Session', category: 'Portrait', image: '/images/portfolio/portfolio-2.webp' },
  { title: 'Natural Beauty', category: 'Landscape', image: '/images/portfolio/portfolio-3.webp' },
  { title: 'Special Day', category: 'Wedding', image: '/images/portfolio/portfolio-4.webp' },
  { title: 'Artistic Shot', category: 'Portrait', image: '/images/portfolio/portfolio-5.webp' },
  { title: 'Scenic View', category: 'Landscape', image: '/images/portfolio/portfolio-6.webp' },
];

export default function PortfolioTeaser() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section bg-[#faf0e6] border-t-4 border-merlot py-32">
      <div className="container max-w-[1600px]">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="font-playfair text-6xl md:text-7xl font-bold text-black mb-8">Featured Work</h2>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            A curated selection of recent photography showcasing diverse styles and subjects
          </p>
        </div>
        
        {/* Larger Grid - 2 columns on all screens for bigger images */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group shadow-strong hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="font-lato text-xl md:text-2xl text-beige-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block bg-merlot text-white font-lato font-semibold text-2xl px-16 py-6 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-2xl"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
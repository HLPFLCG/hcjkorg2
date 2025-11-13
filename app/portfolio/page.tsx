'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const portfolioItems = [
  // Wedding Photography
  { id: 1, title: 'Romantic Ceremony', category: 'Wedding', image: '/images/portfolio/portfolio-1.webp' },
  { id: 2, title: 'First Dance', category: 'Wedding', image: '/images/portfolio/portfolio-10.webp' },
  { id: 3, title: 'Wedding Celebration', category: 'Wedding', image: '/images/portfolio/portfolio-11.webp' },
  { id: 4, title: 'Bride Portrait', category: 'Wedding', image: '/images/portfolio/portfolio-12.webp' },
  { id: 5, title: 'Couple Moment', category: 'Wedding', image: '/images/portfolio/portfolio-13.webp' },
  { id: 6, title: 'Reception Joy', category: 'Wedding', image: '/images/portfolio/portfolio-14.webp' },
  
  // Portrait Photography
  { id: 7, title: 'Family Portrait', category: 'Portrait', image: '/images/portfolio/portfolio-2.webp' },
  { id: 8, title: 'Senior Portrait', category: 'Portrait', image: '/images/portfolio/portfolio-20.webp' },
  { id: 9, title: 'Child Portrait', category: 'Portrait', image: '/images/portfolio/portfolio-21.webp' },
  { id: 10, title: 'Professional Headshot', category: 'Portrait', image: '/images/portfolio/portfolio-22.webp' },
  { id: 11, title: 'Maternity Session', category: 'Portrait', image: '/images/portfolio/portfolio-23.webp' },
  { id: 12, title: 'Individual Portrait', category: 'Portrait', image: '/images/portfolio/portfolio-24.webp' },
  
  // Landscape Photography
  { id: 13, title: 'Mountain Vista', category: 'Landscape', image: '/images/portfolio/portfolio-3.webp' },
  { id: 14, title: 'Coastal Sunset', category: 'Landscape', image: '/images/portfolio/portfolio-30.webp' },
  { id: 15, title: 'Forest Path', category: 'Landscape', image: '/images/portfolio/landscape-1.webp' },
  { id: 16, title: 'Desert Landscape', category: 'Landscape', image: '/images/portfolio/portfolio-31.webp' },
  { id: 17, title: 'Lake Reflection', category: 'Landscape', image: '/images/portfolio/portfolio-32.webp' },
  { id: 18, title: 'Autumn Colors', category: 'Landscape', image: '/images/portfolio/portfolio-33.webp' },
  
  // Cityscape Photography
  { id: 19, title: 'Urban Skyline', category: 'Cityscape', image: '/images/portfolio/portfolio-4.webp' },
  { id: 20, title: 'City Lights', category: 'Cityscape', image: '/images/portfolio/portfolio-40.webp' },
  { id: 21, title: 'Architecture Detail', category: 'Cityscape', image: '/images/portfolio/portfolio-41.webp' },
  { id: 22, title: 'Street Scene', category: 'Cityscape', image: '/images/portfolio/portfolio-42.webp' },
  { id: 23, title: 'Night Photography', category: 'Cityscape', image: '/images/portfolio/portfolio-43.webp' },
  { id: 24, title: 'Urban Perspective', category: 'Cityscape', image: '/images/portfolio/portfolio-44.webp' },
  
  // Macro Photography
  { id: 25, title: 'Flower Detail', category: 'Macro', image: '/images/portfolio/portfolio-5.webp' },
  { id: 26, title: 'Nature Close-up', category: 'Macro', image: '/images/portfolio/portfolio-50.webp' },
  { id: 27, title: 'Insect Macro', category: 'Macro', image: '/images/portfolio/portfolio-51.webp' },
  { id: 28, title: 'Texture Study', category: 'Macro', image: '/images/portfolio/portfolio-52.webp' },
  { id: 29, title: 'Water Droplets', category: 'Macro', image: '/images/portfolio/portfolio-53.webp' },
  { id: 30, title: 'Botanical Detail', category: 'Macro', image: '/images/portfolio/portfolio-54.webp' },
  
  // Custom Projects
  { id: 31, title: 'Editorial Fashion', category: 'Custom', image: '/images/portfolio/portfolio-6.webp' },
  { id: 32, title: 'Commercial Product', category: 'Custom', image: '/images/portfolio/portfolio-60.webp' },
  { id: 33, title: 'Event Coverage', category: 'Custom', image: '/images/portfolio/portfolio-15.webp' },
  { id: 34, title: 'Brand Photography', category: 'Custom', image: '/images/portfolio/portfolio-16.webp' },
  { id: 35, title: 'Documentary Project', category: 'Custom', image: '/images/portfolio/portfolio-17.webp' },
  { id: 36, title: 'Artistic Collaboration', category: 'Custom', image: '/images/portfolio/portfolio-18.webp' },
];

const categories = ['All', 'Wedding', 'Portrait', 'Landscape', 'Cityscape', 'Macro', 'Custom'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <PageHero
          title="Portfolio"
          subtitle="A curated collection of my finest work"
          imagePath="/beach-greenery.webp"
        />

        {/* Filter Section */}
        <section className="section bg-[#F2EDE3] py-20">
          <div className="container max-w-[1800px]">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-lato font-semibold text-xl px-10 py-4 rounded-full transition-all transform hover:-translate-y-1 ${
                    selectedCategory === category
                      ? 'bg-merlot text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-merlot hover:text-white shadow-medium'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Portfolio Grid with Smooth Transitions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative aspect-4/3' rounded-2xl overflow-hidden cursor-pointer group shadow-strong hover:shadow-2xl transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center justify-center transition-opacity duration-300 ${
                      hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <h3 className="font-playfair text-4xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="font-lato text-xl text-beige-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-16">
              <p className="font-lato text-2xl text-gray-600">
                Showing {filteredItems.length} {selectedCategory === 'All' ? 'images' : `${selectedCategory.toLowerCase()} images`}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot py-32">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8">
              Love What You See?
            </h2>
            <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
              Let&apos;s create beautiful images together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-merlot text-white font-lato font-semibold text-2xl px-14 py-6 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Book a Session
              </Link>
              <Link
                href="/services"
                className="inline-block bg-transparent border-2 border-merlot text-merlot font-lato font-semibold text-2xl px-14 py-6 rounded-full hover:bg-merlot hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

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

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="section bg-[#F2EDE3]">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-black mb-8">
                My <span className="text-merlot">Portfolio</span>
              </h1>
              <p className="text-lead text-gray-700 leading-relaxed">
                A curated collection of my finest work across various photography disciplines
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-lato font-semibold text-lg px-8 py-3 rounded-full transition-all transform hover:-translate-y-1 ${
                    selectedCategory === category
                      ? 'bg-merlot text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-merlot hover:text-white shadow-medium'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group shadow-medium hover:shadow-strong transition-all duration-300"
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
                    className={`absolute inset-0 bg-gradient-to-t from-merlot via-merlot/80 to-transparent flex flex-col items-center justify-center transition-opacity duration-300 ${
                      hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <h3 className="font-playfair text-3xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="font-lato text-lg text-beige-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-16">
              <p className="font-lato text-xl text-gray-600">
                Showing {filteredItems.length} {selectedCategory === 'All' ? 'images' : `${selectedCategory.toLowerCase()} images`}
              </p>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair heading-xl font-bold text-black text-center mb-16">
                Photography Categories
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  {
                    category: 'Wedding',
                    description: 'Capturing the magic and emotion of your special day with elegance and artistry.',
                    count: portfolioItems.filter(item => item.category === 'Wedding').length
                  },
                  {
                    category: 'Portrait',
                    description: 'Professional portraits that capture personality and tell authentic stories.',
                    count: portfolioItems.filter(item => item.category === 'Portrait').length
                  },
                  {
                    category: 'Landscape',
                    description: 'Breathtaking natural scenes showcasing the beauty of our world.',
                    count: portfolioItems.filter(item => item.category === 'Landscape').length
                  },
                  {
                    category: 'Cityscape',
                    description: 'Urban photography capturing the energy and architecture of city life.',
                    count: portfolioItems.filter(item => item.category === 'Cityscape').length
                  },
                  {
                    category: 'Macro',
                    description: 'Revealing intricate details and hidden beauty in the small world around us.',
                    count: portfolioItems.filter(item => item.category === 'Macro').length
                  },
                  {
                    category: 'Custom',
                    description: 'Specialized projects tailored to unique visions and creative collaborations.',
                    count: portfolioItems.filter(item => item.category === 'Custom').length
                  },
                ].map((cat, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded-lg shadow-medium hover:shadow-strong transition-all cursor-pointer"
                    onClick={() => setSelectedCategory(cat.category)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-playfair heading-md font-bold text-black">
                        {cat.category}
                      </h3>
                      <span className="bg-merlot text-white font-lato font-semibold px-4 py-2 rounded-full text-sm">
                        {cat.count}
                      </span>
                    </div>
                    <p className="text-body text-gray-600 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair heading-xl font-bold text-black mb-8">
                Love What You See?
              </h2>
              <p className="text-lead text-gray-700 mb-12 leading-relaxed">
                Let&apos;s create beautiful images together. Contact me to discuss your photography needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-block bg-merlot text-white font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Book a Session
                </Link>
                <Link
                  href="/services"
                  className="inline-block bg-transparent border-2 border-merlot text-merlot font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    icon: '💍',
    title: 'Wedding Photography',
    description: 'Capturing the magic of your special day with elegance and artistry.',
  },
  {
    icon: '📸',
    title: 'Portrait Photography',
    description: 'Professional portraits that capture your unique personality and story.',
  },
  {
    icon: '🌄',
    title: 'Landscape & Nature',
    description: 'Breathtaking scenes showcasing the beauty of our world.',
  },
];

export default function ServicesIcons() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="section bg-[#F2EDE3] border-t-4 border-merlot">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-6">
            My Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Professional photography services tailored to capture your unique story
          </p>
        </div>

        {/* Desktop View - 3 Icons Across */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-lg shadow-medium hover:shadow-strong transition-all text-center group"
            >
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-playfair text-3xl font-bold text-black mb-4 group-hover:text-merlot transition-colors">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden mb-16">
          <div className="relative">
            {/* Carousel Item */}
            <div className="bg-white p-10 rounded-lg shadow-medium text-center min-h-[400px] flex flex-col justify-center">
              <div className="text-7xl mb-6">
                {services[currentSlide].icon}
              </div>
              <h3 className="font-playfair text-3xl font-bold text-black mb-4">
                {services[currentSlide].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {services[currentSlide].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-merlot text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-merlot-dark transition-all shadow-lg"
              aria-label="Previous service"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-merlot text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-merlot-dark transition-all shadow-lg"
              aria-label="Next service"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-merlot w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-merlot text-white font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    title: 'Wedding Photography',
    description: 'Capturing the magic of your special day with elegance and artistry. From intimate ceremonies to grand celebrations.',
    image: '/images/portfolio/portfolio-10.webp',
    cta: 'Book Your Wedding',
  },
  {
    title: 'Portrait Photography',
    description: 'Professional portraits that capture your unique personality and story. Timeless images you\'ll treasure forever.',
    image: '/images/portfolio/portfolio-20.webp',
    cta: 'Schedule Session',
  },
  {
    title: 'Landscape & Nature',
    description: 'Breathtaking scenes showcasing the beauty of our world. Perfect for art collectors and nature enthusiasts.',
    image: '/images/portfolio/portfolio-30.webp',
    cta: 'View Collection',
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
    <section id="services" className="section bg-[#F2EDE3] border-t-4 border-merlot py-32">
      <div className="container max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="font-playfair text-6xl md:text-7xl font-bold text-black mb-8">
            My Services
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            Professional photography services tailored to capture your unique story
          </p>
        </div>

        {/* Desktop View - 3 Large Photo Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-strong hover:shadow-2xl transition-all duration-500"
            >
              {/* Service Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed mb-6 opacity-90">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-block bg-white text-merlot font-lato font-semibold text-lg px-8 py-4 rounded-full hover:bg-merlot hover:text-white transition-all transform group-hover:-translate-y-1 w-fit"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel with Large Images */}
        <div className="md:hidden mb-16">
          <div className="relative">
            {/* Carousel Item */}
            <div className="group relative overflow-hidden rounded-lg shadow-strong">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={services[currentSlide].image}
                  alt={services[currentSlide].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="font-playfair text-3xl font-bold mb-4">
                  {services[currentSlide].title}
                </h3>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  {services[currentSlide].description}
                </p>
                <Link
                  href="/services"
                  className="inline-block bg-white text-merlot font-lato font-semibold text-lg px-8 py-4 rounded-full hover:bg-merlot hover:text-white transition-all w-fit"
                >
                  {services[currentSlide].cta}
                </Link>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-merlot w-14 h-14 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
              aria-label="Previous service"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-merlot w-14 h-14 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
              aria-label="Next service"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-merlot w-12' : 'bg-gray-400 w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Powerful CTA */}
        <div className="text-center bg-white p-12 rounded-lg shadow-strong">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Create Something Beautiful?
          </h3>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's discuss your photography needs and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/services"
              className="inline-block bg-merlot text-white font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              View All Services
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-merlot text-merlot font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
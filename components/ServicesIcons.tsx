'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Wedding Photography',
    tagline: 'Your special day, captured forever',
    description: 'Capturing the magic of your special day with elegance and artistry.',
    image: '/images/portfolio/portfolio-10.webp',
  },
  {
    number: '02',
    title: 'Portrait Photography',
    tagline: 'Timeless images of you',
    description: 'Professional portraits that capture your unique personality.',
    image: '/images/portfolio/portfolio-20.webp',
  },
  {
    number: '03',
    title: 'Landscape & Nature',
    tagline: 'The beauty of our world',
    description: 'Breathtaking scenes perfect for art collectors.',
    image: '/images/portfolio/portfolio-30.webp',
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
    <section id="services" className="section bg-[#F2EDE3] border-t-4 border-merlot py-20">
      <div className="container max-w-[1800px]">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-playfair text-6xl md:text-8xl font-bold text-black mb-6">
            My Services
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            Professional photography tailored to your story
          </p>
        </div>

        {/* Desktop View - MUCH LARGER Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className="group relative overflow-hidden rounded-2xl shadow-strong hover:shadow-2xl transition-all duration-500 bg-white"
            >
              {/* Large Service Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-merlot rounded-full flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-white">{service.number}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <p className="text-lg font-lato mb-2 text-beige-light">{service.tagline}</p>
                <h3 className="font-playfair text-4xl font-bold mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                <p className="text-xl leading-relaxed mb-6 opacity-90">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-lg font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View - Large Carousel */}
        <div className="md:hidden mb-12">
          <div className="relative">
            <Link href="/services" className="block group relative overflow-hidden rounded-2xl shadow-strong bg-white">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={services[currentSlide].image}
                  alt={services[currentSlide].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                
                <div className="absolute top-6 left-6 w-16 h-16 bg-merlot rounded-full flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-white">{services[currentSlide].number}</span>
                </div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <p className="text-lg font-lato mb-2 text-beige-light">{services[currentSlide].tagline}</p>
                <h3 className="font-playfair text-4xl font-bold mb-4">
                  {services[currentSlide].title}
                </h3>
                <p className="text-xl leading-relaxed mb-6 opacity-90">
                  {services[currentSlide].description}
                </p>
                <div className="inline-flex items-center gap-2 text-lg font-semibold">
                  Learn More
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

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

            {/* Dots */}
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

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-merlot text-white font-lato font-semibold text-2xl px-16 py-6 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-2xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
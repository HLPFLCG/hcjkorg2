'use client';

import { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

interface HeroCarouselProps {
  images: string[];
  title?: string;
  subtitle?: string;
  autoRotate?: boolean;
  rotationInterval?: number;
  showOverlay?: boolean;
  height?: string;
}

export default function HeroCarousel({
  images,
  title,
  subtitle,
  autoRotate = true,
  rotationInterval = 5000,
  showOverlay = true,
  height = "min-h-screen"
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoRotate || images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, images.length, rotationInterval]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
  };

  if (images.length === 0) return null;

  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
    >
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <OptimizedImage
              src={image}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={95}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-black/25 z-10" />
      )}

      {/* Content */}
      <div className="relative z-20 text-center px-8 max-w-7xl mx-auto py-32">
        {title && (
          <h1 className="font-playfair text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 drop-shadow-2xl tracking-tight animate-fade-in-up">
            {title}
          </h1>
        )}

        {subtitle && (
          <p className="font-eyesome text-7xl md:text-8xl lg:text-9xl text-merlot mb-20 drop-shadow-2xl italic font-light tracking-wide animate-fade-in-up delay-200">
            {subtitle}
          </p>
        )}

        {/* Navigation Controls */}
        {images.length > 1 && (
          <>
            {/* Previous/Next Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-30"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-30"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
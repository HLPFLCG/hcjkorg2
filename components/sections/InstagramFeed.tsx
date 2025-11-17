'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="section bg-[#faf0e6] border-t-4 border-merlot py-20">
      <div className="container max-w-[1900px] px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-6xl md:text-8xl font-bold text-black mb-6">
            Follow on Instagram
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Daily inspiration, behind-the-scenes moments, and the latest work
          </p>
          <a
            href="https://www.instagram.com/hcjk_collection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-merlot hover:text-merlot-dark font-lato font-semibold text-3xl transition-colors group"
          >
            <svg className="w-10 h-10 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @hcjk_collection
          </a>
        </div>
        
        {/* MUCH LARGER Instagram Feed */}
        <div className="w-full bg-white p-10 rounded-2xl shadow-strong">
          <div 
            className="elfsight-app-43bbc709-0d8d-400a-830f-ec2be4dd67b2" 
            data-elfsight-app-lazy
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="https://www.instagram.com/hcjk_collection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-merlot text-white font-lato font-semibold text-2xl px-16 py-6 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Follow for More
          </Link>
        </div>
      </div>
    </section>
  );
}
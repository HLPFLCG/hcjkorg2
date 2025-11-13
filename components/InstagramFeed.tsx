'use client';

import { useEffect } from 'react';

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
    <section className="section bg-[#F2EDE3] border-t-4 border-merlot py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-6">
            Follow on Instagram
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Daily inspiration, behind-the-scenes moments, and the latest work
          </p>
          <a
            href="https://www.instagram.com/hcjk_collection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-merlot hover:text-merlot-dark font-lato font-semibold text-xl transition-colors"
          >
            @hcjk_collection
          </a>
        </div>
        
        {/* Expanded Instagram Feed */}
        <div className="w-full">
          <div 
            className="elfsight-app-43bbc709-0d8d-400a-830f-ec2be4dd67b2" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}
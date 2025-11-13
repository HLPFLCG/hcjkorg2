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
    <section className="section bg-white border-t-4 border-merlot">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-playfair heading-xl font-bold text-black mb-6">
            Latest from Instagram
          </h2>
          <p className="text-lead text-gray-600 max-w-3xl mx-auto">
            Follow along for daily inspiration and behind-the-scenes moments
          </p>
        </div>
        
        <div 
          className="elfsight-app-43bbc709-0d8d-400a-830f-ec2be4dd67b2" 
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
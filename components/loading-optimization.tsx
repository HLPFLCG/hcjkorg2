"use client";

import { useEffect } from 'react';

export function LoadingOptimization() {
  useEffect(() => {
    // Preload critical resources
    if (typeof window !== 'undefined') {
      // Preload font files
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);

      // Optimize image loading
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));

      // Cleanup
      return () => {
        if (fontPreload.parentNode) {
          fontPreload.parentNode.removeChild(fontPreload);
        }
        imageObserver.disconnect();
      };
    }
  }, []);

  return null;
}
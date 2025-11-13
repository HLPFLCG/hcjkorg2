'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Remove loading screen after 3 seconds
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 'z-9999' flex items-center justify-center bg-linear-to-br from-[#F2EDE3] via-[#f2ede3] to-[#F2EDE3] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo with fade out animation */}
      <div className={`flex justify-center items-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="relative w-48 h-48 animate-float">
          <Image
            src="/images/logo/hcjkstackednewsvg.svg"
            alt="HCJK Collection"
            width={192}
            height={192}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // Remove loading screen after fade completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#F2EDE3] via-[#faf8f3] to-[#F2EDE3] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Elegant Logo Animation */}
        <div className="relative w-40 h-40 mx-auto mb-12">
          <div className="absolute inset-0 rounded-full bg-merlot/5 animate-ping" style={{ animationDuration: '2s' }}></div>
          <div className="relative w-full h-full animate-float">
            <Image
              src="/images/HH.svg"
              alt="HCJK Collection"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Elegant Text */}
        <h2 className="font-playfair text-2xl md:text-3xl text-merlot mb-8 tracking-wide animate-fade-in">
          HCJK Collection
        </h2>

        {/* Sophisticated Loading Dots */}
        <div className="flex space-x-3 justify-center">
          <div 
            className="w-2.5 h-2.5 bg-merlot rounded-full animate-elegant-bounce" 
            style={{ animationDelay: '0ms' }}
          ></div>
          <div 
            className="w-2.5 h-2.5 bg-merlot rounded-full animate-elegant-bounce" 
            style={{ animationDelay: '200ms' }}
          ></div>
          <div 
            className="w-2.5 h-2.5 bg-merlot rounded-full animate-elegant-bounce" 
            style={{ animationDelay: '400ms' }}
          ></div>
        </div>

        {/* Subtle Loading Bar */}
        <div className="mt-12 w-64 h-0.5 bg-merlot/10 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-merlot rounded-full animate-loading-bar"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.02);
          }
        }

        @keyframes elegant-bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-12px);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loading-bar {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 70%;
            margin-left: 15%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-elegant-bounce {
          animation: elegant-bounce 1.4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
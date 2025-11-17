'use client';

import Image from 'next/image';

export default function PortfolioLoader() {
  return (
    <div className="fixed inset-0 bg-[#F2EDE3] flex items-center justify-center z-50">
      <div className="text-center">
        <Image 
          src="/images/logo/hcjkstackednewsvg.svg" 
          alt="HCJK Collection" 
          width={120} 
          height={120}
          className="mx-auto mb-6"
        />
        <p className="font-lato text-xl text-gray-600 animate-pulse">Loading...</p>
        <div className="mt-4 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-merlot rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-3 h-3 bg-merlot rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-3 h-3 bg-merlot rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>
    </div>
  );
}
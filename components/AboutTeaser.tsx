'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section id="about" className="section bg-[#faf0e6] border-t-4 border-merlot py-32">
      <div className="container max-w-[1600px]">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Clickable Image */}
          <Link href="/about" className="relative group cursor-pointer">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/emma-child1.webp"
                alt="Heather - HCJK Collection Photographer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-merlot/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-playfair text-3xl font-bold">Learn More</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-merlot/10 rounded-lg -z-10" />
          </Link>

          {/* Text Content - Larger and more spacious */}
          <div className="space-y-10 px-4 md:px-8">
            <h2 className="font-playfair text-6xl md:text-7xl font-bold text-black leading-tight">
              Hi, I&apos;m <span className="text-merlot">Heather</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
                I am a photographic artist who contributes to the visual world with a unique perspective. 
                I have the ability to blend aesthetics with emotional depth in every frame I capture, 
                transforming memories into timeless artistic pieces.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                HCJK Photography captures life&apos;s most precious moments with artistry, passion, and authenticity. 
                I specialize in creating timeless imagery that tells your unique story through professional 
                wedding photography, portrait sessions, and fine art photography.
              </p>
            </div>

            {/* Larger CTA Button */}
            <div className="pt-10">
              <Link
                href="/about"
                className="inline-block bg-merlot text-white font-lato font-semibold text-2xl px-14 py-6 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
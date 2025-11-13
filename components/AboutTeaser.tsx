'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section id="about" className="section bg-[#faf0e6] border-t-4 border-merlot">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-playfair heading-xl font-bold text-black">
              Hi, I&apos;m <span className="text-merlot">Heather</span>
            </h2>
            
            <p className="text-lead text-gray-700">
              I am a photographic artist who contributes to the visual world with a unique perspective. 
              I have the ability to blend aesthetics with emotional depth in every frame I capture, 
              transforming memories into timeless artistic pieces.
            </p>
            
            <p className="text-body text-gray-600">
              HCJK Photography captures life&apos;s most precious moments with artistry, passion, and authenticity. 
              We specialize in creating timeless imagery that tells your unique story through professional 
              wedding photography, portrait sessions, and fine art photography.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/about"
                className="inline-block bg-merlot text-white font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                Learn More About Me
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/emma-child1.webp"
                alt="Heather - HCJK Collection Photographer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-merlot/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
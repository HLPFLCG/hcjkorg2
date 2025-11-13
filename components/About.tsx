'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-beige-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black">
              Hi, I&apos;m <span className="text-merlot">HCJK</span>
            </h2>
            
            <p className="font-lato text-lg text-gray-700 leading-relaxed">
              I am a photographic artist who contributes to the visual world with a unique perspective. 
              I have the ability to blend aesthetics with emotional depth in every frame I capture, 
              transforming memories into timeless artistic pieces.
            </p>
            
            <p className="font-lato text-base text-gray-600 leading-relaxed">
              HCJK Photography captures life&apos;s most precious moments with artistry, passion, and authenticity. 
              We specialize in creating timeless imagery that tells your unique story through professional 
              wedding photography, portrait sessions, and fine art photography.
            </p>
            
            <p className="font-lato text-base text-gray-600 leading-relaxed">
              I am recognized for my unparalleled skill in capturing natural beauty and creating captivating 
              compositions. By creatively expressing my passion for photography and drawing viewers in with 
              each shot, I have become a prominently mentioned name in the art world.
            </p>

            {/* Brand Values */}
            <div className="mt-8 space-y-4">
              <h3 className="font-playfair text-2xl font-bold text-black">Brand Values</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Authenticity', desc: 'Capturing genuine emotions and real moments' },
                  { title: 'Excellence', desc: 'Professional quality in every frame' },
                  { title: 'Artistry', desc: 'Creative vision combined with technical expertise' },
                  { title: 'Connection', desc: 'Building relationships with clients to tell their stories' },
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-merlot mr-2">•</span>
                    <div>
                      <strong className="font-lato font-semibold text-black">{value.title}</strong>
                      <span className="font-lato text-gray-600"> - {value.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://hcjk.org/assets/images/webp/emma-child1.webp"
              alt="HCJK Photography - Professional Portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
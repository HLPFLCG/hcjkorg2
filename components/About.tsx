'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section bg-white border-t-4 border-merlot">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-playfair heading-xl font-bold text-black">
              Hi, I&apos;m <span className="text-merlot">HCJK</span>
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
            
            <p className="text-body text-gray-600">
              I am recognized for my unparalleled skill in capturing natural beauty and creating captivating 
              compositions. By creatively expressing my passion for photography and drawing viewers in with 
              each shot, I have become a prominently mentioned name in the art world.
            </p>

            {/* Brand Values */}
            <div className="mt-12 space-y-6">
              <h3 className="font-playfair heading-md font-bold text-black">Brand Values</h3>
              <ul className="space-y-5">
                {[
                  { title: 'Authenticity', desc: 'Capturing genuine emotions and real moments' },
                  { title: 'Excellence', desc: 'Professional quality in every frame' },
                  { title: 'Artistry', desc: 'Creative vision combined with technical expertise' },
                  { title: 'Connection', desc: 'Building relationships with clients to tell their stories' },
                ].map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-merlot text-2xl leading-none mt-1">•</span>
                    <div>
                      <strong className="font-lato font-semibold text-black text-lg block mb-1">
                        {value.title}
                      </strong>
                      <span className="text-body text-gray-600">{value.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[600px] md:h-[700px] lg:h-[800px] rounded-lg overflow-hidden shadow-strong">
            <Image
              src="https://hcjk.org/assets/images/webp/emma-child1.webp"
              alt="HCJK Photography - Professional Portrait"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
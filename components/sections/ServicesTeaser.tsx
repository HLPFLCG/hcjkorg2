'use client';

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Wedding Photography',
    description: 'Capturing the magic of your special day with elegance and artistry.',
    image: "/images/portfolio/portfolio-10.webp",
  },
  {
    title: 'Portrait Photography',
    description: 'Professional portrait sessions that capture your unique personality and story.',
    image: "/images/portfolio/portfolio-20.webp",
  },
  {
    title: 'Landscape & Nature',
    description: 'Breathtaking landscape photography showcasing the beauty of our world.',
    image: "/images/portfolio/portfolio-30.webp",
  },
];

export default function ServicesTeaser() {
  return (
    <section id="services" className="section bg-[#F2EDE3] border-t-4 border-merlot">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="font-playfair heading-xl font-bold text-black mb-8">
            My Services
          </h2>
          <p className="text-lead text-gray-700 leading-relaxed">
            Professional photography services tailored to capture your unique story
          </p>
        </div>

        {/* Services Grid - Only showing 3 services */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group"
            >
              {/* Service Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="font-playfair heading-md font-bold text-black mb-4 group-hover:text-merlot transition-colors">
                  {service.title}
                </h3>
                <p className="text-body text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Services Page */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-block bg-merlot text-white font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
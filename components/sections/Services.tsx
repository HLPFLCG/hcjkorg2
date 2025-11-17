'use client';

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Wedding Photography',
    description: 'Capturing the magic of your special day with elegance and artistry. From intimate ceremonies to grand celebrations, every moment is preserved beautifully with a blend of candid moments and artistic portraits.',
    image: "/images/portfolio/portfolio-10.webp",
    cta: 'Book Your Wedding',
  },
  {
    number: '02',
    title: 'Portrait Photography',
    description: 'Professional portrait sessions for families, children, seniors, and individuals. Natural, timeless images that capture your unique personality and story. From professional headshots to family memories, every portrait is crafted with care.',
    image: "/images/portfolio/portfolio-20.webp",
    cta: 'Schedule a Session',
  },
  {
    number: '03',
    title: 'Landscape & Nature',
    description: 'Breathtaking landscape and nature photography showcasing the beauty of our world. Perfect for art collectors and nature enthusiasts. From serene landscapes to vibrant wildlife, creating captivating images that transport viewers.',
    image: "/images/portfolio/portfolio-30.webp",
    cta: 'View Collection',
  },
  {
    number: '04',
    title: 'Cityscape Photography',
    description: 'Urban photography capturing the energy and architecture of city life. From skylines to street scenes, the city comes alive through the lens with dramatic compositions and unique perspectives.',
    image: "/images/portfolio/portfolio-40.webp",
    cta: 'Explore Urban Art',
  },
  {
    number: '05',
    title: 'Macro Photography',
    description: 'Revealing the intricate details of the small world around us. Stunning close-up photography that showcases nature\'s hidden beauty, from delicate flowers to fascinating textures and patterns.',
    image: "/images/portfolio/portfolio-50.webp",
    cta: 'See Details',
  },
  {
    number: '06',
    title: 'Custom Projects',
    description: 'Specialized photography services tailored to your unique vision. Let\'s collaborate to bring your creative ideas to life, whether it\'s commercial work, editorial photography, or personal art projects.',
    image: "/images/portfolio/portfolio-60.webp",
    cta: 'Discuss Your Project',
  },
];

export default function Services() {
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Number Overlay */}
                <div className="absolute top-6 left-6 font-playfair text-7xl text-white opacity-80 drop-shadow-lg">
                  {service.number}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="font-playfair heading-md font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 font-lato font-semibold text-merlot hover:text-merlot-dark transition-colors text-lg group"
                >
                  {service.cta}
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
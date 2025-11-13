'use client';

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Wedding Photography',
    description: 'Capturing the magic of your special day with elegance and artistry. From intimate ceremonies to grand celebrations, every moment is preserved beautifully with a blend of candid moments and artistic portraits.',
    image: 'https://hcjk.org/assets/images/webp/nightime-peninsula.webp',
    cta: 'Book Your Wedding',
  },
  {
    number: '02',
    title: 'Portrait Photography',
    description: 'Professional portrait sessions for families, children, seniors, and individuals. Natural, timeless images that capture your unique personality and story. From professional headshots to family memories, every portrait is crafted with care.',
    image: 'https://hcjk.org/assets/images/webp/brother20.webp',
    cta: 'Schedule a Session',
  },
  {
    number: '03',
    title: 'Landscape & Nature',
    description: 'Breathtaking landscape and nature photography showcasing the beauty of our world. Perfect for art collectors and nature enthusiasts. From serene landscapes to vibrant wildlife, creating captivating images that transport viewers.',
    image: 'https://hcjk.org/assets/images/webp/beach-greenery.webp',
    cta: 'View Collection',
  },
  {
    number: '04',
    title: 'Cityscape Photography',
    description: 'Urban photography capturing the energy and architecture of city life. From skylines to street scenes, the city comes alive through the lens with dramatic compositions and unique perspectives.',
    image: 'https://hcjk.org/assets/images/webp/clay-roof-house-panoramic.webp',
    cta: 'Explore Urban Art',
  },
  {
    number: '05',
    title: 'Macro Photography',
    description: 'Revealing the intricate details of the small world around us. Stunning close-up photography that showcases nature\'s hidden beauty, from delicate flowers to fascinating textures and patterns.',
    image: 'https://hcjk.org/assets/images/webp/star.webp',
    cta: 'See Details',
  },
  {
    number: '06',
    title: 'Custom Projects',
    description: 'Specialized photography services tailored to your unique vision. Let\'s collaborate to bring your creative ideas to life, whether it\'s commercial work, editorial photography, or personal art projects.',
    image: 'https://hcjk.org/assets/images/webp/window-with-curtain.webp',
    cta: 'Discuss Your Project',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-beige">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
            My Services
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to capture your unique story
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="font-playfair text-5xl text-merlot opacity-30 mb-2">
                  {service.number}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="font-lato text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="inline-block font-lato font-semibold text-merlot hover:underline transition-all"
                >
                  {service.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
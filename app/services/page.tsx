import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional photography services including wedding photography, portraits, landscapes, and custom projects.',
};

const services = [
  {
    number: '01',
    title: 'Wedding Photography',
    tagline: 'Your special day, captured forever',
    price: 'Starting at $3,500',
    description: 'Your wedding day is one of the most important days of your life. I specialize in capturing the magic, emotion, and beauty with elegance and artistry.',
    features: [
      'Full-day coverage',
      'Engagement session',
      'High-resolution images',
      'Online gallery',
      'Print release',
      'Custom albums available',
    ],
    image: '/images/portfolio/portfolio-10.webp',
  },
  {
    number: '02',
    title: 'Portrait Photography',
    tagline: 'Timeless images of you',
    price: 'Starting at $500',
    description: 'Professional portraits for families, children, seniors, and individuals. Natural, timeless images that capture your unique personality.',
    features: [
      'Family portraits',
      'Senior portraits',
      'Professional headshots',
      'Maternity sessions',
      'Location or studio',
      'Wardrobe consultation',
    ],
    image: '/images/portfolio/portfolio-20.webp',
  },
  {
    number: '03',
    title: 'Landscape & Nature',
    tagline: 'The beauty of our world',
    price: 'Starting at $800',
    description: 'Breathtaking landscape and nature photography. Perfect for art collectors, interior designers, and nature enthusiasts.',
    features: [
      'Fine art prints',
      'Limited editions',
      'Custom sizes',
      'Framing available',
      'Commercial licensing',
      'Location scouting',
    ],
    image: '/images/portfolio/portfolio-30.webp',
  },
  {
    number: '04',
    title: 'Cityscape Photography',
    tagline: 'Urban energy captured',
    price: 'Starting at $800',
    description: 'Urban photography capturing the energy and architecture of city life. From skylines to street scenes.',
    features: [
      'Architectural photography',
      'Urban landscapes',
      'Night photography',
      'Aerial perspectives',
      'Time-lapse services',
      'Commercial projects',
    ],
    image: '/images/portfolio/portfolio-40.webp',
  },
  {
    number: '05',
    title: 'Macro Photography',
    tagline: 'Details revealed',
    price: 'Starting at $600',
    description: 'Revealing the intricate details of the small world around us. Stunning close-up photography.',
    features: [
      'Extreme close-ups',
      'Nature details',
      'Product photography',
      'Texture studies',
      'Fine art prints',
      'Scientific documentation',
    ],
    image: '/images/portfolio/portfolio-50.webp',
  },
  {
    number: '06',
    title: 'Custom Projects',
    tagline: 'Your vision, realized',
    price: 'Custom Quote',
    description: 'Specialized photography services tailored to your unique vision. Let\'s collaborate to bring your ideas to life.',
    features: [
      'Commercial photography',
      'Editorial projects',
      'Event coverage',
      'Brand photography',
      'Documentary work',
      'Artistic collaborations',
    ],
    image: '/images/portfolio/portfolio-60.webp',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <PageHero
          title="Services"
          subtitle="Professional photography tailored to your story"
          imagePath="/nightime-peninsula.webp"
        />

        {/* Services Grid - E-commerce Style */}
        <section className="section bg-[#F2EDE3] py-32">
          <div className="container max-w-[1800px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-strong hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Service Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Number Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-merlot rounded-full flex items-center justify-center shadow-lg">
                      <span className="font-playfair text-2xl font-bold text-white">{service.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-merlot font-lato font-semibold text-lg mb-2">{service.tagline}</p>
                    <h3 className="font-playfair text-3xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-2xl font-bold text-merlot mb-4">{service.price}</p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-merlot flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="block w-full bg-merlot text-white text-center font-lato font-semibold text-lg py-4 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot py-32">
          <div className="container max-w-[1400px]">
            <h2 className="font-playfair text-6xl md:text-7xl font-bold text-black text-center mb-20">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Get in Touch', description: 'Contact me to discuss your photography needs and vision.' },
                { step: '02', title: 'Consultation', description: 'We\'ll discuss your project, timeline, and requirements.' },
                { step: '03', title: 'Planning', description: 'I\'ll create a customized plan including location and scheduling.' },
                { step: '04', title: 'Photo Session', description: 'I\'ll capture beautiful images that tell your story.' },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-merlot rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="font-playfair text-4xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot py-32">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8">
              Ready to Book Your Session?
            </h2>
            <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
              Let&apos;s create beautiful memories together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-merlot text-white font-lato font-semibold text-2xl px-14 py-6 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
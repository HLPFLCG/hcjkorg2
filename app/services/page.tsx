import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional photography services including wedding photography, portraits, landscapes, cityscapes, macro photography, and custom projects.',
};

const services = [
  {
    number: '01',
    title: 'Wedding Photography',
    description: 'Your wedding day is one of the most important days of your life, and I am honored to be part of it. I specialize in capturing the magic, emotion, and beauty of your special day with elegance and artistry.',
    features: [
      'Full-day coverage from preparation to reception',
      'Engagement session included',
      'Second photographer available',
      'High-resolution digital images',
      'Online gallery for easy sharing',
      'Print release for all images',
      'Custom wedding albums available',
      'Destination weddings welcome'
    ],
    image: '/images/portfolio/portfolio-10.webp',
    details: 'From intimate ceremonies to grand celebrations, every moment is preserved beautifully with a blend of candid moments and artistic portraits. I work closely with couples to understand their vision and ensure that every precious moment is captured—from the quiet anticipation of getting ready to the joyous celebration on the dance floor.',
  },
  {
    number: '02',
    title: 'Portrait Photography',
    description: 'Professional portrait sessions for families, children, seniors, and individuals. Natural, timeless images that capture your unique personality and story.',
    features: [
      'Family portraits',
      'Senior portraits',
      'Children & newborn photography',
      'Professional headshots',
      'Maternity sessions',
      'Individual portraits',
      'Location or studio sessions',
      'Wardrobe consultation included'
    ],
    image: '/images/portfolio/portfolio-20.webp',
    details: 'Whether you need professional headshots for your business, want to capture your growing family, or celebrate a milestone like graduation, I create portraits that are both beautiful and authentic. My approach is relaxed and natural, helping you feel comfortable in front of the camera so your true personality shines through.',
  },
  {
    number: '03',
    title: 'Landscape & Nature Photography',
    description: 'Breathtaking landscape and nature photography showcasing the beauty of our world. Perfect for art collectors, interior designers, and nature enthusiasts.',
    features: [
      'Fine art landscape prints',
      'Nature and wildlife photography',
      'Seasonal collections',
      'Limited edition prints available',
      'Custom sizes and framing',
      'Commercial licensing available',
      'Location scouting services',
      'Sunrise and sunset sessions'
    ],
    image: '/images/portfolio/portfolio-30.webp',
    details: 'From serene landscapes to vibrant wildlife, I create captivating images that transport viewers to beautiful places. Each photograph is carefully composed to showcase the natural beauty of the environment, whether it\'s a misty mountain morning, a golden sunset over the ocean, or the intricate details of a forest scene.',
  },
  {
    number: '04',
    title: 'Cityscape Photography',
    description: 'Urban photography capturing the energy and architecture of city life. From skylines to street scenes, the city comes alive through the lens.',
    features: [
      'Architectural photography',
      'Urban landscape prints',
      'Night photography',
      'Street photography',
      'Aerial perspectives',
      'Time-lapse services',
      'Commercial real estate photography',
      'City tour photography sessions'
    ],
    image: '/images/portfolio/portfolio-40.webp',
    details: 'Cities have their own unique character and energy, and I love capturing the interplay of light, shadow, and architecture that makes each urban environment special. Whether it\'s the dramatic lines of modern buildings, the charm of historic neighborhoods, or the vibrant energy of city streets, I create images that celebrate urban life.',
  },
  {
    number: '05',
    title: 'Macro Photography',
    description: 'Revealing the intricate details of the small world around us. Stunning close-up photography that showcases nature\'s hidden beauty.',
    features: [
      'Extreme close-up photography',
      'Flower and plant details',
      'Insect and wildlife macro',
      'Texture and pattern studies',
      'Product macro photography',
      'Scientific documentation',
      'Fine art macro prints',
      'Educational workshops available'
    ],
    image: '/images/portfolio/portfolio-50.webp',
    details: 'The world of macro photography reveals details invisible to the naked eye. From the delicate structure of a flower petal to the intricate patterns on an insect\'s wing, I capture the extraordinary beauty found in the smallest subjects. Each image invites viewers to see the world from a new perspective.',
  },
  {
    number: '06',
    title: 'Custom Projects',
    description: 'Specialized photography services tailored to your unique vision. Let\'s collaborate to bring your creative ideas to life.',
    features: [
      'Commercial photography',
      'Editorial photography',
      'Event coverage',
      'Corporate photography',
      'Product photography',
      'Brand photography',
      'Documentary projects',
      'Artistic collaborations'
    ],
    image: '/images/portfolio/portfolio-60.webp',
    details: 'Every project is unique, and I love working with clients to create custom photography solutions. Whether you need images for your business, want to document a special event, or have a creative vision you\'d like to bring to life, I\'m here to help. Let\'s discuss your needs and create something extraordinary together.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="section bg-[#F2EDE3]">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-black mb-8">
                Photography <span className="text-merlot">Services</span>
              </h1>
              <p className="text-lead text-gray-700 leading-relaxed">
                Professional photography services tailored to capture your unique story and vision
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <section
            key={index}
            className={`section border-t-4 border-merlot ${
              index % 2 === 0 ? 'bg-[#faf0e6]' : 'bg-[#F2EDE3]'
            }`}
          >
            <div className="container">
              <div className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-48 h-48 bg-merlot/10 rounded-lg -z-10`} />
                </div>

                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-6">
                    <span className="font-playfair text-6xl font-bold text-merlot/20">
                      {service.number}
                    </span>
                    <h2 className="font-playfair heading-xl font-bold text-black">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lead text-gray-700">
                    {service.description}
                  </p>
                  
                  <p className="text-body text-gray-600 leading-relaxed">
                    {service.details}
                  </p>

                  {/* Features List */}
                  <div className="bg-white p-8 rounded-lg shadow-medium">
                    <h3 className="font-playfair heading-sm font-bold text-black mb-6">
                      What&apos;s Included:
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-merlot text-xl leading-none mt-1">✓</span>
                          <span className="text-body text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-block bg-merlot text-white font-lato font-semibold text-xl px-10 py-4 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Booking Process */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair heading-xl font-bold text-black text-center mb-16">
                How It Works
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Get in Touch',
                    description: 'Contact me through the inquiry form or email to discuss your photography needs and vision.'
                  },
                  {
                    step: '02',
                    title: 'Consultation',
                    description: 'We\'ll have a conversation about your project, timeline, and any specific requirements you have.'
                  },
                  {
                    step: '03',
                    title: 'Planning',
                    description: 'I\'ll create a customized plan for your session, including location scouting and scheduling.'
                  },
                  {
                    step: '04',
                    title: 'Photo Session',
                    description: 'On the day of your session, I\'ll capture beautiful images that tell your unique story.'
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-merlot rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="font-playfair text-3xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-playfair heading-sm font-bold text-black mb-4">
                      {step.title}
                    </h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair heading-xl font-bold text-black text-center mb-16">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: 'How far in advance should I book?',
                    answer: 'For weddings, I recommend booking 6-12 months in advance. For portrait sessions and other services, 2-4 weeks notice is typically sufficient, though I can sometimes accommodate shorter timelines.'
                  },
                  {
                    question: 'Do you travel for photography sessions?',
                    answer: 'Yes! I love traveling for photography sessions and destination weddings. Travel fees may apply depending on the location. Contact me to discuss your specific needs.'
                  },
                  {
                    question: 'How long until I receive my photos?',
                    answer: 'For portrait sessions, you can expect your edited images within 2-3 weeks. Wedding photography typically takes 4-6 weeks due to the larger number of images and detailed editing process.'
                  },
                  {
                    question: 'Can I request specific shots or styles?',
                    answer: 'Absolutely! I encourage clients to share their vision, inspiration photos, and must-have shots. This helps me understand your preferences and ensure we capture everything important to you.'
                  },
                  {
                    question: 'What happens if the weather is bad?',
                    answer: 'For outdoor sessions, we can reschedule if weather conditions are unfavorable. For weddings, I come prepared with backup plans and equipment to work in any weather conditions.'
                  },
                  {
                    question: 'Do you offer prints and albums?',
                    answer: 'Yes! I offer professional printing services, custom albums, and wall art. All digital packages include print release, so you can also print images on your own if you prefer.'
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-medium">
                    <h3 className="font-playfair heading-sm font-bold text-black mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair heading-xl font-bold text-black mb-8">
                Ready to Book Your Session?
              </h2>
              <p className="text-lead text-gray-700 mb-12 leading-relaxed">
                Let&apos;s create beautiful memories together. Contact me today to discuss your photography needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-block bg-merlot text-white font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-block bg-transparent border-2 border-merlot text-merlot font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
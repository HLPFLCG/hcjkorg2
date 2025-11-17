'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const portfolioItems = [
  // Wedding Photography
  { id: 1, title: 'Romantic Ceremony', category: 'Wedding', image: '/images/portfolio/portfolio-1.webp', description: 'A beautiful outdoor wedding ceremony captured during golden hour, with the couple exchanging vows surrounded by nature.' },
  { id: 2, title: 'First Dance', category: 'Wedding', image: '/images/portfolio/portfolio-10.webp', description: 'The magical first dance as husband and wife, surrounded by the warm glow of celebration and love.' },
  { id: 3, title: 'Wedding Celebration', category: 'Wedding', image: '/images/portfolio/portfolio-11.webp', description: 'Joyful celebration moments from the reception, capturing the happiness and excitement of the newlyweds.' },
  { id: 4, title: 'Bride Portrait', category: 'Wedding', image: '/images/portfolio/portfolio-12.webp', description: 'Elegant bridal portrait showcasing the intricate details of the wedding dress and the bride radiant beauty.' },
  { id: 5, title: 'Couple Moment', category: 'Wedding', image: '/images/portfolio/portfolio-13.webp', description: 'An intimate moment between the newlywed couple, capturing their genuine connection and love.' },
  { id: 6, title: 'Reception Joy', category: 'Wedding', image: '/images/portfolio/portfolio-14.webp', description: 'The energy and joy of the wedding reception, with guests celebrating the newlyweds.' },

  // Portrait Photography
  { id: 7, title: 'Family Portrait', category: 'Portrait', image: '/images/portfolio/portfolio-2.webp', description: 'A warm family portrait capturing the genuine bonds and love shared between family members.' },
  { id: 8, title: 'Senior Portrait', category: 'Portrait', image: '/images/portfolio/portfolio-20.webp', description: 'Professional senior portrait session celebrating this important milestone with style and personality.' },
  { id: 9, title: 'Child Portrait', category: 'Portrait', image: '/images/portfolio/portfolio-21.webp', description: 'Natural child portrait capturing the innocence and wonder of childhood.' },
  { id: 10, title: 'Professional Headshot', category: 'Portrait', image: '/images/portfolio/portfolio-22.webp', description: 'Professional headshot perfect for business profiles, LinkedIn, or corporate use.' },
  { id: 11, title: 'Maternity Session', category: 'Portrait', image: '/images/portfolio/portfolio-23.webp', description: 'Beautiful maternity portrait celebrating the journey of motherhood with elegance and grace.' },
  { id: 12, title: 'Individual Portrait', category: 'Portrait', image: '/images/portfolio/portfolio-24.webp', description: 'Artistic individual portrait capturing personality and character through thoughtful composition.' },

  // Landscape Photography
  { id: 13, title: 'Mountain Vista', category: 'Landscape', image: '/images/portfolio/portfolio-3.webp', description: 'Breathtaking mountain landscape captured at sunrise, showcasing nature majestic beauty.' },
  { id: 14, title: 'Coastal Sunset', category: 'Landscape', image: '/images/portfolio/portfolio-30.webp', description: 'Stunning coastal sunset with dramatic colors painting the sky and reflecting on the water.' },
  { id: 15, title: 'Forest Path', category: 'Landscape', image: '/images/portfolio/landscape-1.webp', description: 'Serene forest path inviting exploration and discovery in nature peaceful embrace.' },
  { id: 16, title: 'Desert Landscape', category: 'Landscape', image: '/images/portfolio/portfolio-31.webp', description: 'Vast desert landscape showcasing the raw beauty and harsh elegance of arid environments.' },
  { id: 17, title: 'Lake Reflection', category: 'Landscape', image: '/images/portfolio/portfolio-32.webp', description: 'Perfect mirror-like lake reflection creating a stunning symmetrical landscape composition.' },
  { id: 18, title: 'Autumn Colors', category: 'Landscape', image: '/images/portfolio/portfolio-33.webp', description: 'Vibrant autumn colors creating a spectacular display of nature seasonal transformation.' },

  // Cityscape Photography
  { id: 19, title: 'Urban Skyline', category: 'Cityscape', image: '/images/portfolio/portfolio-4.webp', description: 'Impressive urban skyline showcasing architectural beauty and city grandeur.' },
  { id: 20, title: 'City Lights', category: 'Cityscape', image: '/images/portfolio/portfolio-40.webp', description: 'Dazzling city lights creating a magical urban landscape after dark.' },
  { id: 21, title: 'Architecture Detail', category: 'Cityscape', image: '/images/portfolio/portfolio-41.webp', description: 'Intricate architectural details highlighting the artistry and design of urban structures.' },
  { id: 22, title: 'Street Scene', category: 'Cityscape', image: '/images/portfolio/portfolio-42.webp', description: 'Candid street scene capturing the energy and character of urban life.' },
  { id: 23, title: 'Night Photography', category: 'Cityscape', image: '/images/portfolio/portfolio-43.webp', description: 'Dramatic night photography revealing the city hidden beauty after dark.' },
  { id: 24, title: 'Urban Perspective', category: 'Cityscape', image: '/images/portfolio/portfolio-44.webp', description: 'Unique urban perspective showcasing the city from an unconventional viewpoint.' },

  // Macro Photography
  { id: 25, title: 'Flower Detail', category: 'Macro', image: '/images/portfolio/portfolio-5.webp', description: 'Intricate flower macro photography revealing nature delicate beauty up close.' },
  { id: 26, title: 'Nature Close-up', category: 'Macro', image: '/images/portfolio/portfolio-50.webp', description: 'Fascinating nature close-up uncovering the hidden details of the natural world.' },
  { id: 27, title: 'Insect Macro', category: 'Macro', image: '/images/portfolio/portfolio-51.webp', description: 'Detailed insect macro photography showcasing the complexity of these small creatures.' },
  { id: 28, title: 'Texture Study', category: 'Macro', image: '/images/portfolio/portfolio-52.webp', description: 'Abstract texture study exploring patterns and details in everyday objects.' },
  { id: 29, title: 'Water Droplets', category: 'Macro', image: '/images/portfolio/portfolio-53.webp', description: 'Water droplets on surfaces creating beautiful refracted light and natural optics.' },
  { id: 30, title: 'Botanical Detail', category: 'Macro', image: '/images/portfolio/portfolio-54.webp', description: 'Botanical macro photography revealing the intricate structures of plant life.' },

  // Custom Projects
  { id: 31, title: 'Editorial Fashion', category: 'Custom', image: '/images/portfolio/portfolio-6.webp', description: 'Creative editorial fashion photography combining artistic vision with commercial appeal.' },
  { id: 32, title: 'Commercial Product', category: 'Custom', image: '/images/portfolio/portfolio-60.webp', description: 'Professional commercial product photography designed to showcase products in their best light.' },
  { id: 33, title: 'Event Coverage', category: 'Custom', image: '/images/portfolio/portfolio-15.webp', description: 'Comprehensive event coverage capturing the atmosphere and key moments of special occasions.' },
  { id: 34, title: 'Brand Photography', category: 'Custom', image: '/images/portfolio/portfolio-16.webp', description: 'Brand photography tailored to showcase company values and visual identity.' },
  { id: 35, title: 'Documentary Project', category: 'Custom', image: '/images/portfolio/portfolio-17.webp', description: 'Documentary photography telling compelling stories through visual narrative.' },
  { id: 36, title: 'Artistic Collaboration', category: 'Custom', image: '/images/portfolio/portfolio-18.webp', description: 'Artistic collaboration project combining multiple creative disciplines.' },
];

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState(portfolioItems[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = parseInt(params.id as string);
    const foundItem = portfolioItems.find(item => item.id === id);
    
    if (foundItem) {
      setItem(foundItem);
      setIsLoading(false);
    } else {
      router.push('/portfolio');
    }
  }, [params.id, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F2EDE3] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-merlot border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-lato text-xl text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const currentIndex = portfolioItems.findIndex(p => p.id === item.id);
  const previousItem = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null;
  const nextItem = currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null;

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-[60vh] md:h-[70vh]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          {/* Title Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-8">
            <div>
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                {item.title}
              </h1>
              <p className="font-lato text-2xl md:text-3xl text-white/90">
                {item.category}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="section bg-[#faf0e6]">
          <div className="content-wrapper">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-12 rounded-2xl shadow-strong">
                <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                  About This Image
                </h2>
                <p className="font-lato text-xl text-gray-700 leading-relaxed mb-8">
                  {item.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-black mb-3">Category</h3>
                    <p className="font-lato text-xl text-gray-600">{item.category}</p>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-black mb-3">Image ID</h3>
                    <p className="font-lato text-xl text-gray-600">#{item.id.toString().padStart(3, '0')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot">
          <div className="content-wrapper">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <Link
                href={previousItem ? `/portfolio/${previousItem.id}` : '/portfolio'}
                className={`flex items-center gap-3 font-lato text-xl ${
                  previousItem 
                    ? 'text-merlot hover:text-merlot-dark' 
                    : 'text-gray-400 cursor-not-allowed'
                } transition-colors`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </Link>
              
              <Link
                href="/portfolio"
                className="btn btn-secondary"
              >
                Back to Portfolio
              </Link>
              
              <Link
                href={nextItem ? `/portfolio/${nextItem.id}` : '/portfolio'}
                className={`flex items-center gap-3 font-lato text-xl ${
                  nextItem 
                    ? 'text-merlot hover:text-merlot-dark' 
                    : 'text-gray-400 cursor-not-allowed'
                } transition-colors`}
              >
                Next
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="content-wrapper">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-playfair text-5xl font-bold text-black mb-6">
                Interested in Similar Photography?
              </h2>
              <p className="font-lato text-xl text-gray-700 mb-8">
                Let&apos;s discuss your photography needs and create something beautiful together.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary text-xl px-12 py-5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
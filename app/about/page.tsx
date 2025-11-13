import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Heather and HCJK Collection Photography. Discover the story, philosophy, and passion behind the lens.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section with Photo */}
        <PageHero
          title="About Me"
          subtitle="Capturing life's moments with artistry and passion"
          imagePath="/big-mountain.webp"
        />

        {/* Main About Section with Merlot Box */}
        <section className="section bg-[#F2EDE3] py-32">
          <div className="container max-w-[1600px]">
            <div className="relative bg-merlot/50 backdrop-blur-sm rounded-2xl p-12 md:p-16 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-3/4 relative rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/emma-child1.webp"
                      alt="Heather - HCJK Collection Photographer"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-8 text-white">
                  <h2 className="font-playfair text-5xl md:text-6xl font-bold leading-tight">
                    Hi, I&apos;m <span className="text-beige">Heather</span>
                  </h2>
                  
                  <p className="text-2xl md:text-3xl leading-relaxed">
                    I am a photographic artist who contributes to the visual world with a unique perspective. 
                    I have the ability to blend aesthetics with emotional depth in every frame I capture, 
                    transforming memories into timeless artistic pieces.
                  </p>
                  
                  <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                    HCJK Photography captures life&apos;s most precious moments with artistry, passion, and authenticity. 
                    I specialize in creating timeless imagery that tells your unique story through professional 
                    wedding photography, portrait sessions, and fine art photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Philosophy - Punchy with Animations */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot py-32">
          <div className="container max-w-[1600px]">
            <h2 className="font-playfair text-6xl md:text-7xl font-bold text-black text-center mb-20">
              My Philosophy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Authentic Moments',
                  text: 'I believe that the most powerful photographs are those that capture genuine emotions and real moments.',
                  icon: '✨',
                  delay: '0'
                },
                {
                  title: 'Artistry in Every Frame',
                  text: 'Photography is more than just pressing a button—it\'s about understanding light, composition, and emotion.',
                  icon: '🎨',
                  delay: '100'
                },
                {
                  title: 'Meaningful Connections',
                  text: 'The best photographs come from genuine connections with my clients and understanding their unique stories.',
                  icon: '💫',
                  delay: '200'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white p-10 rounded-2xl shadow-strong hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-merlot mb-6">
                    {item.title}
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values - POWERFUL Cards */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot py-32">
          <div className="container max-w-[1600px]">
            <h2 className="font-playfair text-6xl md:text-7xl font-bold text-black text-center mb-20">
              Core Values
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Authenticity',
                  description: 'Capturing genuine emotions and real moments without artificial poses or forced expressions. Every photograph tells a true story.',
                  image: '/images/portfolio/portfolio-2.webp',
                },
                {
                  title: 'Excellence',
                  description: 'Professional quality in every frame, from technical precision to artistic composition. No detail is too small to perfect.',
                  image: '/images/portfolio/portfolio-20.webp',
                },
                {
                  title: 'Artistry',
                  description: 'Creative vision combined with technical expertise to create images that are both beautiful and meaningful.',
                  image: '/images/portfolio/portfolio-3.webp',
                },
                {
                  title: 'Connection',
                  description: 'Building relationships with clients to understand their stories and create photographs that truly reflect their essence.',
                  image: '/images/portfolio/portfolio-1.webp',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-strong hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background Image */}
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-merlot/95 via-merlot/70 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                    <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                      {value.title}
                    </h3>
                    <p className="text-xl leading-relaxed opacity-90">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Expertise */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot py-32">
          <div className="container max-w-[1400px]">
            <h2 className="font-playfair text-6xl md:text-7xl font-bold text-black text-center mb-20">
              Experience & Expertise
            </h2>
            
            <div className="bg-white p-12 md:p-16 rounded-2xl shadow-strong">
              <h3 className="font-playfair text-4xl font-bold text-merlot mb-8">
                Professional Background
              </h3>
              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                With years of experience in professional photography, I have honed my craft across multiple disciplines. 
                From intimate wedding ceremonies to large-scale events, from individual portraits to expansive landscapes, 
                my diverse portfolio reflects a deep understanding of light, composition, and storytelling.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  'Specialized training in wedding and portrait photography',
                  'Extensive experience with both digital and film photography',
                  'Expert in natural light and studio lighting techniques',
                  'Proficient in advanced post-processing and retouching',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-merlot rounded-full flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xl text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot py-32">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
              Ready to capture your story? I&apos;d love to hear about your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-merlot text-white font-lato font-semibold text-2xl px-14 py-6 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/portfolio"
                className="inline-block bg-transparent border-2 border-merlot text-merlot font-lato font-semibold text-2xl px-14 py-6 rounded-full hover:bg-merlot hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
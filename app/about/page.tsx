import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
        {/* Hero Section */}
        <section className="section bg-[#F2EDE3]">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-black mb-8">
                About <span className="text-merlot">HCJK Collection</span>
              </h1>
              <p className="text-lead text-gray-700 leading-relaxed">
                Where artistry meets authenticity in every frame
              </p>
            </div>
          </div>
        </section>

        {/* Main About Section */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
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
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-merlot/10 rounded-lg -z-10" />
              </div>

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
                  I specialize in creating timeless imagery that tells your unique story through professional 
                  wedding photography, portrait sessions, and fine art photography.
                </p>
                
                <p className="text-body text-gray-600">
                  I am recognized for my unparalleled skill in capturing natural beauty and creating captivating 
                  compositions. By creatively expressing my passion for photography and drawing viewers in with 
                  each shot, I have become a prominently mentioned name in the art world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Philosophy */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair heading-xl font-bold text-black text-center mb-16">
                My Photography Philosophy
              </h2>
              
              <div className="space-y-12">
                <div className="bg-white p-10 rounded-lg shadow-medium">
                  <h3 className="font-playfair heading-md font-bold text-merlot mb-6">
                    Capturing Authentic Moments
                  </h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    I believe that the most powerful photographs are those that capture genuine emotions and real moments. 
                    My approach is to blend into the background, allowing natural interactions to unfold while being ready 
                    to capture those fleeting, precious moments that tell your unique story. Whether it&apos;s the quiet 
                    intimacy of a wedding ceremony or the spontaneous laughter of a family portrait session, I strive to 
                    preserve the authenticity of every moment.
                  </p>
                </div>

                <div className="bg-white p-10 rounded-lg shadow-medium">
                  <h3 className="font-playfair heading-md font-bold text-merlot mb-6">
                    Artistry in Every Frame
                  </h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    Photography is more than just pressing a button—it&apos;s about understanding light, composition, 
                    and emotion. I approach each session as an artist, carefully considering every element within the frame. 
                    From the golden hour glow to the dramatic shadows of urban landscapes, I use my technical expertise and 
                    creative vision to transform ordinary scenes into extraordinary works of art that you&apos;ll treasure forever.
                  </p>
                </div>

                <div className="bg-white p-10 rounded-lg shadow-medium">
                  <h3 className="font-playfair heading-md font-bold text-merlot mb-6">
                    Building Meaningful Connections
                  </h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    The best photographs come from genuine connections. I take the time to get to know my clients, 
                    understanding their vision, their story, and what makes them unique. This personal approach allows 
                    me to create images that truly reflect who you are, capturing not just how you look, but who you are 
                    at this moment in time. Your comfort and trust are paramount to creating photographs that feel natural 
                    and authentic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair heading-xl font-bold text-black text-center mb-16">
                Core Values
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    title: 'Authenticity',
                    description: 'Capturing genuine emotions and real moments without artificial poses or forced expressions. Every photograph tells a true story.',
                    icon: '✨'
                  },
                  {
                    title: 'Excellence',
                    description: 'Professional quality in every frame, from technical precision to artistic composition. No detail is too small to perfect.',
                    icon: '⭐'
                  },
                  {
                    title: 'Artistry',
                    description: 'Creative vision combined with technical expertise to create images that are both beautiful and meaningful.',
                    icon: '🎨'
                  },
                  {
                    title: 'Connection',
                    description: 'Building relationships with clients to understand their stories and create photographs that truly reflect their essence.',
                    icon: '💫'
                  },
                ].map((value, index) => (
                  <div key={index} className="bg-white p-10 rounded-lg shadow-medium hover:shadow-strong transition-shadow">
                    <div className="text-5xl mb-6">{value.icon}</div>
                    <h3 className="font-playfair heading-md font-bold text-black mb-4">
                      {value.title}
                    </h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Credentials */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair heading-xl font-bold text-black text-center mb-16">
                Experience & Expertise
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white p-10 rounded-lg shadow-medium">
                  <h3 className="font-playfair heading-md font-bold text-merlot mb-4">
                    Professional Background
                  </h3>
                  <p className="text-body text-gray-700 leading-relaxed mb-6">
                    With years of experience in professional photography, I have honed my craft across multiple disciplines. 
                    From intimate wedding ceremonies to large-scale events, from individual portraits to expansive landscapes, 
                    my diverse portfolio reflects a deep understanding of light, composition, and storytelling.
                  </p>
                  <ul className="space-y-3 text-body text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-merlot text-2xl leading-none">•</span>
                      <span>Specialized training in wedding and portrait photography</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-merlot text-2xl leading-none">•</span>
                      <span>Extensive experience with both digital and film photography</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-merlot text-2xl leading-none">•</span>
                      <span>Expert in natural light and studio lighting techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-merlot text-2xl leading-none">•</span>
                      <span>Proficient in advanced post-processing and retouching</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-10 rounded-lg shadow-medium">
                  <h3 className="font-playfair heading-md font-bold text-merlot mb-4">
                    What Sets Me Apart
                  </h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    My unique approach combines technical excellence with artistic vision. I don&apos;t just take photographs—I 
                    create visual stories that capture the essence of each moment. My attention to detail, ability to work in 
                    any lighting condition, and skill in making clients feel comfortable and natural in front of the camera 
                    result in images that are both technically perfect and emotionally resonant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair heading-xl font-bold text-black text-center mb-16">
                What Clients Say
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    name: 'Sarah Johnson',
                    role: 'Bride, 2023',
                    text: 'The photos from our wedding are absolutely stunning. Every moment was captured with such artistry and emotion. We couldn\'t be happier!',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80'
                  },
                  {
                    name: 'Michael Chen',
                    role: 'Family Portrait Client',
                    text: 'Professional, creative, and incredibly talented. Our family portraits are works of art that we\'ll cherish forever.',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80'
                  },
                  {
                    name: 'Emily Rodriguez',
                    role: 'Senior Portrait Client',
                    text: 'The attention to detail and artistic vision is unmatched. These aren\'t just photos—they\'re memories transformed into timeless art.',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-medium text-center">
                    <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-body text-gray-700 italic mb-6 leading-relaxed">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <h4 className="font-playfair text-xl font-bold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="font-lato text-gray-600">
                      {testimonial.role}
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
                Let&apos;s Create Something Beautiful Together
              </h2>
              <p className="text-lead text-gray-700 mb-12 leading-relaxed">
                Ready to capture your story? I&apos;d love to hear about your vision and discuss how we can bring it to life.
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
                  View My Work
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
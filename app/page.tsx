import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import PortfolioTeaser from '@/components/sections/PortfolioTeaser';
import AboutTeaser from '@/components/sections/AboutTeaser';
import ServicesIcons from '@/components/sections/ServicesIcons';
import InstagramFeed from '@/components/sections/InstagramFeed';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioTeaser />
        <AboutTeaser />
        <ServicesIcons />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
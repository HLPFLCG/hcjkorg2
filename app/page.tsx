import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PortfolioTeaser from '@/components/PortfolioTeaser';
import AboutTeaser from '@/components/AboutTeaser';
import ServicesIcons from '@/components/ServicesIcons';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

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
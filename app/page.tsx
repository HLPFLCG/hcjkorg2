import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutTeaser from '@/components/AboutTeaser';
import ServicesTeaser from '@/components/ServicesTeaser';
import PortfolioTeaser from '@/components/PortfolioTeaser';
import InstagramFeed from '@/components/InstagramFeed';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutTeaser />
        <ServicesTeaser />
        <PortfolioTeaser />
        <InstagramFeed />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
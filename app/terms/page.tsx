import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for HCJK Collection Photography. Review our terms and conditions for using our services.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <PageHero
          title="Terms of Service"
          subtitle={`Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
          imagePath="/sunset1.webp"
        />

        {/* Terms Content */}
        <section className="section bg-[#F2EDE3] py-32">
          <div className="container max-w-[1200px] space-y-12">
            
            <div className="bg-white p-12 rounded-2xl shadow-strong">
              <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                Agreement to Terms
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                By accessing or using the services of HCJK Collection (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not 
                use our services or access our website.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-strong">
              <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                Photography Services
              </h2>
              <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                Booking and Deposits
              </h3>
              <ul className="space-y-4 text-xl text-gray-700">
                {[
                  'A signed contract and deposit are required to secure your booking',
                  'Deposits are non-refundable but may be transferred to a new date',
                  'Full payment is due before or on the day of the session',
                  'Dates are not reserved until deposit and contract are received',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-merlot flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-strong">
              <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                Copyright & Usage Rights
              </h2>
              <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                Copyright Ownership
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                HCJK Collection retains full copyright ownership of all photographs created. This includes the right 
                to use images for portfolio, marketing, competitions, and promotional purposes unless otherwise agreed 
                in writing.
              </p>

              <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                Client Usage Rights
              </h3>
              <ul className="space-y-4 text-xl text-gray-700">
                {[
                  'Clients receive a personal use license for their images',
                  'Images may be shared on social media with photographer credit',
                  'Print release is included for personal printing',
                  'Commercial use requires separate licensing agreement',
                  'Images may not be altered without permission',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-merlot text-2xl leading-none mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-strong">
              <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                Image Delivery & Timeline
              </h2>
              <ul className="space-y-4 text-xl text-gray-700">
                {[
                  'Portrait sessions: 2-3 weeks for edited images',
                  'Wedding photography: 4-6 weeks for complete gallery',
                  'Sneak peeks may be provided within 48-72 hours',
                  'Images are delivered via online gallery with download access',
                  'Galleries remain active for 90 days; extended access available',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-merlot flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-strong">
              <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                Cancellation & Rescheduling
              </h2>
              <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                Client Cancellations
              </h3>
              <ul className="space-y-4 text-xl text-gray-700 mb-6">
                {[
                  'Portrait sessions: 2 weeks notice required for full deposit transfer',
                  'Less than 2 weeks notice: 50% deposit forfeiture',
                  'Less than 48 hours notice: full deposit forfeiture',
                  'Wedding cancellations are handled per individual contract terms',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-merlot text-2xl leading-none mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-strong">
              <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="space-y-4">
                <p className="text-xl">
                  <span className="font-semibold text-black">Email:</span>{' '}
                  <a href="mailto:contact@hcjk.org" className="text-merlot hover:text-merlot-dark font-semibold">
                    contact@hcjk.org
                  </a>
                </p>
                <p className="text-xl">
                  <span className="font-semibold text-black">Phone:</span>{' '}
                  <a href="tel:+6163133484" className="text-merlot hover:text-merlot-dark font-semibold">
                    +1 (616) 313-3484
                  </a>
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
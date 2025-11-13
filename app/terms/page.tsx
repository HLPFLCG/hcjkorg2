import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
        <section className="section bg-[#F2EDE3]">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-black mb-8">
                Terms of <span className="text-merlot">Service</span>
              </h1>
              <p className="text-lead text-gray-700 leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Agreement to Terms
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  By accessing or using the services of HCJK Collection (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
                  you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not 
                  use our services or access our website.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Photography Services
                </h2>
                <h3 className="font-playfair heading-sm font-bold text-merlot mb-4">
                  Booking and Deposits
                </h3>
                <ul className="space-y-3 text-body text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>A signed contract and deposit are required to secure your booking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Deposits are non-refundable but may be transferred to a new date subject to availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Full payment is due before or on the day of the session unless otherwise agreed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Dates are not reserved until deposit and contract are received</span>
                  </li>
                </ul>

                <h3 className="font-playfair heading-sm font-bold text-merlot mb-4">
                  Session Details
                </h3>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Session times and locations will be agreed upon in advance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>We reserve the right to reschedule due to severe weather or unforeseen circumstances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Clients are responsible for obtaining necessary permits for location shoots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Late arrivals may result in shortened session time</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Copyright and Usage Rights
                </h2>
                <h3 className="font-playfair heading-sm font-bold text-merlot mb-4">
                  Copyright Ownership
                </h3>
                <p className="text-body text-gray-700 leading-relaxed mb-6">
                  HCJK Collection retains full copyright ownership of all photographs created. This includes the right 
                  to use images for portfolio, marketing, competitions, and promotional purposes unless otherwise agreed 
                  in writing.
                </p>

                <h3 className="font-playfair heading-sm font-bold text-merlot mb-4">
                  Client Usage Rights
                </h3>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Clients receive a personal use license for their images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Images may be shared on social media with photographer credit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Print release is included for personal printing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Commercial use requires separate licensing agreement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Images may not be altered, edited, or manipulated without permission</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Image Delivery and Timeline
                </h2>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Portrait sessions: 2-3 weeks for edited images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Wedding photography: 4-6 weeks for complete gallery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Sneak peeks may be provided within 48-72 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Images are delivered via online gallery with download access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Galleries remain active for 90 days; extended access available upon request</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Cancellation and Rescheduling
                </h2>
                <h3 className="font-playfair heading-sm font-bold text-merlot mb-4">
                  Client Cancellations
                </h3>
                <ul className="space-y-3 text-body text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Portrait sessions: 2 weeks notice required for full deposit transfer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Less than 2 weeks notice: 50% deposit forfeiture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Less than 48 hours notice: full deposit forfeiture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Wedding cancellations are handled per individual contract terms</span>
                  </li>
                </ul>

                <h3 className="font-playfair heading-sm font-bold text-merlot mb-4">
                  Photographer Cancellations
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  In the unlikely event that we must cancel, you will receive a full refund or the option to reschedule. 
                  We are not liable for any additional expenses incurred.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Model Release
                </h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  By booking our services, you grant HCJK Collection permission to use photographs for:
                </p>
                <ul className="space-y-3 text-body text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Portfolio display on website and social media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Marketing and promotional materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Photography competitions and publications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Educational purposes and workshops</span>
                  </li>
                </ul>
                <p className="text-body text-gray-700 leading-relaxed">
                  If you prefer certain images not be used publicly, please notify us in writing.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Liability and Indemnification
                </h2>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>We carry professional liability insurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>We are not responsible for lost or damaged images due to technical failures beyond our control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Clients are responsible for backing up their downloaded images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Our liability is limited to the amount paid for services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Clients agree to indemnify us against claims arising from their use of images</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Force Majeure
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  We are not liable for failure to perform services due to circumstances beyond our control, including 
                  but not limited to: natural disasters, illness, equipment failure, or other unforeseen events. In such 
                  cases, we will work with you to reschedule or provide a refund.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Dispute Resolution
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  Any disputes arising from these terms will be resolved through good faith negotiation. If resolution 
                  cannot be reached, disputes will be handled through binding arbitration in accordance with applicable 
                  state laws.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Changes to Terms
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with an 
                  updated revision date. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Contact Information
                </h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact:
                </p>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Email: <a href="mailto:contact@hcjk.org" className="text-merlot hover:text-merlot-dark font-semibold">contact@hcjk.org</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Phone: <a href="tel:+6163133484" className="text-merlot hover:text-merlot-dark font-semibold">+1 (616) 313-3484</a></span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
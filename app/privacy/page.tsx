import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for HCJK Collection Photography. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <PageHero
          title="Privacy Policy"
          subtitle={`Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
          imagePath="/panoramic-river-mountains-wow-this-is-gorgeous.webp"
        />

        {/* Privacy Policy Content */}
        <section className="section bg-[#F2EDE3] py-32">
          <div className="container max-w-[1200px] space-y-12">
            
            <div className="bg-white p-12 rounded-2xl shadow-strong">
              <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                Introduction
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                HCJK Collection (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website hcjk.org or use our photography services.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site or use our services.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-strong">
              <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                Information We Collect
              </h2>
              <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                Personal Information
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-3 text-xl text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-merlot text-2xl leading-none mt-1">•</span>
                  <span>Contact us through our website forms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-merlot text-2xl leading-none mt-1">•</span>
                  <span>Book a photography session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-merlot text-2xl leading-none mt-1">•</span>
                  <span>Subscribe to our newsletter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-merlot text-2xl leading-none mt-1">•</span>
                  <span>Interact with us on social media</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-strong">
              <h2 className="font-playfair text-4xl font-bold text-merlot mb-6">
                How We Use Your Information
              </h2>
              <ul className="space-y-4 text-xl text-gray-700">
                {[
                  'Provide, operate, and maintain our photography services',
                  'Communicate with you about bookings and inquiries',
                  'Send you marketing communications (with your consent)',
                  'Improve our website and services',
                  'Respond to your inquiries and provide customer support',
                  'Process payments and fulfill contracts',
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
                Photography and Image Rights
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                As a photography business, we want to be transparent about how we handle images:
              </p>
              <ul className="space-y-4 text-xl text-gray-700">
                {[
                  'We retain copyright to all photographs we create',
                  'Clients receive a license to use their images for personal purposes',
                  'We may use images for portfolio and marketing unless you opt out',
                  'You can request that specific images not be used publicly',
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
                Your Rights
              </h2>
              <ul className="space-y-4 text-xl text-gray-700">
                {[
                  'Access the personal information we hold about you',
                  'Request correction of inaccurate information',
                  'Request deletion of your personal information',
                  'Opt out of marketing communications',
                  'Request that we not use your images for promotional purposes',
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
                Contact Us
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                If you have questions or concerns about this privacy policy, please contact us:
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
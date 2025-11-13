import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
        <section className="section bg-[#F2EDE3]">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-black mb-8">
                Privacy <span className="text-merlot">Policy</span>
              </h1>
              <p className="text-lead text-gray-700 leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Introduction
                </h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  HCJK Collection (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website hcjk.org or use our photography services.
                </p>
                <p className="text-body text-gray-700 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                  please do not access the site or use our services.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Information We Collect
                </h2>
                <h3 className="font-playfair heading-sm font-bold text-merlot mb-4">
                  Personal Information
                </h3>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="space-y-3 text-body text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Contact us through our website forms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Book a photography session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Subscribe to our newsletter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Interact with us on social media</span>
                  </li>
                </ul>
                <p className="text-body text-gray-700 leading-relaxed">
                  This information may include your name, email address, phone number, mailing address, and any other 
                  information you choose to provide.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  How We Use Your Information
                </h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Provide, operate, and maintain our photography services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Communicate with you about bookings, inquiries, and service updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Send you marketing communications (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Improve our website and services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Respond to your inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Process payments and fulfill contracts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Photography and Image Rights
                </h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  As a photography business, we want to be transparent about how we handle images:
                </p>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>We retain copyright to all photographs we create</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Clients receive a license to use their images for personal purposes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>We may use images for portfolio, marketing, and promotional purposes unless you opt out</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>You can request that specific images not be used publicly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Data Security
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information. However, no electronic transmission over the internet or information storage technology 
                  can be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot 
                  guarantee its absolute security.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Third-Party Services
                </h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  We may use third-party services to help us operate our business, such as:
                </p>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Website hosting and analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Email marketing platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Payment processing services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Social media platforms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Your Rights
                </h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Access the personal information we hold about you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Request correction of inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Opt out of marketing communications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-merlot text-xl leading-none mt-1">•</span>
                    <span>Request that we not use your images for promotional purposes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Children&apos;s Privacy
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  Our services are not directed to children under 13. We do not knowingly collect personal information 
                  from children under 13. If you are a parent or guardian and believe your child has provided us with 
                  personal information, please contact us.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting 
                  the new privacy policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-medium">
                <h2 className="font-playfair heading-lg font-bold text-black mb-6">
                  Contact Us
                </h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  If you have questions or concerns about this privacy policy, please contact us:
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
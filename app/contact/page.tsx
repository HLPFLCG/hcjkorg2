'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { useState } from 'react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'For weddings, I recommend booking 6-12 months in advance. For portrait sessions and other services, 2-4 weeks notice is typically sufficient, though I can sometimes accommodate shorter timelines.'
    },
    {
      question: 'Do you travel for photography sessions?',
      answer: 'Yes! I love traveling for photography sessions and destination weddings. Travel fees may apply depending on the location. Contact me to discuss your specific needs.'
    },
    {
      question: 'How long until I receive my photos?',
      answer: 'For portrait sessions, you can expect your edited images within 2-3 weeks. Wedding photography typically takes 4-6 weeks due to the larger number of images and detailed editing process.'
    },
    {
      question: 'Can I request specific shots or styles?',
      answer: 'Absolutely! I encourage clients to share their vision, inspiration photos, and must-have shots. This helps me understand your preferences and ensure we capture everything important to you.'
    },
    {
      question: 'What happens if the weather is bad?',
      answer: 'For outdoor sessions, we can reschedule if weather conditions are unfavorable. For weddings, I come prepared with backup plans and equipment to work in any weather conditions.'
    },
    {
      question: 'Do you offer prints and albums?',
      answer: 'Yes! I offer professional printing services, custom albums, and wall art. All digital packages include print release, so you can also print images on your own if you prefer.'
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <PageHero
          title="Get in Touch"
          subtitle="Let's create something beautiful together"
          imagePath="/clay-roof-house-panoramic.webp"
        />

        {/* Business Info Cards */}
        <section className="section bg-[#F2EDE3] py-20">
          <div className="container max-w-[1400px]">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Email Card */}
              <a
                href="mailto:contact@hcjk.org"
                className="group bg-white p-10 rounded-2xl shadow-strong hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-20 h-20 bg-merlot rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-black mb-3">Email</h3>
                <p className="text-xl text-merlot font-semibold">contact@hcjk.org</p>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+6163133484"
                className="group bg-white p-10 rounded-2xl shadow-strong hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-20 h-20 bg-merlot rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-black mb-3">Phone</h3>
                <p className="text-xl text-merlot font-semibold">+1 (616) 313-3484</p>
              </a>

              {/* Social Card */}
              <a
                href="https://www.instagram.com/hcjk_collection"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-10 rounded-2xl shadow-strong hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-20 h-20 bg-merlot rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-black mb-3">Instagram</h3>
                <p className="text-xl text-merlot font-semibold">@hcjk_collection</p>
              </a>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white p-12 rounded-2xl shadow-strong max-w-3xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-black text-center mb-8">
                Business Hours
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="font-lato font-bold text-xl text-black mb-2">Monday - Friday</p>
                  <p className="text-lg text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center">
                  <p className="font-lato font-bold text-xl text-black mb-2">Saturday - Sunday</p>
                  <p className="text-lg text-gray-600">By Appointment</p>
                </div>
              </div>
              <p className="text-center text-lg text-gray-600 mt-6 italic">
                Evening and weekend sessions available by request
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot py-32">
          <div className="container max-w-[1000px]">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-6">
                Send Me a Message
              </h2>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Fill out the form below and I'll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white p-12 md:p-16 rounded-2xl shadow-strong">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot py-32">
          <div className="container max-w-[1000px]">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black text-center mb-16">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-medium overflow-hidden transition-all duration-300 hover:shadow-strong"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-8 text-left flex items-center justify-between gap-4 group"
                  >
                    <h3 className="font-playfair text-2xl font-bold text-black group-hover:text-merlot transition-colors">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-8 h-8 text-merlot flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-8">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
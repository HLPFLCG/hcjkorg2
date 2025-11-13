import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with HCJK Collection Photography. Book a session, ask questions, or discuss your photography needs.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="section bg-[#F2EDE3]">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-black mb-8">
                Get in <span className="text-merlot">Touch</span>
              </h1>
              <p className="text-lead text-gray-700 leading-relaxed">
                Let&apos;s discuss your photography needs and bring your vision to life
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              {[
                {
                  icon: '📧',
                  title: 'Email',
                  content: 'contact@hcjk.org',
                  link: 'mailto:contact@hcjk.org'
                },
                {
                  icon: '📱',
                  title: 'Phone',
                  content: '+1 (616) 313-3484',
                  link: 'tel:+6163133484'
                },
                {
                  icon: '📍',
                  title: 'Social Media',
                  content: '@hcjk_collection',
                  link: 'https://www.instagram.com/hcjk_collection'
                },
              ].map((info, index) => (
                <div key={index} className="bg-white p-10 rounded-lg shadow-medium text-center hover:shadow-strong transition-shadow">
                  <div className="text-5xl mb-6">{info.icon}</div>
                  <h3 className="font-playfair heading-sm font-bold text-black mb-4">
                    {info.title}
                  </h3>
                  <a 
                    href={info.link}
                    className="text-body text-merlot hover:text-merlot-dark transition-colors font-semibold"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.content}
                  </a>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-medium mb-20">
              <h2 className="font-playfair heading-md font-bold text-black text-center mb-8">
                Business Hours
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="font-lato font-semibold text-lg text-black mb-2">Monday - Friday</p>
                  <p className="text-body text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center">
                  <p className="font-lato font-semibold text-lg text-black mb-2">Saturday - Sunday</p>
                  <p className="text-body text-gray-600">By Appointment</p>
                </div>
              </div>
              <p className="text-center text-body text-gray-600 mt-6 italic">
                Evening and weekend sessions available by request
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <Contact />

        {/* FAQ Section */}
        <section className="section bg-[#F2EDE3] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair heading-xl font-bold text-black text-center mb-16">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: 'How do I book a photography session?',
                    answer: 'Simply fill out the contact form above or send me an email. I\'ll respond within 24-48 hours to discuss your needs, availability, and next steps.'
                  },
                  {
                    question: 'What should I expect during a consultation?',
                    answer: 'During our consultation, we\'ll discuss your vision, preferences, timeline, and any specific requirements. This is a great opportunity to ask questions and ensure we\'re a good fit for your project.'
                  },
                  {
                    question: 'Do you require a deposit?',
                    answer: 'Yes, a deposit is required to secure your date. The amount varies depending on the type of session. Full payment details will be provided in your contract.'
                  },
                  {
                    question: 'What is your cancellation policy?',
                    answer: 'Cancellation policies vary by service type and are outlined in your contract. Generally, I require at least 2 weeks notice for rescheduling portrait sessions. Wedding cancellations are handled on a case-by-case basis.'
                  },
                  {
                    question: 'Can I purchase prints directly from you?',
                    answer: 'Yes! I offer professional printing services including prints, canvases, and custom albums. All digital packages also include print release so you can print on your own if you prefer.'
                  },
                  {
                    question: 'Do you offer gift certificates?',
                    answer: 'Yes, gift certificates are available for any photography service. They make wonderful gifts for weddings, graduations, anniversaries, and other special occasions. Contact me for details.'
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-medium">
                    <h3 className="font-playfair heading-sm font-bold text-black mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional CTA */}
        <section className="section bg-[#faf0e6] border-t-4 border-merlot">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair heading-xl font-bold text-black mb-8">
                Still Have Questions?
              </h2>
              <p className="text-lead text-gray-700 mb-12 leading-relaxed">
                I&apos;m here to help! Don&apos;t hesitate to reach out with any questions about my services, 
                availability, or anything else photography-related.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:contact@hcjk.org"
                  className="inline-block bg-merlot text-white font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Send an Email
                </a>
                <a
                  href="tel:+6163133484"
                  className="inline-block bg-transparent border-2 border-merlot text-merlot font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
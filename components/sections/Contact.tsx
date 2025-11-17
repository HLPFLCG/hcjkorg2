'use client';

import ContactForm from '../forms/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="section bg-[#F2EDE3] border-t-4 border-merlot">
      <div className="container-content">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair heading-xl font-bold text-black mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lead text-gray-600 max-w-3xl mx-auto text-section">
            Let&apos;s discuss your photography needs and bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#faf0e6] rounded-lg shadow-medium p-12">
            <h3 className="font-playfair heading-md font-bold text-black mb-8">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="font-playfair heading-md font-bold text-black mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-lato font-semibold text-black text-lg mb-2">Email</h4>
                  <a 
                    href="mailto:contact@hcjk.org" 
                    className="text-merlot hover:text-merlot-dark transition-colors text-lg"
                  >
                    contact@hcjk.org
                  </a>
                </div>

                <div>
                  <h4 className="font-lato font-semibold text-black text-lg mb-2">Phone</h4>
                  <a 
                    href="tel:+16163133484" 
                    className="text-merlot hover:text-merlot-dark transition-colors text-lg"
                  >
                    +1 (616) 313-3484
                  </a>
                </div>

                <div>
                  <h4 className="font-lato font-semibold text-black text-lg mb-2">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/hcjk_collection" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-merlot hover:text-merlot-dark transition-colors text-lg"
                  >
                    @hcjk_collection
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#faf0e6] rounded-lg shadow-medium p-10">
              <h4 className="font-playfair text-2xl font-bold text-black mb-4">
                Business Hours
              </h4>
              <div className="space-y-3 text-gray-700 text-lg">
                <p><strong>Monday - Friday:</strong> 7:00 AM - 9:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="bg-[#faf0e6] rounded-lg shadow-medium p-10">
              <h4 className="font-playfair text-2xl font-bold text-black mb-4">
                Response Time
              </h4>
              <p className="text-gray-700 text-lg text-section">
                We typically respond to inquiries within 24-48 hours. For urgent requests, 
                please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
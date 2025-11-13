'use client';

import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblqjywk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="section bg-[#F2EDE3] border-t-4 border-merlot">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair heading-xl font-bold text-black mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lead text-gray-600 max-w-3xl mx-auto">
            Let&apos;s discuss your photography needs and bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#faf0e6] rounded-lg shadow-medium p-10">
            <h3 className="font-playfair heading-md font-bold text-black mb-8">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-lato font-semibold text-black mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-merlot focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-lato font-semibold text-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-merlot focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-lato font-semibold text-black mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-merlot focus:outline-none transition-colors"
                  placeholder="(616) 313-3484"
                />
              </div>

              <div>
                <label htmlFor="service" className="block font-lato font-semibold text-black mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-merlot focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Photography</option>
                  <option value="landscape">Landscape & Nature</option>
                  <option value="event">Event Photography</option>
                  <option value="fine-art">Fine Art Photography</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-lato font-semibold text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-merlot focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
                  Oops! Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
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

            <div className="bg-[#faf0e6] rounded-lg shadow-medium p-8">
              <h4 className="font-playfair text-2xl font-bold text-black mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>Monday - Friday:</strong> 7:00 AM - 9:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="bg-[#faf0e6] rounded-lg shadow-medium p-8">
              <h4 className="font-playfair text-2xl font-bold text-black mb-4">
                Response Time
              </h4>
              <p className="text-gray-700">
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
'use client';

import { useState } from 'react';

export default function ContactForm() {
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
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="block font-lato font-semibold text-black mb-3 text-lg">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-6 py-4 bg-[#faf0e6] border-2 border-[#e8e6dc] rounded-lg focus:border-merlot focus:outline-none transition-all font-lato text-lg form-input"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-lato font-semibold text-black mb-3 text-lg">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-6 py-4 bg-[#faf0e6] border-2 border-[#e8e6dc] rounded-lg focus:border-merlot focus:outline-none transition-all font-lato text-lg form-input"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-lato font-semibold text-black mb-3 text-lg">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-6 py-4 bg-[#faf0e6] border-2 border-[#e8e6dc] rounded-lg focus:border-merlot focus:outline-none transition-all font-lato text-lg form-input"
          placeholder="(616) 313-3484"
        />
      </div>

      <div>
        <label htmlFor="service" className="block font-lato font-semibold text-black mb-3 text-lg">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-6 py-4 bg-[#faf0e6] border-2 border-[#e8e6dc] rounded-lg focus:border-merlot focus:outline-none transition-all font-lato text-lg form-input"
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
        <label htmlFor="message" className="block font-lato font-semibold text-black mb-3 text-lg">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-6 py-4 bg-[#faf0e6] border-2 border-[#e8e6dc] rounded-lg focus:border-merlot focus:outline-none transition-all font-lato text-lg form-input resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={formStatus === 'submitting'}
        className="w-full bg-merlot text-white font-playfair text-xl py-5 rounded-lg hover:bg-merlot-dark transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {formStatus === 'success' && (
        <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg">
          <p className="font-lato text-lg">Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {formStatus === 'error' && (
        <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-lg">
          <p className="font-lato text-lg">Oops! Something went wrong. Please try again or email us directly.</p>
        </div>
      )}
    </form>
  );
}
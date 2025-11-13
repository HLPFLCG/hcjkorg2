'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-lato font-semibold text-lg text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-merlot focus:ring-2 focus:ring-merlot/20 transition-all outline-none"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-lato font-semibold text-lg text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-merlot focus:ring-2 focus:ring-merlot/20 transition-all outline-none"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-lato font-semibold text-lg text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-merlot focus:ring-2 focus:ring-merlot/20 transition-all outline-none"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block font-lato font-semibold text-lg text-gray-700 mb-2">
            Service Interested In *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-merlot focus:ring-2 focus:ring-merlot/20 transition-all outline-none"
          >
            <option value="">Select a service</option>
            <option value="wedding">Wedding Photography</option>
            <option value="portrait">Portrait Photography</option>
            <option value="landscape">Landscape & Nature</option>
            <option value="cityscape">Cityscape Photography</option>
            <option value="macro">Macro Photography</option>
            <option value="custom">Custom Project</option>
          </select>
        </div>
      </div>

      {/* Preferred Date */}
      <div>
        <label htmlFor="date" className="block font-lato font-semibold text-lg text-gray-700 mb-2">
          Preferred Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-merlot focus:ring-2 focus:ring-merlot/20 transition-all outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-lato font-semibold text-lg text-gray-700 mb-2">
          Tell Me About Your Vision *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-merlot focus:ring-2 focus:ring-merlot/20 transition-all outline-none resize-none"
          placeholder="Tell me about your photography needs, vision, and any specific requirements..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-merlot text-white font-lato font-semibold text-xl py-5 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
      >
        Send Message
      </button>
    </form>
  );
}
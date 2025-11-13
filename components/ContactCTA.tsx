'use client';

import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="section bg-[#F2EDE3] border-t-4 border-merlot">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair heading-xl font-bold text-black mb-8">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lead text-gray-700 mb-12 leading-relaxed">
            Let&apos;s discuss your photography needs and bring your vision to life. 
            Whether it&apos;s a wedding, portrait session, or custom project, I&apos;m here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-merlot text-white font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot-dark transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="inline-block bg-transparent border-2 border-merlot text-merlot font-lato font-semibold text-xl px-12 py-5 rounded-full hover:bg-merlot hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
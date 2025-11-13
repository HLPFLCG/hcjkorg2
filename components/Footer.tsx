'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F2EDE3] border-t-4 border-merlot">
      {/* Main Footer Content - 4 Quadrants */}
      <div className="container py-16 max-w-[1800px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Quadrant 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo/hcjkstackednewsvg.svg"
              alt="HCJK Collection Logo"
              width={160}
              height={160}
              className="mb-4"
            />
            <h3 className="font-playfair text-2xl font-bold text-black text-center md:text-left mb-6">
              HCJK Collection
            </h3>
            
            {/* Social Media - Mobile Centered */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/hcjk_collection"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-merlot flex items-center justify-center hover:bg-merlot-dark transition-all transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/hcjk_collection"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-merlot flex items-center justify-center hover:bg-merlot-dark transition-all transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.pinterest.com/hcjk_collection"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-merlot flex items-center justify-center hover:bg-merlot-dark transition-all transform hover:-translate-y-1"
                aria-label="Pinterest"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quadrant 2: Services */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-merlot inline-block">
              Services
            </h3>
            <ul className="font-lato space-y-3 text-lg mt-6">
              {[
                'Wedding Photography',
                'Portrait Photography',
                'Landscape Photography',
                'Cityscape Photography',
                'Macro Photography',
                'Custom Projects',
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-700 hover:text-merlot transition-colors inline-block">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quadrant 3: Website Links */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-merlot inline-block">
              Navigate
            </h3>
            <ul className="font-lato space-y-3 text-lg mt-6">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-700 hover:text-merlot transition-colors inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quadrant 4: Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-merlot inline-block">
              Contact
            </h3>
            <ul className="font-lato space-y-4 text-lg mt-6">
              <li>
                <a
                  href="mailto:contact@hcjk.org"
                  className="flex items-center gap-3 text-gray-700 hover:text-merlot transition-colors group justify-center md:justify-start"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">contact@hcjk.org</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+6163133484"
                  className="flex items-center gap-3 text-gray-700 hover:text-merlot transition-colors group justify-center md:justify-start"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (616) 313-3484</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hcjk_collection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-merlot transition-colors group justify-center md:justify-start"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="break-all">@hcjk_collection</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-2 border-merlot/30 bg-[#e8e6dc] py-6">
        <div className="container max-w-[1800px]">
          <p className="font-lato text-base text-gray-600 text-center">
            &copy; {currentYear} HCJK Collection. All rights reserved. | Designed with ❤️ by HLPFL
          </p>
        </div>
      </div>
    </footer>
  );
}
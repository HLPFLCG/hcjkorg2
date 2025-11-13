'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-beige">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
            Ready to Create Something Beautiful?
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            Let&apos;s discuss your photography needs and bring your vision to life
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="mailto:contact@hcjk.org"
            className="inline-block px-8 py-4 bg-merlot text-white font-semibold rounded hover:bg-merlot-dark transform hover:-translate-y-1 transition-all duration-300 shadow-lg text-center"
          >
            Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="inline-block px-8 py-4 bg-transparent border-2 border-merlot text-merlot font-semibold rounded hover:bg-merlot hover:text-white transition-all duration-300 shadow-lg text-center"
          >
            Call Now
          </a>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h3 className="font-playfair text-2xl font-bold text-black mb-6">
            Get in Touch
          </h3>
          
          <div className="space-y-3 font-lato text-gray-700">
            <p>
              <strong className="text-black">Email:</strong>{' '}
              <a href="mailto:contact@hcjk.org" className="text-merlot hover:underline">
                contact@hcjk.org
              </a>
            </p>
            <p>
              <strong className="text-black">Phone:</strong>{' '}
              <a href="tel:+1234567890" className="text-merlot hover:underline">
                +1 (234) 567-8900
              </a>
            </p>
            <p>
              <strong className="text-black">Instagram:</strong>{' '}
              <a
                href="https://www.instagram.com/hcjkcollection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-merlot hover:underline"
              >
                @hcjkcollection
              </a>
            </p>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-black mb-2">
              Follow on Instagram
            </h3>
            <a
              href="https://www.instagram.com/hcjkcollection"
              target="_blank"
              rel="noopener noreferrer"
              className="font-lato text-lg text-merlot hover:underline font-semibold"
            >
              @hcjkcollection
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=80',
              'https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=400&q=80',
              'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80',
              'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80',
              'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80',
            ].map((image, index) => (
              <a
                key={index}
                href="https://www.instagram.com/hcjkcollection"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden rounded group"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
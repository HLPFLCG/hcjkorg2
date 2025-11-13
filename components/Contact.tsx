'use client';

export default function Contact() {
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

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <a
            href="mailto:contact@hcjk.org"
            className="btn btn-primary text-lg shadow-medium"
          >
            Email Us
          </a>
          <a
            href="tel:+16163133438"
            className="btn btn-secondary text-lg shadow-medium"
          >
            Call Now
          </a>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-24">
          <h3 className="font-playfair heading-md font-bold text-black mb-8">
            Get in Touch
          </h3>
          
          <div className="space-y-5 text-body">
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <strong className="text-black text-lg">Email:</strong>
              <a href="mailto:contact@hcjk.org" className="text-merlot hover:text-merlot-dark transition-colors">
                contact@hcjk.org
              </a>
            </p>
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <strong className="text-black text-lg">Phone:</strong>
              <a href="tel:+16163133484" className="text-merlot hover:text-merlot-dark transition-colors">
                +1 (616) 313-3484
              </a>
            </p>
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <strong className="text-black text-lg">Instagram:</strong>
              <a
                href="https://www.instagram.com/hcjk_collection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-merlot hover:text-merlot-dark transition-colors"
              >
                @hcjkcollection
              </a>
            </p>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="font-playfair heading-lg font-bold text-black mb-4">
              Follow on Instagram
            </h3>
            <a
              href="https://www.instagram.com/hcjk_collection"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lead text-merlot hover:text-merlot-dark transition-colors font-semibold"
            >
              @hcjkcollection
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              '/images/portfolio/portfolio-7.webp',
              '/images/portfolio/portfolio-14.webp',
              '/images/portfolio/portfolio-21.webp',
              '/images/portfolio/portfolio-28.webp',
              '/images/portfolio/portfolio-35.webp',
              '/images/portfolio/portfolio-42.webp',
            ].map((image, index) => (
              <a
                key={index}
                href="https://www.instagram.com/hcjk_collection"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden rounded-lg group shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
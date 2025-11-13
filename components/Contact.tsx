'use client';

export default function Contact() {
  return (
    <section id="contact" className="section bg-beige">
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
            href="tel:+1234567890"
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
              <a href="tel:+1234567890" className="text-merlot hover:text-merlot-dark transition-colors">
                +1 (234) 567-8900
              </a>
            </p>
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <strong className="text-black text-lg">Instagram:</strong>
              <a
                href="https://www.instagram.com/hcjkcollection"
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
              href="https://www.instagram.com/hcjkcollection"
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
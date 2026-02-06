import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div>
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <p className="text-xs tracking-super-wide uppercase text-stone mb-6">
          Get in Touch
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal">
          Contact
        </h1>
      </section>

      {/* Form */}
      <section className="pb-20 px-6">
        <div className="max-w-md mx-auto">
          <p className="text-base leading-relaxed text-stone mb-8 text-center">
            For inquiries about readings, collaborations, or just to say hello.
          </p>

          <ContactForm />

          {/* Links */}
          <div className="mt-16 pt-12 border-t border-gray-100 text-center">
            <p className="text-xs tracking-super-wide uppercase text-stone mb-4">
              Find me online
            </p>
            <a
              href="https://www.instagram.com/hcjk_collection/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone hover:text-charcoal transition-colors"
            >
              @hcjk_collection
            </a>
            <div className="mt-4">
              <a
                href="mailto:heather@hcjk.org"
                className="text-sm text-stone hover:text-charcoal transition-colors"
              >
                heather@hcjk.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

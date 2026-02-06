"use client"

import { useForm, ValidationError } from '@formspree/react'

export function ContactForm() {
  const [state, handleSubmit] = useForm("xblqjywk")

  if (state.succeeded) {
    return (
      <div className="py-12 text-center">
        <p className="font-serif text-2xl font-light text-charcoal mb-2">
          Thank you.
        </p>
        <p className="text-sm text-stone">
          Your message has been sent.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs tracking-super-wide uppercase text-stone mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-transparent border-b border-gray-200 px-0 py-2 text-charcoal text-sm focus:border-charcoal focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs tracking-super-wide uppercase text-stone mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-transparent border-b border-gray-200 px-0 py-2 text-charcoal text-sm focus:border-charcoal focus:outline-none transition-colors"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-super-wide uppercase text-stone mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border-b border-gray-200 px-0 py-2 text-charcoal text-sm focus:border-charcoal focus:outline-none transition-colors resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={state.submitting}
          className={`w-full py-3 text-xs tracking-super-wide uppercase border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors ${state.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {state.submitting ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  )
}

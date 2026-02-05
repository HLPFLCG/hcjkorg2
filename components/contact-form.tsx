"use client"

import { useForm, ValidationError } from '@formspree/react'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [state, handleSubmit] = useForm("xblqjywk")

  if (state.succeeded) {
    return (
      <div className="py-12 text-center">
        <p className="font-serif text-2xl font-light text-foreground mb-2">
          Thank you.
        </p>
        <p className="text-sm text-muted-foreground">
          Your message has been sent. I&apos;ll be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      <div>
        <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-transparent border-b border-border px-0 py-2 text-foreground text-sm focus:border-accent focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-transparent border-b border-border px-0 py-2 text-foreground text-sm focus:border-accent focus:outline-none transition-colors"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border-b border-border px-0 py-2 text-foreground text-sm focus:border-accent focus:outline-none transition-colors resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={state.submitting}
          className={cn(
            'w-full py-3 text-xs tracking-widest-xl uppercase border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors',
            state.submitting && 'opacity-50 cursor-not-allowed'
          )}
        >
          {state.submitting ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  )
}

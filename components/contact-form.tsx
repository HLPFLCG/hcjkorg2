"use client"

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { ContactFormData } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [state, handleSubmit] = useForm("xblqjywk") // HCJK Collection Formspree endpoint
  const [success, setSuccess] = useState(false)

  const handleSuccess = () => {
    setSuccess(true)
  }

  if (state.succeeded) {
    return (
      <div className="rounded-md bg-merlot/10 border border-merlot/20 p-6 text-sm text-merlot dark:bg-merlot/20 dark:border-merlot/30">
        <div className="flex items-center gap-3"><div className="w-2 h-2 bg-merlot rounded-full"></div><p className="font-medium">Thank you for your message!</p></div><p className="mt-2 text-merlot/80">We'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 text-sm text-red-700 dark:text-red-300">
          {Object.entries(state.errors).map(([field, error]) => (
            <p key={field}>{error}</p>
          ))}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 shadow-sm focus:border-[1px] focus:border-merlot focus:outline-none focus:ring-1 focus:ring-merlot"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 shadow-sm focus:border-merlot focus:outline-none focus:ring-1 focus:ring-merlot"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 shadow-sm focus:border-[1px] focus:border-merlot focus:outline-none focus:ring-1 focus:ring-merlot"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className={cn(
            'w-full rounded-md bg-merlot px-4 py-2 text-sm font-medium text-off-white shadow-sm hover:bg-merlot/90 border border-merlot focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
            state.submitting && 'cursor-not-allowed opacity-50'
          )}
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}

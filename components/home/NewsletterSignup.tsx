'use client'

import { useId, useState } from 'react'
import { newsletterEnabled } from '@/data/newsletter'
import { subscribeToMailchimp } from '@/lib/mailchimpSubscribe'

export interface NewsletterSignupProps {
  className?: string
  variant?: 'dark' | 'light'
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export function NewsletterSignup({
  className = '',
  variant = 'dark',
}: NewsletterSignupProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const inputId = useId()
  const isLight = variant === 'light'

  const titleClass = isLight
    ? 'font-sans text-sm font-semibold text-tc-text'
    : 'font-sans text-sm font-semibold text-white/90'
  const descClass = isLight
    ? 'font-sans text-sm text-tc-muted leading-relaxed'
    : 'font-sans text-sm text-white/50'
  const inputClass = isLight
    ? 'min-w-0 flex-1 rounded-md border border-black/15 bg-white px-4 py-3 font-sans text-sm text-tc-text placeholder:text-tc-muted/60 focus:border-tc-orange focus:outline-none focus:ring-1 focus:ring-tc-orange disabled:opacity-60'
    : 'min-w-0 flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:border-tc-orange focus:outline-none focus:ring-1 focus:ring-tc-orange disabled:opacity-60'

  if (!newsletterEnabled) {
    return (
      <div className={className}>
        <p className={titleClass}>Stay in the loop</p>
        <p className={`mt-2 ${descClass}`}>
          Newsletter signup is not configured.
        </p>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className={className}>
        <p
          className={`font-sans text-sm font-semibold leading-relaxed ${
            isLight ? 'text-tc-orange' : 'text-tc-orange'
          }`}
        >
          {message}
        </p>
        <p className={`mt-3 font-sans text-xs leading-relaxed ${descClass}`}>
          If nothing arrives in a few minutes, check spam or promotions. You can
          also try a different email address.
        </p>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const emailInput = form.elements.namedItem('EMAIL') as HTMLInputElement | null
    const email = emailInput?.value?.trim() ?? ''

    if (!email) return

    setStatus('loading')
    setMessage('')

    const result = await subscribeToMailchimp(email)

    if (result.ok) {
      setStatus('success')
      setMessage(result.message)
    } else {
      setStatus('error')
      setMessage(result.message)
    }
  }

  return (
    <div className={className}>
      <p className={titleClass}>Stay in the loop</p>
      <p className={`mt-1 ${descClass}`}>
        Event dates, cities and registration — straight to your inbox.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-stretch"
        noValidate
      >
        <label className="sr-only" htmlFor={inputId}>
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          name="EMAIL"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
          disabled={status === 'loading'}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? `${inputId}-error` : undefined}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-md bg-tc-orange px-5 py-3 font-sans text-sm font-medium text-white transition-colours hover:bg-[#c9451f] disabled:cursor-wait disabled:opacity-70"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && message && (
        <p
          id={`${inputId}-error`}
          className="mt-3 font-sans text-sm text-tc-orange"
          role="alert"
        >
          {message}
        </p>
      )}
    </div>
  )
}

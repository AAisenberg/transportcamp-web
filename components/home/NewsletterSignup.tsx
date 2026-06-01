'use client'

import { useId, useState } from 'react'
import {
  getMailchimpBotFieldName,
  mailchimpFormAction,
  newsletterEnabled,
} from '@/data/newsletter'

export interface NewsletterSignupProps {
  className?: string
  variant?: 'dark' | 'light'
}

export function NewsletterSignup({
  className = '',
  variant = 'dark',
}: NewsletterSignupProps) {
  const [submitted, setSubmitted] = useState(false)
  const botField = getMailchimpBotFieldName(mailchimpFormAction)
  const inputId = useId()
  const isLight = variant === 'light'

  const titleClass = isLight
    ? 'font-sans text-sm font-semibold text-tc-text'
    : 'font-sans text-sm font-semibold text-white/90'
  const descClass = isLight
    ? 'font-sans text-sm text-tc-muted leading-relaxed'
    : 'font-sans text-sm text-white/50'
  const inputClass = isLight
    ? 'min-w-0 flex-1 rounded-sm border border-black/15 bg-white px-4 py-3 font-sans text-sm text-tc-text placeholder:text-tc-muted/60 focus:border-tc-orange focus:outline-none focus:ring-1 focus:ring-tc-orange'
    : 'min-w-0 flex-1 rounded-sm border border-white/20 bg-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:border-tc-orange focus:outline-none focus:ring-1 focus:ring-tc-orange'

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

  if (submitted) {
    return (
      <div className={className}>
        <p className="font-sans text-sm font-semibold text-tc-orange">
          Thanks — check your inbox to confirm your subscription.
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      <p className={titleClass}>Stay in the loop</p>
      <p className={`mt-1 ${descClass}`}>
        Event dates, cities and registration — straight to your inbox.
      </p>
      <form
        action={mailchimpFormAction}
        method="post"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-stretch"
        onSubmit={() => setSubmitted(true)}
      >
        {botField && (
          <div className="absolute -left-[5000px]" aria-hidden>
            <input type="text" name={botField} tabIndex={-1} defaultValue="" />
          </div>
        )}
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
        />
        <button
          type="submit"
          className="shrink-0 rounded-sm bg-tc-orange px-5 py-3 font-sans text-sm font-medium text-white transition-colours hover:bg-[#c9451f]"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

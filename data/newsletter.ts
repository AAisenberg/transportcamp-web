/**
 * Mailchimp audience signup for TransportCamp.
 *
 * In Mailchimp: Audience → Signup forms → Embedded forms → copy the form
 * `action` URL (https://{dc}.list-manage.com/subscribe/post?u=...&id=...).
 *
 * Set NEXT_PUBLIC_MAILCHIMP_FORM_ACTION in .env.local (rebuild required for static export).
 */
export const mailchimpFormAction =
  process.env.NEXT_PUBLIC_MAILCHIMP_FORM_ACTION ?? ''

export const newsletterEnabled = mailchimpFormAction.length > 0

/** Parsed from form action for Mailchimp bot-field honeypot (optional). */
export function getMailchimpBotFieldName(formAction: string): string | null {
  try {
    const url = new URL(formAction)
    const u = url.searchParams.get('u')
    const id = url.searchParams.get('id')
    if (!u || !id) return null
    return `b_${u}_${id}`
  } catch {
    return null
  }
}

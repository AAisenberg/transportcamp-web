/**
 * Mailchimp audience signup for TransportCamp.
 *
 * In Mailchimp: Audience → Signup forms → Embedded forms → copy the form
 * `action` URL and any hidden `tags` value from the generated HTML.
 *
 * Set in .env.local and Vercel (rebuild required for static export).
 */
export const mailchimpFormAction =
  process.env.NEXT_PUBLIC_MAILCHIMP_FORM_ACTION ?? ''

/** Tag ID from `<input type="hidden" name="tags" value="…">` in Mailchimp embed code */
export const mailchimpTags = process.env.NEXT_PUBLIC_MAILCHIMP_TAGS ?? ''

export const newsletterEnabled = mailchimpFormAction.length > 0

export const newsletterSuccessMessage = 'Thanks for subscribing.'

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

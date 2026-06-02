import {
  getMailchimpBotFieldName,
  mailchimpFormAction,
} from '@/data/newsletter'

export interface MailchimpSubscribeResult {
  ok: boolean
  message: string
}

interface MailchimpJsonpResponse {
  result: 'success' | 'error'
  msg: string
}

function normalizeFormAction(formAction: string): string {
  return formAction.replace(/&amp;/g, '&').trim()
}

function getPostJsonEndpoint(formAction: string): URL | null {
  try {
    const url = new URL(normalizeFormAction(formAction))
    url.pathname = url.pathname.replace(
      /\/subscribe\/post\/?$/,
      '/subscribe/post-json'
    )
    return url
  } catch {
    return null
  }
}

/**
 * Subscribe via Mailchimp's post-json JSONP endpoint (browser-only).
 */
export function subscribeToMailchimp(email: string): Promise<MailchimpSubscribeResult> {
  const endpoint = getPostJsonEndpoint(mailchimpFormAction)
  const clean = normalizeFormAction(mailchimpFormAction)

  if (!endpoint) {
    return Promise.resolve({
      ok: false,
      message: 'Newsletter signup is not configured correctly.',
    })
  }

  let u: string | null
  let id: string | null
  let fId: string | null
  try {
    const parsed = new URL(clean)
    u = parsed.searchParams.get('u')
    id = parsed.searchParams.get('id')
    fId = parsed.searchParams.get('f_id')
  } catch {
    return Promise.resolve({
      ok: false,
      message: 'Newsletter signup is not configured correctly.',
    })
  }

  if (!u || !id) {
    return Promise.resolve({
      ok: false,
      message: 'Newsletter signup is not configured correctly.',
    })
  }

  const botField = getMailchimpBotFieldName(clean)
  const params = new URLSearchParams()
  params.set('u', u)
  params.set('id', id)
  params.set('EMAIL', email.trim())
  if (botField) params.set(botField, '')
  if (fId) params.set('f_id', fId)

  return new Promise((resolve) => {
    const callbackName = `mailchimp_${Date.now()}_${Math.random().toString(36).slice(2)}`
    const script = document.createElement('script')
    let settled = false

    const finish = (result: MailchimpSubscribeResult) => {
      if (settled) return
      settled = true
      cleanup()
      resolve(result)
    }

    const cleanup = () => {
      delete (window as unknown as Record<string, unknown>)[callbackName]
      script.remove()
    }

    ;(window as unknown as Record<string, (data: MailchimpJsonpResponse) => void>)[
      callbackName
    ] = (data) => {
      if (data.result === 'success') {
        finish({
          ok: true,
          message:
            data.msg ||
            'Thanks — check your inbox to confirm your subscription.',
        })
      } else {
        finish({
          ok: false,
          message: data.msg || 'Could not subscribe. Please try again.',
        })
      }
    }

    script.onerror = () => {
      finish({
        ok: false,
        message: 'Could not reach Mailchimp. Please try again in a moment.',
      })
    }

    params.set('c', callbackName)
    script.src = `${endpoint.origin}${endpoint.pathname}?${params.toString()}`
    document.body.appendChild(script)

    window.setTimeout(() => {
      finish({
        ok: false,
        message: 'Request timed out. Please try again.',
      })
    }, 15000)
  })
}

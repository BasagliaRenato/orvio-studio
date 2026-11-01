export type InquiryPayload = {
  name: string
  email: string
  company: string
  projectType: string
  message: string
  locale: 'pt' | 'en'
}

export type InquiryResult =
  | { status: 'sent' }
  | { status: 'not-configured' }
  | { status: 'error'; message?: string }

/**
 * Single integration point for the contact form.
 * No delivery service is connected yet, so this reports `not-configured`
 * and the form shows its demo notice. Replace the body with a call to your
 * email provider or API route and return `{ status: 'sent' }` on success.
 */
export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  void payload
  await new Promise((resolve) => setTimeout(resolve, 500))
  return { status: 'not-configured' }
}

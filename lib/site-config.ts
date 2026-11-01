/**
 * Brand and contact settings. ORVIO is a working name:
 * change it here and it updates across the site.
 */
export const siteConfig = {
  name: 'ORVIO',
  studioName: 'ORVIO Studio',
  /** Set to a real address (e.g. 'ola@studio.com') to show a mailto link. */
  contactEmail: null as string | null,
  /** IANA timezone used by the footer clock. */
  timeZone: 'America/Sao_Paulo',
  defaultLocale: 'pt' as const,
}

export type SiteConfig = typeof siteConfig

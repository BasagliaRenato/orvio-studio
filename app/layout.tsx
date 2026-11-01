import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Fraunces, Geist_Mono } from 'next/font/google'
import { LanguageProvider } from '@/components/providers/language-provider'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { SkipLink } from '@/components/site/skip-link'
import { dictionaries } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
})

const pt = dictionaries.pt

export const metadata: Metadata = {
  title: { default: pt.meta.title, template: `%s — ${siteConfig.studioName}` },
  description: pt.meta.description,
  generator: 'v0.app',
  openGraph: {
    title: pt.meta.title,
    description: pt.meta.description,
    siteName: siteConfig.studioName,
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f2eee6',
  colorScheme: 'light',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${geistMono.variable} ${fraunces.variable}`}>
      <head>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <SkipLink />
          <SiteHeader />
          <main id="conteudo" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GITHUB_PAGES !== 'true' && <Analytics />}
      </body>
    </html>
  )
}

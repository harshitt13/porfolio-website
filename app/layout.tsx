import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { IBM_Plex_Mono, JetBrains_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SITE_CONFIG, HOME_SEO, THEME } from '@/lib/config'
import { SITE_GRAPH } from '@/lib/schema'
import { StructuredData } from '@/components/structured-data'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-mono-heading',
  display: 'swap',
})

const { siteUrl, name, description } = SITE_CONFIG

export const metadata: Metadata = {
  title: {
    default: HOME_SEO.title,
    template: `%s | ${name}`,
  },
  description,
  keywords: HOME_SEO.keywords,
  applicationName: name,
  authors: [{ name, url: siteUrl }],
  creator: name,
  publisher: name,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: HOME_SEO.title,
    description,
    url: siteUrl,
    siteName: name,
    locale: 'en_IN',
    type: 'profile',
    firstName: 'Harshit',
    lastName: 'Kushwaha',
    username: 'harshitt13',
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_SEO.title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '500x500' }],
    apple: [{ url: '/favicon.png', sizes: '500x500' }],
  },
  // Paste the token from Search Console > Settings > Ownership verification
  // if you ever need the HTML-tag method instead of the DNS record.
  // verification: { google: '...' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: THEME.base,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${jetBrainsMono.variable}`}>
      <body className="antialiased bg-term-base text-term-fg font-mono pb-12">
        {children}
        <StructuredData data={SITE_GRAPH} />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}

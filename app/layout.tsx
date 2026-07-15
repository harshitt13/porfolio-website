import { Analytics } from '@vercel/analytics/next'
import { IBM_Plex_Mono, JetBrains_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-mono-heading',
})

const siteUrl = 'https://harshitt13.in'

export const metadata: Metadata = {
  title: 'Harshit Kushwaha | Software Engineer & OSS Contributor',
  description: 'Software Engineer contributing to CNCF, OpenTelemetry, and open-source observability. Building cloud-native tools, AI/ML systems, and full-stack applications.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Harshit Kushwaha | Software Engineer & OSS Contributor',
    description: 'Software Engineer contributing to CNCF, OpenTelemetry, and open-source observability.',
    url: siteUrl,
    siteName: 'Harshit Kushwaha',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshit Kushwaha | Software Engineer & OSS Contributor',
    description: 'Software Engineer contributing to CNCF, OpenTelemetry, and open-source observability.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c0a08',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${jetBrainsMono.variable}`}>
      <body className="antialiased bg-[#0c0a08] text-[#e9e4d8] font-mono pb-12">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

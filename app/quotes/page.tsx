import Link from 'next/link'
import type { Metadata } from 'next'
import { SITE_CONFIG, SOCIAL_LINKS, QUOTE } from '@/lib/config'
import { QUOTE_GRAPH } from '@/lib/schema'
import { StructuredData } from '@/components/structured-data'

const { siteUrl, name } = SITE_CONFIG
const quoteUrl = `${siteUrl}${QUOTE.slug}`
const titled = `“${QUOTE.text}” - ${name}`

export const metadata: Metadata = {
  title: { absolute: titled },
  description: `“${QUOTE.text}” A quote by ${name}, Software Engineer and open-source contributor. Read the original on his personal site.`,
  keywords: [
    QUOTE.text,
    QUOTE.text.replace('.', ''),
    `${QUOTE.text.replace('.', '')} quote`,
    `${QUOTE.text.replace('.', '')} meaning`,
    `who said ${QUOTE.text.replace('.', '')}`,
    name,
    `${name} quotes`,
    'harshitt13 quotes',
  ],
  authors: [{ name, url: siteUrl }],
  creator: name,
  alternates: { canonical: QUOTE.slug },
  openGraph: {
    title: titled,
    description: `“${QUOTE.text}” A quote by ${name} - Software Engineer & OSS Contributor.`,
    url: quoteUrl,
    siteName: name,
    locale: 'en_IN',
    type: 'article',
    authors: [siteUrl],
    publishedTime: QUOTE.datePublished,
  },
  twitter: {
    card: 'summary_large_image',
    title: titled,
    description: `“${QUOTE.text}” A quote by ${name}.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
}

export default function QuotesPage() {
  return (
    <main className="min-h-screen bg-term-base text-term-fg flex items-center justify-center px-6 py-16">
      <article className="max-w-2xl w-full text-center space-y-10">
        <h1 className="sr-only">{titled}</h1>

        <blockquote className="space-y-6" cite={quoteUrl}>
          <p className="font-mono-heading glow-text-lg text-3xl sm:text-4xl md:text-5xl font-bold italic leading-tight">
            &ldquo;{QUOTE.text}&rdquo;
          </p>
          <footer className="text-lg sm:text-xl text-term-accent">
            -{' '}
            <Link
              href="/"
              rel="author"
              className="hover:brightness-110 transition-all border-b border-term-accent/30 hover:border-term-accent focus:outline-none focus:ring-2 focus:ring-term-accent rounded"
            >
              {name}
            </Link>
          </footer>
        </blockquote>

        <div className="text-sm text-term-muted leading-relaxed space-y-4 border-t border-term-edge pt-8">
          <p>
            Said by <strong className="text-term-fg">{name}</strong> - {SITE_CONFIG.title}. He
            contributes to the CNCF ecosystem and open-source observability, primarily
            OpenTelemetry, alongside Meshery, Kestra, and Jaeger.
          </p>
          <p className="text-term-dim">
            Originally published on his personal site,{' '}
            <Link href="/" className="text-term-accent hover:brightness-110">
              harshitt13.in
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-xs">
          <Link
            href="/"
            className="px-3 py-1.5 border border-term-edge-strong text-term-muted rounded transition-all hover:border-term-accent hover:text-term-accent hover:glow-accent focus:outline-none focus:ring-2 focus:ring-term-accent"
          >
            ← Back to portfolio
          </Link>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="me noopener noreferrer"
            className="px-3 py-1.5 border border-term-edge-strong text-term-muted rounded transition-all hover:border-term-accent hover:text-term-accent hover:glow-accent focus:outline-none focus:ring-2 focus:ring-term-accent"
          >
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="px-3 py-1.5 border border-term-edge-strong text-term-muted rounded transition-all hover:border-term-accent hover:text-term-accent hover:glow-accent focus:outline-none focus:ring-2 focus:ring-term-accent"
          >
            LinkedIn
          </a>
        </div>

        <StructuredData data={QUOTE_GRAPH} />
      </article>
    </main>
  )
}

import type { Metadata } from 'next'

const siteUrl = 'https://harshitt13.in'

export const metadata: Metadata = {
  title: '"Hope prolongs suffering." — Harshit Kushwaha',
  description:
    '"Hope prolongs suffering." A quote by Harshit Kushwaha — Software Engineer, OSS Contributor, and thinker. Explore more thoughts and work at harshitt13.in.',
  keywords: [
    'Hope prolongs suffering',
    'Harshit Kushwaha',
    'Harshit Kushwaha quotes',
    'hope prolongs suffering quote',
    'hope prolongs suffering meaning',
  ],
  openGraph: {
    title: '"Hope prolongs suffering." — Harshit Kushwaha',
    description:
      '"Hope prolongs suffering." A quote by Harshit Kushwaha — Software Engineer & OSS Contributor.',
    url: `${siteUrl}/quotes`,
    siteName: 'Harshit Kushwaha',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '"Hope prolongs suffering." — Harshit Kushwaha',
    description:
      '"Hope prolongs suffering." A quote by Harshit Kushwaha.',
  },
  alternates: { canonical: '/quotes' },
}

export default function QuotesPage() {
  return (
    <main className="min-h-screen bg-[#0c0a08] text-[#e9e4d8] flex items-center justify-center px-6">
      <article className="max-w-2xl w-full text-center space-y-8">
        <blockquote className="space-y-6">
          <p
            className="text-3xl sm:text-4xl md:text-5xl font-bold italic leading-tight"
            style={{
              fontFamily: 'var(--font-mono-heading)',
              textShadow: '0 0 20px rgba(255, 182, 72, 0.15)',
            }}
          >
            &ldquo;Hope prolongs suffering.&rdquo;
          </p>
          <footer className="text-lg sm:text-xl text-[#ffb648]">
            — Harshit Kushwaha
          </footer>
        </blockquote>

        <div className="text-sm text-[#6b6560] space-y-2">
          <p>Software Engineer &amp; OSS Contributor</p>
          <a
            href="/"
            className="inline-block text-[#ffb648] hover:brightness-110 transition-all border-b border-[#ffb648]/30 hover:border-[#ffb648]"
          >
            ← Back to portfolio
          </a>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Quotation',
              text: 'Hope prolongs suffering.',
              creator: {
                '@type': 'Person',
                name: 'Harshit Kushwaha',
                url: siteUrl,
                sameAs: [
                  'https://github.com/harshitt13',
                  'https://linkedin.com/in/harshitt13',
                ],
              },
              isPartOf: {
                '@type': 'WebPage',
                name: 'Quotes by Harshit Kushwaha',
                url: `${siteUrl}/quotes`,
              },
            }),
          }}
        />
      </article>
    </main>
  )
}

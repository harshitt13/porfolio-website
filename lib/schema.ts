import { SITE_CONFIG, SOCIAL_LINKS, PROFILE_URLS, HOME_SEO, QUOTE, SCHEMA_IDS } from './config'

const { siteUrl, name, description } = SITE_CONFIG

/**
 * schema.org nodes, split by scope.
 *
 * Site-wide nodes (Person, WebSite) are emitted once from the root layout, so
 * they appear on every page under one stable @id — that repetition is what lets
 * a crawler resolve them to a single entity. Page-level nodes live with the
 * page they describe, so no page ever claims to be two documents at once.
 */
const personNode = {
  '@type': 'Person',
  '@id': SCHEMA_IDS.person,
  name,
  alternateName: ['harshitt13', 'Harshit'],
  givenName: 'Harshit',
  familyName: 'Kushwaha',
  url: siteUrl,
  image: `${siteUrl}/favicon.png`,
  email: `mailto:${SOCIAL_LINKS.email}`,
  jobTitle: SITE_CONFIG.title,
  description,
  knowsAbout: [
    'Observability',
    'OpenTelemetry',
    'Cloud Native Computing Foundation',
    'Distributed Systems',
    'Open Source Software',
    'Machine Learning',
    'Full-Stack Web Development',
    'Internet of Things',
    'Robotics',
  ],
  affiliation: [
    { '@type': 'Organization', name: 'OpenTelemetry', url: 'https://opentelemetry.io' },
    {
      '@type': 'Organization',
      name: 'Cloud Native Computing Foundation',
      url: 'https://www.cncf.io',
    },
  ],
  sameAs: PROFILE_URLS,
}

const websiteNode = {
  '@type': 'WebSite',
  '@id': SCHEMA_IDS.website,
  url: siteUrl,
  name,
  description,
  inLanguage: 'en',
  publisher: { '@id': SCHEMA_IDS.person },
}

/** Emitted from the root layout on every page. */
export const SITE_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [personNode, websiteNode],
}

/** Emitted from app/page.tsx — describes the portfolio itself. */
export const HOME_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: HOME_SEO.title,
      isPartOf: { '@id': SCHEMA_IDS.website },
      about: { '@id': SCHEMA_IDS.person },
      mainEntity: { '@id': SCHEMA_IDS.person },
      inLanguage: 'en',
      // Declares the quote page as part of this identity without surfacing the
      // quote anywhere on the portfolio.
      relatedLink: `${siteUrl}${QUOTE.slug}`,
    },
  ],
}

/** Emitted from app/quotes/page.tsx. */
const quoteUrl = `${siteUrl}${QUOTE.slug}`

export const QUOTE_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Quotation',
      '@id': `${quoteUrl}#quotation`,
      text: QUOTE.text,
      creator: { '@id': SCHEMA_IDS.person },
      inLanguage: 'en',
      datePublished: QUOTE.datePublished,
      isPartOf: { '@id': `${quoteUrl}#webpage` },
    },
    {
      '@type': 'WebPage',
      '@id': `${quoteUrl}#webpage`,
      url: quoteUrl,
      name: `“${QUOTE.text}” — ${name}`,
      description: `A quote by ${name}.`,
      inLanguage: 'en',
      isPartOf: { '@id': SCHEMA_IDS.website },
      about: { '@id': SCHEMA_IDS.person },
      mainEntity: { '@id': `${quoteUrl}#quotation` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${quoteUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Quotes', item: quoteUrl },
      ],
    },
  ],
}

import type { MetadataRoute } from 'next'
import { SITE_CONFIG, QUOTE } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical, crawlable URLs belong here. Fragment links (/#projects) are
  // never indexed as separate documents, so listing them adds noise, not coverage.
  return [
    {
      url: SITE_CONFIG.siteUrl,
    },
    {
      // Include the quote page even though it is not linked from the portfolio.
      url: `${SITE_CONFIG.siteUrl}${QUOTE.slug}`,
    },
  ]
}

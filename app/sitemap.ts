import type { MetadataRoute } from 'next'
import { SITE_CONFIG, QUOTE } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Only canonical, crawlable URLs belong here. Fragment links (/#projects) are
  // never indexed as separate documents, so listing them adds noise, not coverage.
  return [
    {
      url: SITE_CONFIG.siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      // Intentionally not linked from the portfolio, so the sitemap is the only
      // way a crawler discovers it. Keep the priority high enough to signal it
      // is a real destination rather than an afterthought.
      url: `${SITE_CONFIG.siteUrl}${QUOTE.slug}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}

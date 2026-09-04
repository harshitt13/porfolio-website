import type { MetadataRoute } from 'next'
import { SITE_CONFIG, THEME } from '@/lib/config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: THEME.base,
    theme_color: THEME.base,
    icons: [{ src: '/favicon.png', sizes: '500x500', type: 'image/png', purpose: 'any' }],
  }
}

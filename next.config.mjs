/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

// Next needs 'unsafe-eval' for react-refresh in dev only; shipping it in
// production would defeat most of what the script-src directive buys us.
// Vercel Analytics + Speed Insights are same-origin in production
// (/_vercel/insights/script.js), and va.vercel-scripts.com only in dev.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
]
  .join('; ')
  .concat(isDev ? '' : '; upgrade-insecure-requests')

const nextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework version in every response.
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  trailingSlash: false,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
        },
        { key: 'Content-Security-Policy', value: csp },
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
      ],
    },
  ],

  logging: {
    fetches: { fullUrl: isDev },
  },
}

export default nextConfig

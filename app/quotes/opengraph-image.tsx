import { ImageResponse } from 'next/og'
import { SITE_CONFIG, QUOTE, THEME } from '@/lib/config'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `“${QUOTE.text}” — ${SITE_CONFIG.name}`

export default function QuoteOpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: THEME.base,
        color: THEME.fg,
        padding: '80px',
        fontFamily: 'monospace',
        textAlign: 'center',
      }}
    >
      {/* Each node holds a single string: Satori requires an explicit
            display on any element with more than one child. */}
      <div style={{ fontSize: 76, fontWeight: 700, fontStyle: 'italic', lineHeight: 1.2 }}>
        {`“${QUOTE.text}”`}
      </div>
      <div style={{ color: THEME.accent, fontSize: 36, marginTop: 40 }}>
        {`— ${SITE_CONFIG.name}`}
      </div>
      <div style={{ color: THEME.muted, fontSize: 24, marginTop: 16 }}>{SITE_CONFIG.title}</div>
    </div>,
    size
  )
}

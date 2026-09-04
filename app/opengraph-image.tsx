import { ImageResponse } from 'next/og'
import { SITE_CONFIG, THEME } from '@/lib/config'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: THEME.base,
        color: THEME.fg,
        padding: '80px',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ color: THEME.cyan, fontSize: 30 }}>harshitt13@prod:~$ whoami</div>
      <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>{SITE_CONFIG.name}</div>
      <div style={{ color: THEME.accent, fontSize: 40, marginTop: 12 }}>{SITE_CONFIG.title}</div>
      <div style={{ color: THEME.muted, fontSize: 28, marginTop: 32 }}>{SITE_CONFIG.tagline}</div>
    </div>,
    size
  )
}

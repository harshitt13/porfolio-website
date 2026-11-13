'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { useIntervalValue } from '@/lib/use-interval-value'

// Fixed to UTC so the uptime counter reads identically for every visitor
// instead of drifting with the browser's local time zone.
const BIRTH_DATE = Date.UTC(2005, 0, 15, 14, 30, 0)
const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000
const UPTIME_TICK_MS = 50
const COOKIE_NAME = 'last_visit'
const INITIAL_UPTIME = '0.000000000000 years'

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const cookie = document.cookie.split('; ').find(c => c.startsWith(`${name}=`))
  if (!cookie) return null
  try {
    return decodeURIComponent(cookie.split('=').slice(1).join('='))
  } catch {
    // Ignore malformed percent encoding in an old or manually edited cookie.
    return null
  }
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  // `Secure` is dropped over http so the cookie still works on localhost.
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${secure}`
}

const readUptime = () => `${((Date.now() - BIRTH_DATE) / MS_PER_YEAR).toFixed(12)} years`

// Read once and memoised for the lifetime of the tab: the previous visit must
// not change under the reader when the effect below writes the new cookie.
let cachedLastLogin: string | undefined

function readLastLogin(): string {
  if (cachedLastLogin !== undefined) return cachedLastLogin

  const previousVisit = getCookie(COOKIE_NAME)
  const date = previousVisit ? new Date(previousVisit) : null

  cachedLastLogin =
    date && !Number.isNaN(date.getTime())
      ? `${date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })} ${date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })}`
      : 'just now'

  return cachedLastLogin
}

// A cookie has no change events, so there is nothing to subscribe to.
const noopSubscribe = () => () => {}
const serverLastLogin = () => 'just now'

export function BootSequence() {
  const lastLogin = useSyncExternalStore(noopSubscribe, readLastLogin, serverLastLogin)
  const uptime = useIntervalValue(readUptime, UPTIME_TICK_MS, INITIAL_UPTIME, {
    pauseWhenHidden: true,
    respectReducedMotion: true,
  })
  const [visitorIp, setVisitorIp] = useState('resolving...')

  // Stamp this visit only after the previous value has been read above.
  useEffect(() => {
    setCookie(COOKIE_NAME, new Date().toISOString(), 365)
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    fetch('/api/ip', { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('IP lookup failed')
        return res.json()
      })
      .then(data => setVisitorIp(typeof data?.ip === 'string' ? data.ip : '127.0.0.1'))
      .catch(error => {
        if (error?.name !== 'AbortError') setVisitorIp('127.0.0.1')
      })

    return () => controller.abort()
  }, [])

  return (
    <div className="text-xs text-term-dim mb-4 space-y-0.5 p-3 bg-term-panel rounded border border-term-edge">
      <div>$ ssh harshitt13@production</div>
      <div>{`Last login: ${lastLogin} from ${visitorIp}`}</div>
      <div className="tabular-nums" aria-hidden="true">{`Uptime: ${uptime}`}</div>
      <div>
        Loading profile <span className="text-green-500">[OK]</span>
      </div>
      <div>
        Verifying credentials <span className="text-green-500">[OK]</span>
      </div>
      <div>Access granted.</div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'

const BIRTH_DATE = new Date(
  2005, // Year
  0,    // Month (0 = January)
  15,   // Day
  14,   // Hour (24-hour)
  30,   // Minute
  0      // Second
).getTime()

const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`
}

export function BootSequence() {
  const [uptime, setUptime] = useState('0.000000000000 years')
  const [lastLogin, setLastLogin] = useState<string>('just now')
  const [visitorIp, setVisitorIp] = useState<string>('resolving...')

  useEffect(() => {
    // --- Last login via cookie ---
    const previousVisit = getCookie('last_visit')
    if (previousVisit) {
      const date = new Date(previousVisit)
      setLastLogin(
        date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }) +
          ' ' +
          date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })
      )
    } else {
      setLastLogin('just now')
    }
    // Store the current visit timestamp (kept for 365 days)
    setCookie('last_visit', new Date().toISOString(), 365)

    // --- Visitor IP ---
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => setVisitorIp(data.ip))
      .catch(() => setVisitorIp('127.0.0.1'))

    // --- Uptime ticker (50ms for smooth decimals without burning battery) ---
    const interval = setInterval(() => {
      const years = (Date.now() - BIRTH_DATE) / MS_PER_YEAR
      setUptime(`${years.toFixed(12)} years`)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-xs text-[#6b6560] mb-4 space-y-0.5 p-3 bg-[#1b1714] rounded border border-[#2c2620]">
      <div>$ ssh harshitt13@production</div>
      <div>{`Last login: ${lastLogin} from ${visitorIp}`}</div>
      <div>{`Uptime: ${uptime}`}</div>
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
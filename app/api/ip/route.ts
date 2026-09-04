import { NextRequest, NextResponse } from 'next/server'

const FALLBACK_IP = '127.0.0.1'
const IPV4 = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/

/**
 * `x-forwarded-for` is attacker-controlled, and whatever we return here is
 * rendered back into the page, so anything that is not a well-formed address is
 * discarded rather than echoed. IPv6 is validated by the URL parser, which
 * implements the real grammar (compression, embedded IPv4, zone-less form).
 */
function isValidIp(value: string): boolean {
  if (IPV4.test(value)) return true
  return value.includes(':') && URL.canParse(`http://[${value}]`)
}

export async function GET(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  const raw = (forwardedFor?.split(',')[0] ?? req.headers.get('x-real-ip') ?? '').trim()

  return NextResponse.json(
    { ip: isValidIp(raw) ? raw : FALLBACK_IP },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}

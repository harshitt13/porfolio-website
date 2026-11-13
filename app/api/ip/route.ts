import { NextRequest, NextResponse } from 'next/server'
import { isIP } from 'node:net'

const FALLBACK_IP = '127.0.0.1'

/**
 * `x-forwarded-for` is attacker-controlled, and whatever we return here is
 * rendered back into the page, so anything that is not a well-formed address is
 * discarded rather than echoed. Validate the entire address, not a URL that
 * could accept path or query characters after an IPv6 closing bracket.
 */
function isValidIp(value: string): boolean {
  return !value.includes('%') && isIP(value) !== 0
}

export async function GET(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  const raw = (forwardedFor?.split(',')[0] ?? req.headers.get('x-real-ip') ?? '').trim()

  return NextResponse.json(
    { ip: isValidIp(raw) ? raw : FALLBACK_IP },
    { headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } }
  )
}

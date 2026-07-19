import { NextRequest, NextResponse } from 'next/server'

const IPV4_REGEX = /^(\d{1,3}\.){3}\d{1,3}$/
const IPV6_REGEX = /^[a-fA-F0-9:]+$/

function isValidIp(value: string): boolean {
  return IPV4_REGEX.test(value) || IPV6_REGEX.test(value)
}

export async function GET(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  const realIp = req.headers.get('x-real-ip')
  const raw = forwardedFor?.split(',')[0].trim() || realIp || '127.0.0.1'
  const ip = isValidIp(raw) ? raw : '127.0.0.1'
  return NextResponse.json({ ip })
}

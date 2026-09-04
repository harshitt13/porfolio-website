import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-term-accent text-lg">zsh: no such file or directory</h1>
        <p className="text-term-muted text-sm">The path you followed does not exist.</p>
        <Link
          href="/"
          className="inline-block px-4 py-2 border border-term-edge rounded text-sm text-term-muted hover:border-term-accent hover:text-term-accent transition-colors focus:outline-none focus:ring-2 focus:ring-term-accent"
        >
          $ cd ~
        </Link>
      </div>
    </main>
  )
}

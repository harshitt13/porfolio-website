'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Route error:', error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center p-4" role="alert">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-term-accent text-lg">ERROR: Something went wrong</h1>
        <p className="text-term-muted text-sm break-words">
          {error.digest ? `Reference: ${error.digest}` : 'The request could not be completed.'}
        </p>
        <button
          type="button"
          onClick={reset}
          className="px-4 py-2 border border-term-edge rounded text-sm text-term-muted hover:border-term-accent hover:text-term-accent transition-colors focus:outline-none focus:ring-2 focus:ring-term-accent"
        >
          $ retry
        </button>
      </div>
    </main>
  )
}

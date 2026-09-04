'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-term-base text-term-fg font-mono">
        <main className="min-h-screen flex items-center justify-center p-4" role="alert">
          <div className="max-w-md w-full text-center space-y-4">
            <h1 className="text-term-accent text-lg">FATAL: the session could not be restored</h1>
            <button
              type="button"
              onClick={reset}
              className="px-4 py-2 border border-term-edge rounded text-sm text-term-muted hover:border-term-accent hover:text-term-accent transition-colors"
            >
              $ reconnect
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}

/**
 * Decorative shell prompt. Marked aria-hidden because each section already
 * carries a real heading — without this, screen readers announce
 * "harshitt13@prod colon tilde dollar cat about dot md" before every section.
 */
export function PromptLine({ command }: { command: string }) {
  return (
    <div className="text-sm flex flex-wrap items-center gap-1 mb-3" aria-hidden="true">
      <span className="text-term-cyan">harshitt13@prod</span>
      <span className="text-term-dim">:</span>
      <span className="text-term-accent-dim">~</span>
      <span className="text-term-dim">$</span>
      <span className="text-term-fg ml-1">{command}</span>
    </div>
  )
}

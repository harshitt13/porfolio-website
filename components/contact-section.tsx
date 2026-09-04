import { PromptLine } from './prompt-line'
import { CONTACTS } from '@/lib/config'

export function ContactSection() {
  return (
    <section id="contact" className="space-y-3" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="sr-only">
        Contact
      </h2>
      <PromptLine command="cat contact.txt" />

      <div className="bg-term-panel border border-term-edge rounded p-4 text-sm">
        <dl className="space-y-3">
          {CONTACTS.map(contact => {
            const isExternal = !contact.href.startsWith('mailto:')
            // rel="me" marks these as the same person's profiles, which is how
            // identity consolidation (IndieAuth, and search entity graphs) works.
            const rel = [isExternal && 'noopener noreferrer', contact.isIdentity && 'me']
              .filter(Boolean)
              .join(' ')
            return (
              <div key={contact.label} className="flex items-center gap-3">
                <dt className="text-term-dim w-20 flex-shrink-0">{contact.label}</dt>
                <span className="text-term-dim" aria-hidden="true">
                  =
                </span>
                <dd className="min-w-0">
                  <a
                    href={contact.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={rel || undefined}
                    className="text-term-accent hover:brightness-110 hover:glow-accent-md transition-all rounded px-1 break-all focus:outline-none focus:ring-2 focus:ring-term-accent"
                  >
                    {contact.value}
                  </a>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}

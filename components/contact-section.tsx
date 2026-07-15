import { PromptLine } from './prompt-line'

const contacts = [
  { label: 'email', value: 'find.harshitkushwaha@gmail.com', href: 'mailto:find.harshitkushwaha@gmail.com' },
  { label: 'github', value: 'github.com/harshitt13', href: 'https://github.com/harshitt13' },
  { label: 'linkedin', value: 'linkedin.com/in/harshitt13', href: 'https://linkedin.com/in/harshitt13' },
]

export function ContactSection() {
  return (
    <section id="contact" className="space-y-3">
      <PromptLine command="cat contact.txt" />
      
      <div className="bg-[#1b1714] border border-[#2c2620] rounded p-4 space-y-3 text-sm">
        {contacts.map((contact) => (
          <div key={contact.label} className="flex items-center gap-3">
            <span className="text-[#6b6560] w-20 flex-shrink-0">{contact.label}</span>
            <span className="text-[#6b6560]">=</span>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffb648] hover:brightness-110 hover:shadow-[0_0_8px_rgba(255,182,72,0.3)] transition-all cursor-pointer rounded px-1"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

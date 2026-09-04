import { SOCIAL_LINKS } from '@/lib/config'

interface NavItem {
  id: string
  label: string
  /** External destination. Internal items scroll to their section anchor. */
  href?: string
}

const navItems: NavItem[] = [
  { id: 'whoami', label: './whoami' },
  { id: 'about', label: './about' },
  { id: 'projects', label: './projects' },
  { id: 'contributions', label: './contributions' },
  { id: 'career', label: './career' },
  { id: 'skills', label: './skills' },
  { id: 'contact', label: './contact' },
  { id: 'links', label: './links', href: SOCIAL_LINKS.linktree },
  { id: 'resume', label: './resume', href: SOCIAL_LINKS.resume },
]

const pillClass =
  'px-3 py-1.5 border border-term-edge-strong text-term-muted text-sm rounded transition-all duration-200 hover:border-term-accent hover:text-term-accent hover:glow-accent focus:outline-none focus:ring-2 focus:ring-term-accent'

// Plain anchors rather than scroll handlers: they update the URL (so /#projects
// is shareable), work with the back button, move keyboard focus into the target
// section, and are crawlable as internal links. Smooth scrolling comes from
// scroll-behavior in globals.css, which the reduced-motion block overrides.
export function NavPills() {
  return (
    <nav className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-term-edge" aria-label="Sections">
      {navItems.map(item =>
        item.href ? (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={pillClass}
          >
            {item.label}
          </a>
        ) : (
          <a key={item.id} href={`#${item.id}`} className={pillClass}>
            {item.label}
          </a>
        )
      )}
    </nav>
  )
}

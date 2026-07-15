'use client'

import { useCallback } from 'react'

interface NavItem {
  id: string
  label: string
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
  { id: 'links', label: './links', href: 'https://linktr.ee/harshitt13' },
  { id: 'resume', label: './resume', href: 'https://github.com/harshitt13/resume/blob/main/Harshit_Kushwaha_Resume.pdf' },
]

export function NavPills() {
  const handleClick = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const pillClass = "px-3 py-1.5 border border-[#5a5449] text-[#948c7e] text-sm rounded transition-all duration-200 hover:border-[#ffb648] hover:text-[#ffb648] hover:shadow-[0_0_8px_rgba(255,182,72,0.2)]"

  return (
    <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[#2c2620]">
      {navItems.map((item) =>
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
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={pillClass}
          >
            {item.label}
          </button>
        )
      )}
    </div>
  )
}

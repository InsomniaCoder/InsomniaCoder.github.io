'use client'

import { useEffect, useRef, useState } from 'react'
import { Linkedin, BookOpen } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'skills', label: 'Skills' },
  { id: 'blog', label: 'Blog Posts' },
  { id: 'talks', label: 'Talks' },
  { id: 'contact', label: 'Contact' },
]

export function Sidebar() {
  const [activeId, setActiveId] = useState('hero')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // The scrollable container is the <main> with id="main-scroll"
    const scrollRoot = document.getElementById('main-scroll')

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: scrollRoot,
        rootMargin: '-15% 0px -55% 0px',
        threshold: 0,
      }
    )

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    const container = document.getElementById('main-scroll')
    if (el && container) {
      container.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <nav className="sidebar-scroll w-[220px] min-w-[220px] bg-navy border-r border-navy-surface sticky top-0 h-screen flex flex-col px-5 py-7 gap-1.5">
      <p className="text-sm font-bold text-text-primary mb-0.5">Tanat L.</p>
      <p className="text-[10px] text-text-muted uppercase tracking-wider leading-relaxed mb-5">
        Staff SRE &amp;<br />Platform Engineer
      </p>

      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-xs transition-colors text-left ${
            activeId === item.id
              ? 'bg-navy-surface text-teal'
              : 'text-text-muted hover:text-text-secondary hover:bg-navy-surface/50'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
              activeId === item.id ? 'bg-teal' : 'bg-navy-border'
            }`}
          />
          {item.label}
        </button>
      ))}

      <div className="mt-auto pt-5 border-t border-navy-surface flex gap-2">
        <a
          href="https://www.linkedin.com/in/tanatloke/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="w-7 h-7 rounded-full bg-navy-surface flex items-center justify-center text-text-muted hover:bg-teal-dim hover:text-teal transition-colors"
        >
          <Linkedin size={13} />
        </a>
        <a
          href="https://tanatloke.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Medium"
          className="w-7 h-7 rounded-full bg-navy-surface flex items-center justify-center text-text-muted hover:bg-teal-dim hover:text-teal transition-colors"
        >
          <BookOpen size={13} />
        </a>
      </div>
    </nav>
  )
}

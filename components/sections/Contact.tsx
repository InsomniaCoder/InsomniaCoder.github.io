import { contact } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Linkedin, BookOpen, MapPin } from 'lucide-react'

const iconMap = {
  linkedin: Linkedin,
  medium: BookOpen,
  location: MapPin,
  email: MapPin,
}

export function Contact() {
  return (
    <section id="contact" className="px-12 py-16">
      <SectionHeader label="Say hello" title="Get in Touch" />
      <div className="grid grid-cols-2 gap-12">
        <p className="text-sm text-text-secondary leading-relaxed">{contact.message}</p>
        <div className="flex flex-col gap-4">
          {contact.links.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-teal transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-navy-surface flex items-center justify-center group-hover:bg-teal-dim transition-colors flex-shrink-0">
                  <Icon size={14} className="text-text-muted group-hover:text-teal" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm">{link.value}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

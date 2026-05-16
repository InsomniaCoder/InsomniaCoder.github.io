import { about } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function About() {
  return (
    <section id="about" className="px-12 py-16 border-b border-navy-surface">
      <SectionHeader label="Get to know me" title="About Me" />
      <div className="grid grid-cols-2 gap-12 items-start">
        <p className="text-sm text-text-secondary leading-relaxed">{about.bio}</p>
        <div className="grid grid-cols-2 gap-4">
          {about.facts.map((fact) => (
            <div key={fact.key}>
              <p className="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">
                {fact.key}
              </p>
              <p className="text-sm text-text-primary">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

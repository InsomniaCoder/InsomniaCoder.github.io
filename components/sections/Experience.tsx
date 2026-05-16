import { experience } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TimelineItem } from '@/components/ui/TimelineItem'

export function Experience() {
  return (
    <section id="resume" className="px-12 py-16 border-b border-navy-surface">
      <SectionHeader label="Where I've been" title="Work Experience" />
      <div>
        {experience.map((role, i) => (
          <TimelineItem
            key={`${role.company}-${role.period}`}
            period={role.period}
            title={role.title}
            subtitle={`${role.company} · ${role.location}`}
            bullets={role.bullets}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

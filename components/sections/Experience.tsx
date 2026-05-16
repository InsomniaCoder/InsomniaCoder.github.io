import { experience, education } from '@/data/resume'
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

      <div className="mt-12 pt-10 border-t border-navy-surface">
        <h3 className="text-xs uppercase tracking-widest text-text-muted mb-6">Education</h3>
        <div className="flex gap-6 items-start">
          <div className="w-2 h-2 rounded-full bg-teal flex-shrink-0 mt-1.5" />
          <div>
            <p className="text-sm font-semibold text-text-primary">{education.degree}</p>
            <p className="text-xs text-text-muted mt-0.5">{education.institution} · {education.location}</p>
            <p className="text-xs text-text-muted">{education.period}</p>
            <div className="flex gap-2 mt-2">
              {education.highlights.map((h) => (
                <span key={h} className="text-[11px] bg-navy-surface border border-navy-border text-teal px-2 py-0.5 rounded-full">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

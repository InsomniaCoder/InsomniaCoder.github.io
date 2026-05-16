import { skills } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkillTag } from '@/components/ui/SkillTag'

export function Skills() {
  return (
    <section id="skills" className="px-12 py-16 border-b border-navy-surface">
      <SectionHeader label="What I work with" title="Skills & Technologies" />
      <div className="grid grid-cols-3 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-[11px] uppercase tracking-widest text-teal font-semibold mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <SkillTag key={tag} label={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

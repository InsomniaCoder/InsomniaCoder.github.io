import { talks } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TalkCard } from '@/components/ui/TalkCard'

export function Talks() {
  return (
    <section id="talks" className="px-12 py-16 border-b border-navy-surface">
      <SectionHeader label="Speaking" title="Talks & Appearances" />
      <div className="flex flex-col gap-4">
        {talks.map((talk) => (
          <TalkCard key={`${talk.event}-${talk.title}`} talk={talk} />
        ))}
      </div>
    </section>
  )
}

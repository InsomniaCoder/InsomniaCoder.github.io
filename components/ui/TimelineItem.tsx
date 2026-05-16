interface TimelineItemProps {
  period: string
  title: string
  subtitle: string
  bullets: string[]
  isLast?: boolean
}

export function TimelineItem({
  period,
  title,
  subtitle,
  bullets,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-7 pb-8">
      {!isLast && (
        <div className="absolute left-[5px] top-3 bottom-0 w-px bg-navy-border" />
      )}
      <div className="absolute left-0 top-[6px] w-3 h-3 rounded-full border-2 border-teal bg-navy" />

      <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">
        {period}
      </p>
      <h3 className="text-base font-semibold text-text-primary mb-0.5">
        {title}
      </h3>
      <p className="text-sm text-teal mb-3">{subtitle}</p>
      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2">
            <span className="text-teal mt-1.5 flex-shrink-0">▸</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

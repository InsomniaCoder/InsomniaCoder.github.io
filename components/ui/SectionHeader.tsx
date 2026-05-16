interface SectionHeaderProps {
  label: string
  title: string
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-2">
        {label}
      </p>
      <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
    </div>
  )
}

interface SkillTagProps {
  label: string
}

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="inline-block bg-navy-surface border border-navy-border text-text-secondary text-xs px-2.5 py-1 rounded">
      {label}
    </span>
  )
}

import { Play } from 'lucide-react'
import type { Talk } from '@/data/resume'

interface TalkCardProps {
  talk: Talk
}

export function TalkCard({ talk }: TalkCardProps) {
  const youtubeUrl = talk.youtubeId
    ? `https://www.youtube.com/watch?v=${talk.youtubeId}`
    : undefined

  const thumbnailUrl = talk.youtubeId
    ? `https://img.youtube.com/vi/${talk.youtubeId}/mqdefault.jpg`
    : undefined

  const inner = (
    <>
      <div className="flex-shrink-0 w-36 h-24 rounded overflow-hidden bg-navy-surface relative">
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt={talk.title}
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Play size={24} className="text-text-muted" />
          </div>
        )}
        {youtubeUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
            <Play size={20} className="text-white fill-white" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-[10px] uppercase tracking-widest text-teal">{talk.event}</p>
        <h3 className="text-sm font-semibold text-text-primary leading-snug group-hover:text-teal transition-colors">
          {talk.title}
        </h3>
        <p className="text-[11px] text-text-muted">{talk.date}</p>
        <p className="text-xs text-text-secondary leading-relaxed mt-1 line-clamp-2">
          {talk.description}
        </p>
      </div>
    </>
  )

  if (youtubeUrl) {
    return (
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-4 bg-navy border border-navy-surface rounded-lg p-4 hover:border-teal/30 transition-colors"
      >
        {inner}
      </a>
    )
  }

  return (
    <div className="group flex gap-4 bg-navy border border-navy-surface rounded-lg p-4">
      {inner}
    </div>
  )
}

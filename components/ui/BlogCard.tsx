import { ExternalLink } from 'lucide-react'
import type { BlogPost } from '@/data/resume'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-navy border border-navy-surface rounded-lg overflow-hidden hover:border-teal/30 transition-colors"
    >
      <div className="h-24 bg-navy-surface flex items-center justify-center text-4xl">
        {post.emoji}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-widest text-teal">{post.tag}</p>
          {post.views && (
            <span className="text-[10px] text-text-muted">{post.views} views</span>
          )}
        </div>
        <h3 className="text-sm font-semibold text-text-primary leading-snug group-hover:text-teal transition-colors">
          {post.title}
        </h3>
        <div className="mt-auto pt-2 flex items-center gap-1 text-[11px] text-text-muted">
          <ExternalLink size={11} />
          <span>Read on Medium</span>
        </div>
      </div>
    </a>
  )
}

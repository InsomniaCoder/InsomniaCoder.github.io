import { blogPosts } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { BlogCard } from '@/components/ui/BlogCard'
import { ExternalLink } from 'lucide-react'

export function BlogPosts() {
  return (
    <section id="blog" className="px-12 py-16 border-b border-navy-surface">
      <SectionHeader label="Writing" title="Blog Posts" />
      <div className="grid grid-cols-2 gap-4 mb-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
      <a
        href="https://tanatloke.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-teal hover:text-teal/80 transition-colors"
      >
        <ExternalLink size={14} />
        View all posts on Medium
      </a>
    </section>
  )
}

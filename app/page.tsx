import { Sidebar } from '@/components/Sidebar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { BlogPosts } from '@/components/sections/BlogPosts'
import { Talks } from '@/components/sections/Talks'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main id="main-scroll" className="main-scroll flex-1 overflow-y-auto">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <BlogPosts />
        <Talks />
        <Contact />
        <footer className="px-12 py-6 text-center text-xs text-text-muted border-t border-navy-surface">
          © {new Date().getFullYear()} Tanat Lokejaroenlarb · Built with Next.js &amp; Tailwind CSS
        </footer>
      </main>
    </div>
  )
}

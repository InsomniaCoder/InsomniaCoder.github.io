# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Tanat Lokejaroenlarb's personal portfolio website — a static Next.js 14 site styled after reactresume.com with a fixed left sidebar and full-width dark-themed stacked sections.

**Architecture:** Single-page Next.js 14 App Router app with `output: 'export'` for static hosting. All content is centralized in `data/resume.ts` as typed data. Layout is a flex shell: 220px fixed sidebar on the left + scrollable main column on the right. Tailwind CSS handles all styling with a custom dark palette (navy `#0f172a`, teal accent `#2dd4bf`).

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS v3, Lucide React (icons), static export for Vercel/GitHub Pages hosting.

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies: next, react, typescript, tailwindcss, lucide-react |
| `next.config.ts` | `output: 'export'`, `images.unoptimized: true` |
| `tailwind.config.ts` | Custom colors (navy, teal, slate palette) |
| `app/layout.tsx` | Root layout, metadata (title, description, OG), font |
| `app/globals.css` | Tailwind directives, base scrollbar styles |
| `app/page.tsx` | Assembles Sidebar + all section components |
| `data/resume.ts` | All typed content: hero, about, experience, skills, blogPosts, talks, contact |
| `components/Sidebar.tsx` | Fixed left nav with active-section tracking via IntersectionObserver |
| `components/sections/Hero.tsx` | Full-viewport hero: name, bio, stats, CTAs, avatar circle |
| `components/sections/About.tsx` | Two-column: bio paragraph + facts grid |
| `components/sections/Experience.tsx` | Vertical timeline of work history |
| `components/sections/Skills.tsx` | 3-column skill groups with tag chips |
| `components/sections/BlogPosts.tsx` | 2-column card grid linking to Medium |
| `components/sections/Talks.tsx` | YouTube thumbnail cards linking to videos |
| `components/sections/Contact.tsx` | Contact links + mailto form |
| `components/ui/SectionHeader.tsx` | Shared label + title block used by all sections |
| `components/ui/TimelineItem.tsx` | Single timeline entry with teal dot |
| `components/ui/SkillTag.tsx` | Small tag chip with border |
| `components/ui/BlogCard.tsx` | Card with emoji, tag label, title, external link |
| `components/ui/TalkCard.tsx` | YouTube thumbnail + event/title/date, links to YouTube |

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `app/page.tsx` (stub)

- [ ] **Step 1.1: Initialise the Next.js project**

```bash
cd /Users/tanat.lokejaroenlarb/Desktop/portfoilio
npx create-next-app@14 . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

Expected: Next.js 14 scaffold written into current directory.

- [ ] **Step 1.2: Install Lucide React**

```bash
npm install lucide-react
```

- [ ] **Step 1.3: Configure static export in `next.config.ts`**

Replace the file contents with:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
```

- [ ] **Step 1.4: Configure Tailwind custom colours in `tailwind.config.ts`**

Replace the file contents with:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          surface: '#1e293b',
          border: '#334155',
        },
        teal: {
          DEFAULT: '#2dd4bf',
          dim: 'rgba(45,212,191,0.08)',
          border: 'rgba(45,212,191,0.3)',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 1.5: Set base styles in `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0f172a;
  color: #f8fafc;
}

/* Hide scrollbar in sidebar on webkit */
.sidebar-scroll::-webkit-scrollbar {
  display: none;
}
.sidebar-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Main scrollable area — thin teal scrollbar */
.main-scroll::-webkit-scrollbar {
  width: 4px;
}
.main-scroll::-webkit-scrollbar-track {
  background: #1e293b;
}
.main-scroll::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 2px;
}
```

- [ ] **Step 1.6: Write stub `app/page.tsx`**

```tsx
export default function Home() {
  return <main>Portfolio coming soon</main>
}
```

- [ ] **Step 1.7: Write root layout `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tanat Lokejaroenlarb — Staff SRE & Platform Engineer',
  description:
    'Personal portfolio of Tanat Lokejaroenlarb, Staff Site Reliability & Platform Engineer at Adevinta, Barcelona. Kubernetes, SRE, platform engineering.',
  openGraph: {
    title: 'Tanat Lokejaroenlarb — Staff SRE & Platform Engineer',
    description:
      'Kubernetes at scale: 30+ clusters, 80k+ pods. Tech blogger & conference speaker.',
    url: 'https://tanatloke.dev',
    siteName: 'Tanat Lokejaroenlarb',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-navy text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 1.8: Start dev server and verify blank page loads**

```bash
npm run dev
```

Open http://localhost:3000 — should show "Portfolio coming soon" on a dark background.

- [ ] **Step 1.9: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js 14 portfolio with Tailwind and static export config"
```

---

## Task 2: Content Data File

**Files:**
- Create: `data/resume.ts`

- [ ] **Step 2.1: Create `data/resume.ts` with all typed content**

```ts
// ── Types ──────────────────────────────────────────────────────────────────

export interface Stat {
  value: string
  label: string
}

export interface Fact {
  key: string
  value: string
}

export interface ExperienceRole {
  company: string
  location: string
  title: string
  period: string
  bullets: string[]
}

export interface SkillGroup {
  category: string
  tags: string[]
}

export interface BlogPost {
  title: string
  tag: string
  emoji: string
  url: string
  views?: string
}

export interface Talk {
  event: string
  title: string
  date: string
  description: string
  youtubeId?: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
  icon: 'linkedin' | 'medium' | 'location' | 'email'
}

// ── Data ───────────────────────────────────────────────────────────────────

export const hero = {
  locationChip: '🇹🇭 → 🇪🇸 Barcelona',
  name: 'Tanat',
  surname: 'Lokejaroenlarb',
  tagline: 'Staff Site Reliability & Platform Engineer at Adevinta',
  bio: 'I build and operate large-scale Kubernetes infrastructure for e-commerce marketplaces across Europe. On the Runtime team at Adevinta, I focus on platform reliability, developer experience, and cloud-native tooling. I write about real-world SRE incidents and platform engineering on Medium, and speak at conferences about what running Kubernetes at scale actually looks like.',
  stats: [
    { value: '30+', label: 'K8s Clusters' },
    { value: '80k+', label: 'Pods' },
    { value: '250k', label: 'RPS at peak' },
    { value: '517', label: 'Medium followers' },
  ] satisfies Stat[],
}

export const about = {
  bio: 'Platform engineer with deep experience designing and operating large-scale Kubernetes infrastructure. Currently on the Runtime team at Adevinta, building SCHIP — an internal PaaS serving 1000+ developers across 30+ production clusters in 4 AWS regions. I write about real-world SRE incidents, platform patterns, and the intersection of LLMs and infrastructure on Medium and the Adevinta tech blog.',
  facts: [
    { key: 'Location', value: 'Barcelona, Spain 🇪🇸' },
    { key: 'Origin', value: 'Thailand 🇹🇭' },
    { key: 'Role', value: 'Staff SRE / Platform Engineer' },
    { key: 'Company', value: 'Adevinta' },
    { key: 'Education', value: 'KMITL, Bangkok (2012–2015)' },
    { key: 'Certifications', value: 'Azure Fundamentals · AZ-301' },
  ] satisfies Fact[],
}

export const experience: ExperienceRole[] = [
  {
    company: 'Adevinta',
    location: 'Barcelona, Spain',
    title: 'Staff Site Reliability Engineer',
    period: '2020 — Present',
    bullets: [
      'Runtime team — building and operating SCHIP, an internal Kubernetes-based PaaS. 30+ production clusters, 4 AWS regions, 2k+ nodes, 80k+ pods, 250k+ RPS at peak.',
      'Led migration from Cluster Autoscaler to AWS Karpenter, achieving €30,000/month in cost savings through automated instance selection and AMD adoption.',
      'Led migration from OPA/Gatekeeper to Kyverno for Kubernetes policy management, improving developer experience and reducing webhook admission latency.',
      'Architected observability stack: Prometheus, Grafana, OpenTelemetry, Cilium/Hubble; built custom dashboards for API deprecation tracking.',
      'Managed Kubernetes upgrade strategy: transitioned from blue-green to in-place upgrades using cluster waves and PDB configurations to minimise SLO impact.',
      'Built first SRE LLM agent using LangchainGo to locate Kubernetes workloads across 30+ clusters, automating a daily tedious task.',
      'Tools: Kubernetes, EKS, ArgoCD, Helm, Karpenter, Kyverno, Prometheus, Grafana, Cilium, Terraform, Go, Python.',
    ],
  },
  {
    company: 'Previous Experience',
    location: 'Thailand',
    title: 'DevOps / Platform Engineering roles',
    period: 'Pre-2020',
    bullets: [
      'Earlier career in DevOps and platform engineering based in Thailand.',
      'Achieved Microsoft Azure Fundamentals and AZ-301 Azure Architect Design certifications.',
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    category: 'Orchestration',
    tags: ['Kubernetes', 'EKS', 'Karpenter', 'ArgoCD', 'Helm', 'Cluster API'],
  },
  {
    category: 'Policy & Security',
    tags: ['Kyverno', 'OPA / Gatekeeper', 'RBAC', 'Cilium', 'NetworkPolicy'],
  },
  {
    category: 'Observability',
    tags: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Hubble', 'Loki'],
  },
  {
    category: 'Cloud & Infra',
    tags: ['AWS', 'Azure', 'Terraform', 'Pulumi', 'ELB', 'VPC'],
  },
  {
    category: 'Programming',
    tags: ['Go', 'Python', 'Bash', 'TypeScript'],
  },
  {
    category: 'AI / LLM',
    tags: ['LangchainGo', 'k8sgpt', 'Ollama', 'LLM Agents'],
  },
]

export const blogPosts: BlogPost[] = [
  {
    title: 'When VerticalPodAutoscaler Goes Rogue: How an Autoscaler Took Down Our Cluster',
    tag: 'Kubernetes · Incident',
    emoji: '⚡',
    url: 'https://tanatloke.medium.com/when-verticalpodautoscaler-goes-rogue-how-an-autoscaler-took-down-our-cluster-020ff80660a1',
    views: '50K',
  },
  {
    title: 'Solving the Karpenter Price-Performance Trap with NodeOverlays',
    tag: 'Karpenter · Cost',
    emoji: '🚀',
    url: 'https://medium.com/learnings-from-the-paas/solving-the-karpenter-price-performance-trap-with-nodeoverlays-82d5fac15da1',
  },
  {
    title: 'How we S(C)HIP Metrics for 1000+ Developers — Part 1',
    tag: 'Observability · Platform',
    emoji: '📊',
    url: 'https://tanatloke.medium.com/',
  },
  {
    title: 'How we S(C)HIP Logs for 1000+ Developers — Part 2',
    tag: 'Observability · Platform',
    emoji: '📋',
    url: 'https://tanatloke.medium.com/',
  },
  {
    title: 'Developing My First SRE Helper LLM Agent Using LangchainGo',
    tag: 'LLM · Go · SRE',
    emoji: '🤖',
    url: 'https://medium.com/learnings-from-the-paas/developing-my-first-sre-helper-llm-agent-using-langchaingo-63f4201636f5',
  },
  {
    title: 'Running K8SGPT with Ollama Inside Your Kubernetes Cluster',
    tag: 'AI · Kubernetes',
    emoji: '🧠',
    url: 'https://tanatloke.medium.com/',
  },
  {
    title: 'Trial by Fire: Tales from the SRE Frontlines — Ep1: Challenge the Certificates',
    tag: 'Incident · SRE',
    emoji: '🔥',
    url: 'https://adevinta.com/techblog/trial-by-fire-tales-from-the-sre-frontlines-ep1-challenge-the-certificates/',
  },
]

export const talks: Talk[] = [
  {
    event: 'P99 CONF 2025',
    title: 'From Gatekeeper to Kyverno: Kubernetes Policy Management with Performance',
    date: '2025',
    description:
      'Sharing our journey migrating from OPA/Gatekeeper to Kyverno at scale — policy design, migration strategy, admission latency lessons, and how to avoid taking down your cluster with a webhook.',
    youtubeId: 'OlUH0TM5O6I',
  },
  {
    event: 'KubeFM Podcast',
    title: 'The Karpenter Effect: Redefining Kubernetes Operations',
    date: 'November 2025',
    description:
      'How replacing EKS Managed Node Groups and Cluster Autoscaler with Karpenter transformed our Kubernetes operations, decoupled control/data plane upgrades, and saved €30,000/month.',
    youtubeId: 'HoxHcf9Wl7k',
  },
  {
    event: 'KubeFM Podcast',
    title: 'Kubernetes Upgrades: Beyond the One-Click Update',
    date: 'May 2025',
    description:
      "How Adevinta transitioned from blue-green to in-place Kubernetes upgrades for SCHIP, covering API deprecation tracking, cluster waves, PDB configuration, and ELB warm-up strategies.",
    youtubeId: 'Pmv_UBJMJDo',
  },
  {
    event: 'DevOps Barcelona 2025',
    title: 'Observability to Resolution: The Journey Through a Production K8s Incident',
    date: '2025',
    description:
      'A live walkthrough of a real production Kubernetes incident — from alert to root cause — showing how observability tools (metrics, traces, logs) guide an SRE through diagnosis and resolution.',
    youtubeId: 'QVuoTvoPpaw',
  },
  {
    event: 'KyvernoCon 2025',
    title: 'Webhook Topology and Admission Latency: Lessons from Migration',
    date: '2025',
    description:
      'Real-world lessons from migrating Kubernetes admission webhooks at scale: how webhook topology affects cluster stability, how to measure admission latency, and how to survive the migration.',
  },
]

export const contact = {
  message:
    "Interested in talking about platform engineering, SRE, Kubernetes, or cloud-native topics? I'm always happy to connect with fellow engineers — reach out via LinkedIn or Medium.",
  links: [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/tanatloke',
      href: 'https://www.linkedin.com/in/tanatloke/',
      icon: 'linkedin',
    },
    {
      label: 'Medium',
      value: 'tanatloke.medium.com',
      href: 'https://tanatloke.medium.com/',
      icon: 'medium',
    },
    {
      label: 'Location',
      value: 'Barcelona, Spain',
      href: 'https://www.google.com/maps/place/Barcelona',
      icon: 'location',
    },
  ] satisfies ContactLink[],
}
```

- [ ] **Step 2.2: Commit**

```bash
git add data/resume.ts
git commit -m "feat: add typed resume data file with all content"
```

---

## Task 3: Shared UI Components

**Files:**
- Create: `components/ui/SectionHeader.tsx`
- Create: `components/ui/TimelineItem.tsx`
- Create: `components/ui/SkillTag.tsx`
- Create: `components/ui/BlogCard.tsx`
- Create: `components/ui/TalkCard.tsx`

- [ ] **Step 3.1: Create `components/ui/SectionHeader.tsx`**

```tsx
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
```

- [ ] **Step 3.2: Create `components/ui/TimelineItem.tsx`**

```tsx
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
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[5px] top-3 bottom-0 w-px bg-navy-border" />
      )}
      {/* Dot */}
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
```

- [ ] **Step 3.3: Create `components/ui/SkillTag.tsx`**

```tsx
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
```

- [ ] **Step 3.4: Create `components/ui/BlogCard.tsx`**

```tsx
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
      {/* Emoji banner */}
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
```

- [ ] **Step 3.5: Create `components/ui/TalkCard.tsx`**

```tsx
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

  const CardWrapper = ({ children }: { children: React.ReactNode }) =>
    youtubeUrl ? (
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-4 bg-navy border border-navy-surface rounded-lg p-4 hover:border-teal/30 transition-colors"
      >
        {children}
      </a>
    ) : (
      <div className="group flex gap-4 bg-navy border border-navy-surface rounded-lg p-4">
        {children}
      </div>
    )

  return (
    <CardWrapper>
      {/* Thumbnail or play icon placeholder */}
      <div className="flex-shrink-0 w-32 h-20 rounded overflow-hidden bg-navy-surface relative">
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

      {/* Text */}
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-[10px] uppercase tracking-widest text-teal">{talk.event}</p>
        <h3 className="text-sm font-semibold text-text-primary leading-snug group-hover:text-teal transition-colors line-clamp-2">
          {talk.title}
        </h3>
        <p className="text-[11px] text-text-muted">{talk.date}</p>
        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mt-1">
          {talk.description}
        </p>
      </div>
    </CardWrapper>
  )
}
```

- [ ] **Step 3.6: Commit**

```bash
git add components/ui/
git commit -m "feat: add shared UI components (SectionHeader, TimelineItem, SkillTag, BlogCard, TalkCard)"
```

---

## Task 4: Section Components

**Files:**
- Create: `components/sections/Hero.tsx`
- Create: `components/sections/About.tsx`
- Create: `components/sections/Experience.tsx`
- Create: `components/sections/Skills.tsx`
- Create: `components/sections/BlogPosts.tsx`
- Create: `components/sections/Talks.tsx`
- Create: `components/sections/Contact.tsx`

- [ ] **Step 4.1: Create `components/sections/Hero.tsx`**

```tsx
import { hero } from '@/data/resume'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-16 px-12 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #0f172a 100%)',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.02) 40px,rgba(255,255,255,0.02) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.02) 40px,rgba(255,255,255,0.02) 41px)',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 15% 60%, rgba(45,212,191,0.06) 0%, transparent 50%)',
        }}
      />

      {/* Avatar circle — right side */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-teal/25 bg-navy-surface flex items-center justify-center text-6xl select-none">
        👨‍💻
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-xl">
        {/* Location chip */}
        <div className="inline-flex items-center gap-2 border border-teal/30 bg-teal-dim text-teal text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
          {hero.locationChip}
        </div>

        <h1 className="text-5xl font-extrabold leading-tight text-text-primary mb-4">
          I&apos;m <span className="text-teal">{hero.name}</span>
          <br />
          {hero.surname}.
        </h1>

        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {hero.bio}
        </p>

        {/* Stats row */}
        <div className="flex gap-8 mb-7">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-teal">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3">
          <a
            href="#blog"
            className="bg-teal text-navy font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-teal/90 transition-colors"
          >
            View Blog Posts
          </a>
          <a
            href="#contact"
            className="border border-navy-border text-text-secondary text-sm px-5 py-2.5 rounded-md hover:border-teal/40 hover:text-text-primary transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4.2: Create `components/sections/About.tsx`**

```tsx
import { about } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function About() {
  return (
    <section
      id="about"
      className="px-12 py-16 border-b border-navy-surface"
    >
      <SectionHeader label="Get to know me" title="About Me" />
      <div className="grid grid-cols-2 gap-12 items-start">
        <p className="text-sm text-text-secondary leading-relaxed">{about.bio}</p>
        <div className="grid grid-cols-2 gap-4">
          {about.facts.map((fact) => (
            <div key={fact.key}>
              <p className="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">
                {fact.key}
              </p>
              <p className="text-sm text-text-primary">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4.3: Create `components/sections/Experience.tsx`**

```tsx
import { experience } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TimelineItem } from '@/components/ui/TimelineItem'

export function Experience() {
  return (
    <section
      id="resume"
      className="px-12 py-16 border-b border-navy-surface"
    >
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
    </section>
  )
}
```

- [ ] **Step 4.4: Create `components/sections/Skills.tsx`**

```tsx
import { skills } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkillTag } from '@/components/ui/SkillTag'

export function Skills() {
  return (
    <section
      id="skills"
      className="px-12 py-16 border-b border-navy-surface"
    >
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
```

- [ ] **Step 4.5: Create `components/sections/BlogPosts.tsx`**

```tsx
import { blogPosts } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { BlogCard } from '@/components/ui/BlogCard'
import { ExternalLink } from 'lucide-react'

export function BlogPosts() {
  return (
    <section
      id="blog"
      className="px-12 py-16 border-b border-navy-surface"
    >
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
```

- [ ] **Step 4.6: Create `components/sections/Talks.tsx`**

```tsx
import { talks } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TalkCard } from '@/components/ui/TalkCard'

export function Talks() {
  return (
    <section
      id="talks"
      className="px-12 py-16 border-b border-navy-surface"
    >
      <SectionHeader label="Speaking" title="Talks & Appearances" />
      <div className="flex flex-col gap-4">
        {talks.map((talk) => (
          <TalkCard key={`${talk.event}-${talk.title}`} talk={talk} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4.7: Create `components/sections/Contact.tsx`**

```tsx
import { contact } from '@/data/resume'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Linkedin, BookOpen, MapPin } from 'lucide-react'

const iconMap = {
  linkedin: Linkedin,
  medium: BookOpen,
  location: MapPin,
  email: MapPin,
}

export function Contact() {
  return (
    <section
      id="contact"
      className="px-12 py-16"
    >
      <SectionHeader label="Say hello" title="Get in Touch" />
      <div className="grid grid-cols-2 gap-12">
        <p className="text-sm text-text-secondary leading-relaxed">{contact.message}</p>
        <div className="flex flex-col gap-4">
          {contact.links.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-teal transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-navy-surface flex items-center justify-center group-hover:bg-teal-dim transition-colors flex-shrink-0">
                  <Icon size={14} className="text-text-muted group-hover:text-teal" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm">{link.value}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4.8: Commit**

```bash
git add components/sections/
git commit -m "feat: add all section components (Hero, About, Experience, Skills, BlogPosts, Talks, Contact)"
```

---

## Task 5: Sidebar Component

**Files:**
- Create: `components/Sidebar.tsx`

- [ ] **Step 5.1: Create `components/Sidebar.tsx`**

The sidebar uses `IntersectionObserver` (client component) to highlight the active section as the user scrolls.

```tsx
'use client'

import { useEffect, useState } from 'react'
import { Linkedin, BookOpen } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'skills', label: 'Skills' },
  { id: 'blog', label: 'Blog Posts' },
  { id: 'talks', label: 'Talks' },
  { id: 'contact', label: 'Contact' },
]

export function Sidebar() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sidebar-scroll w-[220px] min-w-[220px] bg-navy border-r border-navy-surface sticky top-0 h-screen flex flex-col px-5 py-7 gap-1.5">
      <p className="text-sm font-bold text-text-primary mb-0.5">Tanat L.</p>
      <p className="text-[10px] text-text-muted uppercase tracking-wider leading-relaxed mb-5">
        Staff SRE &<br />Platform Engineer
      </p>

      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-xs transition-colors text-left ${
            activeId === item.id
              ? 'bg-navy-surface text-teal'
              : 'text-text-muted hover:text-text-secondary hover:bg-navy-surface/50'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
              activeId === item.id ? 'bg-teal' : 'bg-navy-border'
            }`}
          />
          {item.label}
        </button>
      ))}

      {/* Social icons — pinned to bottom */}
      <div className="mt-auto pt-5 border-t border-navy-surface flex gap-2">
        <a
          href="https://www.linkedin.com/in/tanatloke/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="w-7 h-7 rounded-full bg-navy-surface flex items-center justify-center text-text-muted hover:bg-teal-dim hover:text-teal transition-colors"
        >
          <Linkedin size={13} />
        </a>
        <a
          href="https://tanatloke.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Medium"
          className="w-7 h-7 rounded-full bg-navy-surface flex items-center justify-center text-text-muted hover:bg-teal-dim hover:text-teal transition-colors"
        >
          <BookOpen size={13} />
        </a>
      </div>
    </nav>
  )
}
```

- [ ] **Step 5.2: Commit**

```bash
git add components/Sidebar.tsx
git commit -m "feat: add sticky sidebar with IntersectionObserver active-section tracking"
```

---

## Task 6: Assemble Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 6.1: Replace stub `app/page.tsx` with final assembled page**

```tsx
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
      <main className="main-scroll flex-1 overflow-y-auto">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <BlogPosts />
        <Talks />
        <Contact />
        <footer className="px-12 py-6 text-center text-xs text-text-muted border-t border-navy-surface">
          © {new Date().getFullYear()} Tanat Lokejaroenlarb · Built with Next.js & Tailwind CSS
        </footer>
      </main>
    </div>
  )
}
```

- [ ] **Step 6.2: Start dev server and verify full layout**

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- Sidebar is fixed on the left, all 6 nav links visible
- Hero section fills the viewport with name, stats, CTAs
- Scrolling through all 7 sections works smoothly
- Sidebar active dot updates as you scroll
- Social icons appear at sidebar bottom

- [ ] **Step 6.3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble full portfolio page with sidebar and all sections"
```

---

## Task 7: Static Export & Verification

**Files:**
- No new files — verifies the build

- [ ] **Step 7.1: Run static export build**

```bash
npm run build
```

Expected: Build completes without errors. An `out/` directory is created containing `index.html` and static assets.

- [ ] **Step 7.2: Serve and verify the static build locally**

```bash
npx serve out
```

Open http://localhost:3000 (or whichever port `serve` shows). Verify:
- Page renders identically to dev server
- All images (YouTube thumbnails) load
- All links open correct URLs in a new tab
- No broken console errors

- [ ] **Step 7.3: Add `.gitignore` entries**

Ensure these are in `.gitignore` (add if missing):

```
.next/
out/
.superpowers/
node_modules/
```

- [ ] **Step 7.4: Final commit**

```bash
git add .gitignore
git commit -m "chore: verify static export build and add .superpowers to .gitignore"
```

---

## Self-Review Notes

- **Spec coverage check:** Hero ✅, About ✅, Experience with SCHIP/Karpenter/Kyverno bullets ✅, Skills 6 groups ✅, Blog posts 7 cards ✅, Talks 5 cards with YouTube IDs ✅, Contact ✅, Static export ✅, Sidebar IntersectionObserver ✅, YouTube thumbnails ✅
- **Type consistency:** `BlogPost`, `Talk`, `Stat`, `Fact`, `ExperienceRole`, `SkillGroup`, `ContactLink` defined in Task 2 and used in Tasks 3–4 — names match throughout
- **No placeholders:** All code blocks are complete; no TBD/TODO in task steps
- **YouTube thumbnails:** Using `https://img.youtube.com/vi/{id}/mqdefault.jpg` — works without API key
- **Static export + `<img>`:** Used native `<img>` in TalkCard (not `next/image`) since static export with `unoptimized: true` is set; this avoids any Image Optimization API issues

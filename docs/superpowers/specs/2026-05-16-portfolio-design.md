# Portfolio Website Design Spec
**Date:** 2026-05-16  
**Subject:** Tanat Lokejaroenlarb — Personal Portfolio Website

---

## 1. Overview

A personal portfolio website for Tanat Lokejaroenlarb, Staff SRE & Platform Engineer at Adevinta (Barcelona). Styled after [reactresume.com](https://reactresume.com) — dark theme, fixed left sidebar nav, full-width stacked sections. Built as a static single-page site.

**Goal:** Showcase technical credibility, blog writing, conference talks, and open the door to community connections and speaking invitations.

---

## 2. Style & Visual Design

- **Layout:** Fixed left sidebar (220px) + full-width scrollable main content — identical structure to demo.reactresume.com
- **Color palette:**
  - Background: `#0f172a` (deep navy)
  - Surface: `#1e293b`
  - Accent: `#2dd4bf` (teal — matches reactresume green energy)
  - Text primary: `#f8fafc`
  - Text secondary: `#94a3b8`
- **Typography:** System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`); hero name in bold weight ~52px
- **Sidebar nav:** Sticky, active link highlighted with teal dot + text color change; social icons at bottom
- **Approved mockup:** `/.superpowers/brainstorm/65144-1778927031/content/layout-overview.html`

---

## 3. Sections (in order)

### 3.1 Hero
- Full-viewport-height section with dark gradient background + subtle grid pattern
- Teal location chip: "🇹🇭 → 🇪🇸 Barcelona"
- Name: "I'm **Tanat** Lokejaroenlarb."
- Tagline: Staff Site Reliability & Platform Engineer at Adevinta
- Short bio paragraph
- Stats row: 30+ Clusters | 80k+ Pods | 250k RPS | 517 Medium followers
- Two CTAs: "View Blog Posts" + "Contact Me"
- Avatar placeholder (circle, right side — user to supply photo)

### 3.2 About
- Two-column: bio paragraph (left) + facts grid (right)
- Facts: Location (Barcelona), Origin (Thailand), Role, Company, Education (KMITL 2012–2015), Certifications (Azure Fundamentals, AZ-301)

### 3.3 Experience (Resume)
- Vertical timeline with teal dots
- **Adevinta** (Staff SRE, 2020–Present, Barcelona)
  - Runtime team, SCHIP platform: 30+ production clusters, 4 AWS regions, 2k+ nodes, 80k+ pods, 250k+ RPS
  - Led migrations: Cluster Autoscaler → Karpenter (€30k/month savings), OPA/Gatekeeper → Kyverno
  - Tools: Kubernetes, ArgoCD, Helm, Karpenter, Kyverno, Prometheus, Grafana, Cilium/Hubble, Terraform, Go
- Earlier career roles in Thailand (placeholder — user to fill details)

### 3.4 Skills
- 3-column grid of skill groups with tag chips:
  - **Orchestration:** Kubernetes, Karpenter, ArgoCD, Helm
  - **Policy & Security:** Kyverno, OPA/Gatekeeper, RBAC, Cilium
  - **Observability:** Prometheus, Grafana, OpenTelemetry, Hubble
  - **Cloud & Infra:** AWS (EKS), Azure, Terraform
  - **Programming:** Go, Python, Bash
  - **AI / LLM:** LangchainGo, k8sgpt, Ollama

### 3.5 Blog Posts
- 2-column card grid, each card links out to Medium
- Cards use emoji/icon + tag + title
- All known posts:
  1. When VerticalPodAutoscaler Goes Rogue (50K views) — `https://tanatloke.medium.com/when-verticalpodautoscaler-goes-rogue-how-an-autoscaler-took-down-our-cluster-020ff80660a1`
  2. Solving the Karpenter Price-Performance Trap with NodeOverlays
  3. How we S(C)HIP Metrics for 1000+ Developers — Part 1
  4. How we S(C)HIP Logs for 1000+ Developers — Part 2
  5. Developing My First SRE Helper LLM Agent Using LangchainGo
  6. Running K8SGPT with Ollama Inside Kubernetes
  7. Trial by Fire: Tales from the SRE Frontlines — Ep1 (Certificates)
  - Link to full Medium profile for more

### 3.6 Talks & Appearances
- List of cards with embedded YouTube thumbnails (click opens YouTube)
- Each card: event name, talk title, date, short description, YouTube embed/link

| # | Event | Title | Date | YouTube ID |
|---|-------|-------|------|-----------|
| 1 | P99 CONF 2025 | From Gatekeeper to Kyverno: Kubernetes Policy Management with Performance | 2025 | `OlUH0TM5O6I` |
| 2 | KubeFM Podcast | The Karpenter Effect: Redefining Kubernetes Operations | Nov 2025 | `HoxHcf9Wl7k` |
| 3 | KubeFM Podcast | Kubernetes Upgrades: Beyond the One-Click Update | May 2025 | `Pmv_UBJMJDo` |
| 4 | DevOps Barcelona 2025 | Observability to Resolution: The Journey Through a Production K8s Incident | 2025 | `QVuoTvoPpaw` |
| 5 | KyvernoCon | Webhook Topology and Admission Latency: Lessons from Migration | 2025 | — |

### 3.7 Contact
- Short message inviting connection
- Links: LinkedIn (`linkedin.com/in/tanatloke`), Medium (`tanatloke.medium.com`), Location (Barcelona, Spain)
- Simple contact form (name, email, message) — submits via `mailto:` or Formspree

---

## 4. Tech Stack

- **Framework:** Next.js 14 (App Router) — same as reactresume template, static export (`output: 'export'`)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Icons:** Heroicons or Lucide React
- **YouTube embeds:** `<iframe>` with `youtube-nocookie.com` for privacy
- **Hosting:** Vercel (free tier, static export) or GitHub Pages
- **No backend required** — contact form via Formspree (free tier)

---

## 5. File Structure

```
portfoilio/
├── app/
│   ├── layout.tsx          # root layout, font, metadata
│   ├── page.tsx            # single page, imports all sections
│   └── globals.css
├── components/
│   ├── Sidebar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── BlogPosts.tsx
│   │   ├── Talks.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── TimelineItem.tsx
│       ├── SkillTag.tsx
│       ├── BlogCard.tsx
│       └── TalkCard.tsx
├── data/
│   └── resume.ts           # all content as typed data (easy to update)
├── public/
│   └── avatar.jpg          # user to supply
└── package.json
```

---

## 6. Data File (`data/resume.ts`)

All content lives in one typed file so it's easy to update without touching components:
- `hero`: name, tagline, bio, stats, location
- `about`: facts list
- `experience`: array of roles with bullets
- `skills`: array of groups with tags
- `blogPosts`: array of {title, tag, url, emoji, views?}
- `talks`: array of {event, title, date, description, youtubeId?}
- `contact`: links

---

## 7. Out of Scope

- CMS / admin panel
- Dark/light mode toggle
- Analytics (can be added later with Vercel Analytics)
- PDF resume download (can be added later)

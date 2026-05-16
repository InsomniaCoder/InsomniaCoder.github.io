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
  isEducation?: boolean
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
    { value: '100K+', label: 'Pods' },
    { value: '300K', label: 'RPS at peak' },
    { value: '300+', label: 'Incidents led' },
  ] satisfies Stat[],
}

export const about = {
  bio: 'Platform engineer with deep experience designing and operating large-scale Kubernetes infrastructure. Currently on the Runtime team at Adevinta, building SCHIP — an internal PaaS serving 1000+ developers across 30+ production clusters in 4 AWS regions. I write about real-world SRE incidents, platform patterns, and the intersection of LLMs and infrastructure on Medium and the Adevinta tech blog.',
  facts: [
    { key: 'Location', value: 'Barcelona, Spain 🇪🇸' },
    { key: 'Origin', value: 'Thailand 🇹🇭' },
    { key: 'Role', value: 'Staff SRE / Platform Engineer' },
    { key: 'Company', value: 'Adevinta' },
    { key: 'Education', value: 'BSc CS, KMITL — First-class Honours, Gold Medal' },
    { key: 'GitHub', value: 'github.com/InsomniaCoder' },
  ] satisfies Fact[],
}

export const experience: ExperienceRole[] = [
  {
    company: 'Adevinta',
    location: 'Barcelona, Spain',
    title: 'Staff Site Reliability Engineer',
    period: 'Mar 2024 — Present',
    bullets: [
      'Designed and evolved a cluster fleet management model, treating Kubernetes clusters as declarative, self-validating entities rather than snowflakes.',
      'Built and operated custom Kubernetes operators acting as a control plane for cluster lifecycle, maintenance, and rollout orchestration.',
      'Implemented progressive, SLO-gated cluster rollouts using reliability signals and blackbox tests to ensure safety before advancing changes across the fleet.',
      'Established platform-level reliability standards including SLO/SLI definitions, alerting principles, and incident response expectations adopted across teams.',
      'Designed instance management and reliability strategies to make maintenance automated, repeatable, and low-effort, significantly reducing operational risk.',
      'Partnered with technical leadership to influence platform architecture, networking models, and operational strategy, balancing reliability, cost efficiency, and developer experience.',
    ],
  },
  {
    company: 'Adevinta',
    location: 'Barcelona, Spain',
    title: 'Senior DevOps Engineer',
    period: 'Mar 2023 — Mar 2024',
    bullets: [
      'Established and operationalised SLOs and SLIs for critical platform services, enabling objective reliability discussions and prioritisation.',
      'Redesigned alerting and response workflows to shift from reactive paging to signal-driven operations.',
      'Introduced self-healing mechanisms and automation to eliminate common failure modes and reduce operational noise.',
      'Led the evolution of Kubernetes upgrade strategy, transitioning from Blue/Green to in-place EKS upgrades to simplify fleet operations.',
      'Worked hands-on across Kubernetes, observability, and platform tooling to improve reliability, scalability, and cost efficiency at platform scale.',
    ],
  },
  {
    company: 'Adevinta',
    location: 'Barcelona, Spain',
    title: 'DevOps Engineer',
    period: 'Oct 2021 — Mar 2023',
    bullets: [
      'Operated and supported production Kubernetes clusters as part of a shared internal platform.',
      'Defined reliability expectations (SLOs) for common platform services such as ingress, certificates, logging, and monitoring.',
      'Built Kubernetes operators and automation to improve onboarding and reduce operational friction for platform users.',
      'Integrated IAM, autoscaling, logging, and monitoring capabilities to accelerate teams from development to production.',
    ],
  },
  {
    company: 'Monix',
    location: 'Bangkok, Thailand',
    title: 'DevOps Engineer / Platform Infrastructure Owner',
    period: 'Mar 2021 — Oct 2021',
    bullets: [
      'Designed and operated AWS-based infrastructure including production-grade EKS, networking, and security foundations.',
      'Built an internal developer platform covering CI/CD pipelines, identity management, secrets, and certificate automation.',
      'Operated and maintained stateful production systems including Kafka and MongoDB.',
      'Established cloud cost governance practices and introduced CNCF-aligned tooling such as GitOps, Kubernetes Operators, and Vault.',
    ],
  },
  {
    company: 'Exxonmobil',
    location: 'Thailand & Global',
    title: 'Software / Platform Engineer',
    period: 'Jun 2016 — Nov 2020',
    bullets: [
      'Led platform and DevOps enablement efforts for globally distributed engineering teams.',
      'Designed Kubernetes-based platforms on Azure and OpenShift.',
      'Defined Infrastructure-as-Code and CI/CD standards adopted across multiple teams.',
      'Designed event-driven microservices architectures using Kafka and Redis.',
      'Provided architecture guidance, reference implementations, and best practices to accelerate product delivery.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science (BSc), Computer Science',
  institution: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
  location: 'Bangkok, Thailand',
  period: '2012 — 2015',
  highlights: ['GPA: 3.87', 'First-class Honours', 'Gold Medal recipient'],
}

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
      'How Adevinta transitioned from blue-green to in-place Kubernetes upgrades for SCHIP, covering API deprecation tracking, cluster waves, PDB configuration, and ELB warm-up strategies.',
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

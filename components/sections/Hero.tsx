import { hero } from '@/data/resume'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-16 px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #0f172a 100%)',
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
          background: 'radial-gradient(circle at 15% 60%, rgba(45,212,191,0.06) 0%, transparent 50%)',
        }}
      />

      {/* Avatar circle */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-teal/25 bg-navy-surface flex items-center justify-center text-6xl select-none">
        👨‍💻
      </div>

      <div className="relative z-10 max-w-xl">
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

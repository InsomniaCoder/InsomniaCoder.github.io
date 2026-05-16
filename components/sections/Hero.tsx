import { hero } from '@/data/resume'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-16 px-12 overflow-hidden"
    >
      {/* Conference photo background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/conference-zoomout.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay to keep text readable */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,27,75,0.80) 45%, rgba(15,23,42,0.70) 100%)' }}
      />
      {/* Bottom fade so sections blend */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-navy pointer-events-none" />

      {/* Avatar */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-4 border-teal/30 overflow-hidden shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/avatar.jpeg" alt="Tanat Lokejaroenlarb" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 border border-teal/30 bg-teal-dim text-teal text-xs uppercase tracking-widest px-3.5 py-2 rounded-full mb-6">
          {hero.locationChip}
        </div>

        <h1 className="text-6xl font-extrabold leading-tight text-text-primary mb-5">
          I&apos;m <span className="text-teal">{hero.name}</span>
          <br />
          {hero.surname}.
        </h1>

        <p className="text-base text-text-secondary leading-relaxed mb-8">
          {hero.bio}
        </p>

        <div className="flex gap-10 mb-9">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-teal">{stat.value}</p>
              <p className="text-[11px] uppercase tracking-widest text-text-muted mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href="#blog"
            className="bg-teal text-navy font-semibold text-sm px-6 py-3 rounded-md hover:bg-teal/90 transition-colors"
          >
            View Blog Posts
          </a>
          <a
            href="#contact"
            className="border border-navy-border text-text-secondary text-sm px-6 py-3 rounded-md hover:border-teal/40 hover:text-text-primary transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

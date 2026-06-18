import content from '../content.js'

export default function Hero() {
  const { hero } = content
  return (
    <section
      id="hero"
      className="flex items-center justify-center pt-24 pb-16 sm:pt-16 sm:min-h-[80vh]"
      style={{ background: 'rgba(248,250,252,0.88)' }}
    >
      <div className="text-center w-full px-5 sm:px-8 max-w-3xl mx-auto">
        <p className="font-body text-xs font-semibold tracking-widest uppercase text-sky mb-5">
          {hero.eyebrow}
        </p>
        <h1
          className="font-heading font-extrabold text-navy leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
        >
          {hero.headline_part1}
          <span style={{ color: '#1D6FE8' }}>{hero.headline_highlight}</span>
          {hero.headline_part2}
        </h1>
        <p className="font-body text-lg leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: '#6B7280' }}>
          {hero.subheadline}
        </p>
        <a
          href="https://calendly.com/sourabhborase/30min"
          target="_blank" rel="noopener noreferrer"
          className="inline-block font-heading font-bold text-white bg-navy hover:bg-[#162f54] transition-colors px-9 py-4 rounded-lg text-base"
        >
          {hero.cta1}
        </a>
      </div>
    </section>
  )
}

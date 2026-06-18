import content from '../content.js'

export default function FinalCTA() {
  const { finalCta } = content
  return (
    <section id="demo" className="py-28 px-6" style={{ background: '#0F2A4A' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading font-bold text-white text-4xl md:text-5xl mb-6 leading-tight">
          {finalCta.headline}
        </h2>
        <p className="font-body text-lg mb-10 leading-relaxed" style={{ color: '#CBD5E1' }}>
          {finalCta.subheadline}
        </p>
        <a
          href="#"
          className="inline-block font-heading font-bold text-white bg-sky hover:bg-[#1558c0] transition-colors px-10 py-4 rounded-lg text-base"
        >
          {finalCta.cta3}
        </a>
      </div>
    </section>
  )
}

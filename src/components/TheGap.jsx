import content from '../content.js'

function XIcon({ size = 20, color = '#E24B4A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="5" y1="5" x2="15" y2="15" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="15" y1="5" x2="5" y2="15" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon({ size = 20, color = '#1D6FE8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <polyline points="4,10 8,14 16,6" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CircleXIcon() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
      style={{ background: 'rgba(226,75,74,0.1)', border: '2px solid #E24B4A' }}>
      <XIcon size={22} color="#E24B4A" />
    </div>
  )
}

function CircleCheckIcon() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
      style={{ background: 'rgba(29,111,232,0.1)', border: '2px solid #1D6FE8' }}>
      <CheckIcon size={22} color="#1D6FE8" />
    </div>
  )
}

export default function TheGap() {
  const { gap } = content
  return (
    <section id="about" className="py-24 px-6" style={{ background: 'rgba(239,246,255,0.88)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-sky mb-3">
            {gap.eyebrow}
          </p>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-5 max-w-2xl mx-auto">
            {gap.headline}
          </h2>
          <p className="font-body text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            {gap.introLine}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Before card */}
          <div className="flex-1 rounded-2xl p-8 bg-white" style={{ border: '1px solid #E2E8F0' }}>
            <CircleXIcon />
            <h3 className="font-heading font-bold text-lg mb-6" style={{ color: '#1A2B3C' }}>
              {gap.beforeLabel}
            </h3>
            <ul className="space-y-4">
              {gap.beforePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5"><XIcon size={18} color="#E24B4A" /></span>
                  <span className="font-body text-sm leading-relaxed" style={{ color: '#6B7280' }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After card */}
          <div className="flex-1 rounded-2xl p-8 bg-white"
            style={{
              border: '1px solid rgba(29,111,232,0.3)',
              boxShadow: '0 0 24px rgba(29,111,232,0.08)',
            }}>
            <CircleCheckIcon />
            <h3 className="font-heading font-bold text-lg mb-6" style={{ color: '#1A2B3C' }}>
              {gap.afterLabel}
            </h3>
            <ul className="space-y-4">
              {gap.afterPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5"><CheckIcon size={18} color="#1D6FE8" /></span>
                  <span className="font-body text-sm leading-relaxed" style={{ color: '#6B7280' }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

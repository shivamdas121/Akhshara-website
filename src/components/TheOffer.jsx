import content from '../content.js'

const icons = {
  0: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="6" width="22" height="19" rx="2.5" stroke="#1D6FE8" strokeWidth="1.8" />
      <line x1="3" y1="11" x2="25" y2="11" stroke="#1D6FE8" strokeWidth="1.8" />
      <line x1="9" y1="3" x2="9" y2="9" stroke="#1D6FE8" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="19" y1="3" x2="19" y2="9" stroke="#1D6FE8" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="8" y="15" width="4" height="4" rx="0.8" fill="#1D6FE8" />
      <rect x="16" y="15" width="4" height="4" rx="0.8" fill="#1D6FE8" />
    </svg>
  ),
  1: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="10" r="4" stroke="#1D6FE8" strokeWidth="1.8" />
      <circle cx="20" cy="10" r="3.5" stroke="#1D6FE8" strokeWidth="1.8" />
      <path d="M2 24c0-4 3.6-7 8-7s8 3 8 7" stroke="#1D6FE8" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 17c2.8 0 5 2 5 4.5" stroke="#1D6FE8" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  2: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <path d="M3 13.5L14 4l11 9.5" stroke="#1D6FE8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 11.5V23h6v-5h4v5h6V11.5" stroke="#1D6FE8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  3: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="12" r="5" stroke="#1D6FE8" strokeWidth="1.8" />
      <path d="M5 24c0-5 4-8 9-8s9 3 9 8" stroke="#1D6FE8" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  4: (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="5" width="22" height="18" rx="3" stroke="#1D6FE8" strokeWidth="1.8" />
      <path d="M14 10v8M11 12h4.5a1.5 1.5 0 0 1 0 3H11" stroke="#1D6FE8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

function UpBadge({ pct }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '2px',
      background: '#F0FDF4', color: '#16A34A',
      fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
      padding: '3px 7px', borderRadius: '20px', whiteSpace: 'nowrap',
    }}>
      ↑{pct}%
    </span>
  )
}

function MetricRow({ m, i, total }) {
  const borderBottom = i < total - 1 ? '1px solid #F1F5F9' : 'none'
  const iconBox = (
    <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(29,111,232,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {icons[i]}
    </div>
  )
  const label = (
    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1A2B3C', lineHeight: 1.3, whiteSpace: 'pre-line' }}>
      {m.label}
    </span>
  )

  return (
    <div style={{ borderBottom, background: '#fff' }}>
      {/* ── Mobile layout ── */}
      <div className="flex sm:hidden items-center gap-3 px-4 py-3">
        {iconBox}
        <div style={{ flex: 1, minWidth: 0 }}>{label}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#6B7280', fontSize: '1.2rem', lineHeight: 1 }}>{m.before}</span>
          <span style={{ color: '#CBD5E1', fontSize: '0.8rem' }}>→</span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1D6FE8', fontSize: '1.2rem', lineHeight: 1 }}>{m.after}</span>
          <UpBadge pct={m.pct} />
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div
        className="hidden sm:grid items-center px-5 py-4"
        style={{ gridTemplateColumns: '1fr 80px 20px 90px 70px', gap: '8px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {iconBox}{label}
        </div>
        <div className="text-center">
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#6B7280', fontSize: '1.75rem', lineHeight: 1 }}>{m.before}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="20" height="14" viewBox="0 0 28 16" fill="none" style={{ flexShrink: 0 }}>
            <line x1="0" y1="8" x2="20" y2="8" stroke="#CBD5E1" strokeWidth="2" />
            <polygon points="20,3 28,8 20,13" fill="#CBD5E1" />
          </svg>
        </div>
        <div className="text-center">
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1D6FE8', fontSize: '1.75rem', lineHeight: 1 }}>{m.after}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <UpBadge pct={m.pct} />
        </div>
      </div>
    </div>
  )
}

export default function TheOffer() {
  const { offer } = content
  return (
    <section id="impact" className="pt-8 pb-12 px-4 sm:px-6 sm:py-16" style={{ background: 'rgba(248,250,252,0.88)' }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-sky mb-3">
            {offer.eyebrow}
          </p>
          <h2 className="font-heading font-bold text-navy leading-tight mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            {offer.headline}
          </h2>
          <p className="font-body text-base leading-relaxed" style={{ color: '#6B7280' }}>
            {offer.subtitle}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(15,42,74,0.08)' }}>

          {/* Column headers — desktop only */}
          <div
            className="hidden sm:grid items-center px-5 py-2"
            style={{ gridTemplateColumns: '1fr 80px 20px 90px 70px', gap: '8px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}
          >
            <div />
            <div className="text-center">
              <span style={{ display: 'inline-block', background: '#E2E8F0', color: '#6B7280', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', padding: '2px 10px', borderRadius: '20px' }}>BEFORE</span>
            </div>
            <div />
            <div className="text-center">
              <span style={{ display: 'inline-block', background: '#1D6FE8', color: '#fff', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', padding: '2px 10px', borderRadius: '20px' }}>AFTER</span>
            </div>
            <div />
          </div>

          {/* Mobile column headers */}
          <div className="flex sm:hidden items-center justify-between px-4 py-2" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Metric</span>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <span style={{ display: 'inline-block', background: '#E2E8F0', color: '#6B7280', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', padding: '2px 8px', borderRadius: '20px' }}>BEFORE</span>
              <span style={{ display: 'inline-block', background: '#1D6FE8', color: '#fff', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', padding: '2px 8px', borderRadius: '20px' }}>AFTER</span>
            </div>
          </div>

          {/* Rows */}
          {offer.metrics.map((m, i) => (
            <MetricRow key={i} m={m} i={i} total={offer.metrics.length} />
          ))}

          {/* ROI strip */}
          <div style={{ background: '#0F2A4A', padding: '16px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
            <div>
              <p className="font-heading font-bold text-sm text-white leading-snug">
                {offer.roiLine1.split('MORE LEADS').map((part, i) =>
                  i === 0 ? (
                    <span key={i}>{part}<span style={{ color: '#1D6FE8' }}>MORE LEADS</span></span>
                  ) : (
                    part.split('SITE VISITS AND SALES').map((p2, j) =>
                      j === 0 ? (
                        <span key={j}>{p2}<span style={{ color: '#1D6FE8' }}>SITE VISITS AND SALES</span></span>
                      ) : (
                        <span key={j}>{p2}</span>
                      )
                    )
                  )
                )}.
              </p>
              <p className="font-body text-xs mt-1" style={{ color: '#94A3B8' }}>{offer.roiLine2}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
              {offer.roiStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-heading font-bold text-white" style={{ fontSize: '1.4rem', lineHeight: 1 }}>{stat.value}</p>
                  <p className="font-body text-xs mt-1" style={{ color: '#94A3B8' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

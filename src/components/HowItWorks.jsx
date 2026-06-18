const NAVY = '#0F2A4A'
const SKY = '#1D6FE8'
const LIGHT_SKY = 'rgba(29,111,232,0.08)'

// ── Icons ────────────────────────────────────────────────────────────────────

function IconMeta() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={SKY} strokeWidth="1.6" />
      <path d="M16 8.5c-1 0-2 .8-2.8 2-1-1.6-2.5-2.7-3.7-2-.9.5-1.5 1.8-1.5 3.3 0 2.5 2 5.5 3.5 7 .3.3.7.5 1 .2C14.5 18 17 14.5 17 11.8c0-2-.7-3.3-1-3.3z" stroke={SKY} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function IconBuilding() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke={SKY} strokeWidth="1.6" />
      <path d="M8 21V7M16 21V7" stroke={SKY} strokeWidth="1.4" />
      <rect x="10" y="2" width="4" height="5" rx="1" stroke={SKY} strokeWidth="1.4" />
      <rect x="5" y="11" width="3" height="3" rx="0.5" fill={SKY} />
      <rect x="16" y="11" width="3" height="3" rx="0.5" fill={SKY} />
      <rect x="10.5" y="14" width="3" height="7" rx="0.5" fill={SKY} />
    </svg>
  )
}

function IconCRM() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2.5" stroke={SKY} strokeWidth="1.6" />
      <line x1="2" y1="9" x2="22" y2="9" stroke={SKY} strokeWidth="1.4" />
      <circle cx="6" cy="6.5" r="1" fill={SKY} />
      <circle cx="9.5" cy="6.5" r="1" fill={SKY} />
      <rect x="5" y="12" width="5" height="1.5" rx="0.75" fill={SKY} />
      <rect x="5" y="15" width="8" height="1.5" rx="0.75" fill={SKY} />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6.5 2h11A1.5 1.5 0 0 1 19 3.5v17A1.5 1.5 0 0 1 17.5 22h-11A1.5 1.5 0 0 1 5 20.5v-17A1.5 1.5 0 0 1 6.5 2z" stroke={SKY} strokeWidth="1.6" />
      <circle cx="12" cy="19" r="1" fill={SKY} />
    </svg>
  )
}

function IconAgent() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={SKY} strokeWidth="1.6" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={SKY} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 12l2 2-2 2" stroke={SKY} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={SKY} strokeWidth="1.6" />
      <path d="M8 13.5c1.5 2 3.5 3 6 2.5l2 1-1-2c1-1.5 1-3.5 0-5C13.5 8 9 8.5 8 11.5c0 .7.2 1.4.5 2z" stroke={SKY} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function IconReminder() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={SKY} strokeWidth="1.6" />
      <path d="M12 7v5l3 3" stroke={SKY} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Small building-block components ──────────────────────────────────────────

function SourcePill({ icon, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '8px',
      background: '#fff',
      border: `1px solid #E2E8F0`,
      borderRadius: '12px',
      padding: '8px 10px',
      boxShadow: '0 2px 8px rgba(15,42,74,0.06)',
      minWidth: 0,
    }}>
      <div style={{ width: 36, height: 36, borderRadius: 9, background: LIGHT_SKY, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: NAVY, lineHeight: 1.3 }}>
        {label}
      </span>
    </div>
  )
}

function FlowNode({ icon, title, sub, highlight }) {
  return (
    <div style={{
      background: highlight ? NAVY : '#fff',
      border: highlight ? 'none' : '1px solid #E2E8F0',
      borderRadius: '14px',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '14px',
      boxShadow: '0 2px 12px rgba(15,42,74,0.07)',
      width: '100%',
    }}>
      <div style={{
        width: 42, height: 42, borderRadius: 11,
        background: highlight ? 'rgba(29,111,232,0.18)' : LIGHT_SKY,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: highlight ? '#fff' : NAVY, marginBottom: '2px' }}>
          {title}
        </p>
        {sub && (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: highlight ? '#94A3B8' : '#6B7280', lineHeight: 1.4 }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  )
}

function ArrowDown() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
      <svg width="2" height="28" viewBox="0 0 2 28">
        <line x1="1" y1="0" x2="1" y2="20" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 3" />
        <polygon points="-3,18 5,18 1,26" fill="#CBD5E1" />
      </svg>
    </div>
  )
}

function ConvergeArrow() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
      <svg width="2" height="24" viewBox="0 0 2 24">
        <line x1="1" y1="0" x2="1" y2="16" stroke="#CBD5E1" strokeWidth="2" />
        <polygon points="-3,14 5,14 1,22" fill="#CBD5E1" />
      </svg>
    </div>
  )
}

// ── Onboarding steps ─────────────────────────────────────────────────────────

const onboardingSteps = [
  { n: '1', title: 'Sign Up', desc: 'We set up your account in under 24 hours.' },
  { n: '2', title: 'We Configure', desc: 'Our team connects your ad forms and trains the AI on your projects.' },
  { n: '3', title: 'You Go Live', desc: 'Every new lead is called within 10 seconds — automatically.' },
]

// ── Main export ───────────────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6" style={{ background: 'rgba(248,250,252,0.88)' }}>
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-sky mb-3">
            How It Works
          </p>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl leading-tight mb-3">
            Every Lead, Fully Handled
          </h2>
          <p className="font-body text-base leading-relaxed" style={{ color: '#6B7280' }}>
            From ad click to qualified site visit — here is what happens automatically.
          </p>
        </div>

        {/* Flowchart */}
        <div>

          {/* Source platforms */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <SourcePill icon={<IconMeta />} label="Meta Ads" />
            <SourcePill icon={<IconBuilding />} label="MagicBricks" />
            <SourcePill icon={<IconBuilding />} label="99Acres" />
          </div>

          <ConvergeArrow />

          {/* CRM */}
          <FlowNode
            icon={<IconCRM />}
            title="Leads Land in Your CRM"
            sub="All inquiries from every platform are captured automatically in one place."
          />

          <ArrowDown />

          {/* AI Call */}
          <FlowNode
            icon={<IconPhone />}
            title="AI Voice Call Within 10 Seconds"
            sub="The AI calls the lead the moment they submit — before they've even closed the tab."
            highlight
          />

          <ArrowDown />

          {/* Agent qualifies */}
          <FlowNode
            icon={<IconAgent />}
            title="Agent Engages, Qualifies & Books Site Visit"
            sub="Budget, timeline, and project preference — all gathered on the first call."
          />

          <ArrowDown />

          {/* WhatsApp */}
          <FlowNode
            icon={<IconWhatsApp />}
            title="WhatsApp Confirmation Sent"
            sub="Date, time, and project address delivered instantly to the lead's phone."
          />

          <ArrowDown />

          {/* Reminder */}
          <FlowNode
            icon={<IconReminder />}
            title="Follow-Up Call + Site Visit Reminder"
            sub="Automated reminders reduce no-shows and keep your calendar full."
          />
        </div>

        {/* Onboarding sub-section */}
        <div className="mt-14">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-sky mb-2 text-center">
            Getting Started
          </p>
          <h3 className="font-heading font-bold text-navy text-xl md:text-2xl text-center mb-8">
            Live In Under 48 Hours
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {onboardingSteps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative' }}>
                {/* Step number + connector line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: SKY, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.875rem',
                    flexShrink: 0,
                  }}>
                    {s.n}
                  </div>
                  {i < onboardingSteps.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: '#E2E8F0', minHeight: '32px', margin: '4px 0' }} />
                  )}
                </div>
                {/* Text */}
                <div style={{ paddingBottom: i < onboardingSteps.length - 1 ? '24px' : '0' }}>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: NAVY, marginBottom: '4px' }}>
                    {s.title}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.5 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

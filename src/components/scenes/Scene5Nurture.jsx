/* Scene 5 Nurture: AI notes preferences, warm follow-up
   Accent: terracotta (not ready yet) + gold for the future messages */
export default function Scene5Nurture({ subStep = 0 }) {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Blueprint bg */}
      {[60,100,140,180,220,260,300,340,380].map(y => (
        <line key={y} x1="0" y1={y} x2="680" y2={y} stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}
      {[60,120,180,240,300,360,420,480,540,600].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}

      {/* Notes card (left) shadow */}
      <rect x="78" y="118" width="224" height="210" rx="12" fill="#0e1a25" opacity="0.4" />
      {/* Notes card */}
      <rect x="74" y="114" width="224" height="210" rx="12" fill="#243648" />
      {/* Header */}
      <rect x="74" y="114" width="224" height="44" rx="12" fill="#C76B49" opacity="0.9" />
      <rect x="74" y="138" width="224" height="20" fill="#C76B49" opacity="0.9" />
      <text x="186" y="143" textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">Lead Preferences Noted</text>

      {/* Preference tags */}
      <rect x="86" y="168" width="80" height="20" rx="4" fill="#C76B49" opacity="0.25" />
      <text x="126" y="182" textAnchor="middle" fill="#C76B49" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">Budget: 80L–1Cr</text>

      <rect x="176" y="168" width="70" height="20" rx="4" fill="#C76B49" opacity="0.25" />
      <text x="211" y="182" textAnchor="middle" fill="#C76B49" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">3 BHK</text>

      <rect x="86" y="196" width="88" height="20" rx="4" fill="#1a2c3e" opacity="0.6" />
      <text x="130" y="210" textAnchor="middle" fill="#B9C2CC" fontSize="10" fontFamily="Inter, sans-serif">Timeline: 6 months</text>

      <rect x="184" y="196" width="60" height="20" rx="4" fill="#1a2c3e" opacity="0.6" />
      <text x="214" y="210" textAnchor="middle" fill="#B9C2CC" fontSize="10" fontFamily="Inter, sans-serif">North side</text>

      {/* Note lines */}
      <rect x="86" y="226" width="200" height="4" rx="2" fill="#B9C2CC" opacity="0.2" />
      <rect x="86" y="236" width="160" height="4" rx="2" fill="#B9C2CC" opacity="0.15" />
      <rect x="86" y="246" width="180" height="4" rx="2" fill="#B9C2CC" opacity="0.2" />
      <rect x="86" y="256" width="120" height="4" rx="2" fill="#B9C2CC" opacity="0.12" />

      {/* Follow-up schedule */}
      <rect x="86" y="272" width="200" height="40" rx="6" fill="#C76B49" opacity="0.12" />
      <text x="186" y="288" textAnchor="middle" fill="#C76B49" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">Auto follow-up: active</text>
      <text x="186" y="302" textAnchor="middle" fill="#B9C2CC" fontSize="10" fontFamily="Inter, sans-serif">Weekly WhatsApp updates</text>

      {/* Timeline arrow (center) */}
      <line x1="310" y1="219" x2="368" y2="219" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" />
      <polygon points="365,214 374,219 365,224" fill="#C9A227" opacity="0.5" />
      <text x="340" y="210" textAnchor="middle" fill="#B9C2CC" fontSize="9" fontFamily="Inter, sans-serif" opacity="0.6">weeks later...</text>

      {/* WhatsApp future messages (right) shadow */}
      <rect x="382" y="118" width="224" height="210" rx="12" fill="#0e1a25" opacity="0.4" />
      {/* WhatsApp future messages */}
      <rect x="378" y="114" width="224" height="210" rx="12" fill="#243648" />
      {/* Header */}
      <rect x="378" y="114" width="224" height="44" rx="12" fill="#1a2c3e" />
      <rect x="378" y="138" width="224" height="20" fill="#1a2c3e" />
      <circle cx="402" cy="136" r="12" fill="#25D366" opacity="0.3" />
      <text x="402" y="140" textAnchor="middle" fill="#25D366" fontSize="11">💬</text>
      <text x="422" y="140" fill="#B9C2CC" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Follow-up messages</text>

      {/* Message 1 (week 2) - muted */}
      <rect x="388" y="166" width="188" height="34" rx="6" fill="#1a2c3e" opacity="0.7" />
      <text x="396" y="179" fill="#8A8579" fontSize="9" fontFamily="Inter, sans-serif">Week 2</text>
      <rect x="396" y="184" width="140" height="4" rx="2" fill="#8A8579" opacity="0.3" />
      <rect x="396" y="192" width="100" height="4" rx="2" fill="#8A8579" opacity="0.2" />

      {/* Message 2 (week 4) - slightly brighter */}
      <rect x="388" y="208" width="188" height="34" rx="6" fill="#1a2c3e" opacity="0.85" />
      <text x="396" y="221" fill="#B9C2CC" fontSize="9" fontFamily="Inter, sans-serif">Week 4 — New listing!</text>
      <rect x="396" y="226" width="140" height="4" rx="2" fill="#B9C2CC" opacity="0.35" />
      <rect x="396" y="234" width="80" height="4" rx="2" fill="#C9A227" opacity="0.4" />

      {/* Message 3 (ready!) - gold highlight */}
      <rect x="388" y="250" width="188" height="44" rx="6" fill="#C9A227" opacity="0.15" />
      <rect x="388" y="250" width="188" height="44" rx="6" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.4" />
      <text x="396" y="263" fill="#C9A227" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">Week 8 — "I'm ready now!"</text>
      <rect x="396" y="268" width="140" height="4" rx="2" fill="#F8F6F2" opacity="0.4" />
      <rect x="396" y="277" width="100" height="4" rx="2" fill="#C9A227" opacity="0.5" />
      <text x="396" y="292" fill="#C9A227" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">→ Book site visit</text>

      {/* Gold pulse near "ready" message */}
      <circle cx="576" cy="272" r="12" fill="#C9A227" opacity="0.2" className="pulse-ring" />
      <circle cx="576" cy="272" r="6" fill="#C9A227" opacity="0.4" />

      {/* Terra indicator at left card */}
      <circle cx="292" cy="330" r="6" fill="#C76B49" opacity="0.5" />
      <text x="340" y="350" textAnchor="middle" fill="#B9C2CC" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.5">Not ready today → warm tomorrow</text>
    </svg>
  )
}

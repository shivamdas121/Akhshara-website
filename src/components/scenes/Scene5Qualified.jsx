/* Scene 5 Qualified: AI books site visit + WhatsApp confirmation
   Accent: gold — success state */
export default function Scene5Qualified({ subStep = 0 }) {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Blueprint bg */}
      {[60,100,140,180,220,260,300,340,380].map(y => (
        <line key={y} x1="0" y1={y} x2="680" y2={y} stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}
      {[60,120,180,240,300,360,420,480,540,600].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}

      {/* Calendar card (left) shadow */}
      <rect x="78" y="122" width="224" height="200" rx="12" fill="#0e1a25" opacity="0.4" />
      {/* Calendar card */}
      <rect x="74" y="118" width="224" height="200" rx="12" fill="#243648" />
      {/* Calendar header */}
      <rect x="74" y="118" width="224" height="44" rx="12" fill="#C9A227" />
      <rect x="74" y="142" width="224" height="20" fill="#C9A227" />
      <text x="186" y="146" textAnchor="middle" fill="#1C2B3A" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="700">Site Visit Confirmed</text>

      {/* Day grid */}
      {['M','T','W','T','F','S','S'].map((d, i) => (
        <text key={d+i} x={90 + i * 30} y="180" fill="#B9C2CC" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.6" textAnchor="middle">{d}</text>
      ))}
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((n, i) => {
        const col = i % 7
        const row = Math.floor(i / 7)
        const x = 90 + col * 30
        const y = 200 + row * 28
        const isHighlighted = n === 15
        return (
          <g key={n}>
            {isHighlighted && <circle cx={x} cy={y} r="12" fill="#C9A227" />}
            <text x={x} y={y + 4} textAnchor="middle" fill={isHighlighted ? '#1C2B3A' : '#B9C2CC'} fontSize="11" fontFamily="Inter, sans-serif" fontWeight={isHighlighted ? '700' : '400'} opacity={isHighlighted ? 1 : 0.6}>{n}</text>
          </g>
        )
      })}

      {/* Time slot */}
      <rect x="86" y="296" width="200" height="18" rx="4" fill="#C9A227" opacity="0.15" />
      <text x="186" y="309" textAnchor="middle" fill="#C9A227" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">10:00 AM — Site Visit</text>

      {/* Checkmark badge */}
      <circle cx="288" cy="120" r="16" fill="#27ae60" />
      <text x="288" y="126" textAnchor="middle" fill="white" fontSize="14" fontFamily="Inter">✓</text>

      {/* WhatsApp card (right) shadow */}
      <rect x="382" y="122" width="224" height="200" rx="12" fill="#0e1a25" opacity="0.4" />
      {/* WhatsApp card */}
      <rect x="378" y="118" width="224" height="200" rx="12" fill="#243648" />
      {/* Header */}
      <rect x="378" y="118" width="224" height="44" rx="12" fill="#25D366" opacity="0.85" />
      <rect x="378" y="142" width="224" height="20" fill="#25D366" opacity="0.85" />
      <circle cx="404" cy="140" r="14" fill="white" opacity="0.15" />
      <text x="404" y="145" textAnchor="middle" fill="white" fontSize="14">💬</text>
      <text x="430" y="143" fill="white" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">WhatsApp</text>
      <text x="430" y="155" fill="white" fontSize="9" fontFamily="Inter, sans-serif" opacity="0.8">Akshara Realty AI</text>

      {/* Message bubbles */}
      <rect x="388" y="172" width="180" height="40" rx="8" fill="#25D366" opacity="0.25" />
      <rect x="388" y="172" width="16" height="16" rx="2" fill="#25D366" opacity="0.25" />
      <rect x="396" y="180" width="140" height="6" rx="2" fill="#F8F6F2" opacity="0.5" />
      <rect x="396" y="190" width="100" height="5" rx="2" fill="#F8F6F2" opacity="0.3" />
      <rect x="396" y="199" width="60" height="5" rx="2" fill="#C9A227" opacity="0.6" />

      <rect x="388" y="222" width="160" height="30" rx="8" fill="#25D366" opacity="0.2" />
      <rect x="394" y="230" width="120" height="5" rx="2" fill="#F8F6F2" opacity="0.4" />
      <rect x="394" y="239" width="80" height="4" rx="2" fill="#F8F6F2" opacity="0.25" />

      {/* Double tick */}
      <text x="530" y="248" fill="#25D366" fontSize="11" opacity="0.8">✓✓</text>

      <rect x="388" y="262" width="200" height="42" rx="8" fill="#1a2c3e" />
      <text x="398" y="278" fill="#C9A227" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">📍 Visit confirmed for</text>
      <text x="398" y="293" fill="#F8F6F2" fontSize="11" fontFamily="Inter, sans-serif">Thursday, 10:00 AM</text>
      <text x="398" y="305" fill="#25D366" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.8">Tap for directions →</text>

      {/* Gold pulse (success) */}
      <circle cx="340" cy="320" r="20" fill="#C9A227" opacity="0.1" className="pulse-ring" />
      <circle cx="340" cy="320" r="10" fill="#C9A227" opacity="0.2" />
      <text x="340" y="325" textAnchor="middle" fill="#C9A227" fontSize="12">✓</text>
    </svg>
  )
}

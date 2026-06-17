/* Scene 4: The AI has a natural conversation
   Accent: gold — active call, AI engaging */
export default function Scene4() {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Blueprint bg */}
      {[60,100,140,180,220,260,300,340,380].map(y => (
        <line key={y} x1="0" y1={y} x2="680" y2={y} stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}
      {[60,120,180,240,300,360,420,480,540,600].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}

      {/* Left side: Person on phone */}
      {/* Shadow */}
      <ellipse cx="190" cy="358" rx="40" ry="7" fill="#0e1a25" opacity="0.4" />
      {/* Body */}
      <rect x="166" y="280" width="48" height="76" rx="10" fill="#F8F6F2" />
      <rect x="176" y="292" width="28" height="48" rx="6" fill="#C76B49" opacity="0.85" />
      {/* Arm holding phone up to ear */}
      <rect x="210" y="262" width="18" height="48" rx="7" fill="#F8F6F2" />
      <rect x="152" y="296" width="18" height="36" rx="7" fill="#F8F6F2" />
      {/* Hand with phone at ear */}
      <rect x="214" y="224" width="36" height="54" rx="8" fill="#243648" />
      <rect x="218" y="228" width="28" height="46" rx="6" fill="#1a2c3e" />
      <rect x="220" y="231" width="24" height="40" rx="4" fill="#0f1e2b" />
      {/* Head */}
      <circle cx="190" cy="264" r="24" fill="#F8F6F2" />
      <ellipse cx="190" cy="248" rx="24" ry="10" fill="#1C2B3A" opacity="0.5" />
      {/* Eyes - looking engaged/talking */}
      <circle cx="182" cy="264" r="3" fill="#1C2B3A" />
      <circle cx="198" cy="264" r="3" fill="#1C2B3A" />
      {/* Mouth - open talking */}
      <path d="M 184 274 Q 190 280 196 274" fill="none" stroke="#1C2B3A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      {/* Sound waves from person's mouth */}
      <path d="M 214 270 Q 230 260 230 270 Q 230 280 214 270" fill="none" stroke="#B9C2CC" strokeWidth="1" opacity="0.4" />
      <path d="M 218 267 Q 242 255 242 270 Q 242 285 218 273" fill="none" stroke="#B9C2CC" strokeWidth="1" opacity="0.25" />

      {/* Center: Call connection line */}
      <line x1="250" y1="210" x2="430" y2="210" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
      <circle cx="340" cy="210" r="8" fill="#C9A227" opacity="0.3" />
      <circle cx="340" cy="210" r="4" fill="#C9A227" opacity="0.7" />

      {/* Sound wave visualization in center */}
      {[290, 310, 330, 350, 370, 390].map((x, i) => {
        const heights = [12, 24, 18, 30, 16, 22]
        const h = heights[i]
        return (
          <rect key={x} x={x - 3} y={210 - h / 2} width="6" height={h} rx="3" fill="#C9A227" opacity={0.3 + i * 0.05} />
        )
      })}

      {/* Right side: AI interface */}
      {/* AI card shadow */}
      <rect x="438" y="118" width="188" height="200" rx="14" fill="#0e1a25" opacity="0.4" />
      {/* AI card */}
      <rect x="434" y="114" width="188" height="200" rx="14" fill="#243648" />
      {/* Header */}
      <rect x="434" y="114" width="188" height="44" rx="14" fill="#1a2c3e" />
      <rect x="434" y="138" width="188" height="20" fill="#1a2c3e" />
      {/* AI logo dot */}
      <circle cx="458" cy="136" r="10" fill="#C9A227" />
      <rect x="453" y="131" width="10" height="10" rx="2" fill="#1C2B3A" opacity="0.6" />
      <text x="474" y="141" fill="#F8F6F2" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">Akshara AI</text>
      <text x="474" y="154" fill="#B9C2CC" fontSize="9" fontFamily="Inter, sans-serif">Live call • Hindi/English</text>

      {/* Chat bubbles */}
      {/* AI bubble */}
      <rect x="444" y="168" width="148" height="30" rx="8" fill="#C9A227" opacity="0.9" />
      <rect x="444" y="168" width="16" height="16" rx="2" fill="#C9A227" opacity="0.9" />
      <rect x="452" y="176" width="110" height="6" rx="2" fill="#1C2B3A" opacity="0.5" />
      <rect x="452" y="185" width="80" height="4" rx="2" fill="#1C2B3A" opacity="0.35" />

      {/* Response bubble */}
      <rect x="444" y="210" width="128" height="28" rx="8" fill="#162230" />
      <rect x="560" y="210" width="16" height="16" rx="2" fill="#162230" />
      <rect x="452" y="219" width="90" height="5" rx="2" fill="#B9C2CC" opacity="0.4" />
      <rect x="452" y="227" width="60" height="4" rx="2" fill="#B9C2CC" opacity="0.25" />

      {/* AI bubble 2 */}
      <rect x="444" y="250" width="160" height="30" rx="8" fill="#C9A227" opacity="0.7" />
      <rect x="444" y="250" width="16" height="16" rx="2" fill="#C9A227" opacity="0.7" />
      <rect x="452" y="258" width="120" height="5" rx="2" fill="#1C2B3A" opacity="0.5" />
      <rect x="452" y="267" width="88" height="4" rx="2" fill="#1C2B3A" opacity="0.35" />

      {/* Live indicator */}
      <circle cx="598" cy="124" r="5" fill="#27ae60" />
      <circle cx="598" cy="124" r="10" fill="#27ae60" opacity="0.25" className="pulse-ring" />
      <text x="610" y="128" fill="#27ae60" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">LIVE</text>

      {/* Gold pulse at connection midpoint */}
      <circle cx="340" cy="210" r="20" fill="#C9A227" opacity="0.08" className="pulse-ring" />

      {/* Language badge */}
      <rect x="280" y="326" width="120" height="28" rx="8" fill="#1a2c3e" />
      <rect x="286" y="331" width="108" height="16" rx="4" fill="#162230" opacity="0.6" />
      <text x="340" y="343" textAnchor="middle" fill="#C9A227" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Hindi · English · Hinglish</text>
    </svg>
  )
}

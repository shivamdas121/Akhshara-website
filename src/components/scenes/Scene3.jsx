/* Scene 3: Within 10 seconds, their phone rings
   Accent: gold — the AI is calling, positive/active moment */
export default function Scene3() {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Blueprint bg */}
      {[60,100,140,180,220,260,300,340,380].map(y => (
        <line key={y} x1="0" y1={y} x2="680" y2={y} stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}
      {[60,120,180,240,300,360,420,480,540,600].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}

      {/* Couch suggestion (background) */}
      <rect x="80" y="290" width="520" height="80" rx="16" fill="#162230" opacity="0.6" />
      <rect x="80" y="278" width="100" height="100" rx="14" fill="#1a2c3e" opacity="0.7" />
      <rect x="500" y="278" width="100" height="100" rx="14" fill="#1a2c3e" opacity="0.7" />
      <rect x="90" y="286" width="100" height="80" rx="10" fill="#162230" opacity="0.5" />
      <rect x="500" y="286" width="100" height="80" rx="10" fill="#162230" opacity="0.5" />

      {/* Person figure seated */}
      <ellipse cx="340" cy="296" rx="50" ry="8" fill="#0e1a25" opacity="0.3" />
      {/* Legs */}
      <rect x="302" y="280" width="36" height="40" rx="10" fill="#F8F6F2" opacity="0.9" />
      <rect x="342" y="280" width="36" height="40" rx="10" fill="#F8F6F2" opacity="0.9" />
      {/* Body */}
      <rect x="300" y="218" width="80" height="70" rx="12" fill="#C76B49" opacity="0.85" />
      {/* Collar */}
      <rect x="326" y="218" width="28" height="20" rx="4" fill="#F8F6F2" opacity="0.9" />
      {/* Arms down at rest, about to look at phone */}
      <rect x="278" y="234" width="24" height="48" rx="8" fill="#F8F6F2" opacity="0.9" />
      <rect x="378" y="234" width="24" height="48" rx="8" fill="#F8F6F2" opacity="0.9" />
      {/* Head */}
      <circle cx="340" cy="202" r="26" fill="#F8F6F2" />
      <ellipse cx="340" cy="184" rx="26" ry="11" fill="#1C2B3A" opacity="0.6" />
      <circle cx="331" cy="202" r="3" fill="#1C2B3A" />
      <circle cx="349" cy="202" r="3" fill="#1C2B3A" />
      {/* Surprised mouth */}
      <ellipse cx="340" cy="213" rx="5" ry="4" fill="#1C2B3A" opacity="0.5" />

      {/* Phone in hand */}
      {/* Shadow */}
      <rect x="400" y="248" width="60" height="90" rx="12" fill="#0e1a25" opacity="0.4" />
      {/* Device */}
      <rect x="396" y="244" width="60" height="90" rx="12" fill="#243648" />
      <rect x="400" y="248" width="52" height="82" rx="8" fill="#1a2c3e" />
      <rect x="403" y="252" width="46" height="74" rx="6" fill="#0f1e2b" />
      {/* Notch */}
      <rect x="418" y="253" width="18" height="6" rx="3" fill="#243648" />

      {/* Incoming call screen content */}
      <circle cx="426" cy="290" r="16" fill="#243648" />
      <circle cx="426" cy="286" r="6" fill="#B9C2CC" opacity="0.6" />
      <ellipse cx="426" cy="302" rx="10" ry="6" fill="#B9C2CC" opacity="0.4" />

      <rect x="406" y="312" width="40" height="5" rx="2" fill="#B9C2CC" opacity="0.4" />
      <rect x="412" y="320" width="28" height="5" rx="2" fill="#C9A227" opacity="0.7" />

      {/* Accept/decline */}
      <circle cx="412" cy="336" r="7" fill="#27ae60" opacity="0.9" />
      <circle cx="440" cy="336" r="7" fill="#c0392b" opacity="0.9" />

      {/* Gold pulse rings emanating from phone */}
      <circle cx="426" cy="289" r="36" fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.3" className="pulse-ring" />
      <circle cx="426" cy="289" r="52" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.15" className="pulse-ring" style={{animationDelay:'0.5s'}} />
      <circle cx="426" cy="289" r="68" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.08" className="pulse-ring" style={{animationDelay:'1s'}} />

      {/* Gold indicator dot */}
      <circle cx="456" cy="244" r="8" fill="#C9A227" opacity="0.9" />
      <circle cx="456" cy="244" r="14" fill="#C9A227" opacity="0.25" className="pulse-ring" />

      {/* "10 sec" badge */}
      <rect x="136" y="168" width="110" height="36" rx="10" fill="#C9A227" />
      <rect x="140" y="172" width="102" height="28" rx="8" fill="#C9A227" opacity="0.8" />
      <text x="191" y="191" textAnchor="middle" fill="#1C2B3A" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="700">⚡ 10 seconds</text>

      {/* Dashed line from badge to phone */}
      <path d="M 246 186 Q 340 160 396 260" fill="none" stroke="#C9A227" strokeWidth="1" strokeDasharray="5 4" opacity="0.35" />
    </svg>
  )
}

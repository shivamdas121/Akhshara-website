/* Scene 1: Lead sees your ad and opens the form
   Accent: terracotta — person browsing, not yet engaged */
export default function Scene1() {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Blueprint background lines */}
      {[60,100,140,180,220,260,300,340,380].map(y => (
        <line key={y} x1="0" y1={y} x2="680" y2={y} stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}
      {[60,120,180,240,300,360,420,480,540,600].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}

      {/* Background building silhouette (far) */}
      <rect x="20" y="200" width="60" height="180" rx="2" fill="#162230" opacity="0.6" />
      <rect x="25" y="210" width="12" height="16" rx="1" fill="#C9A227" opacity="0.15" />
      <rect x="43" y="210" width="12" height="16" rx="1" fill="#C9A227" opacity="0.25" />
      <rect x="25" y="240" width="12" height="16" rx="1" fill="#C9A227" opacity="0.2" />
      <rect x="43" y="240" width="12" height="16" rx="1" fill="#C9A227" opacity="0.1" />

      <rect x="600" y="220" width="70" height="160" rx="2" fill="#162230" opacity="0.5" />
      <rect x="608" y="230" width="12" height="14" rx="1" fill="#C9A227" opacity="0.2" />
      <rect x="628" y="230" width="12" height="14" rx="1" fill="#C9A227" opacity="0.15" />

      {/* Desk / floor shelf */}
      <rect x="150" y="312" width="380" height="8" rx="2" fill="#162230" opacity="0.8" />
      <rect x="150" y="316" width="380" height="4" rx="2" fill="#0e1a25" />

      {/* Laptop shadow */}
      <rect x="314" y="210" width="184" height="108" rx="8" fill="#0e1a25" opacity="0.5" />
      {/* Laptop base */}
      <rect x="310" y="206" width="184" height="108" rx="8" fill="#243648" />
      {/* Screen */}
      <rect x="318" y="214" width="168" height="92" rx="4" fill="#1a2c3e" />

      {/* Ad content on screen */}
      <rect x="326" y="220" width="152" height="78" rx="3" fill="#162230" />
      {/* Ad image area */}
      <rect x="330" y="224" width="80" height="42" rx="2" fill="#C76B49" opacity="0.35" />
      {/* Building shape in ad */}
      <rect x="345" y="232" width="30" height="30" rx="2" fill="#C76B49" opacity="0.6" />
      <rect x="355" y="224" width="10" height="8" rx="1" fill="#C76B49" opacity="0.8" />
      {/* Ad text lines */}
      <rect x="418" y="228" width="52" height="6" rx="2" fill="#B9C2CC" opacity="0.5" />
      <rect x="418" y="238" width="40" height="4" rx="2" fill="#B9C2CC" opacity="0.3" />
      <rect x="418" y="246" width="48" height="4" rx="2" fill="#B9C2CC" opacity="0.3" />
      {/* CTA button in ad */}
      <rect x="332" y="272" width="60" height="18" rx="4" fill="#C76B49" opacity="0.8" />
      <rect x="342" y="277" width="40" height="5" rx="2" fill="#F8F6F2" opacity="0.8" />

      {/* Laptop keyboard suggestion */}
      <rect x="314" y="314" width="184" height="8" rx="4" fill="#1a2c3e" />
      <rect x="318" y="315" width="176" height="5" rx="3" fill="#162230" />

      {/* Phone on desk */}
      <rect x="516" y="276" width="56" height="34" rx="6" fill="#0e1a25" />
      <rect x="519" y="279" width="50" height="28" rx="4" fill="#1a2c3e" />
      <rect x="525" y="284" width="38" height="18" rx="2" fill="#162230" />
      {/* Small notification dot */}
      <circle cx="558" cy="278" r="5" fill="#C76B49" />

      {/* Person figure */}
      {/* Shadow */}
      <ellipse cx="244" cy="318" rx="36" ry="6" fill="#0e1a25" opacity="0.5" />
      {/* Body */}
      <rect x="218" y="248" width="52" height="68" rx="10" fill="#F8F6F2" />
      {/* Shirt accent */}
      <rect x="228" y="260" width="32" height="40" rx="6" fill="#C76B49" opacity="0.85" />
      {/* Arms */}
      <rect x="198" y="260" width="22" height="44" rx="8" fill="#F8F6F2" />
      <rect x="268" y="260" width="22" height="44" rx="8" fill="#F8F6F2" />
      {/* Hands pointing at laptop */}
      <ellipse cx="290" cy="306" rx="10" ry="7" fill="#F8F6F2" />
      <ellipse cx="204" cy="290" rx="8" ry="6" fill="#F8F6F2" />
      {/* Head */}
      <circle cx="244" cy="232" r="24" fill="#F8F6F2" />
      {/* Hair */}
      <ellipse cx="244" cy="216" rx="24" ry="10" fill="#1C2B3A" opacity="0.5" />
      {/* Eyes */}
      <circle cx="236" cy="232" r="3" fill="#1C2B3A" />
      <circle cx="252" cy="232" r="3" fill="#1C2B3A" />

      {/* Gaze line from person to screen */}
      <line x1="264" y1="238" x2="318" y2="248" stroke="#C76B49" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />

      {/* Terracotta pulse near ad CTA */}
      <circle cx="362" cy="281" r="10" fill="#C76B49" opacity="0.15" className="pulse-ring" />
      <circle cx="362" cy="281" r="5" fill="#C76B49" opacity="0.4" />
    </svg>
  )
}

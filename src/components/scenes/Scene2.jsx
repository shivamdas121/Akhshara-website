/* Scene 2: They fill in their details
   Accent: cream — form fields, active engagement */
export default function Scene2() {
  return (
    <svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Blueprint bg */}
      {[60,100,140,180,220,260,300,340,380].map(y => (
        <line key={y} x1="0" y1={y} x2="680" y2={y} stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}
      {[60,120,180,240,300,360,420,480,540,600].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#C9A227" strokeWidth="1" opacity="0.05" />
      ))}

      {/* Desk */}
      <rect x="100" y="318" width="480" height="8" rx="2" fill="#162230" opacity="0.8" />

      {/* Browser window shadow */}
      <rect x="218" y="98" width="268" height="228" rx="10" fill="#0e1a25" opacity="0.4" />
      {/* Browser window */}
      <rect x="214" y="94" width="268" height="228" rx="10" fill="#243648" />
      {/* Title bar */}
      <rect x="214" y="94" width="268" height="32" rx="10" fill="#1a2c3e" />
      <rect x="214" y="110" width="268" height="16" fill="#1a2c3e" />
      {/* Traffic lights */}
      <circle cx="232" cy="110" r="5" fill="#c0392b" opacity="0.7" />
      <circle cx="248" cy="110" r="5" fill="#f39c12" opacity="0.7" />
      <circle cx="264" cy="110" r="5" fill="#27ae60" opacity="0.7" />
      {/* URL bar */}
      <rect x="280" y="103" width="160" height="14" rx="4" fill="#162230" />
      <rect x="286" y="106" width="80" height="8" rx="2" fill="#B9C2CC" opacity="0.3" />

      {/* Form card */}
      <rect x="226" y="134" width="244" height="176" rx="6" fill="#F8F6F2" />

      {/* Form headline */}
      <rect x="238" y="146" width="120" height="10" rx="3" fill="#1C2B3A" opacity="0.7" />
      <rect x="238" y="160" width="80" height="6" rx="2" fill="#8A8579" opacity="0.5" />

      {/* Field 1: Name */}
      <rect x="238" y="176" width="108" height="6" rx="2" fill="#8A8579" opacity="0.4" />
      <rect x="238" y="185" width="220" height="24" rx="4" fill="white" />
      <rect x="238" y="185" width="220" height="24" rx="4" fill="none" stroke="#1C2B3A" strokeWidth="1" opacity="0.2" />
      {/* Filled text in field */}
      <rect x="244" y="193" width="96" height="8" rx="2" fill="#1C2B3A" opacity="0.5" />
      {/* Cursor */}
      <rect x="341" y="191" width="2" height="12" rx="1" fill="#C9A227" opacity="0.8" />

      {/* Field 2: Phone */}
      <rect x="238" y="218" width="80" height="6" rx="2" fill="#8A8579" opacity="0.4" />
      <rect x="238" y="227" width="220" height="24" rx="4" fill="white" />
      <rect x="238" y="227" width="220" height="24" rx="4" fill="none" stroke="#1C2B3A" strokeWidth="1" opacity="0.2" />
      <rect x="244" y="235" width="72" height="8" rx="2" fill="#1C2B3A" opacity="0.5" />

      {/* Field 3: Budget (partially filled) */}
      <rect x="238" y="260" width="60" height="6" rx="2" fill="#8A8579" opacity="0.4" />
      <rect x="238" y="269" width="220" height="24" rx="4" fill="white" />
      <rect x="238" y="269" width="220" height="24" rx="4" fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.6" />
      <rect x="244" y="277" width="40" height="8" rx="2" fill="#8A8579" opacity="0.3" />

      {/* Submit button (gold highlight) */}
      <rect x="238" y="302" width="220" height="28" rx="6" fill="#C9A227" />
      <rect x="298" y="312" width="100" height="8" rx="2" fill="#1C2B3A" opacity="0.7" />

      {/* Gold pulse on submit button */}
      <circle cx="458" cy="316" r="16" fill="#C9A227" opacity="0.2" className="pulse-ring" />

      {/* Person figure (left of screen) */}
      <ellipse cx="160" cy="320" rx="28" ry="5" fill="#0e1a25" opacity="0.4" />
      <rect x="138" y="256" width="44" height="62" rx="8" fill="#1C2B3A" />
      <rect x="148" y="268" width="24" height="38" rx="4" fill="#C9A227" opacity="0.6" />
      {/* Arm reaching toward keyboard */}
      <rect x="178" y="280" width="40" height="16" rx="6" fill="#1C2B3A" />
      <ellipse cx="218" cy="288" rx="8" ry="6" fill="#1C2B3A" opacity="0.8" />
      {/* Head */}
      <circle cx="160" cy="240" r="20" fill="#1C2B3A" />
      <ellipse cx="160" cy="226" rx="20" ry="8" fill="#0e1a25" opacity="0.6" />
      <circle cx="153" cy="240" r="2.5" fill="#B9C2CC" opacity="0.7" />
      <circle cx="167" cy="240" r="2.5" fill="#B9C2CC" opacity="0.7" />

      {/* Typing indicator dots */}
      <circle cx="240" cy="360" r="4" fill="#C9A227" opacity="0.6" />
      <circle cx="254" cy="360" r="4" fill="#C9A227" opacity="0.4" />
      <circle cx="268" cy="360" r="4" fill="#C9A227" opacity="0.2" />
    </svg>
  )
}

export default function BlueprintBg() {
  const spacing = 40
  const cols = 30
  const rows = 20

  const hLines = Array.from({ length: rows }, (_, i) => i * spacing)
  const vLines = Array.from({ length: cols }, (_, i) => i * spacing)

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid lines */}
      {hLines.map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="100%" y2={y} stroke="#C9A227" strokeWidth="1" opacity="0.07" />
      ))}
      {vLines.map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100%" stroke="#C9A227" strokeWidth="1" opacity="0.07" />
      ))}

      {/* Floor plan room outlines */}
      <rect x="60" y="80" width="160" height="120" rx="2" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.09" />
      <rect x="60" y="200" width="160" height="80" rx="2" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.09" />
      <rect x="220" y="80" width="120" height="200" rx="2" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.09" />

      {/* Door arc */}
      <path d="M 60 200 Q 80 180 100 200" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.08" />
      <path d="M 220 160 Q 240 140 260 160" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.08" />

      {/* Dimension lines */}
      <line x1="60" y1="300" x2="340" y2="300" stroke="#C9A227" strokeWidth="1" opacity="0.06" strokeDasharray="4 4" />
      <line x1="60" y1="295" x2="60" y2="305" stroke="#C9A227" strokeWidth="1" opacity="0.06" />
      <line x1="340" y1="295" x2="340" y2="305" stroke="#C9A227" strokeWidth="1" opacity="0.06" />
    </svg>
  )
}

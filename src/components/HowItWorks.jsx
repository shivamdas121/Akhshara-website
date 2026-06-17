import { useState, useEffect, useRef } from 'react'
import content from '../content.js'

// ─── Card panel ──────────────────────────────────────────────────────────────

function CardPanel({ image, style = {} }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #E2E8F0',
        background: '#FFFFFF',
        boxShadow: '0 4px 24px rgba(15,42,74,0.10)',
        ...style,
      }}
    >
      <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  )
}

// ─── Caption area ─────────────────────────────────────────────────────────────

function Caption({ step, branch, hw, branchScene, onBranch, onSwitch }) {
  return (
    <div
      key={`${step}-${branch}`}
      style={{ animation: 'fadeInCaption 300ms ease' }}
    >
      {step === 0 && (
        <p className="font-body text-lg leading-relaxed" style={{ color: '#1A2B3C' }}>
          {hw.scene1.caption}
        </p>
      )}

      {step === 1 && (
        <p className="font-body text-lg leading-relaxed" style={{ color: '#1A2B3C' }}>
          {hw.scene2.caption}
        </p>
      )}

      {step === 2 && (
        <div>
          <p className="font-body text-sm mb-8" style={{ color: '#6B7280' }}>
            {hw.branch.prompt}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onBranch('qualified')}
              className="font-body font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
              style={{ background: 'transparent', color: '#1D6FE8', border: '1px solid #1D6FE8' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1D6FE8'; e.currentTarget.style.color = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1D6FE8' }}
            >
              {hw.branch.buttonQualified}
            </button>
            <button
              onClick={() => onBranch('nurture')}
              className="font-body font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
              style={{ background: 'transparent', color: '#1D6FE8', border: '1px solid #1D6FE8' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1D6FE8'; e.currentTarget.style.color = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1D6FE8' }}
            >
              {hw.branch.buttonNurture}
            </button>
          </div>
        </div>
      )}

      {step === 3 && branchScene && (
        <div className="space-y-5">
          {branchScene.captions.map((c, i) => (
            <p key={i} className="font-body text-base leading-relaxed" style={{ color: '#1A2B3C' }}>
              {c}
            </p>
          ))}
          <button
            onClick={onSwitch}
            className="font-body text-sm text-sky underline underline-offset-4 hover:text-blue-700 transition-colors mt-2"
          >
            {branchScene.switchLink}
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HowItWorks() {
  const { howItWorks: hw } = content

  const [step, setStep] = useState(0)
  const [branch, setBranch] = useState(null)
  const [active, setActive] = useState(false)
  const [leaving, setLeaving] = useState(false)

  // Refs so event handlers can read current values without stale closures
  const stepRef = useRef(0)
  const branchRef = useRef(null)
  const activeRef = useRef(false)
  const leavingRef = useRef(false)
  const lastTickRef = useRef(0)
  const exitCooldownRef = useRef(0)
  const sentinelRef = useRef(null)
  const touchStartYRef = useRef(0)

  // Keep refs in sync with state
  useEffect(() => { stepRef.current = step }, [step])
  useEffect(() => { branchRef.current = branch }, [branch])
  useEffect(() => { activeRef.current = active }, [active])

  function exitSection() {
    if (leavingRef.current) return
    leavingRef.current = true
    setLeaving(true)
    activeRef.current = false
    exitCooldownRef.current = Date.now()
    setTimeout(() => {
      setActive(false)
      setLeaving(false)
      leavingRef.current = false
      stepRef.current = 0; setStep(0)
      branchRef.current = null; setBranch(null)
    }, 350)
  }

  // Shared step-advance logic used by both wheel and touch handlers
  function advanceStep(down) {
    const s = stepRef.current
    const b = branchRef.current
    const maxStep = b !== null ? 3 : 2

    // Block at branch choice until clicked
    if (s === 2 && b === null && down) return true // preventDefault, but don't advance

    // At bounds: exit section (allow natural scroll)
    if ((down && s >= maxStep) || (!down && s <= 0)) {
      exitSection()
      return false // don't preventDefault → natural scroll continues
    }

    // Within bounds: advance step
    const now = Date.now()
    if (now - lastTickRef.current < 400) return true // debounce — still intercept
    lastTickRef.current = now

    const next = s + (down ? 1 : -1)
    stepRef.current = next
    setStep(next)
    return true // preventDefault
  }

  // Wheel listener (registered once — reads state via refs)
  useEffect(() => {
    const handleWheel = (e) => {
      if (!activeRef.current) return
      const shouldPrevent = advanceStep(e.deltaY > 0)
      if (shouldPrevent) e.preventDefault()
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Touch listener
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
      if (!activeRef.current) return
      const deltaY = touchStartYRef.current - e.touches[0].clientY
      if (Math.abs(deltaY) < 20) return
      const shouldPrevent = advanceStep(deltaY > 0)
      if (shouldPrevent) {
        e.preventDefault()
        touchStartYRef.current = e.touches[0].clientY
      }
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // IntersectionObserver: activate when sentinel enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !activeRef.current && !leavingRef.current) {
          if (Date.now() - exitCooldownRef.current > 800) {
            activeRef.current = true
            setActive(true)
          }
        }
      },
      { threshold: 0.5 }
    )
    if (sentinelRef.current) observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [])

  const branchScene = branch === 'qualified' ? hw.qualified : branch === 'nurture' ? hw.nurture : null

  function handleBranch(b) {
    branchRef.current = b
    stepRef.current = 3
    setBranch(b)
    setStep(3)
  }

  function handleSwitch() {
    branchRef.current = null
    stepRef.current = 2
    setBranch(null)
    setStep(2)
  }

  return (
    <>
      {/* Sentinel — holds place in page flow */}
      <div ref={sentinelRef} style={{ height: '100vh', position: 'relative' }} />

      {/* Fixed overlay — rendered when active or fading out */}
      {(active || leaving) && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%', height: '100%',
            zIndex: 40,
            background: 'rgba(248,250,252,0.96)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            opacity: leaving ? 0 : 1,
            transition: 'opacity 350ms ease',
          }}
        >
          {/* Header */}
          <div style={{ padding: '40px 32px 16px', textAlign: 'center' }}>
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-sky mb-2">
              {hw.eyebrow}
            </p>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
              {hw.headline}
            </h2>
          </div>

          {/* Body: card stack + caption */}
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 flex-1 px-6 md:px-16 pb-8"
          >
            {/* Card stack */}
            <div style={{ position: 'relative', width: '340px', height: '340px', flexShrink: 0 }}>
              {/* Scene 1 — always shown */}
              <CardPanel image={hw.scene1.image} style={{ zIndex: 1 }} />

              {/* Scene 2 — fades + scales in at step 1 */}
              <CardPanel
                image={hw.scene2.image}
                style={{
                  zIndex: 2,
                  opacity: step >= 1 ? 1 : 0,
                  transform: step >= 1
                    ? 'translate(20px, 20px) rotate(4deg) scale(1)'
                    : 'translate(20px, 20px) rotate(4deg) scale(0.85)',
                  transition: 'opacity 380ms ease, transform 380ms ease',
                }}
              />

              {/* Scene 3/4 — fades + scales in at step 3 */}
              {branchScene && (
                <CardPanel
                  image={branchScene.image}
                  style={{
                    zIndex: 3,
                    opacity: step >= 3 ? 1 : 0,
                    transform: step >= 3
                      ? 'translate(-40px, 40px) rotate(-3deg) scale(1)'
                      : 'translate(-40px, 40px) rotate(-3deg) scale(0.85)',
                    transition: 'opacity 380ms ease, transform 380ms ease',
                  }}
                />
              )}
            </div>

            {/* Caption */}
            <div style={{ flex: 1, maxWidth: '380px' }}>
              <Caption
                step={step}
                branch={branch}
                hw={hw}
                branchScene={branchScene}
                onBranch={handleBranch}
                onSwitch={handleSwitch}
              />
            </div>
          </div>

          {/* Scroll hint at step 0 and 1 */}
          {step < 2 && (
            <div style={{ textAlign: 'center', paddingBottom: '24px', opacity: 0.45 }}>
              <p className="font-body text-xs tracking-widest uppercase" style={{ color: '#6B7280' }}>
                scroll to continue
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

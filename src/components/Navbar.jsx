import { useState, useEffect } from 'react'

const links = [
  { label: 'Impact', href: '#impact' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Listen In', href: '#proof' },
  { label: 'FAQs', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled ? 'rgba(15,42,74,0.97)' : 'transparent'
  const linkColor = scrolled ? '#CBD5E1' : '#1A2B3C'
  const borderBottom = scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: navBg,
        borderBottom,
        transition: 'background 300ms ease, border-bottom 300ms ease',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: '1.2rem',
              color: scrolled ? '#FFFFFF' : '#0F2A4A',
              transition: 'color 300ms ease',
              letterSpacing: '-0.01em',
            }}
          >
            Akshara Tech<span style={{ color: '#1D6FE8' }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center" style={{ gap: '28px' }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: linkColor,
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1D6FE8' }}
              onMouseLeave={e => { e.currentTarget.style.color = linkColor }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '0.875rem',
              color: '#FFFFFF',
              background: '#1D6FE8',
              padding: '9px 22px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'background 200ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1558c0' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1D6FE8' }}
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center" style={{ gap: '12px' }}>
          <a
            href="#demo"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: '#FFFFFF',
              background: '#1D6FE8',
              padding: '7px 16px',
              borderRadius: '7px',
              textDecoration: 'none',
            }}
          >
            Book a Demo
          </a>
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: scrolled ? '#CBD5E1' : '#1A2B3C',
                  borderRadius: '2px',
                  transition: 'background 300ms ease',
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: '#0F2A4A',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: '#CBD5E1',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

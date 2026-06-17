import { useState } from 'react'
import content from '../content.js'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid #E2E8F0' }} className="last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-body font-semibold text-base group-hover:text-sky transition-colors" style={{ color: '#1A2B3C' }}>
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            border: isOpen ? '1px solid #1D6FE8' : '1px solid #E2E8F0',
            background: isOpen ? '#1D6FE8' : 'transparent',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="1" x2="6" y2="11" stroke={isOpen ? '#FFFFFF' : '#1D6FE8'} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="6" x2="11" y2="6" stroke={isOpen ? '#FFFFFF' : '#1D6FE8'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p className="font-body leading-relaxed text-sm pb-5 pr-10" style={{ color: '#6B7280' }}>
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { faq } = content
  const [openIndex, setOpenIndex] = useState(0)

  function toggle(i) {
    setOpenIndex(prev => prev === i ? null : i)
  }

  return (
    <section className="py-24 px-6" style={{ background: 'rgba(248,250,252,0.88)' }}>
      <div className="max-w-3xl mx-auto">
        <p className="font-heading font-bold text-xs tracking-widest uppercase text-sky mb-10">
          {faq.eyebrow}
        </p>
        <div>
          {faq.items.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

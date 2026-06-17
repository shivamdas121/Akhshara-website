import { useState, useRef } from 'react'
import content from '../content.js'

function AudioCard({ recording, index }) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  function handleTimeUpdate() {
    const audio = audioRef.current
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100)
    }
  }

  function handleEnded() {
    setPlaying(false)
    setProgress(0)
  }

  return (
    <div className="rounded-2xl p-6 flex flex-col gap-4 bg-white shadow-sm" style={{ border: '1px solid #E2E8F0' }}>
      <audio
        ref={audioRef}
        src={`/assets/audio/recording-${index + 1}.mp3`}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-yellow-300 transition-colors"
          style={{ background: '#0F2A4A' }}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <rect x="0" y="0" width="4" height="16" rx="1" fill="#FFFFFF" />
              <rect x="8" y="0" width="4" height="16" rx="1" fill="#FFFFFF" />
            </svg>
          ) : (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <polygon points="2,0 14,8 2,16" fill="#FFFFFF" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <p className="font-body font-semibold text-sm truncate" style={{ color: '#1A2B3C' }}>{recording.title}</p>
          <p className="font-body text-xs mt-0.5" style={{ color: '#6B7280' }}>{recording.duration}</p>
        </div>
      </div>

      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: '#E2E8F0' }}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, background: '#1D6FE8' }}
        />
      </div>
    </div>
  )
}

export default function ProofDemo() {
  const { proof } = content
  return (
    <section className="py-24 px-6" style={{ background: 'rgba(239,246,255,0.88)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-sky mb-3">
            {proof.eyebrow}
          </p>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-4">
            {proof.headline}
          </h2>
          <p className="font-body text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            {proof.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {proof.recordings.map((rec, i) => (
            <AudioCard key={i} recording={rec} index={i} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block font-heading font-bold text-white bg-navy hover:bg-[#162f54] transition-colors px-8 py-4 rounded-lg text-base"
          >
            {proof.cta2}
          </a>
        </div>
      </div>
    </section>
  )
}

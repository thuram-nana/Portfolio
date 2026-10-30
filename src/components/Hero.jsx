import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// ─── HexSphere canvas — abstract "governance lattice" motif ─────────────────
function HexSphere() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const context = canvas.getContext('2d')
    if (!context) return undefined

    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2

    const layers = [
      { radius: 24, count: 1, size: 22, color: '#00E5FF', alpha: 0.95 },
      { radius: 64, count: 6, size: 17, color: '#00E5FF', alpha: 0.7 },
      { radius: 118, count: 12, size: 13, color: '#3b82f6', alpha: 0.5 },
      { radius: 174, count: 18, size: 10, color: '#4f46e5', alpha: 0.28 },
    ]

    const drawHex = (x, y, size, color, alpha, time, offset) => {
      const pulse = Math.sin(time * 1.4 + offset) * 0.5 + 0.5
      context.save()
      context.globalAlpha = alpha * (0.55 + pulse * 0.45)
      context.beginPath()
      for (let index = 0; index < 6; index += 1) {
        const angle = (Math.PI / 3) * index - Math.PI / 6
        const pointX = x + size * Math.cos(angle)
        const pointY = y + size * Math.sin(angle)
        if (index === 0) context.moveTo(pointX, pointY)
        else context.lineTo(pointX, pointY)
      }
      context.closePath()
      context.strokeStyle = color
      context.lineWidth = 0.85
      context.stroke()
      context.restore()
    }

    const drawLine = (x1, y1, x2, y2, color, alpha) => {
      context.save()
      context.globalAlpha = alpha
      context.strokeStyle = color
      context.lineWidth = 0.45
      context.beginPath()
      context.moveTo(x1, y1)
      context.lineTo(x2, y2)
      context.stroke()
      context.restore()
    }

    const render = (frame) => {
      const time = frame / 1000
      context.clearRect(0, 0, width, height)

      const halo = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 220)
      halo.addColorStop(0, 'rgba(59,130,246,0.08)')
      halo.addColorStop(0.45, 'rgba(0,229,255,0.03)')
      halo.addColorStop(1, 'transparent')
      context.fillStyle = halo
      context.fillRect(0, 0, width, height)

      layers.forEach((layer, layerIndex) => {
        const points = []
        if (layer.count === 1) {
          points.push([centerX, centerY])
        } else {
          for (let index = 0; index < layer.count; index += 1) {
            const baseAngle = (Math.PI * 2 * index) / layer.count
            const wobble = Math.sin(time * 0.55 + layerIndex + index * 0.22) * 4
            const angle = baseAngle + time * (layerIndex % 2 === 0 ? 0.06 : -0.05)
            const x = centerX + (layer.radius + wobble) * Math.cos(angle)
            const y = centerY + (layer.radius + wobble) * Math.sin(angle)
            points.push([x, y])
          }
        }
        points.forEach(([x, y], index) => {
          drawHex(x, y, layer.size, layer.color, layer.alpha, time, layerIndex * 20 + index)
        })
        if (points.length > 1) {
          points.forEach(([x, y], index) => {
            const next = points[(index + 1) % points.length]
            drawLine(x, y, next[0], next[1], layer.color, layer.alpha * 0.15)
          })
        }
        if (layerIndex === 1) {
          points.forEach(([x, y]) => {
            drawLine(centerX, centerY, x, y, '#3b82f6', 0.12)
          })
        }
      })

      const core = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 24)
      core.addColorStop(0, 'rgba(0,229,255,0.32)')
      core.addColorStop(1, 'transparent')
      context.fillStyle = core
      context.fillRect(centerX - 24, centerY - 24, 48, 48)

      context.save()
      context.beginPath()
      context.arc(centerX, centerY, 4, 0, Math.PI * 2)
      context.fillStyle = '#00E5FF'
      context.globalAlpha = 0.95
      context.fill()
      context.restore()

      animationRef.current = requestAnimationFrame(render)
    }

    animationRef.current = requestAnimationFrame(render)
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Abstract lattice representing SIGIL's governance infrastructure"
      width={460}
      height={460}
      className="w-full max-w-[460px] aspect-square"
    />
  )
}

// ─── Typewriter ──────────────────────────────────────────────────────────
function useTypewriter(text, speed = 30, delay = 0) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    let intervalId
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i += 1
        } else {
          clearInterval(intervalId)
        }
      }, speed)
    }, delay)
    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, speed, delay])
  return displayed
}

const stats = [
  { value: '2023', label: 'SIGIL founded' },
  { value: '3', label: 'Governance systems' },
  { value: '1', label: 'In paid pilot' },
  { value: '2', label: 'Security disclosures' },
]

export default function Hero() {
  const tagline = useTypewriter('Sovereign governance infrastructure for institutions.', 28, 500)

  return (
    <section
      id="hero"
      aria-labelledby="hero-h"
      className="relative min-h-screen flex items-center justify-center terminal-grid overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 65% 42%, rgba(59,130,246,0.08) 0%, rgba(79,70,229,0.04) 50%, transparent 72%)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left column */}
        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
            <span className="font-mono text-[10px] text-[#93c5fd] tracking-[0.18em] uppercase">
              SIGIL SARL · Buea, Cameroon
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            <h1 id="hero-h" className="font-sans font-black leading-[1.02] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">Junior</span>
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #00E5FF 55%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Thuram Nana
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            className="space-y-1.5"
          >
            <div className="font-sans text-lg sm:text-xl text-white font-semibold">
              Founder &amp; Managing Director, SIGIL&nbsp;SARL
            </div>
            <div className="font-sans text-sm text-[#e0e0e0]/55">
              Software engineer &amp; security researcher
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44, ease: EASE }}
            className="font-sans text-base text-[#e0e0e0]/70 leading-relaxed max-w-md min-h-[3.5rem]"
          >
            {tagline}
            <span className="inline-block w-[2px] h-5 bg-[#00E5FF] ml-0.5 align-middle animate-pulse" />
            <span className="block mt-2 text-[#e0e0e0]/45 text-sm">
              I build systems where the institution holds the keys, the data stays under its control,
              and every consequential action is authorized, bounded, and proven.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.56, ease: EASE }}
            className="flex flex-wrap gap-3"
          >
            <CTAButton primary onClick={() => document.getElementById('sigil')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore SIGIL
            </CTAButton>
            <CTAButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Request a briefing
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, ease: EASE }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="px-3 py-3 rounded-xl"
                style={{
                  background: 'rgba(17,19,24,0.55)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72 + i * 0.07, ease: EASE }}
              >
                <div className="font-sans text-xl font-bold text-[#00E5FF]">{stat.value}</div>
                <div className="font-mono text-[9px] text-[#e0e0e0]/45 tracking-wider uppercase mt-0.5 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right column: HexSphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="relative hidden lg:flex justify-center items-center min-h-[420px]"
        >
          <div className="relative z-10 animate-float">
            <HexSphere />
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0C10, transparent)' }}
      />
    </section>
  )
}

function CTAButton({ children, onClick, primary }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ ease: EASE }}
      className="font-sans text-sm font-medium px-6 py-3 rounded-lg transition-colors"
      style={primary ? {
        background: 'rgba(59,130,246,0.14)',
        border: '1px solid rgba(59,130,246,0.5)',
        color: '#bfdbfe',
      } : {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: 'rgba(224,224,224,0.75)',
      }}
    >
      {children}
    </motion.button>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const navItems = [
  { label: 'About',   href: '#about'   },
  { label: 'SIGIL',   href: '#sigil'   },
  { label: 'Work',    href: '#work'    },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      aria-label="Primary"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / wordmark */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
          whileHover={{ x: 2 }}
          transition={{ ease: EASE }}
        >
          <HexLogo />
          <div className="text-left leading-tight">
            <div className="font-sans font-bold text-white text-sm tracking-tight">
              Thuram Nana
            </div>
            <div className="font-mono text-[9px] text-[#3b82f6]/70 tracking-[0.18em] uppercase">
              Founder · SIGIL SARL
            </div>
          </div>
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} onClick={handleNav} />
          ))}
          <motion.button
            onClick={() => handleNav('#contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ ease: EASE }}
            className="font-sans text-xs font-medium px-4 py-2 rounded-lg"
            style={{
              background: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(59,130,246,0.4)',
              color: '#93c5fd',
            }}
          >
            Request a briefing
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <button
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden font-mono text-[#93c5fd] text-xs px-3 py-2 rounded-lg"
          style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(10, 12, 16, 0.94)',
              backdropFilter: 'blur(32px) saturate(200%)',
              WebkitBackdropFilter: 'blur(32px) saturate(200%)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="block w-full text-left font-sans text-sm text-[#e0e0e0]/70 hover:text-white py-3 transition-colors"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="block w-full text-left font-sans text-sm font-medium text-[#93c5fd] py-3"
              >
                Request a briefing →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ item, onClick }) {
  return (
    <button
      onClick={() => onClick(item.href)}
      className="relative font-sans text-sm text-[#e0e0e0]/60 hover:text-white tracking-tight transition-colors duration-200 group"
    >
      {item.label}
      <span
        className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
        style={{ background: 'linear-gradient(90deg, #3b82f6, #00E5FF)' }}
      />
    </button>
  )
}

function HexLogo() {
  const s = 30
  const cx = s / 2
  const cy = s / 2
  const r = s * 0.44
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
  }).join(' ')
  const r2 = s * 0.26
  const pts2 = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6
    return `${cx + r2 * Math.cos(a)},${cy + r2 * Math.sin(a)}`
  }).join(' ')
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" aria-hidden="true">
      <polygon points={pts} fill="none" stroke="#3b82f6" strokeWidth="1.2" opacity="0.9" />
      <polygon points={pts2} fill="rgba(59,130,246,0.1)" stroke="#00E5FF" strokeWidth="0.8" />
      <circle cx={cx} cy={cy} r={2.4} fill="#00E5FF" />
    </svg>
  )
}

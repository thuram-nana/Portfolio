import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'SIGIL', href: '#sigil' },
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/8 bg-[#070809]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FooterHex />
            <div className="leading-tight">
              <div className="font-sans font-bold text-white text-sm">Junior Thuram Nana</div>
              <div className="font-mono text-[9px] text-[#3b82f6]/70 tracking-[0.18em] uppercase">
                Founder · SIGIL SARL
              </div>
            </div>
          </div>
          <p className="font-sans text-[13px] text-[#e0e0e0]/45 leading-relaxed max-w-xs">
            Building sovereign governance infrastructure for institutions — from Buea, Cameroon.
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer">
          <div className="font-mono text-[10px] text-[#e0e0e0]/35 tracking-[0.3em] uppercase mb-4">
            Navigate
          </div>
          <div className="space-y-2.5">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="block font-sans text-[13px] text-[#e0e0e0]/50 hover:text-white transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Contact */}
        <div>
          <div className="font-mono text-[10px] text-[#e0e0e0]/35 tracking-[0.3em] uppercase mb-4">
            Reach me
          </div>
          <div className="space-y-2.5 font-sans text-[13px]">
            <a href="mailto:thuram@thuramnana.com" className="block text-[#00E5FF]/80 hover:text-[#00E5FF] transition-colors break-all">
              thuram@thuramnana.com
            </a>
            <a href="https://sigilsovereign.com" target="_blank" rel="noopener noreferrer" className="block text-[#e0e0e0]/50 hover:text-white transition-colors">
              sigilsovereign.com ↗
            </a>
            <a href="https://github.com/thuram-nana" target="_blank" rel="noopener noreferrer" className="block text-[#e0e0e0]/50 hover:text-white transition-colors">
              github.com/thuram-nana ↗
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-[10px] text-[#e0e0e0]/30 tracking-wide">
            © {year} Junior Thuram Nana · SIGIL SARL
          </div>
          <div className="font-mono text-[10px] text-[#e0e0e0]/25 tracking-wide">
            Buea, Cameroon
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterHex() {
  const s = 26
  const cx = s / 2
  const cy = s / 2
  const r = s * 0.44
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
  }).join(' ')
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" aria-hidden="true">
      <polygon points={pts} fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={2} fill="#00E5FF" />
    </svg>
  )
}

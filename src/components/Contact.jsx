import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const EMAIL = 'thuram@thuramnana.com'
const PGP_FINGERPRINT = 'C1C4 A87F EB43 04DB 9E62 86A1 F013 6C58 BB19 5F0C'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState('')

  const copy = (text, key) => {
    navigator.clipboard?.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <section id="contact" aria-labelledby="contact-h" ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-0" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <div className="font-mono text-[11px] text-[#3b82f6]/70 tracking-[0.3em] uppercase mb-5">
            05 — Contact
          </div>
          <h2 id="contact-h" className="font-sans font-black text-3xl sm:text-4xl text-white leading-tight mb-4">
            Let's talk
          </h2>
          <p className="font-sans text-[15px] text-[#e0e0e0]/60 leading-relaxed max-w-2xl">
            For investors, institutions evaluating SIGIL, clients, and serious collaborators — reach out
            directly, or request a briefing and I'll walk you through the systems and where they stand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Email */}
          <motion.button
            onClick={() => copy(EMAIL, 'email')}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
            className="glass p-6 text-left group"
            aria-label={`Copy email address ${EMAIL}`}
          >
            <div className="font-mono text-[10px] text-[#e0e0e0]/40 tracking-[0.25em] uppercase mb-3">Email</div>
            <div className="font-sans text-sm text-[#00E5FF]/90 break-all">{EMAIL}</div>
            <div className="font-mono text-[10px] text-[#e0e0e0]/35 mt-2">
              {copied === 'email' ? '✓ copied' : 'click to copy'}
            </div>
          </motion.button>

          {/* SIGIL */}
          <motion.a
            href="https://sigilsovereign.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
            className="glass p-6 group"
          >
            <div className="font-mono text-[10px] text-[#e0e0e0]/40 tracking-[0.25em] uppercase mb-3">SIGIL</div>
            <div className="font-sans text-sm text-[#00E5FF]/90">Request a briefing</div>
            <div className="font-mono text-[10px] text-[#e0e0e0]/35 mt-2">sigilsovereign.com ↗</div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/thuram-nana"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.19, ease: EASE }}
            className="glass p-6 group"
          >
            <div className="font-mono text-[10px] text-[#e0e0e0]/40 tracking-[0.25em] uppercase mb-3">GitHub</div>
            <div className="font-sans text-sm text-[#00E5FF]/90">@thuram-nana</div>
            <div className="font-mono text-[10px] text-[#e0e0e0]/35 mt-2">github.com/thuram-nana ↗</div>
          </motion.a>
        </div>

        {/* PGP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
          className="glass mt-5 p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
        >
          <div>
            <div className="font-mono text-[10px] text-[#D4AF37]/60 tracking-[0.25em] uppercase mb-2">
              PGP — for sensitive security correspondence
            </div>
            <button
              onClick={() => copy(PGP_FINGERPRINT.replace(/\s/g, ''), 'pgp')}
              className="font-mono text-xs text-[#e0e0e0]/70 hover:text-[#D4AF37] tracking-wide break-all text-left transition-colors"
            >
              {PGP_FINGERPRINT}
            </button>
          </div>
          <div className="font-mono text-[10px] text-[#e0e0e0]/35 flex-shrink-0">
            {copied === 'pgp' ? '✓ copied' : 'Full key on request'}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

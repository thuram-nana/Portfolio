import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const disclosures = [
  {
    entity: 'Meta · WhatsApp (iOS)',
    year: '2024',
    status: 'Patched',
    body: 'Responsibly disclosed a group-permission logic bypass in the WhatsApp iOS client, where non-admins could forward content within restricted broadcast groups. Reported under responsible disclosure and fixed.',
  },
  {
    entity: 'Samsung Mobile',
    year: '2025',
    status: 'Reported',
    body: 'Reported a clipboard-to-dialpad character-injection flaw: certain Unicode sequences were misread by the dialer input parser. Submitted to Samsung under coordinated disclosure.',
  },
]

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="research" aria-labelledby="research-h" ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-0" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <div className="font-mono text-[11px] text-[#3b82f6]/70 tracking-[0.3em] uppercase mb-5">
            03 · Security research
          </div>
          <h2 id="research-h" className="font-sans font-black text-3xl sm:text-4xl text-white leading-tight mb-4">
            Where SIGIL's discipline comes from
          </h2>
          <p className="font-sans text-[15px] text-[#e0e0e0]/60 leading-relaxed max-w-2xl">
            I study systems the way an adversary would, then disclose responsibly. It's the same instinct
            that runs through SIGIL: nothing is trusted until it has been independently re-verified.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {disclosures.map((d, i) => (
            <motion.div
              key={d.entity}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="glass p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-sans font-semibold text-white text-sm">{d.entity}</div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#e0e0e0]/40">{d.year}</span>
                  <span className="badge-neutral font-mono text-[9px] px-2 py-0.5 tracking-wider uppercase">
                    {d.status}
                  </span>
                </div>
              </div>
              <p className="font-sans text-[13px] text-[#e0e0e0]/60 leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

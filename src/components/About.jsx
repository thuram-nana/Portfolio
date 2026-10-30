import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const principles = [
  {
    k: '01',
    title: 'Capability is never authorization',
    body: 'Being technically able to act is never treated as permission to act. Every consequential action passes a fail-closed chain of identity, role, signed scope, risk class, and human approval before it runs.',
  },
  {
    k: '02',
    title: 'Nothing is trusted until re-verified',
    body: 'An observation stays a lead until an independent, deterministic check confirms it. Only re-verified facts are signed, and they stay checkable offline, without trusting the vendor.',
  },
  {
    k: '03',
    title: 'The institution stays in control',
    body: 'The institution holds the keys and the data. It can always read everything, export everything, and stop everything. No default vendor access, no silent telemetry.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" aria-labelledby="about-h" ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-0" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <div className="font-mono text-[11px] text-[#3b82f6]/70 tracking-[0.3em] uppercase mb-5">
            01 · About
          </div>
          <h2 id="about-h" className="font-sans font-black text-3xl sm:text-4xl text-white leading-tight max-w-2xl">
            I build trust that institutions can hold in their own hands.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="space-y-5 font-sans text-[15px] text-[#e0e0e0]/75 leading-relaxed"
          >
            <p>
              I'm a self-taught software engineer and security researcher based in Buea, Cameroon. I'm also the
              founder and managing director of <span className="text-white font-medium">SIGIL SARL</span>,
              a GovTech and RegTech company I started in 2023.
            </p>
            <p>
              I started out in independent security research, responsibly disclosing flaws to companies like
              Meta and Samsung, and in building software across mobile, web, and backend systems. That work
              taught me the same lesson each time: institutions are asked to trust software they can neither
              see into nor control.
            </p>
            <p>
              SIGIL is my answer. We build governance infrastructure for public institutions, banks, and
              companies. The systems are powerful but provably bounded: authority is explicit, findings are
              re-verified before anyone acts on them, and the institution can always read, export, and stop.
              Everything I build now is organized around that principle.
            </p>
          </motion.div>

          {/* Quick facts card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="glass p-6"
          >
            <div className="font-mono text-[10px] text-[#e0e0e0]/40 tracking-[0.25em] uppercase mb-4">
              At a glance
            </div>
            <dl className="space-y-3.5">
              {[
                ['Role', 'Founder & MD, SIGIL SARL'],
                ['Discipline', 'Engineering · Security'],
                ['Based in', 'Buea, Cameroon'],
                ['Founded', '2023'],
                ['Focus', 'Governance & RegTech'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <dt className="font-mono text-[10px] text-[#e0e0e0]/40 tracking-wider uppercase flex-shrink-0">{k}</dt>
                  <dd className="font-sans text-sm text-[#e0e0e0]/85 text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* Doctrine */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
          className="mt-16"
        >
          <div className="font-mono text-[11px] text-[#3b82f6]/70 tracking-[0.3em] uppercase mb-6">
            The doctrine I build by
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: EASE }}
                className="glass p-6"
              >
                <div className="font-mono text-2xl font-bold text-[#3b82f6]/30 mb-3">{p.k}</div>
                <h3 className="font-sans font-semibold text-white text-base mb-2 leading-snug">{p.title}</h3>
                <p className="font-sans text-sm text-[#e0e0e0]/60 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

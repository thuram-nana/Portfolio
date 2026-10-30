import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const groups = [
  {
    label: 'Security & governance',
    items: ['Vulnerability research', 'Responsible disclosure', 'Threat modeling', 'Authorization & policy systems', 'Signed, offline-verifiable evidence'],
  },
  {
    label: 'Product engineering',
    items: ['Flutter / Dart mobile', 'React / TypeScript web', 'Node.js APIs', 'Firebase', 'Google Cloud'],
  },
  {
    label: 'Blockchain',
    items: ['Solidity smart contracts', 'Ethereum / EVM', 'Wallet integrations', 'Non-custodial flows'],
  },
  {
    label: 'AI-assisted engineering',
    items: ['Agentic development workflows', 'LLM orchestration', 'AI-driven product features'],
  },
]

const languages = ['Dart', 'TypeScript', 'JavaScript', 'Python', 'Solidity', 'Rust', 'Bash']

export default function Capabilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="capabilities" aria-labelledby="cap-h" ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-0" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <div className="font-mono text-[11px] text-[#3b82f6]/70 tracking-[0.3em] uppercase mb-5">
            04 · Capabilities
          </div>
          <h2 id="cap-h" className="font-sans font-black text-3xl sm:text-4xl text-white leading-tight mb-4">
            What I work with
          </h2>
          <p className="font-sans text-[15px] text-[#e0e0e0]/60 leading-relaxed max-w-2xl">
            Depth in security and governance, backed by the full-stack and blockchain engineering to ship it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="glass p-6"
            >
              <h3 className="font-sans font-semibold text-white text-sm mb-4">{g.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[11px] px-2.5 py-1 rounded tracking-wide"
                    style={{ border: '1px solid rgba(59,130,246,0.2)', color: 'rgba(224,224,224,0.7)', background: 'rgba(59,130,246,0.05)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="flex flex-wrap items-center gap-x-4 gap-y-3"
        >
          <span className="font-mono text-[11px] text-[#e0e0e0]/40 tracking-[0.25em] uppercase">Languages</span>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l} className="font-mono text-xs text-[#e0e0e0]/70 px-2.5 py-1 rounded"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                {l}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

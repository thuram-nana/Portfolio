import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const projects = [
  {
    name: 'FLAIRE',
    tagline: 'AI-powered EdTech platform',
    status: 'Live',
    body: 'A cross-platform learning app with an AI-driven curriculum. Built with Flutter and Dart on a Firebase backend running on Google Cloud.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud', 'AI'],
    link: 'https://flaireapp.org',
    linkLabel: 'flaireapp.org',
  },
  {
    name: 'BlockEarth',
    tagline: 'Decentralized Web3 token sale',
    status: 'Live',
    body: 'A fully on-chain token-sale dApp: an Ethereum smart contract in Solidity, multi-wallet support, and a time-locked operational window — non-custodial end to end.',
    stack: ['Solidity', 'Ethereum', 'Web3', 'WalletConnect'],
    link: 'https://blockearth.app',
    linkLabel: 'blockearth.app',
  },
  {
    name: 'GUC',
    tagline: 'Got U Connected — community platform',
    status: 'Built · 2024',
    body: 'A cross-platform student-and-staff community app spanning academic tools and a social layer, from one Flutter codebase across iOS, Android, and web.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Cross-platform'],
    link: null,
    linkLabel: null,
  },
]

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

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="work" aria-labelledby="work-h" ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-0" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <div className="font-mono text-[11px] text-[#3b82f6]/70 tracking-[0.3em] uppercase mb-5">
            03 — Selected work
          </div>
          <h2 id="work-h" className="font-sans font-black text-3xl sm:text-4xl text-white leading-tight mb-4">
            Products shipped & research disclosed
          </h2>
          <p className="font-sans text-[15px] text-[#e0e0e0]/60 leading-relaxed max-w-2xl">
            Before and alongside SIGIL, I've shipped products end to end and done independent security
            research. A sample of each.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              className="glass p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-sans font-bold text-lg text-white tracking-tight">{p.name}</h3>
                <span className="badge-live font-mono text-[9px] px-2.5 py-1 tracking-wider uppercase">
                  {p.status}
                </span>
              </div>
              <div className="font-sans text-sm text-white/70 font-medium mb-3">{p.tagline}</div>
              <p className="font-sans text-[13px] text-[#e0e0e0]/60 leading-relaxed mb-4 flex-1">{p.body}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] px-2 py-0.5 rounded tracking-wide"
                    style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(224,224,224,0.6)', background: 'rgba(255,255,255,0.02)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#00E5FF]/80 hover:text-[#00E5FF] tracking-wide transition-colors mt-auto"
                >
                  {p.linkLabel} ↗
                </a>
              )}
            </motion.article>
          ))}
        </div>

        {/* Security research */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          <div className="font-mono text-[11px] text-[#3b82f6]/70 tracking-[0.3em] uppercase mb-6">
            Security research — responsible disclosures
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {disclosures.map((d, i) => (
              <motion.div
                key={d.entity}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: EASE }}
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
        </motion.div>
      </div>
    </section>
  )
}

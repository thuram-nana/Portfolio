import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const systems = [
  {
    name: 'VIGIL',
    tagline: 'Governed cybersecurity & evidence platform',
    status: 'Paid pilot',
    statusClass: 'badge-pilot',
    accent: '#34d399',
    body: 'Detects, observes, and blocks cyberattacks, but only acts after an independent check confirms the threat. Authorized operators find vulnerabilities through a fail-closed authorization chain; every confirmed finding is signed and compiled into one tamper-evident dossier that re-verifies offline.',
    points: ['Protect', 'Assess', 'Lead → verified fact', 'Remediate', 'Signed dossier'],
  },
  {
    name: 'RÉCOR',
    tagline: 'Sovereign beneficial-ownership registry',
    status: 'Pre-deployment',
    statusClass: 'badge-predeploy',
    accent: '#93c5fd',
    body: 'A national beneficial-ownership registry built to the Beneficial Ownership Data Standard (BODS v0.4). It makes clear who really owns what. Demonstrated to and acknowledged by Open Ownership in July 2026.',
    points: ['BODS v0.4', 'Acknowledged by Open Ownership'],
  },
  {
    name: 'APEX',
    tagline: 'Anti-corruption intelligence for public procurement',
    status: 'Pre-deployment',
    statusClass: 'badge-predeploy',
    accent: '#93c5fd',
    body: 'Surfaces risk and anomalies across public procurement so oversight bodies can act on evidence, not hunches. It holds to the same standard as every SIGIL system: findings stay leads until an independent check re-verifies them.',
    points: ['Procurement oversight', 'Re-verified findings'],
  },
]

export default function Sigil() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sigil" aria-labelledby="sigil-h" ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-0" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <div className="font-mono text-[11px] text-[#3b82f6]/70 tracking-[0.3em] uppercase mb-5">
            02 · SIGIL SARL
          </div>
          <h2 id="sigil-h" className="font-sans font-black text-3xl sm:text-5xl text-white leading-[1.05] mb-5">
            Sovereign governance{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #00E5FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              infrastructure
            </span>
          </h2>
          <p className="font-sans text-[15px] text-[#e0e0e0]/70 leading-relaxed max-w-2xl">
            SIGIL SARL, <span className="text-white/90">Sovereign Integrity Governance Infrastructure Labs</span>,
            is a Cameroonian GovTech and RegTech company I founded in 2023. We build governance and security
            infrastructure for public institutions, banks, and companies: powerful systems that stay provably
            under their owner's control.
          </p>
        </motion.div>

        {/* Company meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 font-mono text-[11px] text-[#e0e0e0]/45 tracking-wide"
        >
          <span>Founded 2023</span>
          <span className="text-white/15">·</span>
          <span>Buea, Cameroon</span>
          <span className="text-white/15">·</span>
          <span>RCCM RC.BUA.2026.B.0190</span>
          <span className="text-white/15">·</span>
          <a
            href="https://sigilsovereign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E5FF]/80 hover:text-[#00E5FF] transition-colors"
          >
            sigilsovereign.com ↗
          </a>
        </motion.div>

        {/* Three systems */}
        <div className="font-mono text-[11px] text-[#3b82f6]/70 tracking-[0.3em] uppercase mb-6">
          Three systems
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {systems.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: EASE }}
              className="glass p-6 flex flex-col"
              style={{ borderTop: `2px solid ${s.accent}55` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-sans font-black text-xl text-white tracking-tight">{s.name}</h3>
                <span className={`${s.statusClass} font-mono text-[9px] px-2.5 py-1 tracking-wider uppercase`}>
                  {s.status}
                </span>
              </div>
              <div className="font-sans text-sm text-white/70 font-medium mb-3">{s.tagline}</div>
              <p className="font-sans text-[13px] text-[#e0e0e0]/60 leading-relaxed mb-4 flex-1">{s.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.points.map((p) => (
                  <span
                    key={p}
                    className="font-mono text-[9px] px-2 py-0.5 rounded tracking-wide"
                    style={{ border: `1px solid ${s.accent}33`, color: `${s.accent}`, background: `${s.accent}0d` }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Trust model callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          className="glass-solid mt-8 p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="font-mono text-[10px] text-[#00E5FF]/60 tracking-[0.25em] uppercase mb-2">
                What "sovereign" means here
              </div>
              <p className="font-sans text-sm text-[#e0e0e0]/70 leading-relaxed max-w-2xl">
                Deploy on your own premises or cloud and you hold the keys and the data. SIGIL has no default
                access and receives no telemetry. A managed service is in preparation for teams who want it run
                for them. Either way, every dossier verifies on its own, without having to trust us.
              </p>
            </div>
            <a
              href="https://sigilsovereign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans text-sm font-medium px-5 py-3 rounded-lg whitespace-nowrap transition-colors"
              style={{ background: 'rgba(59,130,246,0.14)', border: '1px solid rgba(59,130,246,0.5)', color: '#bfdbfe' }}
            >
              Visit SIGIL ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Wifi, User, AlertOctagon } from 'lucide-react'

const personalData = [
  'Full name', 'Address / email address', 'ID card / passport number',
  'IP address', 'Cookie ID', 'Date of birth', 'Banking details',
  'Photos in school uniform', 'Advertising identifier (mobile)',
]

const sensitiveData = [
  'Ethnicity or race', 'Political views', 'Membership of a trade union',
  'Religion / philosophical beliefs', 'Sexual orientation / gender',
  'Criminal record', 'Medical history', 'Genetic data / DNA', 'Biometric data',
]

export function Slide07ESafety2() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ padding: '16px 40px' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-3 flex-shrink-0">
        <div style={{ width: 44, height: 44, borderRadius: '11px', flexShrink: 0,
          background: 'rgba(6,182,212,0.18)', border: '1px solid rgba(6,182,212,0.4)',
          boxShadow: '0 0 18px rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Wifi size={22} style={{ color: '#22d3ee' }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#22d3ee' }}>8.2 — E-SAFETY</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>8.2.2 Personal & Sensitive Data</h2>
        </div>
      </motion.div>

      {/* Definition */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="rounded-xl mb-3 flex-shrink-0"
        style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.18)', padding: '9px 14px' }}>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          <strong style={{ color: '#22d3ee' }}>Personal data</strong> = any data concerning a <em>living person</em> who can be identified from it. All precautions must be taken to keep it confidential — including encryption if accidentally disclosed.
        </p>
      </motion.div>

      <div className="flex gap-4">

        {/* Personal data column */}
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="flex-1 rounded-xl"
          style={{ background: 'var(--card)', border: '1px solid rgba(34,211,238,0.25)', backdropFilter: 'blur(14px)', padding: '14px 16px' }}>
          <div className="flex items-center gap-2 mb-3">
            <User size={16} style={{ color: '#22d3ee' }} />
            <p className="font-space font-bold text-sm" style={{ color: '#22d3ee' }}>Personal Data</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {personalData.map((item, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="text-sm px-3 py-1 rounded-full"
                style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)', color: '#67e8f9' }}>
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Sensitive data column */}
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="flex-1 rounded-xl"
          style={{ background: 'var(--card)', border: '1px solid rgba(239,68,68,0.25)', backdropFilter: 'blur(14px)', padding: '14px 16px' }}>
          <div className="flex items-center gap-2 mb-3">
            <AlertOctagon size={16} style={{ color: '#f87171' }} />
            <p className="font-space font-bold text-sm" style={{ color: '#f87171' }}>Sensitive Data</p>
            <span className="text-xs px-2 py-0.5 rounded-full ml-auto"
              style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5' }}>
              Extra care required
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {sensitiveData.map((item, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="text-sm px-3 py-1 rounded-full"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5' }}>
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right: protect tips */}
        <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
          className="rounded-xl"
          style={{ width: 200, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.25)', backdropFilter: 'blur(14px)', padding: '14px 16px' }}>
          <p className="font-space font-bold text-sm mb-3" style={{ color: '#c084fc' }}>How to protect it?</p>
          {[
            { tip: 'Encryption', desc: 'Scrambles data so only authorised users can read it' },
            { tip: 'Passwords', desc: 'Strong, frequently changed passwords' },
            { tip: 'Access control', desc: 'Only give data to those who need it' },
            { tip: 'Secure disposal', desc: 'Shred paper records; wipe drives securely' },
          ].map(({ tip, desc }, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }} className="mb-3">
              <p className="text-sm font-semibold" style={{ color: '#c084fc' }}>{tip}</p>
              <p className="text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

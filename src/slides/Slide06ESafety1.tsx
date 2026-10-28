import { motion } from 'framer-motion'
import { Wifi, Scale, ListChecks, User, AlertOctagon, Lock } from 'lucide-react'

// Slide 06 — 8.2 E-Safety: DPA + Personal & Sensitive Data (merged)

const principles = [
  { num: 1, text: 'Fairly and lawfully processed', color: '#22d3ee' },
  { num: 2, text: 'Only for the stated purpose', color: '#38bdf8' },
  { num: 3, text: 'Adequate, relevant and not excessive', color: '#60a5fa' },
  { num: 4, text: 'Accurate and kept up to date', color: '#818cf8' },
  { num: 5, text: 'Not kept longer than necessary', color: '#a78bfa' },
  { num: 6, text: 'Processed per data subject\'s rights', color: '#c084fc' },
  { num: 7, text: 'Kept secure', color: '#e879f9' },
  { num: 8, text: 'Not transferred outside EEA without protection', color: '#f472b6' },
]

const guidelines = [
  'Don\'t leave personal info unattended on a desk',
  'Lock filing cabinets when room is unoccupied',
  'Log off if away from your desk',
  'Use passwords + user IDs — change frequently',
  'Never send sensitive data via email or fax',
]

const personalData = [
  'Full name', 'Address / email', 'ID / passport no.',
  'IP address', 'Cookie ID', 'Date of birth',
  'Banking details', 'School uniform photos', 'Advertising ID',
]

const sensitiveData = [
  'Ethnicity / race', 'Political views', 'Trade union membership',
  'Religion / beliefs', 'Sexual orientation', 'Criminal record',
  'Medical history', 'Genetic / DNA data', 'Biometric data',
]

const protectTips = [
  { tip: 'Encryption', desc: 'Scrambles data; unreadable without the key' },
  { tip: 'Passwords', desc: 'Strong, frequently changed credentials' },
  { tip: 'Access control', desc: 'Only share with those who need it' },
  { tip: 'Secure disposal', desc: 'Shred paper; securely wipe drives' },
]

export function Slide06ESafety1() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ padding: '12px 40px 10px' }}>

      {/* ── Header ─────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-2.5 flex-shrink-0">
        <div style={{
          width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
          background: 'rgba(6,182,212,0.18)', border: '1px solid rgba(6,182,212,0.4)',
          boxShadow: '0 0 16px rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Wifi size={20} style={{ color: '#22d3ee' }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#22d3ee' }}>8.2 — E-SAFETY</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>Data Protection Act & Personal Data</h2>
        </div>
      </motion.div>

      {/* ══ SECTION 1: DPA ══════════════════════════════ */}
      <div className="flex gap-3 mb-2.5 flex-shrink-0">

        {/* Left: DPA intro + 4-col principles grid */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">

          {/* DPA intro */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="rounded-lg flex-shrink-0"
            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', padding: '7px 12px' }}>
            <div className="flex items-center gap-1.5 mb-1">
              <Scale size={13} style={{ color: '#22d3ee', flexShrink: 0 }} />
              <p className="font-space font-semibold text-xs" style={{ color: '#22d3ee' }}>What is a Data Protection Act (DPA)?</p>
            </div>
            <p className="text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>
              Legislation ensuring data is <strong style={{ color: 'var(--text)' }}>collected, stored and processed responsibly</strong>. Covers both computerised and paper records. Failure can mean heavy fines or imprisonment.
            </p>
          </motion.div>

          {/* 8 principles — 4 columns */}
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-faint)' }}>
              The 8 Principles of the DPA
            </p>
            <div className="grid grid-cols-4 gap-1.5">
              {principles.map(({ num, text, color }, i) => (
                <motion.div key={num}
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                  className="flex items-start gap-1.5 rounded-lg overflow-hidden"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', backdropFilter: 'blur(10px)', padding: '6px 8px' }}>
                  <span className="font-mono font-bold flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: `${color}22`, border: `1px solid ${color}44`, color, fontSize: 9 }}>
                    {num}
                  </span>
                  <p className="text-xs leading-snug" style={{ color: 'var(--text-muted)' }}>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Preventing Unlawful Access */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}
          className="rounded-xl flex-shrink-0"
          style={{ width: 200, background: 'var(--card)', border: '1px solid var(--border)', backdropFilter: 'blur(14px)', padding: '10px 13px' }}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <ListChecks size={14} style={{ color: '#22d3ee' }} />
            <p className="font-space font-bold text-xs" style={{ color: 'var(--text)' }}>Preventing Unlawful Access</p>
          </div>
          <ul className="space-y-1.5">
            {guidelines.map((g, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-start gap-1.5 text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: '#22d3ee', flexShrink: 0, marginTop: 1 }}>✓</span>{g}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ── Section divider ─────────────────────────────── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
        className="flex items-center gap-2 mb-2.5 flex-shrink-0">
        <div className="h-px flex-1" style={{ background: 'rgba(34,211,238,0.18)' }} />
        <p className="text-xs font-mono font-semibold uppercase tracking-widest"
          style={{ color: 'var(--text-faint)' }}>8.2.2 — Personal & Sensitive Data</p>
        <div className="h-px flex-1" style={{ background: 'rgba(34,211,238,0.18)' }} />
      </motion.div>

      {/* ══ SECTION 2: Personal & Sensitive Data ════════ */}
      <div className="flex gap-3 flex-shrink-0">

        {/* Definition banner */}
        {/* Personal data chips */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex-1 rounded-xl overflow-hidden"
          style={{ background: 'var(--card)', border: '1px solid rgba(34,211,238,0.28)', backdropFilter: 'blur(14px)', padding: '10px 13px' }}>
          <div className="flex items-center gap-1.5 mb-2">
            <User size={14} style={{ color: '#22d3ee', flexShrink: 0 }} />
            <p className="font-space font-bold text-xs" style={{ color: '#22d3ee' }}>Personal Data</p>
            <span className="text-xs ml-1" style={{ color: 'var(--text-faint)' }}>— identifies a living person</span>
          </div>
          {/* Chips — overflow hidden so they stay inside the card */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', overflow: 'hidden' }}>
            {personalData.map((item, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.04 }}
                style={{
                  fontSize: 12, padding: '3px 10px', borderRadius: 999, whiteSpace: 'nowrap',
                  background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.28)', color: '#67e8f9',
                }}>
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Sensitive data chips */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 }}
          className="flex-1 rounded-xl overflow-hidden"
          style={{ background: 'var(--card)', border: '1px solid rgba(239,68,68,0.28)', backdropFilter: 'blur(14px)', padding: '10px 13px' }}>
          <div className="flex items-center gap-1.5 mb-2">
            <AlertOctagon size={14} style={{ color: '#f87171', flexShrink: 0 }} />
            <p className="font-space font-bold text-xs" style={{ color: '#f87171' }}>Sensitive Data</p>
            <span className="text-xs px-1.5 py-0.5 rounded-full ml-auto flex-shrink-0"
              style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5' }}>
              Extra care required
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', overflow: 'hidden' }}>
            {sensitiveData.map((item, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.78 + i * 0.04 }}
                style={{
                  fontSize: 12, padding: '3px 10px', borderRadius: 999, whiteSpace: 'nowrap',
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.28)', color: '#fca5a5',
                }}>
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* How to protect */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.68 }}
          className="rounded-xl flex-shrink-0 overflow-hidden"
          style={{ width: 200, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.28)', backdropFilter: 'blur(14px)', padding: '10px 13px' }}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Lock size={13} style={{ color: '#c084fc' }} />
            <p className="font-space font-bold text-xs" style={{ color: '#c084fc' }}>How to Protect It</p>
          </div>
          <div className="space-y-2">
            {protectTips.map(({ tip, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 + i * 0.08 }}>
                <p className="text-xs font-semibold" style={{ color: '#c084fc' }}>{tip}</p>
                <p className="text-xs leading-snug" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

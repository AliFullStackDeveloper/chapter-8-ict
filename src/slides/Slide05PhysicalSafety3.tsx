import { motion } from 'framer-motion'
import { HardHat, Brain, Trophy } from 'lucide-react'

const keyPoints = [
  { label: 'Health safety', def: 'Preventing illness from daily computer use (e.g. RSI, eye strain)', color: '#22d3ee' },
  { label: 'Physical safety', def: 'Preventing dangers that lead to serious injury or death', color: '#f59e0b' },
]

const scenarios = [
  { q: 'You spill coffee near the computer. What do you do?', a: 'Move the liquid away immediately. Report it. Never attempt to clean powered equipment yourself.', color: '#f59e0b' },
  { q: 'A wire is trailing across a busy corridor. What should be done?', a: 'Secure it with a cable duct or use wireless connectivity to remove the cable entirely.', color: '#fb923c' },
  { q: 'A PC is too close to the desk edge and could fall. What should you do?', a: 'Move it to the centre of a strong, large desk. Never place heavy hardware at edges.', color: '#c084fc' },
]

export function Slide05PhysicalSafety3() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ padding: '16px 40px' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4 flex-shrink-0">
        <div style={{ width: 44, height: 44, borderRadius: '11px', flexShrink: 0,
          background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.4)',
          boxShadow: '0 0 18px rgba(245,158,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HardHat size={22} style={{ color: '#f59e0b' }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#f59e0b' }}>8.1 — PHYSICAL SAFETY</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>Key Definitions & Scenarios</h2>
        </div>
      </motion.div>

      <div className="flex gap-4">
        {/* Left: definitions + exam tips */}
        <div className="flex flex-col gap-3" style={{ width: 270, flexShrink: 0 }}>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)', backdropFilter: 'blur(14px)', padding: '14px 16px' }}>
            <div className="flex items-center gap-2 mb-3">
              <Brain size={16} style={{ color: '#22d3ee' }} />
              <p className="font-space font-bold text-sm" style={{ color: 'var(--text)' }}>Remember the Difference</p>
            </div>
            {keyPoints.map(({ label, def, color }, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.12 }} className="mb-2.5">
                <p className="text-sm font-mono font-semibold mb-0.5" style={{ color }}>{label}</p>
                <p className="text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>{def}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="rounded-xl" style={{ background: 'rgba(6,182,212,0.07)', border: '1px solid rgba(6,182,212,0.22)', padding: '14px 16px' }}>
            <div className="flex items-center gap-2 mb-3">
              <Trophy size={16} style={{ color: '#22d3ee' }} />
              <p className="font-space font-bold text-sm" style={{ color: '#22d3ee' }}>Exam Tips</p>
            </div>
            <ul className="space-y-2">
              {[
                'Always give cause AND prevention — 2 marks each!',
                'RCB = Residual Current Breaker — know it.',
                'CO₂ or dry-powder only — NOT water on fires.',
                'Wireless eliminates trailing cables entirely.',
              ].map((t, i) => (
                <motion.li key={i} className="flex gap-1.5 items-start text-sm"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }} style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color: '#22d3ee', flexShrink: 0, marginTop: 2 }}>★</span>{t}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right: scenarios */}
        <div className="flex flex-col gap-3 flex-1">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-semibold tracking-widest uppercase flex-shrink-0"
            style={{ color: 'var(--text-faint)' }}>
            Think about it — what would you do?
          </motion.p>
          {scenarios.map(({ q, a, color }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.5 }}
              className="rounded-xl"
              style={{ background: 'var(--card)', border: `1px solid ${color}28`, backdropFilter: 'blur(14px)', padding: '14px 16px' }}>
              <p className="text-sm font-semibold mb-1.5" style={{ color }}>{q}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a}</p>
              <div className="mt-2 h-px w-full rounded-full" style={{ background: `${color}33` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

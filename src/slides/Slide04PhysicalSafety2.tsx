import { motion } from 'framer-motion'
import { HardHat, TriangleAlert, UserX, Wifi, CheckCircle2 } from 'lucide-react'

const hazards = [
  {
    icon: TriangleAlert, title: 'Trip Hazard', color: '#fb923c', glow: 'rgba(251,146,60,0.28)',
    causes: ['Trailing wires on the floor', 'Damaged carpets & flooring'],
    prevention: ['Use cable ducts to hide & secure wires', 'Cover/hide wires under desks', 'Use wireless connectivity to eliminate cables'],
  },
  {
    icon: UserX, title: 'Personal Injury', color: '#c084fc', glow: 'rgba(192,132,252,0.28)',
    causes: ['Heavy equipment unstable / falling from desks', 'Desks collapsing under equipment weight'],
    prevention: ['Use desks strong enough for the equipment', 'Large desks so hardware is away from edges', 'Ensure equipment is securely positioned'],
  },
]

const tips = [
  { text: 'No drinks near computers', color: '#f59e0b' },
  { text: 'Check wires regularly', color: '#f59e0b' },
  { text: 'Use RCB & safe sockets', color: '#f59e0b' },
  { text: 'Keep vents clear of dust', color: '#ef4444' },
  { text: 'Fire extinguisher nearby', color: '#ef4444' },
  { text: 'Cable ducts / wireless', color: '#fb923c' },
  { text: 'Strong, spacious desks', color: '#c084fc' },
]

export function Slide04PhysicalSafety2() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ padding: '16px 40px' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-3 flex-shrink-0">
        <div style={{ width: 44, height: 44, borderRadius: '11px', flexShrink: 0,
          background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.4)',
          boxShadow: '0 0 18px rgba(245,158,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HardHat size={22} style={{ color: '#f59e0b' }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#f59e0b' }}>8.1 — PHYSICAL SAFETY</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>Trips, Injuries & Quick Summary</h2>
        </div>
      </motion.div>

      <div className="flex gap-4">

        {/* Left: two hazard cards */}
        <div className="flex flex-col gap-3 flex-1">
          {hazards.map(({ icon: Icon, title, color, glow, causes, prevention }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="cyber-border rounded-xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)', backdropFilter: 'blur(14px)', padding: '14px 16px' }}>

              <div className="flex items-center gap-2.5 mb-3">
                <div style={{ width: 36, height: 36, borderRadius: '9px', flexShrink: 0,
                  background: `${color}18`, border: `1px solid ${color}44`, boxShadow: `0 0 12px ${glow}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} style={{ color }} strokeWidth={2} />
                </div>
                <h3 className="font-space font-bold text-lg" style={{ color }}>{title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-mono font-bold uppercase tracking-wider mb-1.5" style={{ color: '#f87171' }}>⚠ Causes</p>
                  {causes.map((c, j) => (
                    <p key={j} className="flex gap-1.5 text-sm leading-snug mb-1" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: '#f87171', flexShrink: 0 }}>›</span>{c}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-mono font-bold uppercase tracking-wider mb-1.5" style={{ color: '#4ade80' }}>✓ Prevention</p>
                  {prevention.map((p, j) => (
                    <p key={j} className="flex gap-1.5 text-sm leading-snug mb-1" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: '#4ade80', flexShrink: 0 }}>›</span>{p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: quick-recap tips */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.55 }}
          className="rounded-xl flex flex-col"
          style={{ width: 210, background: 'var(--card)', border: '1px solid var(--border)', backdropFilter: 'blur(14px)', padding: '14px 16px' }}>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 size={18} style={{ color: '#22d3ee' }} />
            <p className="font-space font-bold text-sm" style={{ color: 'var(--text)' }}>Safety Recap</p>
          </div>
          <ul className="space-y-2.5">
            {tips.map((t, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.08 }}
                className="flex items-center gap-2 text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.color, flexShrink: 0, boxShadow: `0 0 5px ${t.color}` }} />
                {t.text}
              </motion.li>
            ))}
          </ul>
          <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }}
            className="flex justify-center mt-4">
            <Wifi size={26} style={{ color: 'rgba(6,182,212,0.3)' }} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

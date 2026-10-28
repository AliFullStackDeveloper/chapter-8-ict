import { motion } from 'framer-motion'
import { HardHat, Zap, Flame, TriangleAlert, UserX, AlertOctagon } from 'lucide-react'

// Slide 03 — 8.1 Physical Safety: ALL 4 Hazards (Electrical + Trip + Injury)
const hazards = [
  {
    icon: Zap, title: 'Electrocution', color: '#f59e0b', glow: 'rgba(245,158,11,0.28)',
    causes: ['Spilling liquids on electrical equipment', 'Exposed / damaged wiring & insulation', 'Unsafe electrical equipment', 'Overloaded wall sockets'],
    prevention: ['No drinks in the computer room', 'Check & renew wires regularly', 'Use a Residual Current Breaker (RCB)', 'Qualified electrician checks all equipment'],
  },
  {
    icon: Flame, title: 'Fire Hazard', color: '#ef4444', glow: 'rgba(239,68,68,0.28)',
    causes: ['Overloaded sockets / extension blocks', 'Equipment overheating (blocked vents)', 'Dust accumulation inside computers', 'Exposed wires causing short circuits'],
    prevention: ['Add more sockets; avoid extension blocks', 'Never cover cooling vents', 'Clean dust from computers regularly', 'Keep CO₂ / dry-powder fire extinguishers'],
  },
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

export function Slide03PhysicalSafety1() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ padding: '14px 40px' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-2.5 flex-shrink-0">
        <div style={{
          width: 42, height: 42, borderRadius: '11px', flexShrink: 0,
          background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.4)',
          boxShadow: '0 0 18px rgba(245,158,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <HardHat size={20} style={{ color: '#f59e0b' }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#f59e0b' }}>8.1 — PHYSICAL SAFETY</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>Physical Hazards</h2>
        </div>

        {/* Alert pill inline with header */}
        <div className="flex items-center gap-2 ml-auto rounded-lg"
          style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', padding: '6px 12px' }}>
          <AlertOctagon size={14} style={{ color: '#f87171', flexShrink: 0 }} />
          <p className="text-xs" style={{ color: '#fca5a5' }}>
            Dangers that cause <strong>serious injury or loss of life</strong> — prevention is key!
          </p>
        </div>
      </motion.div>

      {/* 2×2 grid of all 4 hazard cards */}
      <div className="grid grid-cols-2 gap-3">
        {hazards.map(({ icon: Icon, title, color, glow, causes, prevention }, i) => (
          <motion.div key={title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.45 }}
            className="cyber-border rounded-xl"
            style={{ background: 'var(--card)', border: `1px solid ${color}30`, backdropFilter: 'blur(14px)', padding: '12px 14px' }}>

            {/* Card title row */}
            <div className="flex items-center gap-2 mb-2.5">
              <div style={{
                width: 32, height: 32, borderRadius: '8px', flexShrink: 0,
                background: `${color}18`, border: `1px solid ${color}44`, boxShadow: `0 0 12px ${glow}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={16} style={{ color }} strokeWidth={2} />
              </div>
              <h3 className="font-space font-bold text-base" style={{ color }}>{title}</h3>
            </div>

            {/* Causes + Prevention columns */}
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider mb-1.5" style={{ color: '#f87171' }}>⚠ Causes</p>
                <ul className="space-y-1">
                  {causes.map((c, j) => (
                    <motion.li key={j} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.12 + j * 0.06 }}
                      className="flex gap-1.5 text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: '#f87171', flexShrink: 0 }}>›</span>{c}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider mb-1.5" style={{ color: '#4ade80' }}>✓ Prevention</p>
                <ul className="space-y-1">
                  {prevention.map((p, j) => (
                    <motion.li key={j} initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + i * 0.12 + j * 0.06 }}
                      className="flex gap-1.5 text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: '#4ade80', flexShrink: 0 }}>›</span>{p}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

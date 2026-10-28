import { motion } from 'framer-motion'
import { HardHat, Wifi, ShieldCheck, ChevronRight } from 'lucide-react'

const topics = [
  {
    num: '8.1', title: 'Physical Safety', icon: HardHat, color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
    points: ['Electrocution risks', 'Fire hazards', 'Trip & personal injury'],
  },
  {
    num: '8.2', title: 'E-Safety', icon: Wifi, color: '#22d3ee',
    glow: 'rgba(6,182,212,0.3)',
    points: ['Data Protection Act', 'Personal & sensitive data', 'Safe internet, email & social media'],
  },
  {
    num: '8.3', title: 'Security of Data', icon: ShieldCheck, color: '#a78bfa',
    glow: 'rgba(139,92,246,0.3)',
    points: ['Hacking, phishing, malware', 'Card fraud & skimming', 'Biometrics, SSL, encryption & firewalls'],
  },
]

export function Slide02Contents() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden" style={{ padding: '20px 40px' }}>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="text-center mb-6">
        <p className="text-xs font-mono tracking-[0.25em] uppercase mb-1.5" style={{ color: 'var(--accent)' }}>
          Chapter 8 — Overview
        </p>
        <h2 className="font-space font-bold text-4xl" style={{ color: 'var(--text)' }}>What We'll Cover</h2>
        <div className="mt-2 mx-auto w-20 h-0.5 rounded-full" style={{ background: 'rgba(6,182,212,0.4)' }} />
      </motion.div>

      <div className="grid grid-cols-3 gap-5 w-full max-w-5xl">
        {topics.map(({ num, title, icon: Icon, color, glow, points }, i) => (
          <motion.div key={num}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.18, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="card-hover cyber-border rounded-2xl"
            style={{ background: 'var(--card)', backdropFilter: 'blur(16px)', border: '1px solid var(--border)', padding: '20px 18px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div style={{
                width: 48, height: 48, borderRadius: '12px', flexShrink: 0,
                background: `${color}18`, border: `1px solid ${color}44`,
                boxShadow: `0 0 20px ${glow}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={24} style={{ color }} strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs font-mono font-semibold mb-0.5" style={{ color }}>{num}</p>
                <p className="font-space font-bold text-lg leading-tight" style={{ color: 'var(--text)' }}>{title}</p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {points.map((pt, j) => (
                <motion.li key={j}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.18 + j * 0.1 }}
                  className="flex items-start gap-2 text-sm leading-snug"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <ChevronRight size={14} style={{ color, marginTop: 3, flexShrink: 0 }} />
                  {pt}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
        className="mt-5 text-sm font-mono text-center" style={{ color: 'var(--text-faint)' }}>
        3 topics · 9 slides · Cambridge O Level ICT
      </motion.p>
    </div>
  )
}

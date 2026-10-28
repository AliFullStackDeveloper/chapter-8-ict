import { motion } from 'framer-motion'
import { ShieldCheck, Fingerprint, Key, Lock, Globe, Layers, UserCheck } from 'lucide-react'

const methods = [
  {
    icon: Fingerprint, title: 'Biometrics', color: '#22d3ee', glow: 'rgba(6,182,212,0.3)',
    points: ['Fingerprint, iris, face, voice, retina, signature', 'Unique to each person — very hard to fake', 'Used in phones, secure buildings, banking'],
  },
  {
    icon: Key, title: 'Digital Certificates', color: '#60a5fa', glow: 'rgba(96,165,250,0.3)',
    points: ['Pair of files: public key + private key', 'Public key visible to all; private key secret', 'Verifies email/website comes from trusted source'],
  },
  {
    icon: Lock, title: 'SSL & Encryption', color: '#a78bfa', glow: 'rgba(167,139,250,0.3)',
    points: ['SSL = Secure Sockets Layer — encrypts web data', 'Look for https:// and padlock in browser', 'Encryption makes data unreadable without the key'],
  },
  {
    icon: Globe, title: 'Firewalls', color: '#f87171', glow: 'rgba(248,113,113,0.3)',
    points: ['Software/hardware barrier between network and internet', 'Monitors and filters incoming & outgoing traffic', 'Blocks unauthorised access (hackers)'],
  },
  {
    icon: Layers, title: 'Two-Factor Auth (2FA)', color: '#fb923c', glow: 'rgba(251,146,60,0.3)',
    points: ['Requires TWO forms of verification to log in', 'Example: password + OTP sent to your phone', 'Much harder to hack than password alone'],
  },
  {
    icon: UserCheck, title: 'User ID & Password', color: '#4ade80', glow: 'rgba(74,222,128,0.3)',
    points: ['First line of defence for any system', 'Use strong passwords (letters, numbers, symbols)', 'Change passwords regularly; never share them'],
  },
]

export function Slide11Security3() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ padding: '16px 40px' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4 flex-shrink-0">
        <div style={{ width: 44, height: 44, borderRadius: '11px', flexShrink: 0,
          background: 'rgba(139,92,246,0.18)', border: '1px solid rgba(139,92,246,0.4)',
          boxShadow: '0 0 18px rgba(139,92,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShieldCheck size={22} style={{ color: '#a78bfa' }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#a78bfa' }}>8.3.2 — PROTECTION OF DATA</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>How We Protect Data</h2>
        </div>
      </motion.div>

      {/* 3x2 grid — natural height cards */}
      <div className="grid grid-cols-3 gap-3">
        {methods.map(({ icon: Icon, title, color, glow, points }, i) => (
          <motion.div key={title}
            initial={{ opacity: 0, y: 30, scale: 0.93 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="cyber-border rounded-xl"
            style={{ background: 'var(--card)', border: `1px solid ${color}25`, backdropFilter: 'blur(14px)', padding: '14px 15px' }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div style={{ width: 36, height: 36, borderRadius: '9px', flexShrink: 0,
                background: `${color}18`, border: `1px solid ${color}44`, boxShadow: `0 0 16px ${glow}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={18} style={{ color }} strokeWidth={1.8} />
              </div>
              <p className="font-space font-bold text-sm leading-tight" style={{ color }}>{title}</p>
            </div>
            <ul className="space-y-2">
              {points.map((pt, j) => (
                <motion.li key={j} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 + j * 0.07 }}
                  className="flex gap-1.5 items-start text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color, flexShrink: 0, marginTop: 2 }}>›</span>{pt}
                </motion.li>
              ))}
            </ul>
            <div className="mt-2.5 h-px w-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${color}55, transparent)` }} />
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
        className="mt-4 flex items-center justify-center gap-3 flex-shrink-0">
        <div className="h-px flex-1" style={{ background: 'rgba(139,92,246,0.2)' }} />
        <p className="text-sm font-mono" style={{ color: 'var(--text-faint)' }}>
          Authentication + Encryption + Access Control = Strong Data Security
        </p>
        <div className="h-px flex-1" style={{ background: 'rgba(139,92,246,0.2)' }} />
      </motion.div>
    </div>
  )
}

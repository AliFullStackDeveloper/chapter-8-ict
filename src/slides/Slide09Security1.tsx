import { motion } from 'framer-motion'
import { ShieldCheck, Terminal, Fish, Server, AlertTriangle } from 'lucide-react'

const threats = [
  {
    icon: Terminal, name: 'Hacking', color: '#f87171', glow: 'rgba(248,113,113,0.3)',
    desc: 'Gaining unauthorised/illegal access to a computer system.',
    effects: 'Identity theft; data deleted, changed or corrupted.',
    prevent: 'Firewalls, strong passwords, anti-hacking software.',
  },
  {
    icon: Fish, name: 'Phishing', color: '#fb923c', glow: 'rgba(251,146,60,0.3)',
    desc: 'Fake emails trick users into revealing personal data by clicking a link.',
    effects: 'Theft of bank/card details; fraud; identity theft.',
    prevent: 'ISP email filters; never click links in unknown emails.',
  },
  {
    icon: AlertTriangle, name: 'Smishing & Vishing', color: '#fbbf24', glow: 'rgba(251,191,36,0.3)',
    desc: 'SMS phishing (smishing) or voicemail phishing (vishing) — same idea, different medium.',
    effects: 'Users tricked into giving card/bank details via phone.',
    prevent: 'Never call numbers in unsolicited messages. Verify directly.',
  },
  {
    icon: Server, name: 'Pharming', color: '#a78bfa', glow: 'rgba(167,139,250,0.3)',
    desc: 'Malicious code redirects user to a fake website WITHOUT any action needed.',
    effects: 'Data theft; fraud; identity theft.',
    prevent: 'Anti-spyware software; always check URL in browser bar.',
  },
]

export function Slide09Security1() {
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
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#a78bfa' }}>8.3 — SECURITY OF DATA</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>Data Threats: Hacking & Phishing</h2>
        </div>
      </motion.div>

      {/* 2x2 threat cards — natural height */}
      <div className="grid grid-cols-2 gap-4">
        {threats.map(({ icon: Icon, name, color, glow, desc, effects, prevent }, i) => (
          <motion.div key={name}
            initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.14, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="cyber-border rounded-xl"
            style={{ background: 'var(--card)', border: `1px solid ${color}25`, backdropFilter: 'blur(14px)', padding: '14px 16px' }}>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div style={{ width: 38, height: 38, borderRadius: '9px', flexShrink: 0,
                background: `${color}18`, border: `1px solid ${color}40`, boxShadow: `0 0 16px ${glow}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={18} style={{ color }} strokeWidth={1.8} />
              </div>
              <h3 className="font-space font-bold text-lg" style={{ color }}>{name}</h3>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg" style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.18)', padding: '8px 10px' }}>
                <p className="text-xs font-mono font-bold mb-1" style={{ color: '#fca5a5' }}>⚠ Effect</p>
                <p className="text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>{effects}</p>
              </div>
              <div className="rounded-lg" style={{ background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.18)', padding: '8px 10px' }}>
                <p className="text-xs font-mono font-bold mb-1" style={{ color: '#86efac' }}>✓ Prevent</p>
                <p className="text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>{prevent}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
        className="mt-4 flex items-center justify-center gap-3 flex-shrink-0">
        <div className="h-px flex-1" style={{ background: 'rgba(167,139,250,0.2)' }} />
        <p className="text-sm font-mono" style={{ color: 'var(--text-faint)' }}>
          Pharming needs NO user action — Phishing requires the user to click a link
        </p>
        <div className="h-px flex-1" style={{ background: 'rgba(167,139,250,0.2)' }} />
      </motion.div>
    </div>
  )
}

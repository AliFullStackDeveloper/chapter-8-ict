import { motion } from 'framer-motion'
import { Wifi, Globe, Mail, Users, Gamepad2 } from 'lucide-react'

const categories = [
  {
    icon: Globe, title: 'Using the Internet', color: '#22d3ee', glow: 'rgba(6,182,212,0.28)',
    tips: ['Look for https & padlock on websites', 'Only buy from encrypted/secure websites', 'Use safe search & highest security settings', 'Be careful what you download — malware risk', 'Always log out of websites when finished'],
  },
  {
    icon: Mail, title: 'Email Safety', color: '#60a5fa', glow: 'rgba(96,165,250,0.28)',
    tips: ['Only open emails from known sources', 'Never click links in suspicious emails (phishing!)', 'Don\'t reply to unknown senders', 'Never send personal info via email', 'Check sender address — fakes look real'],
  },
  {
    icon: Users, title: 'Social Media', color: '#a78bfa', glow: 'rgba(167,139,250,0.28)',
    tips: ['Never share personal info with strangers', 'Set privacy settings to restrict posts', 'Don\'t post photos revealing your location', 'Never share photos in school uniform', 'Block and report suspicious accounts'],
  },
  {
    icon: Gamepad2, title: 'Online Gaming', color: '#f472b6', glow: 'rgba(244,114,182,0.28)',
    tips: ['Never share real name while gaming', 'Beware of predators & cyberbullying', 'Avoid webcams with strangers', 'Games can carry viruses / spyware', 'Report inappropriate behaviour immediately'],
  },
]

export function Slide08ESafety3() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ padding: '16px 40px' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4 flex-shrink-0">
        <div style={{ width: 44, height: 44, borderRadius: '11px', flexShrink: 0,
          background: 'rgba(6,182,212,0.18)', border: '1px solid rgba(6,182,212,0.4)',
          boxShadow: '0 0 18px rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Wifi size={22} style={{ color: '#22d3ee' }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#22d3ee' }}>8.2.3 — E-SAFETY</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>Staying Safe Online</h2>
        </div>
      </motion.div>

      {/* 4 columns — equal width, natural height cards */}
      <div className="grid grid-cols-4 gap-3">
        {categories.map(({ icon: Icon, title, color, glow, tips }, i) => (
          <motion.div key={title}
            initial={{ opacity: 0, y: 35, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.14, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="cyber-border rounded-xl"
            style={{ background: 'var(--card)', border: `1px solid ${color}22`, backdropFilter: 'blur(14px)', padding: '14px 14px' }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div style={{ width: 36, height: 36, borderRadius: '9px', flexShrink: 0,
                background: `${color}18`, border: `1px solid ${color}40`, boxShadow: `0 0 14px ${glow}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={18} style={{ color }} strokeWidth={1.8} />
              </div>
              <p className="font-space font-bold text-sm leading-tight" style={{ color }}>{title}</p>
            </div>
            <ul className="space-y-2">
              {tips.map((tip, j) => (
                <motion.li key={j} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.14 + j * 0.06 }}
                  className="flex gap-1.5 items-start text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color, flexShrink: 0, marginTop: 2 }}>›</span>{tip}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="mt-4 flex justify-center flex-shrink-0">
        <p className="text-sm font-mono px-4 py-2 rounded-full"
          style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', color: 'var(--text-faint)' }}>
          E-safety is about your <strong style={{ color: '#22d3ee' }}>behaviour</strong>, not just technology — think before you click!
        </p>
      </motion.div>
    </div>
  )
}

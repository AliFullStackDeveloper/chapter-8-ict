import { motion } from 'framer-motion'
import { ShieldCheck, Bug, Network, Skull, Eye, Megaphone, Lock } from 'lucide-react'

const malware = [
  { icon: Bug, name: 'Virus', color: '#f87171', desc: 'Replicates to delete/corrupt files. Needs a host program. Spread via emails, infected websites, downloads.' },
  { icon: Network, name: 'Worm', color: '#fb923c', desc: 'Self-replicates across networks WITHOUT needing a host. More dangerous — spreads silently.' },
  { icon: Skull, name: 'Trojan Horse', color: '#fbbf24', desc: 'Disguised as legitimate software. Gives criminals data access. Often installs spyware/ransomware.' },
  { icon: Eye, name: 'Key Logger', color: '#a78bfa', desc: 'Records every keystroke (passwords, card numbers). Sends data to cybercriminals automatically.' },
  { icon: Megaphone, name: 'Adware', color: '#60a5fa', desc: 'Floods user with unwanted ads. Redirects browser to fake sites. Hijacks browser defaults.' },
  { icon: Lock, name: 'Ransomware', color: '#f472b6', desc: 'Encrypts your data and demands a ransom. Once executed — almost impossible to reverse. Keep backups!' },
]

const cardFraud = [
  { term: 'Shoulder Surfing', desc: 'Someone watches you enter your PIN at an ATM or POS device.', color: '#f87171' },
  { term: 'Card Cloning / Skimming', desc: 'A skimmer device reads and copies the card\'s magnetic stripe.', color: '#fb923c' },
  { term: 'Shimming', desc: 'Thin shim inside card reader reads chip data to create a fake card.', color: '#fbbf24' },
  { term: 'Key Logging', desc: 'Software captures card number, CVV and PIN as you type them.', color: '#a78bfa' },
]

export function Slide10Security2() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ padding: '16px 40px' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-3 flex-shrink-0">
        <div style={{ width: 44, height: 44, borderRadius: '11px', flexShrink: 0,
          background: 'rgba(139,92,246,0.18)', border: '1px solid rgba(139,92,246,0.4)',
          boxShadow: '0 0 18px rgba(139,92,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShieldCheck size={22} style={{ color: '#a78bfa' }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#a78bfa' }}>8.3 — SECURITY OF DATA</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>Malware Types & Card Fraud</h2>
        </div>
      </motion.div>

      <div className="flex gap-4">

        {/* Malware grid */}
        <div className="flex-1 flex flex-col gap-2.5">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest flex-shrink-0"
            style={{ color: 'var(--text-faint)' }}>6 Types of Malware</p>
          <div className="grid grid-cols-3 gap-3">
            {malware.map(({ icon: Icon, name, color, desc }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + i * 0.09, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                className="rounded-xl"
                style={{ background: 'var(--card)', border: `1px solid ${color}28`, backdropFilter: 'blur(12px)', padding: '12px 13px' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div style={{ width: 30, height: 30, borderRadius: '8px', flexShrink: 0,
                    background: `${color}18`, border: `1px solid ${color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={15} style={{ color }} strokeWidth={2} />
                  </div>
                  <p className="font-space font-bold text-sm" style={{ color }}>{name}</p>
                </div>
                <p className="text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="rounded-xl text-sm flex-shrink-0"
            style={{ background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.18)', color: '#86efac', padding: '8px 12px' }}>
            <strong>Prevention:</strong> Install & update anti-virus/anti-malware · Avoid unknown emails/downloads · Regular backups
          </motion.div>
        </div>

        {/* Card fraud panel */}
        <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="rounded-xl flex flex-col"
          style={{ width: 220, background: 'var(--card)', border: '1px solid rgba(248,113,113,0.25)', backdropFilter: 'blur(14px)', padding: '14px 16px' }}>
          <p className="font-space font-bold text-sm mb-3" style={{ color: '#f87171' }}>Card Fraud</p>
          {cardFraud.map(({ term, desc, color }, i) => (
            <motion.div key={term} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }} className="mb-3 pb-3"
              style={{ borderBottom: i < cardFraud.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <p className="text-sm font-semibold mb-0.5" style={{ color }}>{term}</p>
              <p className="text-sm leading-snug" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </motion.div>
          ))}
          <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }}
            className="mt-auto text-xs font-mono text-center rounded-lg"
            style={{ background: 'rgba(248,113,113,0.1)', color: '#fca5a5', padding: '6px 8px' }}>
            Shield keyboard at ATM. Check statements regularly.
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

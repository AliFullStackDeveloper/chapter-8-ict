import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, Gift, Clock, Sparkles, HelpCircle, ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react'

// Slide 03 — "Why are we learning this?" Child-friendly Phishing & Online Safety Spotter
export function Slide03WhyLearnThis() {
  const [currentExample, setCurrentExample] = useState<0 | 1>(0)
  const [showHint, setShowHint] = useState(false)

  const toggleExample = () => {
    setCurrentExample(prev => (prev === 0 ? 1 : 0))
    setShowHint(false) // reset hint on flip
  }

  return (
    <div className="flex flex-col items-center justify-between h-full w-full overflow-hidden" style={{ padding: '16px 40px 20px' }}>

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex-shrink-0"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-1.5"
          style={{ background: 'var(--label-bg)', border: '1px solid var(--label-border)' }}>
          <Sparkles size={14} style={{ color: 'var(--accent)' }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            Real-Life Cyber Superpower
          </span>
        </div>
        <h2 className="font-space font-bold text-3xl md:text-4xl tracking-tight mb-1" style={{ color: 'var(--text)' }}>
          Why are we learning this?
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          To spot phishing messages, avoid unsafe links, and protect our personal information.
        </p>
      </motion.div>

      {/* Center Interactive Card */}
      <div className="w-full max-w-3xl flex-1 flex flex-col justify-center items-center py-2 min-h-0">
        <motion.div
          onClick={toggleExample}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="w-full cursor-pointer rounded-2xl relative cyber-border shadow-2xl overflow-hidden transition-all duration-300"
          style={{
            background: 'var(--card)',
            border: currentExample === 0 ? '2px solid rgba(239,68,68,0.45)' : '2px solid rgba(245,158,11,0.45)',
            boxShadow: currentExample === 0 ? '0 0 35px rgba(239,68,68,0.18)' : '0 0 35px rgba(245,158,11,0.18)',
            padding: '24px 32px',
          }}
        >
          {/* Card Top Indicator & Toggle Hint */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                background: currentExample === 0 ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.15)',
                color: currentExample === 0 ? '#f87171' : '#fbbf24',
                border: currentExample === 0 ? '1px solid rgba(239,68,68,0.35)' : '1px solid rgba(245,158,11,0.35)',
              }}
            >
              Phishing Example {currentExample + 1} of 2 · {currentExample === 0 ? 'Fear / Urgency Trick' : 'Reward / Greed Trick'}
            </span>

            <div className="flex items-center gap-1.5 text-xs font-mono font-semibold" style={{ color: 'var(--accent)' }}>
              <span>Click card to switch example</span>
              <ArrowRight size={14} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentExample === 0 ? (
              /* Example 1: Threat / Deletion */
              <motion.div
                key="example-0"
                initial={{ opacity: 0, rotateY: -30, y: 15 }}
                animate={{ opacity: 1, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, rotateY: 30, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                {/* Warning Icon + 24H Countdown Pill */}
                <div className="flex items-center gap-3 mb-3">
                  <div style={{
                    width: 52, height: 52, borderRadius: '14px',
                    background: 'rgba(239,68,68,0.18)', border: '1px solid rgba(239,68,68,0.45)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(239,68,68,0.35)',
                  }}>
                    <AlertTriangle size={28} style={{ color: '#ef4444' }} strokeWidth={2.2} />
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border"
                    style={{ background: 'rgba(239,68,68,0.12)', borderColor: 'rgba(239,68,68,0.4)', color: '#fca5a5' }}>
                    <Clock size={18} className="animate-pulse" style={{ color: '#ef4444' }} />
                    <span className="font-mono font-bold text-sm tracking-wider">DEADLINE: 24:00:00</span>
                  </div>
                </div>

                {/* Phishing Message */}
                <div className="w-full rounded-xl p-4 mb-3" style={{ background: 'rgba(0,0,0,0.15)', border: '1px dashed rgba(239,68,68,0.35)' }}>
                  <p className="font-space font-bold text-xl md:text-2xl leading-snug" style={{ color: 'var(--text)' }}>
                    “Your account will be deleted in 24 hours. Click here to keep it.”
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Example 2: Fake Reward / Gift */
              <motion.div
                key="example-1"
                initial={{ opacity: 0, rotateY: 30, y: 15 }}
                animate={{ opacity: 1, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, rotateY: -30, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                {/* Gift Icon + 24H Countdown Pill */}
                <div className="flex items-center gap-3 mb-3">
                  <div style={{
                    width: 52, height: 52, borderRadius: '14px',
                    background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.45)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(245,158,11,0.35)',
                  }}>
                    <Gift size={28} style={{ color: '#f59e0b' }} strokeWidth={2.2} />
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border"
                    style={{ background: 'rgba(245,158,11,0.12)', borderColor: 'rgba(245,158,11,0.4)', color: '#fde68a' }}>
                    <Clock size={18} className="animate-pulse" style={{ color: '#f59e0b' }} />
                    <span className="font-mono font-bold text-sm tracking-wider">EXPIRES IN: 24:00:00</span>
                  </div>
                </div>

                {/* Phishing Message */}
                <div className="w-full rounded-xl p-4 mb-3" style={{ background: 'rgba(0,0,0,0.15)', border: '1px dashed rgba(245,158,11,0.35)' }}>
                  <p className="font-space font-bold text-xl md:text-2xl leading-snug" style={{ color: 'var(--text)' }}>
                    “You’ve won a reward! Click here to claim it within 24 hours.”
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Discussion Question & Hint reveal */}
          <div className="mt-2 pt-3 border-t border-cyan-500/15 flex flex-col items-center text-center"
            onClick={e => e.stopPropagation()} /* don't flip card when clicking discussion */>
            <p className="font-space font-semibold text-base md:text-lg mb-2 flex items-center justify-center gap-2" style={{ color: 'var(--text)' }}>
              <HelpCircle size={18} style={{ color: 'var(--accent)' }} />
              <span>What seems suspicious? What should you do?</span>
            </p>

            {/* Hint Toggle Button */}
            {!showHint ? (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowHint(true)}
                className="btn-cyber rounded-xl px-4 py-1.5 text-xs font-mono font-bold tracking-wider"
              >
                Reveal Teacher Hint
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl"
                style={{
                  background: 'rgba(74,222,128,0.14)',
                  border: '1.5px solid rgba(74,222,128,0.45)',
                  boxShadow: '0 0 20px rgba(74,222,128,0.2)',
                }}
              >
                <ShieldCheck size={20} style={{ color: '#4ade80', flexShrink: 0 }} />
                <span className="font-space font-bold text-base md:text-lg" style={{ color: '#86efac' }}>
                  “Pause. Don’t click. Ask a trusted adult.”
                </span>
                <button
                  onClick={() => setShowHint(false)}
                  className="ml-2 text-xs opacity-60 hover:opacity-100 transition-opacity"
                  title="Hide hint"
                >
                  <RotateCcw size={14} />
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Classroom takeaway footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-3 text-xs md:text-sm font-mono flex-shrink-0"
        style={{ color: 'var(--text-faint)' }}
      >
        <span>🚩 Golden Rule:</span>
        <strong style={{ color: 'var(--accent)' }}>Urgent timer (24 hrs) + &ldquo;Click here&rdquo; = 99% a scam!</strong>
      </motion.div>
    </div>
  )
}

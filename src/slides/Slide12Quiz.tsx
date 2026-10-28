import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, RotateCcw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react'

// Slide 12 — Chapter 8 Review Quiz
const questions = [
  {
    id: 1,
    q: 'What device protects against electrocution by cutting power when a fault is detected?',
    options: ['A circuit breaker', 'A Residual Current Breaker (RCB)', 'A power strip', 'An earthing rod'],
    correct: 1,
    color: '#f59e0b',
  },
  {
    id: 2,
    q: 'Which fire extinguisher type is safe to use on electrical equipment?',
    options: ['Water extinguisher', 'Foam extinguisher', 'CO₂ or dry-powder extinguisher', 'Wet chemical extinguisher'],
    correct: 2,
    color: '#ef4444',
  },
  {
    id: 3,
    q: 'Under the Data Protection Act, how many key principles must data controllers follow?',
    options: ['6', '7', '8', '10'],
    correct: 2,
    color: '#22d3ee',
  },
  {
    id: 4,
    q: 'What makes Pharming different from Phishing?',
    options: ['Pharming uses SMS messages', 'Pharming requires the user to click a link', 'Pharming redirects users without any action from them', 'Pharming only targets businesses'],
    correct: 2,
    color: '#a78bfa',
  },
  {
    id: 5,
    q: 'Which type of malware encrypts your files and demands money to restore them?',
    options: ['Adware', 'Worm', 'Trojan Horse', 'Ransomware'],
    correct: 3,
    color: '#f472b6',
  },
  {
    id: 6,
    q: 'What does SSL stand for and what does it do?',
    options: ['Secure Server Login — stores passwords', 'Secure Sockets Layer — encrypts data between browser and server', 'System Security Layer — blocks viruses', 'Safe Site Link — verifies website addresses'],
    correct: 1,
    color: '#60a5fa',
  },
]

export function Slide12Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const select = (qId: number, optIdx: number) => {
    if (revealed[qId]) return
    setAnswers(prev => ({ ...prev, [qId]: optIdx }))
    setRevealed(prev => ({ ...prev, [qId]: true }))
  }

  const reset = () => {
    setAnswers({})
    setRevealed({})
  }

  const score = questions.filter(q => answers[q.id] === q.correct && revealed[q.id]).length
  const answered = Object.keys(revealed).length
  const allDone = answered === questions.length

  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ padding: '14px 40px' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-3 flex-shrink-0">
        <div style={{
          width: 42, height: 42, borderRadius: '11px', flexShrink: 0,
          background: 'rgba(34,211,238,0.18)', border: '1px solid rgba(34,211,238,0.4)',
          boxShadow: '0 0 18px rgba(6,182,212,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <HelpCircle size={20} style={{ color: '#22d3ee' }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#22d3ee' }}>CHAPTER 8 — REVIEW</p>
          <h2 className="font-space font-bold text-2xl" style={{ color: 'var(--text)' }}>Chapter Quiz</h2>
        </div>

        {/* Score + Reset */}
        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl" style={{ padding: '7px 14px',
            background: allDone ? (score >= 4 ? 'rgba(74,222,128,0.12)' : 'rgba(248,113,113,0.12)') : 'var(--card)',
            border: `1px solid ${allDone ? (score >= 4 ? 'rgba(74,222,128,0.4)' : 'rgba(248,113,113,0.4)') : 'var(--border)'}` }}>
            <Trophy size={15} style={{ color: allDone ? (score >= 4 ? '#4ade80' : '#f87171') : 'var(--accent)' }} />
            <span className="font-space font-bold text-sm" style={{ color: allDone ? (score >= 4 ? '#4ade80' : '#f87171') : 'var(--text)' }}>
              {answered > 0 ? `${score} / ${answered} correct` : 'Click an answer to start'}
            </span>
          </div>
          {answered > 0 && (
            <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              onClick={reset} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 rounded-lg text-sm font-medium"
              style={{ padding: '7px 12px', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer' }}>
              <RotateCcw size={13} /> Reset
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Questions grid — 2 columns × 3 rows */}
      <div className="grid grid-cols-2 gap-3">
        {questions.map(({ id, q, options, correct, color }, qi) => {
          const isRevealed = !!revealed[id]
          const chosen = answers[id]
          return (
            <motion.div key={id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15 + qi * 0.09, duration: 0.4 }}
              className="rounded-xl"
              style={{ background: 'var(--card)', border: `1px solid ${color}28`, backdropFilter: 'blur(14px)', padding: '12px 14px' }}>

              {/* Question */}
              <div className="flex gap-2 mb-2.5">
                <span className="font-mono font-bold text-xs flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: `${color}22`, border: `1px solid ${color}44`, color }}>
                  {qi + 1}
                </span>
                <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text)' }}>{q}</p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-1.5">
                {options.map((opt, oi) => {
                  const isChosen = chosen === oi
                  const isCorrectOpt = correct === oi
                  let bg = 'transparent'
                  let borderCol = 'var(--border)'
                  let textCol = 'var(--text-muted)'
                  let icon = null

                  if (isRevealed) {
                    if (isCorrectOpt) {
                      bg = 'rgba(74,222,128,0.12)'
                      borderCol = 'rgba(74,222,128,0.5)'
                      textCol = '#86efac'
                      icon = <CheckCircle2 size={13} style={{ color: '#4ade80', flexShrink: 0 }} />
                    } else if (isChosen && !isCorrectOpt) {
                      bg = 'rgba(248,113,113,0.12)'
                      borderCol = 'rgba(248,113,113,0.5)'
                      textCol = '#fca5a5'
                      icon = <XCircle size={13} style={{ color: '#f87171', flexShrink: 0 }} />
                    }
                  }

                  return (
                    <motion.button key={oi}
                      onClick={() => select(id, oi)}
                      whileHover={!isRevealed ? { scale: 1.02, borderColor: color } : {}}
                      whileTap={!isRevealed ? { scale: 0.98 } : {}}
                      className="flex items-start gap-1.5 rounded-lg text-left text-sm leading-snug"
                      style={{
                        padding: '6px 9px', background: bg,
                        border: `1px solid ${borderCol}`, color: textCol,
                        cursor: isRevealed ? 'default' : 'pointer',
                        transition: 'all 0.2s ease',
                      }}>
                      <AnimatePresence>
                        {isRevealed && icon && (
                          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-0.5">
                            {icon}
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {opt}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Final message */}
      <AnimatePresence>
        {allDone && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 flex items-center justify-center gap-3 flex-shrink-0">
            <div className="h-px flex-1" style={{ background: score >= 4 ? 'rgba(74,222,128,0.25)' : 'rgba(248,113,113,0.25)' }} />
            <p className="text-sm font-mono font-semibold"
              style={{ color: score >= 4 ? '#4ade80' : '#f87171' }}>
              {score === 6 ? '🎉 Perfect score! Outstanding work!' : score >= 4 ? `✓ Well done! ${score}/6 — Great understanding of Chapter 8!` : `Keep revising! You got ${score}/6 — review the slides and try again.`}
            </p>
            <div className="h-px flex-1" style={{ background: score >= 4 ? 'rgba(74,222,128,0.25)' : 'rgba(248,113,113,0.25)' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

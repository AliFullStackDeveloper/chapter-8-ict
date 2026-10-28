import { motion } from 'framer-motion'
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react'

// Slide 01 — Chapter 8: Safety and Security — Title Slide
export function Slide01Title() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full px-8 overflow-hidden">

      {/* Outer rotating ring */}
      <motion.div
        className="absolute"
        style={{ width: 440, height: 440, borderRadius: '50%', border: '1px solid rgba(6, 182, 212, 0.12)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute', width: 8, height: 8, borderRadius: '50%',
              background: '#22d3ee', top: '50%', left: '50%',
              transformOrigin: '4px 4px',
              transform: `rotate(${deg}deg) translateX(216px)`,
              boxShadow: '0 0 12px rgba(6,182,212,0.9)',
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </motion.div>

      {/* Inner counter-rotating ring */}
      <motion.div
        className="absolute"
        style={{ width: 320, height: 320, borderRadius: '50%', border: '1px dashed rgba(59, 130, 246, 0.15)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />

      {/* Middle pulse ring */}
      <motion.div
        className="absolute"
        style={{ width: 200, height: 200, borderRadius: '50%', border: '2px solid rgba(6,182,212,0.08)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Main Shield Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mb-8"
        >
          <div style={{
            width: 130, height: 130, borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.2))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid rgba(6,182,212,0.45)',
            boxShadow: '0 0 70px rgba(6,182,212,0.4), 0 0 130px rgba(59,130,246,0.15)',
          }}>
            <Shield size={68} style={{ color: '#22d3ee' }} strokeWidth={1.5} />
          </div>

          {/* Lock badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: 'absolute', bottom: -4, right: -4,
              width: 38, height: 38, borderRadius: '50%',
              background: 'rgba(6,182,212,0.28)', border: '1px solid rgba(6,182,212,0.55)',
              boxShadow: '0 0 16px rgba(6,182,212,0.45)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Lock size={16} style={{ color: '#22d3ee' }} />
          </motion.div>
        </motion.div>

        {/* Floating icons */}
        {[
          { Icon: Lock,          angle: -130, delay: 0.9,  color: '#22d3ee', dist: 108 },
          { Icon: Eye,           angle: -50,  delay: 1.1,  color: '#3b82f6', dist: 112 },
          { Icon: AlertTriangle, angle:  50,  delay: 1.3,  color: '#67e8f9', dist: 108 },
          { Icon: Shield,        angle:  130, delay: 1.5,  color: '#22d3ee', dist: 112 },
        ].map(({ Icon, angle, delay, color, dist }, i) => {
          const rad = (angle * Math.PI) / 180
          const x = Math.cos(rad) * dist
          const y = Math.sin(rad) * dist
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay, duration: 0.5 }}
              style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                width: 38, height: 38, borderRadius: '50%',
                background: `${color}18`, border: `1px solid ${color}44`,
                boxShadow: `0 0 14px ${color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.6 }}>
                <Icon size={16} style={{ color }} />
              </motion.div>
            </motion.div>
          )
        })}

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm font-mono font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Chapter 8
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="font-space font-bold text-6xl md:text-7xl tracking-tight mb-2"
            style={{
              background: 'var(--hero-gradient)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            Safety &amp;
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.7 }}
            className="font-space font-bold text-6xl md:text-7xl tracking-tight mb-6"
            style={{
              background: 'var(--hero-gradient)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            Security
          </motion.h1>

          {/* Badge */}
          <div className="flex justify-center mb-5">
            <span
              className="inline-block text-xs font-mono font-medium tracking-[0.2em] uppercase rounded-full px-7 py-2"
              style={{
                color: 'var(--label-text)', border: '1px solid var(--label-border)',
                background: 'var(--label-bg)', boxShadow: '0 2px 12px rgba(6,182,212,0.14)',
              }}
            >
              O Level · ICT · Cambridge IGCSE
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="text-lg md:text-xl font-light tracking-wide"
            style={{ color: 'var(--text-muted)' }}
          >
            Physical Safety · E-Safety · Data Security
          </motion.p>

          {/* Divider line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-5 flex items-center justify-center gap-2"
          >
            <div style={{ height: 1, width: 40, background: 'rgba(6,182,212,0.45)' }} />
            <span className="text-sm font-mono font-semibold tracking-wider" style={{ color: 'var(--accent)' }}>
              by Sabir Ali
            </span>
            <div style={{ height: 1, width: 40, background: 'rgba(6,182,212,0.45)' }} />
          </motion.div>
        </motion.div>

        {/* Keyboard hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex items-center gap-2 text-sm"
          style={{ color: 'var(--text-faint)' }}
        >
          <span>Press</span>
          <kbd className="px-2 py-0.5 rounded text-xs font-mono border"
            style={{ borderColor: 'var(--kbd-border)', color: 'var(--kbd-color)', background: 'var(--kbd-bg)' }}>→</kbd>
          <span>to continue</span>
        </motion.div>
      </div>
    </div>
  )
}

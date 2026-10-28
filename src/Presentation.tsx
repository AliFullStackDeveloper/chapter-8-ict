import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { SlideNavigation } from '@/components/SlideNavigation'
import { Slide01Title } from '@/slides/Slide01Title'
import { Slide02Contents } from '@/slides/Slide02Contents'
import { Slide03PhysicalSafety1 } from '@/slides/Slide03PhysicalSafety1'
import { Slide05PhysicalSafety3 } from '@/slides/Slide05PhysicalSafety3'
import { Slide06ESafety1 } from '@/slides/Slide06ESafety1'
import { Slide08ESafety3 } from '@/slides/Slide08ESafety3'
import { Slide09Security1 } from '@/slides/Slide09Security1'
import { Slide10Security2 } from '@/slides/Slide10Security2'
import { Slide11Security3 } from '@/slides/Slide11Security3'
import { Slide12Quiz } from '@/slides/Slide12Quiz'
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD NEW CHAPTER SLIDES:
//
// 1. Create a new file: src/slides/Slide12YourChapter.tsx
//    (copy an existing slide as a starter template)
//
// 2. Import it above and add it to the SLIDES array below.
// ─────────────────────────────────────────────────────────────────────────────
import { useTheme } from '@/lib/ThemeContext'

const SLIDES = [
  { id: 'title',       component: Slide01Title,           label: 'Ch 8 · Safety & Security' },
  { id: 'contents',   component: Slide02Contents,         label: 'Chapter Contents' },
  { id: 'ps-1',       component: Slide03PhysicalSafety1,  label: '8.1 · Physical Hazards' },
  { id: 'ps-3',       component: Slide05PhysicalSafety3,  label: '8.1 · Definitions & Scenarios' },
  { id: 'es-1',       component: Slide06ESafety1,         label: '8.2 · DPA & Personal Data' },
  { id: 'es-3',       component: Slide08ESafety3,         label: '8.2 · Staying Safe Online' },
  { id: 'sec-1',      component: Slide09Security1,        label: '8.3 · Hacking & Phishing' },
  { id: 'sec-2',      component: Slide10Security2,        label: '8.3 · Malware & Card Fraud' },
  { id: 'sec-3',      component: Slide11Security3,        label: '8.3 · Data Protection Methods' },
  { id: 'quiz',       component: Slide12Quiz,             label: 'Ch 8 · Review Quiz' },
]


const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '60%' : '-60%',
    opacity: 0,
    scale: 0.94,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-60%' : '60%',
    opacity: 0,
    scale: 0.94,
  }),
}

export function Presentation() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const { isDark, toggleTheme } = useTheme()

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= SLIDES.length) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      const isEditable = tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement).isContentEditable
      if (isEditable) return
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  const CurrentSlide = SLIDES[current].component

  return (
    <div className="relative w-full h-full flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Background */}
      <BackgroundEffects />

      {/* Top bar: slide label + day/night toggle */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-4 pb-0 flex-shrink-0">
        <motion.div key={current} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <span
            className="text-xs font-mono font-medium px-3 py-1 rounded-full"
            style={{
              background: 'var(--label-bg)',
              border: '1px solid var(--label-border)',
              color: 'var(--label-text)',
            }}
          >
            {SLIDES[current].label}
          </span>
        </motion.div>

        {/* Day / Night toggle */}
        <motion.button
          id="theme-toggle-btn"
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
          aria-label={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? 'moon' : 'sun'}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {isDark
                ? <Sun size={14} style={{ color: '#f59e0b' }} />
                : <Moon size={14} style={{ color: '#6366f1' }} />
              }
            </motion.div>
          </AnimatePresence>
          <span>{isDark ? 'Day' : 'Night'}</span>
        </motion.button>
      </div>

      {/* Main slide area */}
      <div className="relative flex-1 overflow-hidden z-10 min-h-0">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative z-20 flex-shrink-0">
        <SlideNavigation
          current={current}
          total={SLIDES.length}
          onPrev={goPrev}
          onNext={goNext}
        />
      </div>
    </div>
  )
}

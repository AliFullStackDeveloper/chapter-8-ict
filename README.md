# CyberSlides

A React + Vite + TypeScript presentation framework with a full **Day / Night theme** system, animated background effects, and slide navigation — ready for you to add chapter slides.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

---

## How to Add New Chapter Slides

### Step 1 — Create your slide file

Create a new file in `src/slides/`, e.g. `Slide02YourChapter.tsx`.

Use this minimal template:

```tsx
import { motion } from 'framer-motion'

export function Slide02YourChapter() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full px-8">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-space font-bold text-6xl"
        style={{ color: 'var(--text)' }}
      >
        Chapter Title
      </motion.h1>
    </div>
  )
}
```

### Step 2 — Register it in Presentation.tsx

Open `src/Presentation.tsx` and:

1. Add the import at the top:
```tsx
import { Slide02YourChapter } from '@/slides/Slide02YourChapter'
```

2. Add it to the `SLIDES` array:
```tsx
const SLIDES = [
  { id: 'title',      component: Slide01Title,       label: 'Cyber Security'  },
  { id: 'chapter-2',  component: Slide02YourChapter, label: 'Chapter 2 Name' },
  // ... more slides
]
```

That is it! Navigation, progress bar, animations, and the Day/Night toggle all work automatically.

---

## Theme System

The theme is fully CSS-variable driven. All variables are defined in `src/index.css` under:
- `[data-theme="light"]` — Day mode
- `[data-theme="dark"]`  — Night mode

Key variables you can use in any slide:
| Variable | Purpose |
|---|---|
| `var(--bg)` | Page background |
| `var(--text)` | Primary text |
| `var(--text-muted)` | Secondary text |
| `var(--card)` | Glass card background |
| `var(--border)` | Subtle border |
| `var(--border-hover)` | Hover border (cyan glow) |
| `var(--label-bg/border/text)` | Badge / pill labels |
| `var(--kbd-bg/border/color)` | Keyboard hint keys |

Utility classes available:
- `.glass` / `.glass-strong` — glassmorphism panels
- `.cyber-grid` — animated grid background
- `.glow-cyan` / `.glow-purple` — box-shadow glows
- `.gradient-text-cyan` / `.gradient-text-full` — gradient text
- `.card-hover` — lift on hover
- `.btn-cyber` — cyber-styled button

---

## Project Structure

```
CyberSlides/
├── src/
│   ├── components/
│   │   ├── BackgroundEffects.tsx   ← Animated canvas nodes + orbs
│   │   └── SlideNavigation.tsx     ← Prev/Next + progress bar + dots
│   ├── lib/
│   │   ├── ThemeContext.tsx         ← Day/Night toggle context
│   │   └── utils.ts                ← cn() helper
│   ├── slides/
│   │   └── Slide01Title.tsx        ← Main cyber security slide (start here)
│   ├── App.tsx
│   ├── Presentation.tsx            ← Register slides here
│   ├── index.css                   ← Full theme + utility classes
│   └── main.tsx
└── index.html
```

---

## Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `framer-motion` | Slide animations & micro-interactions |
| `lucide-react` | Icon library |
| `tailwindcss` v4 | Utility classes |
| `clsx` + `tailwind-merge` | `cn()` class helper |

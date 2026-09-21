'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const scenes = [
  { id: 0, title: 'Hospitality', tone: 'scene-a' },
  { id: 1, title: 'Architecture', tone: 'scene-b' },
  { id: 2, title: 'Technology', tone: 'scene-c' }
]

export function PageTransitions() {
  const [index, setIndex] = useState(0)
  const scene = scenes[index]

  return (
    <section className="transition-lab">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id}
          className={`transition-scene ${scene.tone}`}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          exit={{ clipPath: 'inset(0 0 0 100%)' }}
          transition={{ duration: .8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {String(index + 1).padStart(2, '0')}
          </motion.span>
          <motion.h2 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {scene.title}
          </motion.h2>
        </motion.div>
      </AnimatePresence>

      <div className="transition-controls">
        {scenes.map((item, i) => (
          <button key={item.id} className={i === index ? 'active' : ''} onClick={() => setIndex(i)}>
            {item.title}
          </button>
        ))}
      </div>
    </section>
  )
}

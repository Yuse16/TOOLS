'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import type { PointerEvent } from 'react'

export function LiquidHero() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 60, damping: 18 })
  const sy = useSpring(y, { stiffness: 60, damping: 18 })

  const move = (event: PointerEvent<HTMLElement>) => {
    const r = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - r.left - r.width / 2) * .07)
    y.set((event.clientY - r.top - r.height / 2) * .07)
  }

  return (
    <section className="liquid-lab" onPointerMove={move}>
      <motion.div className="liquid-blob blob-a" style={{ x: sx, y: sy }} />
      <motion.div className="liquid-blob blob-b" style={{ x: sy, y: sx }} />
      <motion.div className="liquid-blob blob-c"
        animate={{ rotate: [0, 180, 360], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} />
      <div className="liquid-copy">
        <span>LIQUID INTERFACE</span>
        <h2>Motion that feels <em>fluid, not noisy.</em></h2>
        <p>Hero experimental construido con Motion y CSS, sin assets externos.</p>
      </div>
    </section>
  )
}

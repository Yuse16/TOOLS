'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import type { PointerEvent } from 'react'

export function ImageDistortion() {
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const sx = useSpring(rx, { stiffness: 80, damping: 18 })
  const sy = useSpring(ry, { stiffness: 80, damping: 18 })

  const move = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    rx.set(((e.clientY - r.top) / r.height - .5) * -8)
    ry.set(((e.clientX - r.left) / r.width - .5) * 9)
  }

  return (
    <section className="distortion-lab" onPointerMove={move}>
      <motion.div className="distortion-frame" style={{ rotateX: sx, rotateY: sy }}>
        <div className="distortion-art"><i /><i /><i /></div>
        <div className="distortion-glass" />
      </motion.div>
      <div className="distortion-copy">
        <span>POINTER / DEPTH</span>
        <h2>Make still imagery feel physical.</h2>
        <p>Reemplaza el arte procedural por fotografía real.</p>
      </div>
    </section>
  )
}

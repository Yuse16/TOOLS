'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import type { MouseEvent, ReactNode } from 'react'

export function MagneticButton({ children, href = '#lab' }: { children: ReactNode; href?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 240, damping: 20 })
  const sy = useSpring(y, { stiffness: 240, damping: 20 })

  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const r = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - r.left - r.width / 2) * .18)
    y.set((event.clientY - r.top - r.height / 2) * .18)
  }

  return (
    <motion.a className="magnetic-button" href={href} style={{ x: sx, y: sy }}
      onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}<span aria-hidden="true">↗</span>
    </motion.a>
  )
}

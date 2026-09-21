'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

export function ParallaxSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [70, -70])
  const scale = useTransform(scrollYProgress, [0, .5, 1], [.96, 1, .985])

  return (
    <section ref={ref} className="parallax-stage">
      <motion.div className="parallax-panel" style={{ y, scale }}>{children}</motion.div>
    </section>
  )
}

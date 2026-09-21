'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const chapters = [
  ['01', 'Arrival', 'Empieza con una sola idea visual y mucho aire.'],
  ['02', 'Reveal', 'Deja que el movimiento explique jerarquía y secuencia.'],
  ['03', 'Proof', 'Introduce detalle o producto cuando el usuario ya está dentro.']
] as const

export function PinnedStorytelling() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 18])

  return (
    <section className="story-stage" ref={ref}>
      <div className="story-sticky">
        <motion.div className="story-visual" style={{ rotate }}><i /><i /><i /></motion.div>
        <div className="story-viewport">
          <motion.div className="story-track" style={{ x }}>
            {chapters.map(([n, title, body]) => (
              <article key={n}>
                <span>{n}</span>
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

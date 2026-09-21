'use client'

import { motion } from 'motion/react'

export function TextReveal({ children }: { children: string }) {
  return (
    <span className="text-reveal" aria-label={children}>
      {children.split(' ').map((word, index) => (
        <span className="text-reveal-mask" aria-hidden="true" key={`${word}-${index}`}>
          <motion.span
            className="text-reveal-word"
            initial={{ y: '115%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8, delay: index * .055, ease: [0.22, 1, 0.36, 1] }}
          >{word}</motion.span>{' '}
        </span>
      ))}
    </span>
  )
}

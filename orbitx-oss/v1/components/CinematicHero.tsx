'use client'

import { motion } from 'motion/react'
import { GlassOrbCanvas } from './GlassOrbCanvas'
import { MagneticButton } from './MagneticButton'

export function CinematicHero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <GlassOrbCanvas />
      <motion.div className="hero-copy"
        initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .9, ease: [0.22,1,0.36,1] }}>
        <p className="eyebrow">OPEN-SOURCE CINEMATIC WEB KIT</p>
        <h1>Diseña experiencias <span>que se sienten vivas.</span></h1>
        <p className="hero-lede">Scroll coreografiado, WebGL, microinteracciones y profundidad visual con una base mantenible.</p>
        <div className="hero-actions">
          <MagneticButton>Explorar laboratorio</MagneticButton>
          <a className="quiet-link" href="#recipes">Ver componentes</a>
        </div>
      </motion.div>
    </section>
  )
}

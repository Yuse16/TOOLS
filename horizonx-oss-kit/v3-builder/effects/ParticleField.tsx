'use client'

import { useEffect, useRef } from 'react'

type Particle = { x: number; y: number; vx: number; vy: number; r: number; depth: number }

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let raf = 0
    let mx = -9999
    let my = -9999

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      const dpr = Math.min(devicePixelRatio || 1, 1.5)
      canvas.width = Math.floor(r.width * dpr)
      canvas.height = Math.floor(r.height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: Math.min(150, Math.floor(r.width / 5)) }, () => ({
        x: Math.random() * r.width,
        y: Math.random() * r.height,
        vx: (Math.random() - .5) * .22,
        vy: (Math.random() - .5) * .22,
        r: 1 + Math.random() * 2.2,
        depth: .35 + Math.random() * .9
      }))
    }

    const move = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
    }

    const draw = () => {
      const r = canvas.getBoundingClientRect()
      ctx.fillStyle = '#0d1110'
      ctx.fillRect(0, 0, r.width, r.height)

      for (const p of particles) {
        const dx = p.x - mx
        const dy = p.y - my
        const d2 = dx * dx + dy * dy
        if (d2 < 16000) {
          const length = Math.max(1, Math.sqrt(d2))
          const force = (1 - d2 / 16000) * .6
          p.vx += (dx / length) * force
          p.vy += (dy / length) * force
        }

        p.vx *= .985
        p.vy *= .985
        p.x += p.vx
        p.y += p.vy

        if (p.x < -10) p.x = r.width + 10
        if (p.x > r.width + 10) p.x = -10
        if (p.y < -10) p.y = r.height + 10
        if (p.y > r.height + 10) p.y = -10

        ctx.beginPath()
        ctx.fillStyle = `rgba(216,191,139,${.28 + p.depth * .48})`
        ctx.arc(p.x, p.y, p.r * p.depth, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    addEventListener('resize', resize)
    canvas.addEventListener('pointermove', move)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', move)
    }
  }, [])

  return (
    <section className="particle-lab">
      <canvas ref={ref} />
      <div className="particle-copy">
        <span>POINTER FIELD</span>
        <h2>Depth without 3D overhead.</h2>
        <p>Mueve el cursor sobre la escena.</p>
      </div>
    </section>
  )
}

'use client'

import { useMotionValueEvent, useScroll } from 'motion/react'
import { useCallback, useEffect, useRef } from 'react'

export function ScrollScrubCanvas() {
  const stageRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start start', 'end end'] })

  const draw = useCallback((progress: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    canvas.width = Math.max(1, Math.floor(rect.width * dpr))
    canvas.height = Math.max(1, Math.floor(rect.height * dpr))

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const w = rect.width, h = rect.height
    const bg = ctx.createLinearGradient(0, 0, w, h)
    bg.addColorStop(0, '#efe6d5')
    bg.addColorStop(.52, '#d8c3a0')
    bg.addColorStop(1, '#39443c')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, w, h)

    const cx = w * (.22 + progress * .56)
    const cy = h * (.62 - Math.sin(progress * Math.PI) * .32)
    const radius = Math.min(w, h) * (.08 + progress * .12)

    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 2.8)
    glow.addColorStop(0, 'rgba(255,244,207,.95)')
    glow.addColorStop(.32, 'rgba(209,163,93,.65)')
    glow.addColorStop(1, 'rgba(209,163,93,0)')
    ctx.fillStyle = glow
    ctx.beginPath(); ctx.arc(cx, cy, radius * 2.8, 0, Math.PI * 2); ctx.fill()

    ctx.strokeStyle = 'rgba(255,255,255,.62)'
    for (let i = 0; i < 9; i++) {
      ctx.beginPath()
      ctx.arc(cx, cy, radius + i * 18, progress * Math.PI * 1.5, progress * Math.PI * 1.5 + Math.PI * 1.15)
      ctx.stroke()
    }

    ctx.fillStyle = 'rgba(21,25,23,.78)'
    ctx.font = '600 12px system-ui'
    ctx.fillText(`FRAME ${String(Math.round(progress * 100)).padStart(3,'0')}`, 24, h - 28)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', draw)
  useEffect(() => {
    draw(scrollYProgress.get())
    const resize = () => draw(scrollYProgress.get())
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [draw, scrollYProgress])

  return (
    <section ref={stageRef} className="scrub-stage" id="lab">
      <div className="scrub-sticky">
        <canvas ref={canvasRef} className="scrub-canvas" />
        <div className="scrub-copy">
          <span>SCROLL-SCRUB CANVAS</span>
          <h2>Una secuencia que responde a tu dedo.</h2>
          <p>Demo procedural. Sustituye `draw()` por una secuencia WebP/AVIF en producción.</p>
        </div>
      </div>
    </section>
  )
}

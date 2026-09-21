'use client'

import { useMotionValueEvent, useScroll } from 'motion/react'
import { useCallback, useEffect, useRef } from 'react'

export function ScrollSequence() {
  const stage = useRef<HTMLElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({ target: stage, offset: ['start start', 'end end'] })

  const draw = useCallback((p: number) => {
    const el = canvas.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dpr = Math.min(devicePixelRatio || 1, 1.5)
    el.width = Math.max(1, Math.floor(r.width * dpr))
    el.height = Math.max(1, Math.floor(r.height * dpr))
    const ctx = el.getContext('2d')
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const bg = ctx.createLinearGradient(0, 0, r.width, r.height)
    bg.addColorStop(0, '#efe7d6')
    bg.addColorStop(.5, '#a98554')
    bg.addColorStop(1, '#18201e')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, r.width, r.height)

    const cx = r.width * (.18 + p * .64)
    const cy = r.height * (.68 - Math.sin(p * Math.PI) * .42)
    const radius = Math.min(r.width, r.height) * (.08 + .07 * p)

    ctx.fillStyle = '#f6e3aa'
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = 'rgba(255,255,255,.5)'
    for (let i = 1; i <= 7; i++) {
      ctx.beginPath()
      ctx.arc(cx, cy, radius + i * 22, p * 5, p * 5 + Math.PI * 1.1)
      ctx.stroke()
    }

    ctx.fillStyle = 'rgba(20,24,22,.78)'
    ctx.font = '700 12px system-ui'
    ctx.fillText(`FRAME ${String(Math.round(p * 180)).padStart(3, '0')} / 180`, 24, 34)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', draw)
  useEffect(() => {
    draw(scrollYProgress.get())
    const resize = () => draw(scrollYProgress.get())
    addEventListener('resize', resize)
    return () => removeEventListener('resize', resize)
  }, [draw, scrollYProgress])

  return (
    <section className="sequence-stage" ref={stage}>
      <div className="sequence-sticky">
        <canvas ref={canvas} />
        <div className="sequence-copy">
          <span>SCROLL / FRAME</span>
          <h2>El scroll se convierte en tiempo.</h2>
          <p>En producción sustituye el render procedural por frames WebP/AVIF reales.</p>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef, type PointerEvent, type ReactNode } from 'react'

export function SpotlightCard({ eyebrow, title, children }: {
  eyebrow: string
  title: string
  children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)

  const move = (event: PointerEvent<HTMLElement>) => {
    const r = event.currentTarget.getBoundingClientRect()
    ref.current?.style.setProperty('--spot-x', `${event.clientX - r.left}px`)
    ref.current?.style.setProperty('--spot-y', `${event.clientY - r.top}px`)
  }

  return (
    <article ref={ref} className="spotlight-card" onPointerMove={move}>
      <span>{eyebrow}</span><h3>{title}</h3><p>{children}</p>
    </article>
  )
}

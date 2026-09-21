import Link from 'next/link'
import type { ReactNode } from 'react'

export function LabShell({
  index,
  title,
  tech,
  children
}: {
  index: string
  title: string
  tech: string
  children: ReactNode
}) {
  return (
    <main className="lab-shell">
      <nav className="lab-nav">
        <Link href="/catalog">← Labs</Link>
        <span>{index} / {title}</span>
        <small>{tech}</small>
      </nav>
      {children}
    </main>
  )
}

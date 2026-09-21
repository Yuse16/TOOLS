import Link from 'next/link'
import { effects } from '@/lib/builder'

export default function Page() {
  return (
    <main className="catalog-shell">
      <header className="catalog-head">
        <Link href="/">← Builder</Link>
        <div>
          <p className="eyebrow">ISOLATED LABS</p>
          <h1>Prueba cada efecto <em>sin ruido.</em></h1>
        </div>
      </header>

      <section className="catalog-grid">
        {effects.map((effect) => (
          <Link href={`/lab/${effect.slug}`} className="catalog-card" key={effect.slug}>
            <span>{effect.index}</span>
            <small>{effect.category} · {effect.weight}</small>
            <h2>{effect.title}</h2>
            <p>{effect.description}</p>
            <b>ABRIR LAB ↗</b>
          </Link>
        ))}
      </section>
    </main>
  )
}

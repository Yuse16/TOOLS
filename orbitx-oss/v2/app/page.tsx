import Link from 'next/link'
import { effects } from '@/lib/effects'
import { EffectPreview } from '@/components/EffectPreview'
export default function Page(){return <main className="catalog"><header className="hero"><p>HORIZONX OSS KIT · V2</p><h1>Catálogo visual de <em>efectos cinematográficos.</em></h1><span>Abre un lab, prueba el efecto aislado y lleva sólo el primitive que necesites.</span></header><section className="grid">{effects.map(e=><Link key={e.slug} href={`/lab/${e.slug}`} className={`card tone-${e.tone}`}><EffectPreview slug={e.slug}/><div className="meta"><span>{e.index}</span><small>{e.tech}</small></div><h2>{e.title}</h2><p>{e.subtitle}</p><b>ABRIR LAB ↗</b></Link>)}</section><footer><span>V2 · 8 labs</span><span>Next · Motion · Lenis · Three</span></footer></main>}

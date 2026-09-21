'use client'

import Link from 'next/link'
import type { Profile } from '@/lib/builder'

function EffectLayer({ slug }: { slug: string }) {
  if (slug === 'liquid-hero') {
    return <div className="mini-liquid"><i /><i /></div>
  }
  if (slug === 'particle-field') {
    return (
      <div className="mini-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <i key={i} style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>
    )
  }
  if (slug === 'glass-orb') return <div className="mini-orb"><i /></div>
  if (slug === 'image-distortion') return <div className="mini-distort"><i /><i /></div>
  if (slug === 'product-3d') return <div className="mini-product"><i /><b /></div>
  if (slug === 'scroll-sequence') return <div className="mini-sequence"><i /><i /><i /></div>
  if (slug === 'pinned-storytelling') return <div className="mini-story"><i>01</i><i>02</i><i>03</i></div>
  if (slug === 'page-transitions') return <div className="mini-transition"><i /></div>
  return null
}

export function LivePreview({ profile, selected }: { profile: Profile; selected: string[] }) {
  return (
    <section className="live-preview">
      <div className="preview-browser">
        <div className="browser-top">
          <i /><i /><i />
          <span>preview.local</span>
        </div>
        <div className="preview-site">
          {selected.map((slug) => <EffectLayer slug={slug} key={slug} />)}
          <div className="preview-copy">
            <span>{profile.eyebrow}</span>
            <h2>{profile.headline}</h2>
            <p>{profile.description}</p>
            <div>
              <button>Explorar</button>
              <button className="ghost">Conocer más</button>
            </div>
          </div>
          <div className="preview-index">
            {selected.slice(0, 4).map((slug, index) => (
              <Link href={`/lab/${slug}`} key={slug}>{String(index + 1).padStart(2, '0')}</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

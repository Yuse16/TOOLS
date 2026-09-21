import { notFound } from 'next/navigation'
import { LabShell } from '@/components/LabShell'
import { effectBySlug, effects } from '@/lib/builder'
import { LiquidHero } from '@/effects/LiquidHero'
import { ScrollSequence } from '@/effects/ScrollSequence'
import { ParticleField } from '@/effects/ParticleField'
import { GlassOrb } from '@/effects/GlassOrb'
import { ImageDistortion } from '@/effects/ImageDistortion'
import { Product3D } from '@/effects/Product3D'
import { PinnedStorytelling } from '@/effects/PinnedStorytelling'
import { PageTransitions } from '@/effects/PageTransitions'

const components = {
  'liquid-hero': LiquidHero,
  'scroll-sequence': ScrollSequence,
  'particle-field': ParticleField,
  'glass-orb': GlassOrb,
  'image-distortion': ImageDistortion,
  'product-3d': Product3D,
  'pinned-storytelling': PinnedStorytelling,
  'page-transitions': PageTransitions
}

export function generateStaticParams() {
  return effects.map((effect) => ({ slug: effect.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const effect = effectBySlug(slug)
  if (!effect) notFound()

  const Component = components[effect.slug as keyof typeof components]
  if (!Component) notFound()

  return (
    <LabShell index={effect.index} title={effect.title} tech={effect.tech.join(' + ')}>
      <Component />
    </LabShell>
  )
}

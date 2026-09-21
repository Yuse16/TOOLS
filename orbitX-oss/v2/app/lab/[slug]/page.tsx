import { notFound } from 'next/navigation'
import { LabShell } from '@/components/LabShell'
import { effects,getEffect } from '@/lib/effects'
import { LiquidHero } from '@/effects/LiquidHero'
import { ScrollSequence } from '@/effects/ScrollSequence'
import { ParticleField } from '@/effects/ParticleField'
import { GlassOrb } from '@/effects/GlassOrb'
import { ImageDistortion } from '@/effects/ImageDistortion'
import { Product3D } from '@/effects/Product3D'
import { PinnedStorytelling } from '@/effects/PinnedStorytelling'
import { PageTransitions } from '@/effects/PageTransitions'
const components={'liquid-hero':LiquidHero,'scroll-sequence':ScrollSequence,'particle-field':ParticleField,'glass-orb':GlassOrb,'image-distortion':ImageDistortion,'product-3d':Product3D,'pinned-storytelling':PinnedStorytelling,'page-transitions':PageTransitions}
export function generateStaticParams(){return effects.map(e=>({slug:e.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params,e=getEffect(slug);if(!e)notFound();const C=components[e.slug];return <LabShell index={e.index} title={e.title} tech={e.tech}><C/></LabShell>}

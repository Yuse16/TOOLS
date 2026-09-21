export type ProfileId = 'hotel' | 'climatizacion' | 'saas' | 'arquitectura' | 'agencia'

export interface Profile {
  id: ProfileId
  label: string
  eyebrow: string
  headline: string
  description: string
  cssClass: string
  recommended: string[]
  assetGuidance: string
}

export interface EffectDefinition {
  slug: string
  index: string
  title: string
  description: string
  category: 'Hero' | 'Scroll' | 'Pointer' | '3D' | 'Transition'
  tech: string[]
  npm: string[]
  files: string[]
  weight: 'Ligero' | 'Medio' | 'Pesado'
  mobile: string
  snippet: string
}

export const profiles: Profile[] = [
  {
    id: 'hotel',
    label: 'Hotel',
    eyebrow: 'HOSPITALITY / EDITORIAL',
    headline: 'Una estadía que empieza antes de llegar.',
    description: 'Ivory, café, champagne, fotografía real, profundidad sutil y movimiento editorial.',
    cssClass: 'profile-hotel',
    recommended: ['liquid-hero', 'image-distortion', 'scroll-sequence', 'pinned-storytelling'],
    assetGuidance: 'Usa fachada, habitación, lobby, alberca o arquitectura real. No inventes amenidades.'
  },
  {
    id: 'climatizacion',
    label: 'Climatización',
    eyebrow: 'AIR / ENGINEERING / COMFORT',
    headline: 'Haz visible lo que normalmente no se ve.',
    description: 'Flujo de aire, temperatura, precisión técnica y movimiento limpio.',
    cssClass: 'profile-clima',
    recommended: ['particle-field', 'scroll-sequence', 'product-3d'],
    assetGuidance: 'Usa equipos reales, instalaciones y proyectos terminados. Evita renders falsos si no existen.'
  },
  {
    id: 'saas',
    label: 'SaaS',
    eyebrow: 'SOFTWARE / SIGNAL / SYSTEM',
    headline: 'Complejidad por dentro. Claridad por fuera.',
    description: 'Oscuro refinado, glass, señal, grids, datos y una sola escena signature.',
    cssClass: 'profile-saas',
    recommended: ['glass-orb', 'particle-field', 'pinned-storytelling'],
    assetGuidance: 'Usa UI real, screenshots reales y producto real. No inventes métricas.'
  },
  {
    id: 'arquitectura',
    label: 'Arquitectura',
    eyebrow: 'SPACE / MATERIAL / LIGHT',
    headline: 'El espacio se descubre con el movimiento.',
    description: 'Fotografía grande, ritmo editorial, materiales, profundidad y scroll narrativo.',
    cssClass: 'profile-arch',
    recommended: ['image-distortion', 'scroll-sequence', 'pinned-storytelling'],
    assetGuidance: 'Usa renders o fotografía propia de proyectos. Mantén proporciones y textura.'
  },
  {
    id: 'agencia',
    label: 'Agencia',
    eyebrow: 'CREATIVE / MOTION / DIGITAL',
    headline: 'Una identidad que no se queda quieta.',
    description: 'Más expresivo, contraste fuerte, transiciones, WebGL y ritmo visual.',
    cssClass: 'profile-agency',
    recommended: ['liquid-hero', 'glass-orb', 'page-transitions', 'pinned-storytelling'],
    assetGuidance: 'Usa trabajo real del estudio. El movimiento debe reforzar la identidad.'
  }
]

export const effects: EffectDefinition[] = [
  {
    slug: 'liquid-hero',
    index: '01',
    title: 'Liquid Hero',
    description: 'Hero con blobs, glow, profundidad y copy editorial.',
    category: 'Hero',
    tech: ['Motion', 'CSS'],
    npm: ['motion'],
    files: ['effects/LiquidHero.tsx'],
    weight: 'Ligero',
    mobile: 'Reduce tamaño de blobs y evita filtros excesivos.',
    snippet: `import { LiquidHero } from '@/effects/LiquidHero'\n\nexport default function Page() {\n  return <LiquidHero />\n}`
  },
  {
    slug: 'scroll-sequence',
    index: '02',
    title: 'Scroll Sequence',
    description: 'Canvas sticky controlado por scroll para producto o storytelling.',
    category: 'Scroll',
    tech: ['Motion', 'Canvas'],
    npm: ['motion'],
    files: ['effects/ScrollSequence.tsx'],
    weight: 'Medio',
    mobile: 'Usa menos frames y menor resolución en móvil.',
    snippet: `import { ScrollSequence } from '@/effects/ScrollSequence'\n\nexport default function Page() {\n  return <ScrollSequence />\n}`
  },
  {
    slug: 'particle-field',
    index: '03',
    title: 'Particle Field',
    description: 'Partículas Canvas 2D reactivas al cursor/touch.',
    category: 'Pointer',
    tech: ['Canvas 2D'],
    npm: [],
    files: ['effects/ParticleField.tsx'],
    weight: 'Ligero',
    mobile: 'Reduce densidad de partículas y desactiva interacción compleja.',
    snippet: `import { ParticleField } from '@/effects/ParticleField'\n\nexport default function Page() {\n  return <ParticleField />\n}`
  },
  {
    slug: 'glass-orb',
    index: '04',
    title: 'Glass Orb',
    description: 'Objeto 3D con distorsión, iluminación y bloom moderado.',
    category: '3D',
    tech: ['R3F', 'Drei', 'Postprocessing'],
    npm: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
    files: ['effects/GlassOrb.tsx'],
    weight: 'Pesado',
    mobile: 'DPR <= 1.5 y fallback estático en low-power devices.',
    snippet: `import { GlassOrb } from '@/effects/GlassOrb'\n\nexport default function Page() {\n  return <GlassOrb />\n}`
  },
  {
    slug: 'image-distortion',
    index: '05',
    title: 'Image Distortion',
    description: 'Profundidad pointer-driven para fotografía o arte.',
    category: 'Pointer',
    tech: ['Motion', 'CSS 3D'],
    npm: ['motion'],
    files: ['effects/ImageDistortion.tsx'],
    weight: 'Ligero',
    mobile: 'Mantén tilt mínimo o desactívalo en coarse pointer.',
    snippet: `import { ImageDistortion } from '@/effects/ImageDistortion'\n\nexport default function Page() {\n  return <ImageDistortion />\n}`
  },
  {
    slug: 'product-3d',
    index: '06',
    title: '3D Product',
    description: 'Viewer simple para producto, equipo o pieza hero.',
    category: '3D',
    tech: ['Three.js', 'R3F', 'Drei'],
    npm: ['three', '@react-three/fiber', '@react-three/drei'],
    files: ['effects/Product3D.tsx'],
    weight: 'Pesado',
    mobile: 'Usa modelo optimizado, Draco si aplica y DPR <= 1.5.',
    snippet: `import { Product3D } from '@/effects/Product3D'\n\nexport default function Page() {\n  return <Product3D />\n}`
  },
  {
    slug: 'pinned-storytelling',
    index: '07',
    title: 'Pinned Storytelling',
    description: 'Capítulos sticky con progreso de scroll.',
    category: 'Scroll',
    tech: ['Motion'],
    npm: ['motion'],
    files: ['effects/PinnedStorytelling.tsx'],
    weight: 'Medio',
    mobile: 'Evita horizontales largos; mantén capítulos legibles.',
    snippet: `import { PinnedStorytelling } from '@/effects/PinnedStorytelling'\n\nexport default function Page() {\n  return <PinnedStorytelling />\n}`
  },
  {
    slug: 'page-transitions',
    index: '08',
    title: 'Page Transitions',
    description: 'Transiciones cinematográficas entre escenas.',
    category: 'Transition',
    tech: ['Motion'],
    npm: ['motion'],
    files: ['effects/PageTransitions.tsx'],
    weight: 'Ligero',
    mobile: 'Duración corta y nunca bloquear navegación.',
    snippet: `import { PageTransitions } from '@/effects/PageTransitions'\n\nexport default function Page() {\n  return <PageTransitions />\n}`
  }
]

export function profileById(id: ProfileId) {
  return profiles.find((profile) => profile.id === id) ?? profiles[0]
}

export function effectBySlug(slug: string) {
  return effects.find((effect) => effect.slug === slug)
}

# Builder Guide

## Flujo recomendado

### Hotel
Recomendado:
- Liquid Hero o Image Distortion
- Scroll Sequence
- Pinned Storytelling

Usa fotografía real del hotel. Evita 3D artificial si las fotos ya venden mejor la experiencia.

### Climatización
Recomendado:
- Particle Field para representar flujo de aire
- Scroll Sequence para explicar instalación/proceso
- 3D Product si existe modelo real del equipo

### SaaS
Recomendado:
- Glass Orb o partículas como signature visual
- Pinned Storytelling para producto
- Page Transitions muy restringidas

### Arquitectura
Recomendado:
- Image Distortion con renders/fotografía
- Scroll Sequence
- Pinned Storytelling

### Agencia
Recomendado:
- Liquid Hero
- Glass Orb
- Page Transitions
- Pinned Storytelling

## Performance gate

Antes de producción:

- DPR WebGL <= 1.5
- una escena WebGL fuerte por página
- imágenes AVIF/WebP
- lazy loading debajo del fold
- mobile fallback
- `prefers-reduced-motion`
- no scroll hijacking
- no dependencias redundantes

## UX gate

- navegación usable sin animación;
- CTA siempre accesible;
- no esconder contenido detrás de canvas;
- no bloquear touch;
- no depender de hover para información crítica.

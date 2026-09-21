# HorizonX OSS Kit

Open-source starter for cinematic web experiences: smooth scrolling, editorial
text reveals, cursor light, parallax, WebGL/3D and scroll-scrub canvas.

This kit does **not** contain or copy proprietary HorizonX source code or assets.
It recreates general interaction techniques from first principles.

## Included

- `CinematicHero`
- `GlassOrbCanvas`
- `TextReveal`
- `ParallaxSection`
- `SpotlightCard`
- `MagneticButton`
- `ScrollScrubCanvas`
- `SmoothScrollProvider`

## Run

```bash
npm install
npm run dev
```

Gate:

```bash
npm run typecheck
npm run build
```

## Reuse strategy

1. Start with Motion text/entrances.
2. Add Lenis if smooth scroll is actually needed.
3. Add spotlight/magnetic microinteractions.
4. Add scroll scrub for storytelling.
5. Add R3F only for a signature scene.

## Real frame sequences

The included scrub demo is procedural to stay lightweight. Replace the procedural
`draw()` with WebP/AVIF frames in production:

```text
public/sequence/frame-0001.webp
public/sequence/frame-0002.webp
...
```

Use progressive preload and a lighter mobile strategy.

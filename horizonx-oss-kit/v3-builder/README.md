# HorizonX OSS Kit V3 — Visual Builder

V3 convierte el kit en un **builder visual reutilizable** para seleccionar una dirección de marca,
elegir efectos cinematográficos, ver una preview, obtener dependencias, copiar snippets y generar
un prompt listo para OpenCode/Codex.

> Este repositorio NO contiene ni copia código, shaders, assets o texto propietario de HorizonX.
> Reproduce técnicas visuales generales desde cero con herramientas open source.

## Perfiles incluidos

- Hotel
- Climatización
- SaaS
- Arquitectura
- Agencia

Cada perfil cambia:
- paleta,
- lenguaje visual,
- tono del prompt,
- hero preview,
- recomendación de efectos.

## Efectos incluidos

1. Liquid Hero
2. Scroll Sequence
3. Particle Field
4. Glass Orb
5. Image Distortion
6. 3D Product
7. Pinned Storytelling
8. Page Transitions

## Builder

La página `/` incluye:

- selector de perfil visual;
- selección múltiple de efectos;
- preview en vivo;
- lista de dependencias;
- snippet por efecto;
- comando de instalación;
- prompt de integración;
- exportación de `builder-config.json`;
- botón para copiar configuración;
- enlace a cada laboratorio individual.

## Laboratorios

Cada efecto también se puede probar aisladamente:

```text
/lab/liquid-hero
/lab/scroll-sequence
/lab/particle-field
/lab/glass-orb
/lab/image-distortion
/lab/product-3d
/lab/pinned-storytelling
/lab/page-transitions
```

## Instalar

```bash
npm install
npm run dev
```

Gate:

```bash
npm run typecheck
npm run build
```

## Cómo llevar un efecto a AureStay o un cliente

No copies todo el kit.

1. Elige perfil.
2. Selecciona uno o dos efectos fuertes.
3. Copia el snippet.
4. Copia solo sus dependencias.
5. Pasa el prompt generado a OpenCode/Codex.
6. Integra en una rama.
7. Prueba móvil, escritorio y reduced motion.
8. Merge solo después de revisar preview.

## Principio de diseño

Una página no necesita ocho efectos a la vez.

Para producción, normalmente:

- 1 efecto protagonista;
- 1 efecto de scroll;
- 1 microinteracción;
- todo lo demás debe respirar.

Consulta `BUILDER_GUIDE.md`, `PROMPTS.md` y `THIRD_PARTY.md`.

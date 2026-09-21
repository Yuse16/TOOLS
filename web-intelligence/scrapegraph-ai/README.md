# ScrapeGraphAI

Repo de referencia: https://github.com/ScrapeGraphAI/Scrapegraph-ai

## Para qué nos sirve

Extracción semántica y estructurada de páginas/documentos usando instrucciones en lenguaje natural.

## Idea para nuestro stack

```text
URL de prospecto
→ navegador / crawler
→ ScrapeGraphAI
→ JSON estructurado
→ análisis de oportunidades
→ propuesta web + automatización
→ OrbitX OSS V3
```

## Proyecto derivado sugerido

`orbit-web-intelligence` como servicio propio, no un fork directo.

Endpoints candidatos:
- `POST /analyze-business`
- `POST /extract`
- `POST /compare`
- `POST /research`

## Regla

No usar extracción LLM para datos operativos críticos cuando un parser determinista sea suficiente.

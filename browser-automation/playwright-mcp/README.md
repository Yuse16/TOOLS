# Playwright MCP

Repo de referencia: https://github.com/microsoft/playwright-mcp

## Para qué nos sirve

Automatización y observación de navegadores para agentes y pruebas:
- abrir sitios y recorrer flujos;
- probar formularios y navegación;
- validar UI de AureStay;
- investigar webs de prospectos;
- apoyar flujos de Orbit Code;
- capturar evidencia de errores reproducibles.

## Cómo lo usaríamos

No copiamos el repo aquí. Lo tratamos como dependencia/herramienta externa y construimos adaptadores propios cuando un proyecto lo necesite.

## Casos prioritarios

1. E2E de login/invitaciones en AureStay.
2. Website intelligence para prospectos.
3. Exploración controlada de sistemas web como ZugaCloud.
4. QA automático de sitios de clientes.

## Gate

Antes de usarlo con credenciales o información privada:
- limitar dominios;
- evitar registrar secretos;
- separar lectura de acciones destructivas;
- revisar licencia y versión upstream.

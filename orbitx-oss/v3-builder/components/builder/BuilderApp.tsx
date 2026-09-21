'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { effects, profileById, profiles, type ProfileId } from '@/lib/builder'
import { LivePreview } from './LivePreview'

function copyText(value: string) {
  return navigator.clipboard.writeText(value)
}

function downloadJson(data: unknown, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

export function BuilderApp() {
  const [profileId, setProfileId] = useState<ProfileId>('hotel')
  const profile = profileById(profileId)
  const [selected, setSelected] = useState<string[]>(profile.recommended.slice(0, 2))
  const [activeSnippet, setActiveSnippet] = useState(selected[0] ?? 'liquid-hero')
  const [copied, setCopied] = useState<string | null>(null)

  const selectedEffects = useMemo(
    () => effects.filter((effect) => selected.includes(effect.slug)),
    [selected]
  )

  const dependencies = useMemo(
    () => Array.from(new Set(selectedEffects.flatMap((effect) => effect.npm))),
    [selectedEffects]
  )

  const installCommand = dependencies.length ? `npm install ${dependencies.join(' ')}` : 'No extra packages required'

  const prompt = useMemo(() => {
    const list = selectedEffects.map((effect) => `- ${effect.title}: ${effect.description}`).join('\n')
    return `Integra una dirección visual "${profile.label}" usando el HorizonX OSS Kit V3.

Perfil:
- ${profile.eyebrow}
- ${profile.description}
- Assets: ${profile.assetGuidance}

Efectos seleccionados:
${list || '- Ninguno todavía'}

Reglas:
- Integra solo estos efectos; no reescribas toda la aplicación.
- Conserva rutas, auth, formularios, datos y business logic.
- Usa assets reales del proyecto.
- No inventes claims, métricas, premios, clientes o testimonios.
- Mobile-first.
- Respeta prefers-reduced-motion.
- No secuestres el scroll.
- WebGL DPR máximo 1.5.
- Si hay más de un efecto 3D, deja solo uno como protagonista.
- Trabaja en una rama.
- Ejecuta typecheck y build.
- Entrega preview antes de mergear.`
  }, [profile, selectedEffects])

  const config = {
    kit: 'HorizonX OSS Kit V3',
    profile: profile.id,
    effects: selected,
    dependencies,
    guidance: profile.assetGuidance
  }

  const toggle = (slug: string) => {
    setSelected((current) => {
      const exists = current.includes(slug)
      const next = exists ? current.filter((item) => item !== slug) : [...current, slug]
      if (exists && activeSnippet === slug) setActiveSnippet(next[0] ?? '')
      if (!exists) setActiveSnippet(slug)
      return next
    })
  }

  const chooseProfile = (id: ProfileId) => {
    const next = profileById(id)
    setProfileId(id)
    setSelected(next.recommended.slice(0, 2))
    setActiveSnippet(next.recommended[0] ?? '')
  }

  const active = effects.find((effect) => effect.slug === activeSnippet)

  const markCopied = async (key: string, text: string) => {
    await copyText(text)
    setCopied(key)
    window.setTimeout(() => setCopied(null), 1200)
  }

  return (
    <main className={`builder-shell ${profile.cssClass}`}>
      <header className="builder-header">
        <div>
          <p className="eyebrow">HORIZONX OSS KIT · V3</p>
          <h1>Visual <em>Builder</em></h1>
        </div>
        <div className="builder-header-actions">
          <Link href="/catalog">Ver labs</Link>
          <button onClick={() => downloadJson(config, 'builder-config.json')}>Exportar JSON</button>
        </div>
      </header>

      <section className="builder-grid">
        <aside className="builder-controls">
          <section className="control-block">
            <div className="control-title">
              <span>01</span>
              <h2>Perfil</h2>
            </div>
            <div className="profile-list">
              {profiles.map((item) => (
                <button
                  className={item.id === profileId ? 'active' : ''}
                  key={item.id}
                  onClick={() => chooseProfile(item.id)}
                >
                  <strong>{item.label}</strong>
                  <small>{item.eyebrow}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="control-block">
            <div className="control-title">
              <span>02</span>
              <h2>Efectos</h2>
            </div>
            <div className="effect-selector">
              {effects.map((effect) => (
                <label key={effect.slug} className={selected.includes(effect.slug) ? 'selected' : ''}>
                  <input
                    type="checkbox"
                    checked={selected.includes(effect.slug)}
                    onChange={() => toggle(effect.slug)}
                  />
                  <span>
                    <b>{effect.title}</b>
                    <small>{effect.category} · {effect.weight}</small>
                  </span>
                  <i>{effect.index}</i>
                </label>
              ))}
            </div>
          </section>
        </aside>

        <section className="builder-workspace">
          <LivePreview profile={profile} selected={selected} />

          <div className="builder-summary">
            <article>
              <span>Perfil</span>
              <strong>{profile.label}</strong>
              <p>{profile.description}</p>
            </article>
            <article>
              <span>Efectos</span>
              <strong>{selectedEffects.length}</strong>
              <p>{selectedEffects.map((effect) => effect.title).join(' · ') || 'Selecciona al menos uno'}</p>
            </article>
            <article>
              <span>Dependencias</span>
              <strong>{dependencies.length}</strong>
              <p>{dependencies.join(' · ') || 'Ninguna adicional'}</p>
            </article>
          </div>

          <section className="builder-output">
            <div className="output-tabs">
              {selectedEffects.map((effect) => (
                <button
                  key={effect.slug}
                  className={effect.slug === activeSnippet ? 'active' : ''}
                  onClick={() => setActiveSnippet(effect.slug)}
                >
                  {effect.title}
                </button>
              ))}
            </div>

            <div className="output-card">
              <div className="output-card-head">
                <div>
                  <span>Snippet</span>
                  <strong>{active?.title ?? 'Selecciona un efecto'}</strong>
                </div>
                {active ? (
                  <button onClick={() => markCopied('snippet', active.snippet)}>
                    {copied === 'snippet' ? 'Copiado ✓' : 'Copiar'}
                  </button>
                ) : null}
              </div>
              <pre><code>{active?.snippet ?? '// Selecciona un efecto'}</code></pre>
              {active ? (
                <div className="output-notes">
                  <span>Archivos: {active.files.join(', ')}</span>
                  <span>Móvil: {active.mobile}</span>
                </div>
              ) : null}
            </div>

            <div className="output-card">
              <div className="output-card-head">
                <div>
                  <span>Instalación</span>
                  <strong>Dependencias seleccionadas</strong>
                </div>
                <button onClick={() => markCopied('install', installCommand)}>
                  {copied === 'install' ? 'Copiado ✓' : 'Copiar'}
                </button>
              </div>
              <pre><code>{installCommand}</code></pre>
            </div>

            <div className="output-card">
              <div className="output-card-head">
                <div>
                  <span>OpenCode / Codex</span>
                  <strong>Prompt generado</strong>
                </div>
                <button onClick={() => markCopied('prompt', prompt)}>
                  {copied === 'prompt' ? 'Copiado ✓' : 'Copiar prompt'}
                </button>
              </div>
              <pre className="prompt-code"><code>{prompt}</code></pre>
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}

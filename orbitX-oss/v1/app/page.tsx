import { CinematicHero } from '@/components/CinematicHero'
import { ParallaxSection } from '@/components/ParallaxSection'
import { ScrollScrubCanvas } from '@/components/ScrollScrubCanvas'
import { SpotlightCard } from '@/components/SpotlightCard'
import { TextReveal } from '@/components/TextReveal'

const cards = [
  ['MOTION','Text Reveal','Texto editorial por palabras.'],
  ['POINTER','Spotlight Cards','Iluminación reactiva sin WebGL.'],
  ['SCROLL','Parallax Layers','Movimiento ligado al progreso del scroll.'],
  ['WEBGL','Signature Object','Una escena 3D protagonista con DPR limitado.']
] as const

export default function Page() {
  return (
    <main>
      <nav className="site-nav">
        <a href="#" className="brand">HX<span>/OSS</span></a>
        <div><a href="#recipes">Primitives</a><a href="#lab">Scroll lab</a></div>
      </nav>

      <CinematicHero />

      <section className="manifesto">
        <p className="eyebrow">PRINCIPIO 01</p>
        <h2><TextReveal>Un efecto premium sirve a la historia antes de servir al efecto.</TextReveal></h2>
      </section>

      <ParallaxSection>
        <div className="editorial-slab">
          <span>02 / DEPTH</span>
          <strong>DOM primero.</strong>
          <strong>WebGL cuando importa.</strong>
          <p>Mantén contenido y conversión en HTML. Reserva Three.js para una escena que realmente justifique su peso.</p>
        </div>
      </ParallaxSection>

      <section className="recipes" id="recipes">
        <div className="section-head">
          <p className="eyebrow">COPY-READY RECIPES</p>
          <h2>Bloques para llevar a cualquier proyecto.</h2>
        </div>
        <div className="recipe-grid">
          {cards.map(([eyebrow,title,body]) =>
            <SpotlightCard key={title} eyebrow={eyebrow} title={title}>{body}</SpotlightCard>
          )}
        </div>
      </section>

      <ScrollScrubCanvas />

      <section className="closing">
        <p className="eyebrow">BUILD LESS. DIRECT BETTER.</p>
        <h2><TextReveal>Una idea visual inolvidable y espacio para respirar.</TextReveal></h2>
      </section>

      <footer><span>HorizonX OSS Kit</span><span>Next · Motion · Lenis · Three</span></footer>
    </main>
  )
}

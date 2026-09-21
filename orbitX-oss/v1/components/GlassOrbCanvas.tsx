'use client'

import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Orb() {
  const ref = useRef<Mesh>(null)
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * .16
    ref.current.rotation.x += delta * .045
    ref.current.rotation.z = state.pointer.x * .12
    ref.current.position.y = state.pointer.y * .12
  })

  return (
    <Float speed={1.35} rotationIntensity={.32} floatIntensity={.45}>
      <mesh ref={ref} scale={1.38}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial color="#9b7447" roughness={.2} metalness={.55} distort={.28} speed={1.3} />
      </mesh>
    </Float>
  )
}

export function GlassOrbCanvas() {
  return (
    <div className="orb-canvas" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.2], fov: 42 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3,4,4]} intensity={4.2} color="#fff1d3" />
        <pointLight position={[-4,-2,2]} intensity={8} color="#7dd8cb" />
        <pointLight position={[2,-3,1]} intensity={5} color="#b48cff" />
        <Orb />
        <EffectComposer multisampling={0}>
          <Bloom intensity={.6} luminanceThreshold={.2} mipmapBlur />
          <Noise opacity={.018} />
          <Vignette eskil={false} offset={.18} darkness={.55} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

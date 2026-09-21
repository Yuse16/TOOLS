'use client'

import { Float, RoundedBox } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'

function Product() {
  const ref = useRef<Group>(null)

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * .12
    ref.current.rotation.x += (state.pointer.y * .25 - ref.current.rotation.x) * .05
    ref.current.rotation.y += state.pointer.x * .003
  })

  return (
    <group ref={ref}>
      <Float speed={1.3} floatIntensity={.35} rotationIntensity={.1}>
        <RoundedBox args={[2.2, 2.8, .7]} radius={.22} smoothness={6}>
          <meshPhysicalMaterial color="#2e3432" metalness={.75} roughness={.18} clearcoat={1} />
        </RoundedBox>
        <mesh position={[0, 0, .39]}>
          <circleGeometry args={[.5, 64]} />
          <meshPhysicalMaterial color="#caa86e" metalness={.7} roughness={.12} />
        </mesh>
      </Float>
    </group>
  )
}

export function Product3D() {
  return (
    <section className="product-lab">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, .1, 5], fov: 38 }}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[4, 5, 4]} intensity={5} color="#fff1d2" />
        <pointLight position={[-3, -2, 3]} intensity={7} color="#6fd6c8" />
        <Product />
      </Canvas>
      <div className="product-copy">
        <span>PRODUCT VIEWER</span>
        <h2>Drag attention, not the page.</h2>
      </div>
    </section>
  )
}

'use client'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { useRef } from 'react'
import type { Mesh } from 'three'
function Orb(){const ref=useRef<Mesh>(null);useFrame((s,dt)=>{if(!ref.current)return;ref.current.rotation.y+=dt*.18;ref.current.rotation.x=s.pointer.y*.18;ref.current.rotation.z=s.pointer.x*.18});return <Float speed={1.6} floatIntensity={.5} rotationIntensity={.32}><mesh ref={ref} scale={1.45}><icosahedronGeometry args={[1,12]}/><MeshDistortMaterial color="#9d774b" metalness={.68} roughness={.15} distort={.34} speed={1.6}/></mesh></Float>}
export function GlassOrb(){return <section className="orblab"><Canvas dpr={[1,1.5]} camera={{position:[0,0,4.1],fov:42}}><ambientLight intensity={1.2}/><directionalLight position={[4,3,4]} intensity={5} color="#fff0cf"/><pointLight position={[-4,-2,2]} intensity={8} color="#71d9cf"/><pointLight position={[3,-3,1]} intensity={6} color="#9d7de7"/><Orb/><EffectComposer multisampling={0}><Bloom intensity={.7} luminanceThreshold={.22} mipmapBlur/><Noise opacity={.014}/><Vignette eskil={false} offset={.2} darkness={.7}/></EffectComposer></Canvas><div className="orbcopy"><span>R3F / DISTORT</span><h2>A single signature object.</h2></div></section>}

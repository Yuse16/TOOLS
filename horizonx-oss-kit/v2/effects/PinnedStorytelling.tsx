'use client'
import { motion,useScroll,useTransform } from 'motion/react'
import { useRef } from 'react'
const chapters=[['01','Arrival','Empieza con una sola idea visual y mucho aire.'],['02','Reveal','Deja que el movimiento explique jerarquía y secuencia.'],['03','Proof','Introduce detalle o producto cuando el usuario ya está dentro.']] as const
export function PinnedStorytelling(){const ref=useRef<HTMLElement>(null);const{scrollYProgress}=useScroll({target:ref,offset:['start start','end end']});const x=useTransform(scrollYProgress,[0,1],['0%','-66.66%']),rotate=useTransform(scrollYProgress,[0,1],[0,18]);return <section className="storystage" ref={ref}><div className="storysticky"><motion.div className="storyvisual" style={{rotate}}><i/><i/><i/></motion.div><div className="storyview"><motion.div className="storytrack" style={{x}}>{chapters.map(([n,t,b])=><article key={n}><span>{n}</span><h2>{t}</h2><p>{b}</p></article>)}</motion.div></div></div></section>}

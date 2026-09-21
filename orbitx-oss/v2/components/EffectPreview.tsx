'use client'
import { motion } from 'motion/react'
import type { CSSProperties } from 'react'
export function EffectPreview({slug}:{slug:string}){
 if(slug==='liquid-hero')return <div className="preview p-liquid"><i/><i/><i/><span>LIQUID</span></div>
 if(slug==='scroll-sequence')return <div className="preview p-seq"><span>000</span><b/><b/><b/><span>180</span></div>
 if(slug==='particle-field')return <div className="preview p-particles">{Array.from({length:24}).map((_,i)=><i key={i} style={{'--i':i} as CSSProperties}/>)}</div>
 if(slug==='glass-orb')return <div className="preview p-orb"><i/></div>
 if(slug==='image-distortion')return <div className="preview p-dist"><motion.i animate={{skewX:[0,-5,4,0],scaleX:[1,1.05,.98,1]}} transition={{duration:4,repeat:Infinity}}/></div>
 if(slug==='product-3d')return <div className="preview p-product"><i/><i/></div>
 if(slug==='pinned-storytelling')return <div className="preview p-story"><span>01</span><span>02</span><span>03</span></div>
 return <div className="preview p-transition"><motion.i animate={{x:['-130%','130%']}} transition={{duration:2.2,repeat:Infinity,ease:[.76,0,.24,1]}}/></div>
}

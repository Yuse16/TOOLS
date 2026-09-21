'use client'
import Lenis from 'lenis'
import { useEffect, type ReactNode } from 'react'
export function SmoothScrollProvider({children}:{children:ReactNode}){
  useEffect(()=>{ if(matchMedia('(prefers-reduced-motion: reduce)').matches) return; const lenis=new Lenis({lerp:.085,smoothWheel:true,syncTouch:false}); let f=0; const raf=(t:number)=>{lenis.raf(t);f=requestAnimationFrame(raf)}; f=requestAnimationFrame(raf); return()=>{cancelAnimationFrame(f);lenis.destroy()} },[])
  return children
}

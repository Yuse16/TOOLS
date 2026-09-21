import Link from 'next/link'
import type { ReactNode } from 'react'
export function LabShell({index,title,tech,children}:{index:string,title:string,tech:string,children:ReactNode}){return <main className="lab"><nav className="labnav"><Link href="/">← Catálogo</Link><span>{index} / {title}</span><small>{tech}</small></nav>{children}</main>}

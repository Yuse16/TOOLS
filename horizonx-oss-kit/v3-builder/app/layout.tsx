import type { Metadata } from 'next'
import 'lenis/dist/lenis.css'
import './globals.css'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'

export const metadata: Metadata = {
  title: 'HorizonX OSS Kit V3 Builder',
  description: 'Visual builder for open-source cinematic web effects.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}

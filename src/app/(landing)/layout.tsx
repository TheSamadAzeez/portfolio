import { Dock } from '@/components/custom/dock'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Samad Azeez',
  description: 'Full Stack Developer & Software Engineer',
}

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen">
      {children}
      <Dock />
    </main>
  )
}

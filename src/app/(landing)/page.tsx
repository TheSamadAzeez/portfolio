import Hero from '../components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About',
}

export default function Home() {
  return (
    <section className="h-screen w-full overflow-hidden">
      <Hero />
    </section>
  )
}

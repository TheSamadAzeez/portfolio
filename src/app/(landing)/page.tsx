import Education from '../components/education'
import Experiences from '../components/experiences'
import Hero from '../components/hero'
import { Metadata } from 'next'
import Skills from '../components/skills'

export const metadata: Metadata = {
  title: 'About',
  description: 'About',
}

export default function Home() {
  return (
    <section className="mb-96 h-screen w-full">
      <Hero />
      <Experiences />
      <Education />
      <Skills />
    </section>
  )
}

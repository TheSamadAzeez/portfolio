import Footer from '@/app/components/footer'
import { Metadata } from 'next'
import Education from '../components/education'
import Experiences from '../components/experiences'
import FeaturedProjects from '../components/featured-project'
import Hero from '../components/hero'
import Skills from '../components/skills'
import Testimonials from '../components/testimonials'

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
      <FeaturedProjects />
      <Testimonials />
      <Footer />
    </section>
  )
}

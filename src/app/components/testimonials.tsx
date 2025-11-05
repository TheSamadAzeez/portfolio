import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { portfolioData } from '../../../utils/data'

export default function Testimonials() {
  return (
    <section className="container mx-auto mt-20" id="testimonials">
      <AnimatedTestimonials testimonials={portfolioData.testimonials} />
    </section>
  )
}

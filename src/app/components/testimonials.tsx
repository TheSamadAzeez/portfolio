'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { portfolioData } from '../../data/portfolio-data'
import { motion } from 'motion/react'

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-100px' }}
      className="container mx-auto mt-20"
      id="testimonials"
    >
      <AnimatedTestimonials testimonials={portfolioData.testimonials} />
    </motion.section>
  )
}

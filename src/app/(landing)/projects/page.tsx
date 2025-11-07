'use client'

import Footer from '@/app/components/footer'
import ProjectCard from '@/components/custom/project-card'
import { motion } from 'motion/react'
import { portfolioData } from '../../../data/portfolio-data'

export default function Projects() {
  return (
    <section className="container mx-auto h-screen">
      <div className="mx-auto px-4 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold">Projects</h1>
          <p className="text-muted-foreground text-lg">Here are some of the projects I&apos;ve worked on.</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mx-auto grid place-items-center gap-8 md:grid-cols-2 lg:max-w-7xl lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}

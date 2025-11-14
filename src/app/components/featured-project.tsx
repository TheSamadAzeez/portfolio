'use client'
import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import { portfolioData } from '../../data/portfolio-data'
import Link from 'next/link'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import ProjectCard from '@/components/custom/project-card'

export default function FeaturedProjects() {
  return (
    <section className="container mx-auto mt-20" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-8 text-center"
      >
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">Featured Projects</h1>
        <p className="text-muted-foreground text-xl">Some of my works</p>
      </motion.div>

      {/* Card layout for small and medium screens */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden"
      >
        {portfolioData.projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
      </motion.div>

      {/* Sticky scroll for large screens */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, margin: '-50px' }}
        className="hidden w-full lg:block"
      >
        <StickyScroll
          content={portfolioData.projects.filter((project) => project.featured)}
          contentClassName="h-70 w-90"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, margin: '-50px' }}
        className="mt-8 flex w-full items-center justify-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild className="group bg-muted-foreground/80 hover:bg-muted-foreground animate-pulse border-none">
            <Link href={'/projects'} className="flex items-center justify-center gap-2 rounded-full px-6 py-2">
              <span className="text-lg font-medium text-white transition-all group-hover:scale-105">See more</span>
              <IconArrowNarrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

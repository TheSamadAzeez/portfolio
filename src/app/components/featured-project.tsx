'use client'
import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import { portfolioData } from '../../../utils/data'

export default function FeaturedProjects() {
  return (
    <section className="container mx-auto mt-20" id="skills">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">Featured Projects</h1>
        <p className="text-muted-foreground text-xl">Some of my work</p>
      </div>

      <div className="w-full">
        <StickyScroll content={portfolioData.featuredProjects} contentClassName="h-70 w-90" />
      </div>
    </section>
  )
}

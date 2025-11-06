'use client'
import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import { portfolioData } from '../../../utils/data'
import Link from 'next/link'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

export default function FeaturedProjects() {
  return (
    <section className="container mx-auto mt-20" id="skills">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">Featured Projects</h1>
        <p className="text-muted-foreground text-xl">Some of my works</p>
      </div>

      <div className="w-full">
        <StickyScroll content={portfolioData.featuredProjects} contentClassName="h-70 w-90" />
      </div>
      <div className="mt-8 flex w-full items-center justify-center">
        <Button
          asChild
          className="group bg-muted-foreground/80 hover:bg-muted-foreground animate-pulse border-none hover:scale-105"
        >
          <Link href={'/projects'} className="flex items-center justify-center gap-2 rounded-full px-6 py-2">
            <span className="text-lg font-medium text-white transition-all group-hover:scale-105">See more</span>
            <IconArrowNarrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

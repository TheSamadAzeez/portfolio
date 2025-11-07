'use client'

import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { portfolioData } from '../../data/portfolio-data'
import Link from 'next/link'
import { LinkPreview } from '@/components/ui/link-preview'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="relative container mx-auto flex min-h-screen w-full items-center justify-center overflow-hidden">
      <BackgroundRippleEffect />
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
        {/* mobile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 block h-[200px] w-[200px] flex-shrink-0 overflow-hidden rounded-full lg:hidden"
        >
          <Image
            src={portfolioData.hero.imageUrl}
            alt={`${portfolioData.hero.name}`}
            fill
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 250px, 0vw"
            className="dark:border-primary/20 border-muted-foreground rounded-full border-4 object-cover object-top transition-transform duration-300 hover:scale-105"
            priority
          />
        </motion.div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 lg:items-start">
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <HoverBorderGradient as="button" className="flex items-center justify-center gap-2 rounded-full px-3 py-1">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 text-white dark:bg-green-500" />
              {portfolioData.hero.availability}
            </HoverBorderGradient>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl font-bold tracking-tight lg:text-7xl"
          >
            {portfolioData.hero.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <LayoutTextFlip
              text="I build "
              words={portfolioData.hero.roles}
              duration={3000}
              className="text-muted-foreground text-2xl font-medium lg:text-3xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted-foreground text-center text-base leading-relaxed lg:text-start"
          >
            {portfolioData.hero.description}
          </motion.p>

          {/* social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            {portfolioData.hero.socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-accent rounded-full border px-3 py-3 transition-colors"
              >
                <LinkPreview url={link.href}>
                  <link.icon className="h-5 w-5" />
                </LinkPreview>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-muted-foreground flex flex-wrap gap-4 pt-4 text-xs @md/hero:gap-6 @md/hero:text-sm"
          >
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span className="truncate text-sm">{portfolioData.hero.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="text-sm">{portfolioData.hero.location}</span>
            </div>
          </motion.div>
        </div>

        {/* image section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden h-[450px] w-[450px] flex-shrink-0 overflow-hidden rounded-lg lg:block"
        >
          <Image
            src={portfolioData.hero.imageUrl}
            alt={`${portfolioData.hero.name}`}
            fill
            sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 400px, 450px"
            className="dark:border-primary/20 border-muted-foreground rounded-lg border-4 object-cover object-top transition-transform duration-300 hover:scale-105"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

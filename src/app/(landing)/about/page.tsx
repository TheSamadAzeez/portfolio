'use client'

import Image from 'next/image'
import { portfolioData } from '../../../data/portfolio-data'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { IconCopy, IconDownload, IconBriefcase } from '@tabler/icons-react'
import Footer from '@/app/components/footer'
import Link from 'next/link'
import { handleCopyEmail } from '@/lib/utils'

export default function About() {
  return (
    <section className="container mx-auto h-screen">
      {/* Hero Section */}
      <div className="mx-auto px-4 pt-20" id="about">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-1 flex-col gap-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8 text-4xl font-bold tracking-tight lg:text-6xl"
            >
              {portfolioData.aboutPage.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-muted-foreground text-lg leading-relaxed lg:text-xl"
            >
              {portfolioData.aboutPage.hero.description}
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-card flex items-center justify-center gap-2 rounded-lg border"
              >
                <div className="text-2xl">🇳🇬</div>
                <p className="text-muted-foreground text-sm">Based in {portfolioData.hero.location}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-card flex items-center justify-center gap-2 rounded-lg border"
              >
                <div className="text-2xl">💼</div>
                <p className="text-muted-foreground text-sm">{portfolioData.aboutPage.hero.stats.experience}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-card flex items-center justify-center gap-2 rounded-lg border"
              >
                <div className="text-2xl">🎯</div>
                <p className="text-sm text-green-600 dark:text-green-400">
                  {portfolioData.aboutPage.hero.stats.availability}
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <Button onClick={handleCopyEmail} className="gap-2">
                <IconCopy className="h-4 w-4" />
                Copy email
              </Button>
              <Button variant="outline" className="gap-2">
                <IconDownload className="h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/projects">
                  <IconBriefcase className="h-4 w-4" />
                  View My Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-1 items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative h-80 w-80 rotate-2 overflow-hidden rounded-3xl shadow-2xl lg:h-96 lg:w-96"
            >
              <Image
                src={portfolioData.hero.imageUrl}
                alt={portfolioData.hero.name}
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Separator className="mx-auto my-16" />

      {/* My Story Section */}
      <section className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{portfolioData.aboutPage.story.title}</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Journey Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-card -rotate-2 rounded-2xl border p-8"
          >
            <div className="mb-4 text-4xl">{portfolioData.aboutPage.story.journey.emoji}</div>
            <h3 className="mb-4 text-2xl font-bold">{portfolioData.aboutPage.story.journey.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{portfolioData.aboutPage.story.journey.description}</p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {portfolioData.aboutPage.story.journey.additionalDescription}
            </p>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-card translate-y-5 rotate-2 rounded-2xl border p-8"
          >
            <div className="mb-4 text-4xl">{portfolioData.aboutPage.story.philosophy.emoji}</div>
            <h3 className="mb-4 text-2xl font-bold">{portfolioData.aboutPage.story.philosophy.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {portfolioData.aboutPage.story.philosophy.description}
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {portfolioData.aboutPage.story.philosophy.additionalDescription}
            </p>
          </motion.div>
        </div>
      </section>

      <Separator className="mx-auto my-16" />

      {/* Technical Expertise Section */}
      <section className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{portfolioData.aboutPage.technicalExpertise.title}</h2>
          <p className="text-muted-foreground text-xl">{portfolioData.aboutPage.technicalExpertise.subtitle}</p>
        </motion.div>

        <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-2">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.09,
                y: -5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-card hover:border-primary/50 hover:bg-accent cursor-pointer rounded-full border p-2 text-center transition-all duration-300 hover:shadow-lg lg:px-4"
            >
              <p className="group-hover:text-primary font-semibold transition-colors duration-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="mx-auto my-16" />

      {/* What I'm Up To Section */}
      <section className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{portfolioData.aboutPage.activities.title}</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioData.aboutPage.activities.items.map((activity, index) => (
            <ActivityCard
              key={index}
              emoji={activity.emoji}
              title={activity.title}
              description={activity.description}
              index={index}
            />
          ))}
        </div>
      </section>

      <Separator className="mx-auto my-16" />

      {/* Beyond Code Section */}
      <section className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{portfolioData.aboutPage.beyondCode.title}</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <BeyondCodeCard emoji="💻" title="Full-Stack" description="Complete web & backend mastery" index={0} />
          <BeyondCodeCard emoji="📱" title="Mobile Expert" description="iOS & Android development" index={1} />
          <BeyondCodeCard emoji="🏗️" title="Backend Expert" description="Scalable API development" index={2} />
          <BeyondCodeCard emoji="🚀" title="Tech Lead" description="Innovation & team guidance" index={3} />
        </div>
      </section>

      <Separator className="mx-auto my-16" />

      {/* CTA Section */}
      <section className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.3 }}
          className="from-primary/10 via-primary/5 rounded-3xl border bg-gradient-to-br to-transparent p-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{portfolioData.aboutPage.cta.title}</h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            {portfolioData.aboutPage.cta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={handleCopyEmail} className="gap-2">
              <IconCopy className="h-5 w-5" />
              Copy email
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <IconDownload className="h-5 w-5" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/projects">
                <IconBriefcase className="h-5 w-5" />
                View My Work
              </Link>
            </Button>
          </div>
        </motion.div>

        <Footer />
      </section>
    </section>
  )
}

// Activity Card Component
function ActivityCard({
  emoji,
  title,
  description,
  index,
}: {
  emoji: string
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-card rounded-2xl border p-6 transition-shadow hover:shadow-lg"
    >
      <div className="mb-4 text-4xl">{emoji}</div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

// Beyond Code Card Component
function BeyondCodeCard({
  emoji,
  title,
  description,
  index,
}: {
  emoji: string
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-card rounded-2xl border p-6 text-center transition-all"
    >
      <div className="mb-3 text-4xl">{emoji}</div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  )
}

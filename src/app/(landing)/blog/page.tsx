'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { IconCode, IconTerminal2, IconPalette, IconLoader2, IconCalendar, IconSparkles } from '@tabler/icons-react'
import Footer from '@/app/components/footer'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Link from 'next/link'

interface BlogContentArea {
  icon: React.ReactNode
  title: string
  description: string
  topics: string[]
}

interface ProgressPhase {
  phase: string
  status: 'complete' | 'in-progress' | 'coming-soon'
  progress: number
}

const LoadingComponent = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="my-8 flex items-center justify-center gap-3">
      <IconLoader2 className="text-primary h-6 w-6 animate-spin" />
      <span className="text-muted-foreground text-lg font-medium">Building something awesome{dots}</span>
    </div>
  )
}

const ProgressBar = ({
  progress,
  label,
  status,
  index = 0,
}: {
  progress: number
  label: string
  status: string
  index?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const getStatusColor = () => {
    switch (status) {
      case 'complete':
        return 'bg-green-500'
      case 'in-progress':
        return 'bg-orange-500'
      case 'coming-soon':
        return 'bg-blue-500'
      default:
        return 'bg-gray-300'
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'complete':
        return '✅'
      case 'in-progress':
        return '🚧'
      case 'coming-soon':
        return '⏳'
      default:
        return '⚪'
    }
  }

  const getStatusText = () => {
    switch (status) {
      case 'complete':
        return 'Complete'
      case 'in-progress':
        return 'In Progress'
      case 'coming-soon':
        return 'Coming Soon'
      default:
        return 'Pending'
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-foreground text-sm font-medium">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs">{getStatusIcon()}</span>
          <span className="text-muted-foreground text-xs font-medium">{getStatusText()}</span>
        </div>
      </div>
      <div className="bg-muted/30 h-2 w-full overflow-hidden rounded-full">
        <motion.div
          className={`h-2 rounded-full ${getStatusColor()}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${progress}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.2 + 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </motion.div>
  )
}

export default function BlogPage() {
  const blogContentAreas: BlogContentArea[] = [
    {
      icon: <IconCode className="h-8 w-8" />,
      title: 'Development Insights',
      description: 'Real-world experiences with React, Next.js, Node.js, and modern full-stack development practices.',
      topics: ['React Patterns', 'Next.js Performance', 'TypeScript Tips', 'State Management', 'API Design'],
    },
    {
      icon: <IconTerminal2 className="h-8 w-8" />,
      title: 'DevOps Deep Dives',
      description: 'Docker containerization, CI/CD pipelines, cloud infrastructure, and deployment strategies.',
      topics: [
        'Docker & Containers',
        'AWS Deployment',
        'CI/CD Automation',
        'Performance Monitoring',
        'Scaling Strategies',
      ],
    },
    {
      icon: <IconPalette className="h-8 w-8" />,
      title: 'Design & UX',
      description:
        'Bridging the gap between design and development, from UI/UX principles to implementation strategies.',
      topics: ['Design Systems', 'Component Libraries', 'User Experience', 'Accessibility', 'Animation Techniques'],
    },
  ]

  const developmentProgress: ProgressPhase[] = [
    { phase: 'Content Planning', status: 'complete', progress: 100 },
    { phase: 'Writing First Posts', status: 'in-progress', progress: 75 },
    { phase: 'Blog Platform Setup', status: 'coming-soon', progress: 30 },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effect */}
      <BackgroundRippleEffect />

      <motion.div
        className="relative z-10 container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <HoverBorderGradient
            containerClassName="rounded-full mb-6"
            className="bg-background/80 border-border/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 px-4 py-2">
              <IconSparkles className="text-primary h-4 w-4" />
              <span className="text-sm font-medium text-black dark:text-white">Blog Coming Soon</span>
              <IconSparkles className="text-primary h-4 w-4" />
            </div>
          </HoverBorderGradient>

          <h1 className="from-foreground via-primary to-foreground mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Blog Coming Soon
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
            I&apos;m currently working on creating valuable content about full-stack development, DevOps practices, and
            insights from 4+ years of building scalable software solutions.
          </p>

          <LoadingComponent />
        </div>

        {/* Content Preview Section */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold">What&apos;s Coming</h2>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {blogContentAreas.map((area, index) => (
              <Card
                key={index}
                className="border-border/20 bg-card/50 hover:bg-card/80 group p-6 backdrop-blur-sm transition-all duration-300"
              >
                <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                  {area.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold">{area.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{area.description}</p>

                <div className="space-y-2">
                  {area.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="text-muted-foreground flex items-center gap-2 text-sm">
                      <div className="bg-primary/60 h-1.5 w-1.5 rounded-full" />
                      {topic}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Progress Section */}
        <div className="mx-auto mb-16 max-w-2xl">
          <Card className="border-border/20 bg-card/30 p-8 backdrop-blur-sm">
            <h2 className="mb-8 text-center text-2xl font-bold">Development Progress</h2>

            <div className="space-y-6">
              {developmentProgress.map((phase, index) => (
                <ProgressBar
                  key={index}
                  progress={phase.progress}
                  label={phase.phase}
                  status={phase.status}
                  index={index}
                />
              ))}
            </div>

            <div className="border-border/20 mt-8 border-t pt-6 text-center">
              <div className="text-muted-foreground mb-2 flex items-center justify-center gap-2">
                <IconCalendar className="h-4 w-4" />
                <span className="text-sm font-medium">Expected launch:</span>
              </div>
              <div className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-lg font-semibold text-transparent">
                2026
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-4 text-2xl font-semibold">Stay Tuned!</h3>
          <p className="text-muted-foreground mb-6">
            In the meantime, feel free to explore my portfolio and connect with me on social media for updates on the
            blog&apos;s progress and sneak peeks of upcoming content.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/projects">
                <IconCode className="mr-2 h-4 w-4" />
                View My Projects
              </Link>
            </Button>

            <Button variant="outline" size="lg" onClick={() => (window.location.href = '/contact')}>
              <IconSparkles className="mr-2 h-4 w-4" />
              Get Notified
            </Button>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}

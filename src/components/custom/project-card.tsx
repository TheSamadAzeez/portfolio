'use client'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import { IconExternalLink } from '@tabler/icons-react'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="mx-auto w-full max-w-sm pt-0 pb-2.5 transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
        <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '')}`} className="block">
          <CardContent className="group px-0">
            <div
              className={cn(
                'card relative flex h-65 w-full flex-col justify-end overflow-hidden rounded-md rounded-b-none border border-transparent dark:border-neutral-800',
                'transition-all duration-500 ease-in-out',
              )}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
                priority={index < 2} // Prioritize loading for the first 2 cards
              />
            </div>
            {/* Project Info */}
            <div className="px-3">
              <h3 className="text-lg font-bold">{project.title}</h3>

              <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">{project.description}</p>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-muted rounded-full px-1 py-1 text-[10px] font-bold text-black dark:bg-white dark:text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Website Link */}
              {project.liveUrl && (
                <Button variant="outline" size="sm" className="mt-3 gap-2" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <IconExternalLink className="h-4 w-4" />
                    Website
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  )
}

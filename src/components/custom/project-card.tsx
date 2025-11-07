'use client'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { IconExternalLink } from '@tabler/icons-react'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'

export default function ProjectCard({ key, project, index }: { key: string; project: any; index: number }) {
  return (
    <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '')}`} key={key}>
      <Card className="mx-auto w-full max-w-sm pt-0 pb-2.5 transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
        <CardContent className="group px-0">
          <div
            className={cn(
              'card relative flex h-65 w-full flex-col justify-end overflow-hidden rounded-md rounded-b-none border border-transparent shadow-xl dark:border-neutral-800',
              'bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover',
              // Preload hover image by setting it in a pseudo-element
              'before:fixed before:inset-0 before:z-[-1] before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:opacity-0',
              'group-hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]',
              "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
              'transition-all duration-500',
            )}
          />
          {/* Project Info */}
          <div className="px-3">
            <h3 className="text-lg font-bold">{project.title}</h3>

            <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">{project.description}</p>

            {/* Technologies */}
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
      </Card>
    </Link>
  )
}

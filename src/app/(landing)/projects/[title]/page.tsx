import Footer from '@/app/components/footer'
import { ProjectDetails } from '@/types/project'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { formatTextWithBoldBeforeColon } from '../../../../lib/utils'
import Image from 'next/image'
import { projectDetailsData } from '../../../../data/portfolio-data'

interface ProjectDetailsProps {
  params: Promise<{
    title: string
  }>
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsProps) {
  const { title } = await params

  // Find project in the portfolio data with flexible matching
  const normalizedTitle = title.toLowerCase().replace(/\s+/g, '').replace(/-/g, '')
  const project = projectDetailsData.find((p: ProjectDetails) => {
    const normalizedId = p.title.toLowerCase().replace(/\s+/g, '').replace(/-/g, '')
    return normalizedId === normalizedTitle
  })

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/projects"
          className="text-muted-foreground mb-6 inline-flex w-fit items-center gap-2 text-sm hover:scale-105 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">The project `{title}` could not be found.</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <section className="container mx-auto h-screen max-w-7xl">
      <div className="flex flex-col gap-17 px-4 py-8">
        {/* Back Navigation */}
        <Link
          href="/projects"
          className="text-muted-foreground group inline-flex w-fit items-center gap-2 pt-20 text-sm transition-transform duration-300 hover:scale-105 hover:text-black dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-muted-foreground text-xl">{project.subtitle}</p>
          <p className="text-lg leading-relaxed">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.websiteUrl && (
              <Button asChild>
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Website
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>

        <Image
          src={project?.image || ''}
          alt={project.title}
          width={800}
          height={600}
          className="mx-auto border shadow-2xl transition-all duration-600 ease-in-out hover:scale-105"
        />

        <Separator />

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="bg-muted-foreground h-1 w-1 rounded-full" />
                  <span className="">{formatTextWithBoldBeforeColon(feature)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Business Model */}
        {project.businessModel && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{project.businessModel.title}</h2>
            {project.businessModel.description && (
              <p className="text-muted-foreground">{project.businessModel.description}</p>
            )}
            {project.businessModel.pillars && (
              <ul className="space-y-3">
                {project.businessModel.pillars.map((pillar, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="bg-muted-foreground h-1 w-1 rounded-full" />
                    <span className="text-accent-foreground">{formatTextWithBoldBeforeColon(pillar)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Target Market */}
        {project.targetMarket && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Target Market</h2>
            <ul className="space-y-3">
              {project.targetMarket.map((market, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="bg-muted-foreground h-1 w-1 rounded-full" />
                  <span className="text-accent-foreground">{market}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mission */}
        {project.mission && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="text-muted-foreground leading-relaxed">{project.mission}</p>
          </div>
        )}

        {/* Technical Implementation */}
        {project.technicalImplementation && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{project.technicalImplementation.title}</h2>
            <p className="text-muted-foreground">{project.technicalImplementation.description}</p>

            {project.technicalImplementation.architecture && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {Object.entries(project.technicalImplementation.architecture).map(
                  ([category, items]) =>
                    items &&
                    items.length > 0 && (
                      <Card key={category}>
                        <CardContent className="p-4">
                          <h4 className="mb-2 font-medium capitalize">{category}</h4>
                          <ul className="space-y-1">
                            {items.map((item, index) => (
                              <li key={index} className="text-muted-foreground text-sm">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ),
                )}
              </div>
            )}
          </div>
        )}

        {/* Development Journey */}
        {project.developmentJourney && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{project.developmentJourney.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{project.developmentJourney.description}</p>
            {project.developmentJourney.founders && (
              <p className="text-muted-foreground text-sm">
                Founded by: {project.developmentJourney.founders.join(', ')}
              </p>
            )}
          </div>
        )}

        {/* Challenges & Solutions */}
        {project.challenges && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{project.challenges.title}</h2>
            <div className="space-y-6">
              {project.challenges.items.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium">
                    Challenge {index + 1}: {item.challenge}
                  </h4>
                  <p className="text-muted-foreground border-primary/20 border-l-2 pl-4">
                    {formatTextWithBoldBeforeColon(`Solution: ${item.solution}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics */}
        {project.metrics && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{project.metrics.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {project.metrics.items.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <p className="text-primary text-2xl font-bold">{metric.value}</p>
                    <p className="text-muted-foreground text-sm">{metric.metric}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Security Measures */}
        {project.securityMeasures && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Security Measures</h2>
            <ul className="space-y-2">
              {project.securityMeasures.map((measure, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="bg-muted-foreground h-1 w-1 rounded-full" />
                  <span>{measure}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(project.techStack).map(([category, items]) => (
                <Card key={category}>
                  <CardContent className="p-4">
                    <h4 className="mb-3 font-medium capitalize">{formatTextWithBoldBeforeColon(`${category}:`)}</h4>
                    <ul className="space-y-1">
                      {items.map((item, index) => (
                        <li key={index} className="text-muted-foreground flex items-center gap-2 text-sm">
                          <span className="bg-primary h-1 w-1 flex-shrink-0 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Impact or Results */}
        {(project.impact || project.results) && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{project.impact?.title || project.results?.title || 'Results'}</h2>
            <p className="text-muted-foreground mb-4">{project.title} has successfully:</p>
            <ul className="space-y-3">
              {(project.impact?.achievements || project.results?.achievements || []).map((achievement, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="bg-muted-foreground h-1 w-1 rounded-full" />
                  <span className="">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Future Development */}
        {project.futureDevelopment && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Future Development</h2>
            <ul className="space-y-2">
              {project.futureDevelopment.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="bg-muted-foreground h-1 w-1 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Conclusion */}
        {project.conclusion && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">{project.conclusion}</p>
          </div>
        )}

        <Footer />
      </div>
    </section>
  )
}

export interface ProjectDetails {
  id: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  websiteUrl?: string
  githubUrl?: string
  image?: string
  keyFeatures: string[]
  businessModel?: {
    title: string
    pillars?: string[]
    description?: string
  }
  targetMarket?: string[]
  mission?: string
  technicalImplementation?: {
    title: string
    description: string
    architecture?: {
      frontend?: string[]
      backend?: string[]
      cloud?: string[]
      mobile?: string[]
    }
  }
  developmentJourney?: {
    title: string
    description: string
    founders?: string[]
    background?: string
  }
  challenges?: {
    title: string
    items: Array<{
      challenge: string
      solution: string
    }>
  }
  metrics?: {
    title: string
    items: Array<{
      metric: string
      value: string
    }>
  }
  securityMeasures?: string[]
  techStack?: {
    [category: string]: string[]
  }
  impact?: {
    title: string
    achievements: string[]
  }
  results?: {
    title: string
    achievements: string[]
  }
  futureDevelopment?: string[]
  conclusion?: string
}

export interface ProjectOverview {
  id: string
  title: string
  description: string
  longDescription?: string
  image?: string
  technologies: string[]
  category: string
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  highlights?: string[]
  date: string
}

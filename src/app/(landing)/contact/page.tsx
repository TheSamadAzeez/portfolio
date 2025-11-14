'use client'

import Footer from '@/app/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, Code, Globe, Lightbulb, Mail, MessageCircle, Palette, Rocket, Smartphone, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { portfolioData } from '@/data/portfolio-data'
import Link from 'next/link'
import { downloadResume, handleCopyEmail } from '@/lib/utils'
import { LinkPreview } from '@/components/ui/link-preview'

export default function ContactPage() {
  return (
    <motion.section
      className="container mx-auto max-w-5xl px-4 pt-16 md:px-6 md:pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <motion.div
        className="mb-12 text-center md:mb-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-purple-500">
          <span>{portfolioData.contactPage.header.badge.emoji}</span>
          <span>{portfolioData.contactPage.header.badge.text}</span>
        </div> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 text-3xl font-bold tracking-tight md:mb-8 md:text-4xl lg:text-6xl"
        >
          {portfolioData.contactPage.header.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-muted-foreground text-base leading-relaxed md:text-lg lg:text-xl"
        >
          {portfolioData.contactPage.header.description}
        </motion.p>
      </motion.div>

      {/* Ways to Reach Me Section */}
      <motion.div
        className="mb-12 md:mb-16"
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-3xl">Ways to Reach Me</h2>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {portfolioData.contactPage.contactMethods.map((method) => (
            <Card key={method.id} className="p-6 md:p-8">
              <CardContent className="space-y-4 text-center md:space-y-6">
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full md:h-16 md:w-16 ${
                    method.iconColor === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  {method.icon === 'Mail' ? (
                    <Mail
                      className={`h-6 w-6 md:h-8 md:w-8 ${
                        method.iconColor === 'blue'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    />
                  ) : (
                    <MessageCircle
                      className={`h-6 w-6 md:h-8 md:w-8 ${
                        method.iconColor === 'blue'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    />
                  )}
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold md:mb-3 md:text-2xl">{method.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm md:mb-6 md:text-base">{method.description}</p>
                </div>

                {method.action === 'copyEmail' ? (
                  <Button onClick={handleCopyEmail} variant="outline" className="w-full md:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    {method.buttonText}
                  </Button>
                ) : (
                  <div className="flex justify-center gap-3 md:gap-4">
                    {portfolioData.hero.socialLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-accent rounded-full border px-3 py-3 transition-colors"
                      >
                        <LinkPreview url={link.href}>
                          <link.icon className="h-4 w-4 md:h-5 md:w-5" />
                        </LinkPreview>
                      </Link>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Current Availability Section */}
      <motion.div
        className="mb-12 md:mb-16"
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="from-primary/10 via-primary/5 rounded-3xl border bg-gradient-to-br to-transparent p-6 text-center md:p-12">
          <h2 className="mb-6 text-center text-2xl font-bold md:mb-8 md:text-3xl">
            {portfolioData.contactPage.availability.title}
          </h2>

          <div className="grid gap-6 text-center md:grid-cols-3">
            {portfolioData.contactPage.availability.items.map((item) => {
              const getIconAndColors = () => {
                switch (item.icon) {
                  case 'Zap':
                    return {
                      icon: <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />,
                      bgClass: 'bg-yellow-100 dark:bg-yellow-900/30',
                    }
                  case 'Globe':
                    return {
                      icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
                      bgClass: 'bg-blue-100 dark:bg-blue-900/30',
                    }
                  case 'Briefcase':
                    return {
                      icon: <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />,
                      bgClass: 'bg-green-100 dark:bg-green-900/30',
                    }
                  default:
                    return {
                      icon: null,
                      bgClass: '',
                    }
                }
              }

              const { icon, bgClass } = getIconAndColors()

              return (
                <div key={item.id} className="space-y-3">
                  <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${bgClass}`}>
                    {icon}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* What I Can Help With Section */}
      <motion.div
        className="mb-12 flex flex-col items-center md:mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-3xl">
          {portfolioData.contactPage.services.title}
        </h2>

        <div className="grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {portfolioData.contactPage.services.items.map((service) => {
            const getServiceIconAndColors = () => {
              switch (service.icon) {
                case 'Rocket':
                  return {
                    icon: <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
                    bgClass: 'bg-blue-100 dark:bg-blue-900/30',
                  }
                case 'Smartphone':
                  return {
                    icon: <Smartphone className="h-6 w-6 text-green-600 dark:text-green-400" />,
                    bgClass: 'bg-green-100 dark:bg-green-900/30',
                  }
                case 'Palette':
                  return {
                    icon: <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
                    bgClass: 'bg-purple-100 dark:bg-purple-900/30',
                  }
                case 'Lightbulb':
                  return {
                    icon: <Lightbulb className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                    bgClass: 'bg-indigo-100 dark:bg-indigo-900/30',
                  }
                case 'Code':
                  return {
                    icon: <Code className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
                    bgClass: 'bg-teal-100 dark:bg-teal-900/30',
                  }
                default:
                  return {
                    icon: null,
                    bgClass: '',
                  }
              }
            }

            const { icon, bgClass } = getServiceIconAndColors()

            return (
              <Card
                key={service.id}
                className="p-6 text-center transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="space-y-4">
                  <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${bgClass}`}>
                    {icon}
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </motion.div>

      {/* Quick Questions Section */}
      <motion.div
        className="mb-12 md:mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-3xl">
          {portfolioData.contactPage.faq.title}
        </h2>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            {portfolioData.contactPage.faq.items.slice(0, 2).map((faqItem) => {
              const getFaqColors = () => {
                switch (faqItem.iconColor) {
                  case 'yellow':
                    return {
                      bgClass: 'bg-yellow-100 dark:bg-yellow-900/30',
                      textClass: 'text-yellow-600 dark:text-yellow-400',
                    }
                  case 'blue':
                    return {
                      bgClass: 'bg-blue-100 dark:bg-blue-900/30',
                      textClass: 'text-blue-600 dark:text-blue-400',
                    }
                  default:
                    return {
                      bgClass: 'bg-gray-100 dark:bg-gray-900/30',
                      textClass: 'text-gray-600 dark:text-gray-400',
                    }
                }
              }

              const { bgClass, textClass } = getFaqColors()

              return (
                <div key={faqItem.id} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full ${bgClass}`}>
                      <span className={`text-sm ${textClass}`}>{faqItem.emoji}</span>
                    </div>
                    <h3 className="font-semibold">{faqItem.question}</h3>
                  </div>
                  <p className="text-muted-foreground ml-9 text-sm">{faqItem.answer}</p>
                </div>
              )
            })}
          </div>

          <div className="space-y-4 md:space-y-6">
            {portfolioData.contactPage.faq.items.slice(2, 4).map((faqItem) => {
              const getFaqColors = () => {
                switch (faqItem.iconColor) {
                  case 'red':
                    return {
                      bgClass: 'bg-red-100 dark:bg-red-900/30',
                      textClass: 'text-red-600 dark:text-red-400',
                    }
                  case 'green':
                    return {
                      bgClass: 'bg-green-100 dark:bg-green-900/30',
                      textClass: 'text-green-600 dark:text-green-400',
                    }
                  default:
                    return {
                      bgClass: 'bg-gray-100 dark:bg-gray-900/30',
                      textClass: 'text-gray-600 dark:text-gray-400',
                    }
                }
              }

              const { bgClass, textClass } = getFaqColors()

              return (
                <div key={faqItem.id} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full ${bgClass}`}>
                      <span className={`text-sm ${textClass}`}>{faqItem.emoji}</span>
                    </div>
                    <h3 className="font-semibold">{faqItem.question}</h3>
                  </div>
                  <p className="text-muted-foreground ml-9 text-sm">{faqItem.answer}</p>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Ready to Start Section */}
      <motion.div
        className="text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-4xl">{portfolioData.contactPage.cta.title}</h2>
        <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-base md:mb-8 md:text-xl">
          {portfolioData.contactPage.cta.description}
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          {portfolioData.contactPage.cta.buttons.map((button, index) => {
            if (button.action === 'viewMyWork') {
              return (
                <Button
                  key={index}
                  variant={button.variant as 'default' | 'outline' | undefined}
                  size={button.size as 'default' | 'lg' | undefined}
                  asChild
                >
                  <Link href="/projects">{button.text}</Link>
                </Button>
              )
            }

            return (
              <Button
                key={index}
                onClick={
                  button.action === 'copyEmail'
                    ? handleCopyEmail
                    : button.action === 'downloadResume'
                      ? downloadResume
                      : undefined
                }
                variant={button.variant as 'default' | 'outline' | undefined}
                size={button.size as 'default' | 'lg' | undefined}
              >
                {button.icon === 'Mail' && <Mail className="mr-2 h-4 w-4" />}
                {button.text}
              </Button>
            )
          })}
        </div>
      </motion.div>

      <Footer />
    </motion.section>
  )
}

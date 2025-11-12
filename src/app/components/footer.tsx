'use client'

import Link from 'next/link'
import { portfolioData } from '../../data/portfolio-data'
import { LinkPreview } from '@/components/ui/link-preview'
import { Separator } from '@/components/ui/separator'
import { motion } from 'motion/react'

export default function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      className="container mx-auto mt-20 flex justify-center pb-30"
      id="footer"
    >
      {/* social links */}
      <div className="flex flex-col items-center gap-3 pt-4">
        {/* social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 pt-4"
        >
          {portfolioData.hero.socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-accent transition-colors"
              >
                <LinkPreview url={link.href}>
                  <link.icon className="h-4 w-4" />
                </LinkPreview>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Separator className="w-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm italic"
        >
          Copyright © {new Date().getFullYear()}. All rights are reserved{' '}
          <span className="text-neutral-800 dark:text-white">| Samad Azeez</span>
        </motion.p>
      </div>
    </motion.section>
  )
}

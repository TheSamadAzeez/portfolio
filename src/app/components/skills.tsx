'use client'

import { portfolioData } from '../../data/portfolio-data'
import { motion } from 'motion/react'

export default function Skills() {
  return (
    <section className="container mx-auto mt-20" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-8 text-center"
      >
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">Skills</h1>
        <p className="text-muted-foreground text-xl">Overview of my technical proficiencies</p>
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
  )
}

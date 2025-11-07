'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useOutsideClick } from '@/hooks/use-outside-click'
import Image from 'next/image'
import { IconChevronRight } from '@tabler/icons-react'
import { portfolioData } from '../../data/portfolio-data'

const cards = portfolioData.education

export default function Education() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <section className="container mx-auto mt-20" id="education">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-4 text-center"
      >
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">Education</h1>
        <p className="text-muted-foreground text-xl">My academic background</p>
      </motion.div>

      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.id}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="flex h-fit max-h-[90%] w-full max-w-[500px] flex-col overflow-hidden rounded-3xl bg-white dark:bg-neutral-900"
            >
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.institution}
                  className="h-80 w-full object-cover object-center sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`institution-${active.id}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.institution}
                    </motion.h3>
                    <motion.p layoutId={`degree-${active.id}-${id}`} className="text-neutral-600 dark:text-neutral-400">
                      {active.degree}
                    </motion.p>
                  </div>

                  <motion.p
                    layoutId={`button-${active.id}-${id}`}
                    className="text-muted-foreground rounded-full py-3 text-sm font-bold"
                  >
                    {active.start} - {active.end}
                  </motion.p>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base dark:text-neutral-400"
                  >
                    {typeof active.content === 'function' ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full max-w-4xl gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.id}-${id}`}
            key={`card-${card.id}-${id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            onClick={() => setActive(card)}
            className="group flex cursor-pointer flex-row items-center justify-between rounded-xl p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <motion.div layoutId={`image-${card.id}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.institution}
                  className="h-9 w-9 rounded-lg object-cover object-center md:h-14 md:w-14"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`institution-${card.id}-${id}`}
                  className="text-left text-sm font-medium text-neutral-800 md:text-lg dark:text-neutral-200"
                >
                  {card.institution}
                </motion.h3>
                <motion.p
                  layoutId={`degree-${card.id}-${id}`}
                  className="text-left text-sm text-neutral-600 lg:text-base dark:text-neutral-400"
                >
                  {card.degree}
                </motion.p>
              </div>
            </div>
            <motion.p
              layoutId={`duration-${card.id}-${id}`}
              className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-full px-4 py-2 text-right text-xs font-bold md:mt-0 md:flex-nowrap md:text-sm"
            >
              {card.start} - {card.end}
              <IconChevronRight className="hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block" />
            </motion.p>
          </motion.div>
        ))}
      </ul>
    </section>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

import React from 'react'
import Link from 'next/link'
import { cn } from '../../lib/utils'
import Image from 'next/image'

interface LogoProps {
  className?: string
  containerClassName?: string
  variant?: 'light' | 'dark'
}

export function Logo({ className, containerClassName, variant = 'light' }: LogoProps) {
  return (
    <Link href="/" aria-label="Samad Azeez" className={cn('inline-block', containerClassName)}>
      <div
        className={cn(
          'bg-foreground text-background flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold',
          className,
        )}
      >
        SA
      </div>
    </Link>
  )
}

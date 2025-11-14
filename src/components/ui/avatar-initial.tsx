'use client'

import { cn } from '@/lib/utils'

interface AvatarInitialProps {
  name: string
  className?: string
}

export function AvatarInitial({ name, className }: AvatarInitialProps) {
  const initial = name.charAt(0).toUpperCase()

  // Generate a consistent color based on the first letter
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-teal-500',
  ]

  const colorIndex = initial.charCodeAt(0) % colors.length
  const bgColor = colors[colorIndex]

  return (
    <div className={cn('flex items-center justify-center rounded-lg font-semibold text-white', bgColor, className)}>
      {initial}
    </div>
  )
}

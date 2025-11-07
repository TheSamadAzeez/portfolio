import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import React from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats text to make everything before the first colon (:) bold
 * Uses regex pattern: /^([^:]+)(:.*)?$/
 * - ^([^:]+) captures all characters from start until first colon
 * - (:.*)?$ optionally captures colon and everything after it
 *
 * @example
 * formatTextWithBoldBeforeColon("Solution: This is the answer")
 * // Returns: <><strong>Solution</strong>: This is the answer</>
 *
 * formatTextWithBoldBeforeColon("No colon here")
 * // Returns: <>No colon here</>
 *
 * @param text - The input text to format
 * @returns JSX element with bold text before colon and regular text after
 */
export function formatTextWithBoldBeforeColon(text: string): React.ReactElement {
  const colonRegex = /^([^:]+)(:.*)?$/
  const match = text.match(colonRegex)

  if (match && match[2]) {
    const [, beforeColon, afterColon] = match
    return React.createElement(React.Fragment, null, React.createElement('strong', null, beforeColon), afterColon)
  }

  // If no colon found, return the original text
  return React.createElement(React.Fragment, null, text)
}

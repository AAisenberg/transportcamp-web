'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

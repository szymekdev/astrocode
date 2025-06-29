"use client"

import type React from "react"

import { motion } from "framer-motion"
import clsx from "clsx"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  subtitle?: string
}

export default function SectionTitle({ children, className = "", subtitle }: SectionTitleProps) {
  return (
    <div className={clsx("w-full flex flex-col items-center mb-16", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-astro.200 to-astro.400 bg-clip-text text-transparent">
            {children}
          </span>
        </h2>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </motion.div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-6"
      >
        <div className="h-1 w-32 bg-gradient-to-r from-astro.400 to-astro.blue rounded-full" />
        <div className="absolute inset-0 h-1 w-32 bg-gradient-to-r from-astro.400 to-astro.blue rounded-full blur-sm opacity-50" />
      </motion.div>
    </div>
  )
}

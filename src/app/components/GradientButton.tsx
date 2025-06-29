"use client"

import type React from "react"

import Link from "next/link"
import clsx from "clsx"
import { motion } from "framer-motion"

interface GradientButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
  variant?: "primary" | "secondary"
}

export default function GradientButton({
  children,
  href,
  onClick,
  className = "",
  target,
  rel,
  variant = "primary",
}: GradientButtonProps) {
  const baseClasses = clsx(
    "group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-astro.neon/50 focus:ring-offset-2 focus:ring-offset-dark overflow-hidden",
    variant === "primary" && [
      "bg-gradient-to-r from-astro.400 via-astro.500 to-astro.blue text-white",
      "shadow-[0_0_20px_rgba(162,89,255,0.3)]",
      "hover:shadow-[0_0_30px_rgba(162,89,255,0.5)]",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
    ],
    variant === "secondary" && [
      "bg-white/5 text-white border border-white/10",
      "hover:bg-white/10 hover:border-white/20",
      "backdrop-blur-xl",
    ],
    className,
  )

  const content = (
    <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={baseClasses}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-astro.400 to-astro.blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      )}
    </motion.span>
  )

  if (href) {
    if (href.startsWith("/")) {
      return <Link href={href}>{content}</Link>
    }
    return (
      <a href={href} target={target} rel={rel}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  )
}

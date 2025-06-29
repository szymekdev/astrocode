"use client"

import type React from "react"

import { motion } from "framer-motion"
import clsx from "clsx"

export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -8,
        boxShadow: "0 20px 40px rgba(162, 89, 255, 0.15), 0 0 0 1px rgba(162, 89, 255, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(
        "group relative overflow-hidden rounded-3xl p-8 transition-all duration-300",
        "bg-gradient-to-br from-white/[0.08] to-white/[0.02]",
        "border border-white/[0.08] backdrop-blur-xl",
        "before:absolute before:inset-0 before:rounded-3xl before:p-[1px]",
        "before:bg-gradient-to-br before:from-astro.400/20 before:to-transparent",
        "before:mask-composite-subtract before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        "hover:before:from-astro.400/40 hover:before:to-astro.blue/20",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-astro.400/5 to-astro.blue/5 rounded-3xl blur-xl" />
      </div>
    </motion.div>
  )
}

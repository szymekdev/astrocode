"use client"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Users, MessageCircle, FolderOpen } from "lucide-react"
import GradientButton from "./GradientButton"

const navLinks = [
  { name: "Strona Główna", href: "/", icon: <Home size={18} /> },
  { name: "Usługi", href: "#uslugi", icon: <Users size={18} /> },
  { name: "Projekty", href: "/projekty", icon: <FolderOpen size={18} /> },
  { name: "Opinie", href: "#opinie", icon: <MessageCircle size={18} /> },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between h-20 bg-gradient-to-b from-black/80 via-black/60 to-astro.900/60 backdrop-blur-xl shadow-glass rounded-b-2xl border-b border-white/10 dark:border-astro.800/40 px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-wide bg-astro-gradient bg-clip-text text-transparent select-none"
        >
          <img src="https://www.svgrepo.com/show/420001/caller-contact-people.svg" alt="hejka" className="w-8 h-8" />
          <span className="hidden md:inline">Astrocode</span>
        </Link>
        {/* Nav links desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-medium text-light/80 px-2 py-1 rounded-lg transition-all duration-200 hover:text-astro.400 focus:outline-none focus:ring-2 focus:ring-astro.neon"
            >
              <span className="flex items-center gap-1">
                {link.icon}
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        {/* Discord button */}
        <div className="flex items-center gap-2">
          <GradientButton
            href="https://discord.gg/whiga"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.112.112 0 0 0-.119.056c-.524.908-1.11 2.086-1.527 3.005a18.902 18.902 0 0 0-5.076 0A12.76 12.76 0 0 0 8.62 3.256a.115.115 0 0 0-.12-.056A19.736 19.736 0 0 0 3.684 4.369a.105.105 0 0 0-.047.042C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c2.053 1.507 4.042 2.422 5.992 3.029a.115.115 0 0 0 .125-.042c.462-.63.873-1.295 1.226-1.994a.112.112 0 0 0-.062-.155c-.652-.247-1.27-.549-1.872-.892a.112.112 0 0 1-.011-.186c.126-.094.252-.192.372-.291a.112.112 0 0 1 .114-.013c3.927 1.793 8.18 1.793 12.061 0a.112.112 0 0 1 .115.012c.12.099.246.197.372.291a.112.112 0 0 1-.01.186 12.298 12.298 0 0 1-1.873.893.112.112 0 0 0-.061.154c.36.7.772 1.366 1.227 1.995a.115.115 0 0 0 .125.041c1.95-.607 3.939-1.522 5.992-3.03a.115.115 0 0 0 .045-.081c.5-5.177-.838-9.673-3.573-13.646a.093.093 0 0 0-.048-.042ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z"
              />
            </svg>
            Discord
          </GradientButton>
          {/* Hamburger */}
          <button
            className="md:hidden ml-2 p-2 rounded-lg bg-white/10 border border-white/10 text-astro.400 focus:outline-none focus:ring-2 focus:ring-astro.neon"
            onClick={() => setOpen((v) => !v)}
            aria-label="Otwórz menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden origin-top bg-black/95 shadow-glass backdrop-blur-xl border-b border-white/10 dark:border-astro.800/40 rounded-b-2xl px-4 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium text-lg py-2 px-2 rounded-lg text-astro.400 hover:bg-astro.50/10 transition-colors flex items-center gap-2"
              >
                {link.icon} {link.name}
              </Link>
            ))}
            <GradientButton
              href="https://discord.gg/whiga"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full justify-center"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.112.112 0 0 0-.119.056c-.524.908-1.11 2.086-1.527 3.005a18.902 18.902 0 0 0-5.076 0A12.76 12.76 0 0 0 8.62 3.256a.115.115 0 0 0-.12-.056A19.736 19.736 0 0 0 3.684 4.369a.105.105 0 0 0-.047.042C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c2.053 1.507 4.042 2.422 5.992 3.029a.115.115 0 0 0 .125-.042c.462-.63.873-1.295 1.226-1.994a.112.112 0 0 0-.062-.155c-.652-.247-1.27-.549-1.872-.892a.112.112 0 0 1-.011-.186c.126-.094.252-.192.372-.291a.112.112 0 0 1 .114-.013c3.927 1.793 8.18 1.793 12.061 0a.112.112 0 0 1 .115.012c.12.099.246.197.372.291a.112.112 0 0 1-.01.186 12.298 12.298 0 0 1-1.873.893.112.112 0 0 0-.061.154c.36.7.772 1.366 1.227 1.995a.115.115 0 0 0 .125.041c1.95-.607 3.939-1.522 5.992-3.03a.115.115 0 0 0 .045-.081c.5-5.177-.838-9.673-3.573-13.646a.093.093 0 0 0-.048-.042ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z"
                />
              </svg>
              Discord
            </GradientButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

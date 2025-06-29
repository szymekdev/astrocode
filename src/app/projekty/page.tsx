"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Calendar, ExternalLink, Github, Tag, Eye, Star } from "lucide-react"
import Card from "../components/Card"
import SectionTitle from "../components/SectionTitle"

interface Project {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  image_url: string
  gallery_urls: string[]
  client_name: string
  completion_date: string
  project_url?: string
  github_url?: string
  featured: boolean
}

const categoryLabels: Record<string, string> = {
  "discord-bot": "Boty Discord",
  "minecraft-plugin": "Pluginy Minecraft",
  "minecraft-build": "Budowle Minecraft",
  graphics: "Grafika & Design",
  "video-editing": "Montaż Video",
  automation: "Automatyzacja",
  "web-development": "Strony WWW",
  animation: "Animacje",
}

const categoryColors: Record<string, string> = {
  "discord-bot": "from-blue-500 to-indigo-600",
  "minecraft-plugin": "from-green-500 to-emerald-600",
  "minecraft-build": "from-amber-500 to-orange-600",
  graphics: "from-pink-500 to-rose-600",
  "video-editing": "from-purple-500 to-violet-600",
  automation: "from-cyan-500 to-teal-600",
  "web-development": "from-red-500 to-pink-600",
  animation: "from-yellow-500 to-amber-600",
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<"date" | "featured">("featured")

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    filterAndSortProjects()
  }, [projects, searchTerm, selectedCategory, sortBy])

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects")
      if (response.ok) {
        const data = await response.json()
        setProjects(data)
      }
    } catch (error) {
      console.error("Error fetching projects:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterAndSortProjects = () => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort projects
    filtered.sort((a, b) => {
      if (sortBy === "featured") {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return new Date(b.completion_date).getTime() - new Date(a.completion_date).getTime()
      }
      return new Date(b.completion_date).getTime() - new Date(a.completion_date).getTime()
    })

    setFilteredProjects(filtered)
  }

  const categories = Array.from(new Set(projects.map((p) => p.category)))

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-astro.400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60">Ładowanie projektów...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionTitle subtitle="Poznaj nasze zrealizowane projekty i zobacz jakość naszej pracy">
          Nasze Projekty
        </SectionTitle>

        {/* Filters */}
        <div className="mb-12">
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    placeholder="Szukaj projektów..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-astro.400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === "all"
                      ? "bg-astro.400 text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  Wszystkie
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-astro.400 text-white"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {categoryLabels[category] || category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSortBy("featured")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    sortBy === "featured" ? "bg-astro.400 text-white" : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  <Star size={16} />
                  Wyróżnione
                </button>
                <button
                  onClick={() => setSortBy("date")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    sortBy === "date" ? "bg-astro.400 text-white" : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  <Calendar size={16} />
                  Data
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">Brak wyników</h3>
              <p className="text-white/60">Spróbuj zmienić kryteria wyszukiwania</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="inline-block px-8 py-6">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-astro.400">{projects.length}</div>
                <div className="text-sm text-white/60">Projektów</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-astro.400">{categories.length}</div>
                <div className="text-sm text-white/60">Kategorii</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-astro.400">{projects.filter((p) => p.featured).length}</div>
                <div className="text-sm text-white/60">Wyróżnionych</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5">
        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
              <Star size={12} />
              Wyróżnione
            </div>
          </div>
        )}
        <img
          src={project.image_url || "/placeholder.svg?height=300&width=400"}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center">
            <Eye size={24} className="text-white/20" />
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute bottom-3 right-3">
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
              categoryColors[project.category] || "from-gray-500 to-gray-600"
            }`}
          >
            {categoryLabels[project.category] || project.category}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-astro.400/10 text-astro.400 rounded-full border border-astro.400/20"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-white/5 text-white/60 rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="text-sm text-white/60">
            <div className="font-medium">{project.client_name}</div>
            <div>{new Date(project.completion_date).toLocaleDateString("pl-PL")}</div>
          </div>
          <div className="flex gap-2">
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-astro.400/20 rounded-lg transition-colors"
              >
                <ExternalLink size={16} className="text-astro.400" />
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-astro.400/20 rounded-lg transition-colors"
              >
                <Github size={16} className="text-astro.400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

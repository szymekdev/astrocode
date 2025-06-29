"use client"
import { motion } from "framer-motion"
import GradientButton from "./components/GradientButton"
import SectionTitle from "./components/SectionTitle"
import Card from "./components/Card"
import { Bot, Puzzle, Landmark, Code2, ImageIcon, Film, Sparkles, Camera, ArrowRight, Star, Quote } from "lucide-react"

const services = [
  {
    icon: <Bot size={32} />,
    title: "Boty Discord",
    desc: "Zaawansowane boty z AI, automatyzacje i integracje dla Twojego serwera Discord.",
    features: ["Moderacja", "Muzyka", "Gry", "AI Chat"],
  },
  {
    icon: <Puzzle size={32} />,
    title: "Pluginy Minecraft",
    desc: "Dedykowane pluginy dostosowane do Twoich potrzeb z pełnym wsparciem technicznym.",
    features: ["Spigot/Paper", "Bukkit", "Forge", "Fabric"],
  },
  {
    icon: <Landmark size={32} />,
    title: "Budowle Minecraft",
    desc: "Spektakularne budowle, mapy i światy stworzone przez doświadczonych builderów.",
    features: ["Mapy PvP", "Lobby", "Spawn", "Dekoracje"],
  },
  {
    icon: <Code2 size={32} />,
    title: "Skrypty & Automatyzacja",
    desc: "Skrypty Python, JavaScript i inne narzędzia automatyzujące Twoje procesy.",
    features: ["Python", "JavaScript", "Bash", "PowerShell"],
  },
  {
    icon: <ImageIcon size={32} />,
    title: "Design & Grafika",
    desc: "Nowoczesne grafiki, logotypy, bannery i kompletna identyfikacja wizualna.",
    features: ["Logo", "Bannery", "UI/UX", "Branding"],
  },
  {
    icon: <Film size={32} />,
    title: "Montaż Video",
    desc: "Profesjonalny montaż filmów, trailerów, prezentacji i materiałów promocyjnych.",
    features: ["Trailery", "Intro/Outro", "Reklamy", "Prezentacje"],
  },
  {
    icon: <Sparkles size={32} />,
    title: "Animacje 2D/3D",
    desc: "Spektakularne animacje, efekty specjalne i motion graphics najwyższej jakości.",
    features: ["Motion Graphics", "VFX", "3D Render", "Animacje"],
  },
  {
    icon: <Camera size={32} />,
    title: "Rendery Minecraft",
    desc: "Fotorealistyczne rendery postaci, budowli i scen z wykorzystaniem najnowszych technologii.",
    features: ["Postacie", "Budowle", "Sceny", "Wallpapery"],
  },
]

const testimonials = [
  {
    name: "Michał K.",
    role: "Właściciel serwera MC",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote:
      "Niesamowita jakość i profesjonalizm. Bot Discord stworzony przez Astrocode przekroczył wszystkie moje oczekiwania!",
    rating: 5,
    project: "Bot Discord + Pluginy MC",
  },
  {
    name: "Anna W.",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    quote: "Montaże video na najwyższym poziomie. Każdy projekt realizowany z pasją i dbałością o szczegóły.",
    rating: 5,
    project: "Montaż YouTube",
  },
  {
    name: "Tomasz L.",
    role: "Streamer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "Grafiki i animacje wykonane przez zespół są po prostu rewelacyjne. Polecam każdemu!",
    rating: 5,
    project: "Branding + Animacje",
  },
  {
    name: "Kasia M.",
    role: "Właścicielka firmy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "Szybka realizacja, świetny kontakt i rezultaty przewyższające oczekiwania. Zdecydowanie warto!",
    rating: 5,
    project: "Strona WWW + Logo",
  },
]

const stats = [
  { number: "500+", label: "Zadowolonych klientów" },
  { number: "1000+", label: "Zrealizowanych projektów" },
  { number: "24/7", label: "Wsparcie techniczne" },
  { number: "99%", label: "Pozytywnych opinii" },
]

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full px-4">
        {/* Enhanced Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Main gradient orb */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-6xl max-h-6xl">
            <div className="w-full h-full bg-gradient-conic from-astro.400 via-astro.blue to-astro.400 opacity-20 blur-3xl animate-spin-slow rounded-full" />
          </div>
          {/* Secondary orbs */}
          <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-astro.400/10 blur-3xl rounded-full animate-pulse" />
          <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-astro.blue/10 blur-3xl rounded-full animate-pulse delay-1000" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(162,89,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(162,89,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
          >
            <Sparkles size={16} className="text-astro.400" />
            <span className="text-sm font-medium text-white/80">Nowoczesne rozwiązania IT</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-astro.200 to-astro.400 bg-clip-text text-transparent">
              Astrocode
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl font-medium text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Tworzymy przyszłość technologii razem z Tobą.
            <br />
            <span className="text-astro.400 font-semibold">Zrobimy to razem!</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <GradientButton href="#uslugi" className="group">
              Poznaj nasze usługi
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </GradientButton>
            <GradientButton
              href="https://discord.gg/whiga"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.112.112 0 0 0-.119.056c-.524.908-1.11 2.086-1.527 3.005a18.902 18.902 0 0 0-5.076 0A12.76 12.76 0 0 0 8.62 3.256a.115.115 0 0 0-.12-.056A19.736 19.736 0 0 0 3.684 4.369a.105.105 0 0 0-.047.042C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c2.053 1.507 4.042 2.422 5.992 3.029a.115.115 0 0 0 .125-.042c.462-.63.873-1.295 1.226-1.994a.112.112 0 0 0-.062-.155c-.652-.247-1.27-.549-1.872-.892a.112.112 0 0 1-.011-.186c.126-.094.252-.192.372-.291a.112.112 0 0 1 .114-.013c3.927 1.793 8.18 1.793 12.061 0a.112.112 0 0 1 .115.012c.12.099.246.197.372.291a.112.112 0 0 1-.01.186 12.298 12.298 0 0 1-1.873.893.112.112 0 0 0-.061.154c.36.7.772 1.366 1.227 1.995a.115.115 0 0 0 .125.041c1.95-.607 3.939-1.522 5.992-3.03a.115.115 0 0 0 .045-.081c.5-5.177-.838-9.673-3.573-13.646a.093.093 0 0 0-.048-.042ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z" />
              </svg>
              Dołącz na Discord
            </GradientButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-astro.400 mb-2">{stat.number}</div>
                <div className="text-sm text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="uslugi" className="w-full py-24 px-4 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Kompleksowe rozwiązania dostosowane do Twoich potrzeb">Nasze Usługi</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-astro.400 to-astro.blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-astro.400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{service.desc}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium bg-astro.400/10 text-astro.400 rounded-full border border-astro.400/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="opinie" className="w-full py-24 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Zobacz co mówią o nas nasi klienci">Opinie Klientów</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full">
                  {/* Quote icon */}
                  <Quote size={32} className="text-astro.400/30 mb-4" />

                  {/* Quote */}
                  <blockquote className="text-lg text-white/80 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-astro.400/30"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.role}</div>
                      <div className="text-xs text-astro.400 font-medium">{testimonial.project}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-astro.400/10 to-astro.blue/10" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gotowy na <span className="text-astro.400">współpracę?</span>
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Skontaktuj się z nami już dziś i rozpocznij realizację swojego projektu marzeń.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton href="https://discord.gg/whiga" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                    <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.112.112 0 0 0-.119.056c-.524.908-1.11 2.086-1.527 3.005a18.902 18.902 0 0 0-5.076 0A12.76 12.76 0 0 0 8.62 3.256a.115.115 0 0 0-.12-.056A19.736 19.736 0 0 0 3.684 4.369a.105.105 0 0 0-.047.042C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c2.053 1.507 4.042 2.422 5.992 3.029a.115.115 0 0 0 .125-.042c.462-.63.873-1.295 1.226-1.994a.112.112 0 0 0-.062-.155c-.652-.247-1.27-.549-1.872-.892a.112.112 0 0 1-.011-.186c.126-.094.252-.192.372-.291a.112.112 0 0 1 .114-.013c3.927 1.793 8.18 1.793 12.061 0a.112.112 0 0 1 .115.012c.12.099.246.197.372.291a.112.112 0 0 1-.01.186 12.298 12.298 0 0 1-1.873.893.112.112 0 0 0-.061.154c.36.7.772 1.366 1.227 1.995a.115.115 0 0 0 .125.041c1.95-.607 3.939-1.522 5.992-3.03a.115.115 0 0 0 .045-.081c.5-5.177-.838-9.673-3.573-13.646a.093.093 0 0 0-.048-.042ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z" />
                  </svg>
                  Napisz na Discord
                </GradientButton>
                <GradientButton href="mailto:kontakt@astrocode.pl" variant="secondary">
                  Wyślij Email
                </GradientButton>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

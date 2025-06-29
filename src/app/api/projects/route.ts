import { NextResponse } from "next/server"

// Mock data for development - replace with actual database connection
const mockProjects = [
  {
    id: 1,
    title: "Advanced Discord Moderation Bot",
    description:
      "Zaawansowany bot moderacyjny z funkcjami AI, automatyczną moderacją, systemem ostrzeżeń i integracją z bazą danych. Bot obsługuje ponad 10,000 użytkowników dziennie.",
    category: "discord-bot",
    tags: ["Discord.js", "Node.js", "PostgreSQL", "AI", "Moderacja"],
    image_url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    gallery_urls: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    ],
    client_name: "GameServer Pro",
    completion_date: "2024-01-15",
    project_url: "https://discord.gg/example",
    github_url: "https://github.com/astrocode/moderation-bot",
    featured: true,
  },
  {
    id: 2,
    title: "Minecraft Survival Server Plugin Pack",
    description:
      "Kompletny zestaw pluginów dla serwera survival Minecraft zawierający ekonomię, ochronę terenu, sklepy graczy i system questów.",
    category: "minecraft-plugin",
    tags: ["Java", "Spigot", "MySQL", "Economy", "Protection"],
    image_url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    gallery_urls: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    ],
    client_name: "CraftWorld",
    completion_date: "2024-02-20",
    project_url: "https://craftworld.pl",
    github_url: null,
    featured: true,
  },
  {
    id: 3,
    title: "Epic Medieval Castle Build",
    description:
      "Monumentalna budowla średniowiecznego zamku z pełnym wnętrzem, systemem obronnym i otaczającym miastem. Projekt trwał 3 miesiące.",
    category: "minecraft-build",
    tags: ["WorldEdit", "Medieval", "Architecture", "Detailed"],
    image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    gallery_urls: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    ],
    client_name: "FantasyRealm",
    completion_date: "2024-03-10",
    project_url: null,
    github_url: null,
    featured: false,
  },
  {
    id: 4,
    title: "YouTube Channel Branding Package",
    description:
      "Kompletny pakiet brandingowy dla kanału YouTube zawierający logo, bannery, intro/outro, thumbnails i grafiki social media.",
    category: "graphics",
    tags: ["Photoshop", "After Effects", "Branding", "YouTube"],
    image_url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    gallery_urls: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
    ],
    client_name: "TechReviewer",
    completion_date: "2024-01-28",
    project_url: "https://youtube.com/@techreviewer",
    github_url: null,
    featured: true,
  },
  {
    id: 5,
    title: "Automated Trading Bot",
    description:
      "Bot do automatycznego tradingu kryptowalut z zaawansowanymi algorytmami, analizą techniczną i systemem zarządzania ryzykiem.",
    category: "automation",
    tags: ["Python", "Trading", "API", "Cryptocurrency", "ML"],
    image_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    gallery_urls: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    ],
    client_name: "CryptoTrader",
    completion_date: "2024-02-14",
    project_url: null,
    github_url: "https://github.com/astrocode/trading-bot",
    featured: false,
  },
  {
    id: 6,
    title: "Gaming Montage Series",
    description:
      "Seria profesjonalnych montaży gamingowych z efektami specjalnymi, synchronizacją z muzyką i zaawansowaną kolorystyką.",
    category: "video-editing",
    tags: ["Premiere Pro", "After Effects", "Gaming", "Montage"],
    image_url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    gallery_urls: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    ],
    client_name: "ProGamer",
    completion_date: "2024-03-05",
    project_url: "https://youtube.com/@progamer",
    github_url: null,
    featured: false,
  },
]

export async function GET() {
  try {
    // In production, replace this with actual database query
    // Example with PostgreSQL:
    // const { rows } = await pool.query(`
    //   SELECT * FROM projects
    //   WHERE status = 'completed'
    //   ORDER BY featured DESC, completion_date DESC
    // `)

    return NextResponse.json(mockProjects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["title", "description", "category", "client_name"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // In production, insert into database:
    // const { rows } = await pool.query(`
    //   INSERT INTO projects (title, description, category, tags, image_url, client_name, completion_date, project_url, github_url, discord_user_id)
    //   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    //   RETURNING *
    // `, [body.title, body.description, body.category, body.tags, body.image_url, body.client_name, body.completion_date, body.project_url, body.github_url, body.discord_user_id])

    // For now, return success response
    return NextResponse.json({
      message: "Project added successfully",
      id: Date.now(), // Mock ID
    })
  } catch (error) {
    console.error("Error adding project:", error)
    return NextResponse.json({ error: "Failed to add project" }, { status: 500 })
  }
}

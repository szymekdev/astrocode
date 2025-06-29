// Discord bot integration for adding projects
// This would be used in your Discord bot to add projects to the database

interface ProjectData {
  title: string
  description: string
  category: string
  tags: string[]
  image_url?: string
  gallery_urls?: string[]
  client_name: string
  completion_date: string
  project_url?: string
  github_url?: string
  discord_user_id: string
  featured?: boolean
}

export async function addProjectFromDiscord(projectData: ProjectData) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DISCORD_BOT_TOKEN}`, // Add authentication
      },
      body: JSON.stringify(projectData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Error adding project from Discord:", error)
    throw error
  }
}

// Example Discord bot command handler
export function createDiscordCommand() {
  return {
    name: "add-project",
    description: "Add a completed project to the portfolio",
    options: [
      {
        name: "title",
        description: "Project title",
        type: 3, // STRING
        required: true,
      },
      {
        name: "description",
        description: "Project description",
        type: 3, // STRING
        required: true,
      },
      {
        name: "category",
        description: "Project category",
        type: 3, // STRING
        required: true,
        choices: [
          { name: "Discord Bot", value: "discord-bot" },
          { name: "Minecraft Plugin", value: "minecraft-plugin" },
          { name: "Minecraft Build", value: "minecraft-build" },
          { name: "Graphics & Design", value: "graphics" },
          { name: "Video Editing", value: "video-editing" },
          { name: "Automation", value: "automation" },
          { name: "Web Development", value: "web-development" },
          { name: "Animation", value: "animation" },
        ],
      },
      {
        name: "client",
        description: "Client name",
        type: 3, // STRING
        required: true,
      },
      {
        name: "tags",
        description: "Project tags (comma separated)",
        type: 3, // STRING
        required: false,
      },
      {
        name: "image",
        description: "Project image URL",
        type: 3, // STRING
        required: false,
      },
      {
        name: "project-url",
        description: "Live project URL",
        type: 3, // STRING
        required: false,
      },
      {
        name: "github-url",
        description: "GitHub repository URL",
        type: 3, // STRING
        required: false,
      },
      {
        name: "featured",
        description: "Mark as featured project",
        type: 5, // BOOLEAN
        required: false,
      },
    ],
  }
}

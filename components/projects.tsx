"use client"

import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Motive",
    description:
      "AI-powered travel planning app with real-time geolocation and personalized itineraries. Built at Hack Dearborn with microservices architecture for 30% faster search speeds.",
    tags: ["React", "Flask", "Supabase", "TypeScript", "OpenAI API"],
    link: "https://github.com/Wruqe/Motive",
  },
  {
    title: "PostWorkout",
    description:
      "Full-stack fitness tracking application with dynamic progress visualization using Chart.js. Reduced query execution time by 50% with optimized data models.",
    tags: ["Angular", "Express", "Supabase", "TypeScript", "Chart.js"],
    link: "https://github.com/Wruqe/PostWorkoutAngular",
  },
  {
    title: "EvacX",
    description:
      "Revolutionary AI-powered disaster management platform that transforms emergency response from reactive to predictive through real-time data integration, multi-agent AI orchestration, and intelligent evacuation planning with NASA FIRMS, USGS, NOAA, and FEMA APIs.",
    tags: ["AI", "Multi-Agent", "TomTom", "Real-time Data", "Emergency Response"],
    link: "https://github.com/Wruqe/EvacX",
  },
  {
    title: "AI-Powered Note Taker",
    description:
      "Intelligent journaling app with AI copilot for summarization and spaced repetition. Features natural language search using OpenAI embeddings.",
    tags: ["React", "Express", "Supabase", "OpenAI", "NLP"],
    link: "https://github.com/camdenw68/ai-note-taker",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bottom-section min-h-screen flex items-center px-6 py-32">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-2">
              <div className="h-px w-16 bg-accent" />
              <h2 className="text-sm uppercase tracking-wider text-accent font-medium">Projects</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A selection of full-stack applications showcasing scalable architecture, AI integration, and modern
              development practices.
            </p>
          </div>

          {/* Projects grid */}
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border bg-card hover:border-accent/50 transition-all duration-300"
                >
                  <a href={project.link} className="block" target="_blank" rel="noopener noreferrer">
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

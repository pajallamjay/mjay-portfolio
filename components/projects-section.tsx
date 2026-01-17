import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics dashboard.",
    image: "/ecommerce-dashboard-dark-theme-minimal.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    image: "/task-management-app-dark-theme-minimal-kanban.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy.",
    image: "/ai-content-generator-dark-theme-minimal.jpg",
    tags: ["Next.js", "OpenAI", "TypeScript", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Finance Tracker",
    description:
      "Personal finance tracking application with expense categorization, budget planning, and visual analytics.",
    image: "/finance-tracker-dashboard-dark-theme-charts.jpg",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button asChild size="sm" variant="secondary">
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.githubUrl} target="_blank">
                        <Github size={16} className="mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/pajallamjay" target="_blank">
                <Github size={20} className="mr-2" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

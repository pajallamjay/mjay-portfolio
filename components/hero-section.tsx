import Link from "next/link";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-background" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-4 animate-fade-in">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Mjay
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Full Stack Developer
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            I build exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. Over 5 years of experience in
            web development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume.pdf" target="_blank">
                Download CV
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/pajallamjay"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="text-muted-foreground" size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}

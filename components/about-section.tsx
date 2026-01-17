import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/professional-developer-portrait-dark-minimal.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <p className="text-primary font-mono text-sm mb-2">About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Passionate about creating impactful digital solutions
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer based in San Francisco with a
                  passion for building digital products that make a difference.
                  My journey in web development started 5 years ago, and since
                  then, I've had the privilege of working with startups and
                  established companies alike.
                </p>
                <p>
                  I specialize in JavaScript ecosystems, particularly React,
                  Next.js, and Node.js. I believe in writing clean, maintainable
                  code and creating seamless user experiences that solve real
                  problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge through technical writing.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-10">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground">
                    5+
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground">
                    50+
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground">
                    30+
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

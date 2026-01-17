import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Solutions Agency",
    period: "2020 - 2022",
    description:
      "Developed custom web applications for diverse clients. Implemented CI/CD pipelines and improved code quality practices.",
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description:
      "Built responsive user interfaces using React. Collaborated with design team to implement pixel-perfect designs.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "University of Technology",
    period: "2015 - 2019",
    description:
      "Graduated with honors. Focused on software engineering and web technologies.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience & Education
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                          {exp.type === "work" ? (
                            <Briefcase size={20} className="text-primary" />
                          ) : (
                            <GraduationCap size={20} className="text-primary" />
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary text-sm mb-3">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

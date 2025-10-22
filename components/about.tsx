export function About() {
  return (
    <section id="about" className="bottom-section min-h-screen flex items-center px-6 py-32">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left sidebar navigation */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-2">
              <div className="h-px w-16 bg-accent" />
              <h2 className="text-sm uppercase tracking-wider text-accent font-medium">About</h2>
            </div>
            <nav className="space-y-2 text-muted-foreground">
              <div className="text-sm">Education</div>
              <div className="text-sm">Skills</div>
            </nav>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9 space-y-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Building scalable applications with modern technologies
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {
                  "I'm a full-stack developer and Computer Science student with a passion for creating high-performance applications. My work focuses on scalable architecture, secure integrations, and intuitive design—building solutions that are both technically robust and user-friendly."
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Education</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">BS Computer Science & MS Artificial Intelligence</p>
                        <p className="text-sm text-muted-foreground">Grand Valley State University</p>
                      </div>
                      <span className="text-sm text-muted-foreground">2024 — 2028</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Relevant Coursework: Object-Oriented Programming, Web Development, Database Systems, Software
                      Engineering, Discrete Mathematics, Calculus
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Skills</h4>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4 bg-card/50">
                    <p className="text-sm font-medium mb-3 text-accent">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs bg-accent/10 text-foreground rounded border border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-4 bg-card/50">
                    <p className="text-sm font-medium mb-3 text-accent">Frameworks & Libraries</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Angular", "Node.js", "Express", "Redux", "Next.js"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs bg-accent/10 text-foreground rounded border border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-4 bg-card/50">
                    <p className="text-sm font-medium mb-3 text-accent">Tools & Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "Docker", "Firebase", "Supabase", "Tailwind CSS", "PostgreSQL"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs bg-accent/10 text-foreground rounded border border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

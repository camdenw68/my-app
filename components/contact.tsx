"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bottom-section min-h-screen flex items-center px-6 py-32">
      <div className="max-w-7xl w-full mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-px w-16 bg-accent mx-auto" />
              <h2 className="text-sm uppercase tracking-wider text-accent font-medium">Contact</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-balance">{"Let's connect"}</h3>
          </div>

          <div className="space-y-6">
            <p className="text-base text-muted-foreground">Feel free to reach out via email</p>
            <a
              href="mailto:wierengc@mail.gvsu.edu"
              className="inline-flex items-center gap-3 text-lg md:text-xl font-medium hover:text-accent transition-colors group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
              wierengc@mail.gvsu.edu
            </a>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/camdenw68"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/camden-wierengo-1b9236300/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Camden Wierengo. All rights reserved.</p>
            <p>Designed & built with passion</p>
          </div>
        </div>
      </div>
    </section>
  )
}

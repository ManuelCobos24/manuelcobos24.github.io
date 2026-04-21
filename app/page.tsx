'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 py-12">
          <p className="text-xs text-muted-foreground text-center font-semibold uppercase tracking-widest">
            © 2025 Manuel Cobos Solís. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

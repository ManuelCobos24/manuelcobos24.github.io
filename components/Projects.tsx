'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      category: t('projects.project1.category'),
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tags: t('projects.project1.tags').split(' · '),
    },
    {
      category: t('projects.project2.category'),
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tags: t('projects.project2.tags').split(' · '),
    },
    {
      category: t('projects.project3.category'),
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tags: t('projects.project3.tags').split(' · '),
    },
  ]

  return (
    <section id="projects" className="scroll-mt-16 border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-2 font-bold">
            {t('projects.title')}
          </h2>
          <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
            {t('projects.subtitle').split('github.com/ManuelCobos24')[0]}
            <a href="https://github.com/ManuelCobos24" target="_blank" rel="noopener noreferrer"
               className="text-accent hover:underline">
              github.com/ManuelCobos24
            </a>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title}
                 className="group relative border border-border 
                            bg-background overflow-hidden rounded">
              
              {/* Blurred content underneath — not readable */}
              <div className="p-8 select-none pointer-events-none 
                              filter blur-xl opacity-60">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-muted-foreground 
                                   tracking-widest">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground 
                               font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground 
                              leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag}
                      className="text-xs font-mono text-muted-foreground 
                                 border border-border px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overlay — sits on top of blurred content */}
              <div className="absolute inset-0 flex flex-col items-center 
                              justify-center gap-3 
                              bg-background/40 backdrop-blur-xl
                              border border-border/50 rounded">
                {/* Pulsing dot */}
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse">
                </div>
                {/* Status text */}
                <p className="font-mono text-xs font-bold tracking-widest 
                              text-foreground uppercase">
                  {t('projects.under_construction')}
                </p>
                <p className="font-mono text-xs text-muted-foreground 
                              tracking-wider text-center px-6">
                  {t('projects.coming_soon')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="https://github.com/ManuelCobos24" target="_blank" rel="noopener noreferrer"
             className="font-mono text-xs text-accent tracking-wider text-center 
                        hover:underline transition-colors inline-block">
            {t('projects.github').split('github.com/ManuelCobos24')[0]}
            <span className="underline">github.com/ManuelCobos24</span>
          </a>
        </div>
      </div>
    </section>
  )
}

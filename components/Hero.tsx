'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-background pt-28 pb-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* Left column */}
          <div className="flex flex-col items-start">
            {/* Available badge */}
            <div className="mb-8 inline-flex items-center gap-2 border border-green-600/50 
                            bg-green-50 dark:border-green-500/40 dark:bg-green-500/8 px-3 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-green-700 
                               dark:text-green-400">
                {t('hero.badge')}
              </span>
            </div>

            {/* Name — the hero visual */}
            <h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl leading-none 
                           text-foreground mb-6 font-bold tracking-tight whitespace-pre-wrap">
              {t('hero.title')}
            </h1>

            {/* Role */}
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground 
                          mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-accent inline-block"></span>
              {t('hero.role')}
            </p>

            {/* Bio */}
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm mb-10">
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="#projects"
                 className="px-6 py-3 bg-accent text-white font-semibold uppercase 
                            text-xs tracking-widest hover:opacity-90 transition-opacity">
                {t('hero.cta.projects')}
              </a>
              <a href="#contact"
                 className="px-6 py-3 border border-accent text-accent font-semibold 
                            uppercase text-xs tracking-widest hover:bg-accent 
                            hover:text-white transition-colors">
                {t('hero.cta.contact')}
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-6">
              <a href="https://github.com/ManuelCobos24" target="_blank" rel="noopener noreferrer"
                 className="text-xs uppercase tracking-wider text-muted-foreground 
                            hover:text-accent transition-colors font-semibold">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/manuelcobos" target="_blank" rel="noopener noreferrer"
                 className="text-xs uppercase tracking-wider text-muted-foreground 
                            hover:text-accent transition-colors font-semibold">
                LinkedIn
              </a>
              <a href="mailto:manuelcobos200324@gmail.com"
                 className="text-xs uppercase tracking-wider text-muted-foreground 
                            hover:text-accent transition-colors font-semibold">
                Email
              </a>
            </div>
          </div>

          {/* Right column — stat blocks */}
          <div className="space-y-0 border border-border divide-y divide-border">
            <div className="px-8 py-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground 
                            font-bold mb-1">{t('hero.experience')}</p>
              <p className="text-base text-foreground font-medium">
                {t('hero.experience.value')}
              </p>
            </div>
            <div className="px-8 py-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground 
                            font-bold mb-1">{t('hero.expertise')}</p>
              <p className="text-base text-foreground font-medium">
                {t('hero.expertise.value')}
              </p>
            </div>
            <div className="px-8 py-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground 
                            font-bold mb-1">{t('hero.education')}</p>
              <p className="text-base text-foreground font-medium">
                {t('hero.education.value')}
              </p>
            </div>
            <div className="px-8 py-6 bg-green-500/5 border-l-2 border-l-green-500">
              <p className="text-xs uppercase tracking-widest text-green-600 
                            dark:text-green-400 font-bold mb-1">VIEWNEXT · Cliente Banco Santander</p>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer · On-site
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

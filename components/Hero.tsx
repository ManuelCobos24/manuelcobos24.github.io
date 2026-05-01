'use client'

import Image from 'next/image'
import { useLanguage } from '@/app/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-background pt-28 pb-28 border-b border-border" style={{ minHeight: '100vh' }}>
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          <div className="flex flex-col items-start relative pb-4">
            <div className="mb-8 inline-flex items-center gap-2 border border-primary/50 
                            bg-primary/5 dark:border-primary/40 dark:bg-primary/10 px-3 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-primary 
                               dark:text-primary">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl leading-none 
                           text-foreground mb-10 font-bold tracking-tight whitespace-pre-wrap"
                style={{ fontDisplay: 'swap' }}>
              {t('hero.title')}
            </h1>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10 w-full max-w-xl">
               <div className="relative shrink-0 group">
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity"
                       style={{
                         willChange: 'border-radius, opacity',
                         contain: 'layout style',
                         animation: 'blob-morph 12s ease-in-out infinite',
                       }}></div>
                  <div className="relative w-36 h-36 md:w-44 md:h-44 bg-secondary-bg/80 overflow-hidden shadow-xl drop-shadow-md"
                       style={{
                         animation: 'blob-morph 12s ease-in-out infinite',
                         willChange: 'border-radius',
                       }}>
                     <Image 
                        src="/profile-image.png" 
                        alt="Manuel Cobos Avatar" 
                        width={176} 
                        height={176} 
                        className="w-full h-full object-cover object-center" 
                        priority 
                        sizes="176px"
                     />
                  </div>
               </div>
               
               <div className="flex-1 mt-2 sm:mt-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground 
                                mb-4 flex items-center justify-center sm:justify-start gap-3">
                    <span className="w-8 h-px bg-accent inline-block"></span>
                    {t('hero.role')}
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed text-center sm:text-left">
                    {t('hero.description')}
                  </p>
               </div>
            </div>

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
            <div className="px-8 py-6 bg-primary/5 border-l-2 border-l-primary">
              <p className="text-xs uppercase tracking-widest text-primary 
                            dark:text-primary font-bold mb-1">{t('hero.current_client')}</p>
              <p className="text-sm text-muted-foreground">
                {t('hero.current_role')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="scroll-mt-16 border-t border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid gap-16 lg:gap-24 lg:grid-cols-5 lg:items-start">
          {/* Left: Title */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight text-foreground mb-4 font-bold">{t('about.title')}</h2>
            <div className="w-16 h-px bg-accent"></div>
          </div>

          {/* Right: Main content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6 text-base leading-relaxed">
              <p className="text-secondary-text font-normal">
                {t('about.content.p1')}
              </p>

              <p className="text-secondary-text font-normal">
                {t('about.content.p2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

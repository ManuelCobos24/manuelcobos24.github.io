'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Verification() {
  const { t } = useLanguage()

  return (
    <section id="verification" className="scroll-mt-16 border-t border-border py-32 lg:py-40 bg-card">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-2 font-bold">{t('verification.title')}</h2>
          <p className="text-base text-secondary-text font-normal">{t('verification.subtitle')}</p>
          <div className="w-16 h-px bg-accent mt-6"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* MuleSoft */}
          <div className="border border-border rounded p-8 hover:border-accent transition-colors bg-background">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest rounded mb-4">
                Enterprise Integration
              </div>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-2 font-bold">
              {t('verification.certification1')}
            </h3>
            <p className="text-sm text-secondary-text font-normal">
              {t('verification.certification1.desc')}
            </p>
            <div className="mt-6 pt-6 border-t border-muted">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Verified Credential
              </p>
            </div>
          </div>

          {/* LPIC-1 */}
          <div className="border border-border rounded p-8 hover:border-accent transition-colors bg-background">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-widest rounded mb-4">
                Systems Administration
              </div>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-2 font-bold">
              {t('verification.certification2')}
            </h3>
            <p className="text-sm text-secondary-text font-normal">
              {t('verification.certification2.desc')}
            </p>
            <div className="mt-6 pt-6 border-t border-muted">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Verified Credential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

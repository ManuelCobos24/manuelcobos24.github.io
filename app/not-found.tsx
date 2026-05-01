'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          Error 404
        </p>
        <h1 className="font-serif text-6xl lg:text-8xl text-foreground font-bold mb-4">
          {t('notfound.title')}
        </h1>
        <p className="text-muted-foreground mb-8">
          {t('notfound.description')}
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-accent text-white font-semibold uppercase text-xs tracking-widest hover:opacity-90 transition-opacity"
        >
          {t('notfound.cta')}
        </Link>
      </div>
    </div>
  )
}
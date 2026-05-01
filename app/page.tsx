'use client'

import dynamic from 'next/dynamic'
import { useLanguage } from '@/app/LanguageContext'
import Navigation from '@/components/Navigation'

const Hero = dynamic(() => import('@/components/Hero'), { ssr: true })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: true, loading: () => <div className="min-h-[400px]" /> })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: true, loading: () => <div className="min-h-[400px]" /> })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true, loading: () => <div className="min-h-[400px]" /> })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true, loading: () => <div className="min-h-[400px]" /> })

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-border bg-background">
        <FooterContent />
      </footer>
    </div>
  )
}

function FooterContent() {
  const { t } = useLanguage()
  return (
    <div className="mx-auto max-w-7xl px-8 lg:px-12 py-12">
      <p className="text-xs text-muted-foreground text-center font-semibold uppercase tracking-widest">
        © {new Date().getFullYear()} Manuel Cobos Solís. {t('footer.rights')}
      </p>
    </div>
  )
}
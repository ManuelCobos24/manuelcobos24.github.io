'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/app/LanguageContext'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navigation() {
  const { lang, setLang, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  const navItems = [
    { label: t('nav.home'), href: '#' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-lg font-bold text-foreground hover:text-accent transition-colors" aria-label="Manuel Cobos">
            MC
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Controls - Language & Theme */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex gap-0.5 border border-border rounded p-1 bg-secondary-bg dark:bg-tertiary-bg">
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors ${
                  lang === 'EN'
                    ? 'bg-accent text-white dark:text-black'
                    : 'text-muted-foreground hover:text-secondary-text dark:hover:text-foreground'
                }`}
                aria-label="Switch to English"
                aria-pressed={lang === 'EN'}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ES')}
                className={`px-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors ${
                  lang === 'ES'
                    ? 'bg-accent text-white dark:text-black'
                    : 'text-muted-foreground hover:text-secondary-text dark:hover:text-foreground'
                }`}
                aria-label="Cambiar a Español"
                aria-pressed={lang === 'ES'}
              >
                ES
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex md:hidden p-2"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="space-y-2 border-t border-border py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

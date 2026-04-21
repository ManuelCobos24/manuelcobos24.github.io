'use client'

import { useEffect } from 'react'
import { LanguageProvider } from './LanguageContext'

export function ClientProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Set dark mode by default on initial load
    const html = document.documentElement
    const saved = localStorage.getItem('theme')
    
    if (saved === 'light') {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark')
    }
  }, [])

  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}

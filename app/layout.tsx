import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { ClientProviders } from './ClientProviders'
import './globals.css'

const siteUrl = 'https://manuelcobos.dev'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Manuel Cobos | Full Stack Developer | Java · Spring Boot · Kafka',
    template: '%s | Manuel Cobos',
  },
  description: 'Full Stack Developer especializado en backend con Java y Spring Boot. Experiencia en sistemas de producción, mensajería asíncrona con Kafka, DevOps con OpenShift y CI/CD. Certificado en MuleSoft y LPIC-1.',
  keywords: ['Full Stack Developer', 'Java', 'Spring Boot', 'Apache Kafka', 'Angular', 'MuleSoft', 'LPIC-1', 'Backend', 'OpenShift', 'CI/CD', 'Portfolio', 'Desarrollador Full Stack', 'Desarrollador Java', 'Ingeniero de Software', 'Software Engineer', 'Backend Developer'],
  authors: [{ name: 'Manuel Cobos Solís', url: siteUrl }],
  creator: 'Manuel Cobos Solís',
  publisher: 'Manuel Cobos Solís',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  verification: {
    google: '', // Add your Google Search Console verification code here
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Manuel Cobos Portfolio',
    locale: 'es_ES',
    title: 'Manuel Cobos | Full Stack Developer',
    description: 'Full Stack Developer con experiencia en entornos de producción reales. Spring Boot · Kafka · Angular · OpenShift · Clean Architecture.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Manuel Cobos - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Cobos | Full Stack Developer',
    description: 'Full Stack Developer especializado en Java, Spring Boot, Kafka, Angular y OpenShift.',
    images: [`${siteUrl}/og-image.png`],
  },
  category: 'technology',
  other: {
    'google-site-verification': '',
    'msvalidate.01': '',
    'yandex-verification': '',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

// Server-side JSON-LD for search engines
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Manuel Cobos Portfolio',
      description: 'Full Stack Developer especializado en backend con Java y Spring Boot',
      inLanguage: 'es',
      author: {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Manuel Cobos Solís',
      url: siteUrl,
      jobTitle: 'Full Stack Developer',
      description: 'Full Stack Developer especializado en backend con Java, Spring Boot, Apache Kafka, Angular, OpenShift y DevOps.',
      sameAs: [
        'https://github.com/ManuelCobos24',
        'https://www.linkedin.com/in/manuelcobos',
      ],
      knowsAbout: [
        'Java', 'Spring Boot', 'Apache Kafka', 'Angular', 'TypeScript',
        'OpenShift', 'DevOps', 'CI/CD', 'Clean Architecture', 'MuleSoft',
        'Linux', 'Docker', 'REST APIs', 'Microservices', 'Git',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: '', // Add your university
      },
    },
    {
      '@type': 'ProfessionalService',
      name: 'Manuel Cobos - Desarrollo Web',
      image: `${siteUrl}/og-image.png`,
      url: siteUrl,
      description: 'Desarrollo web full stack con Java, Spring Boot, Angular y tecnologías modernas.',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ES',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className="scroll-smooth dark"
      suppressHydrationWarning
      style={{ '--font-serif': playfair.variable } as React.CSSProperties}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{ __html: `html{color-scheme:dark}` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
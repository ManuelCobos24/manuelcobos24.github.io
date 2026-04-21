import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClientProviders } from './ClientProviders'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Manuel Cobos | Full Stack Developer | Java · Spring Boot · Kafka',
  description: 'Full Stack Developer especializado en backend con Java y Spring Boot. Experiencia en sistemas de producción, mensajería asíncrona con Kafka, DevOps con OpenShift y CI/CD. Certificado en MuleSoft y LPIC-1.',
  keywords: ['Full Stack Developer', 'Java', 'Spring Boot', 'Apache Kafka', 'Angular', 'MuleSoft', 'LPIC-1', 'Backend', 'OpenShift', 'CI/CD', 'Portfolio'],
  authors: [{ name: 'Manuel Cobos Solís' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'Manuel Cobos | Full Stack Developer',
    description: 'Full Stack Developer con experiencia en entornos de producción reales. Spring Boot · Kafka · Angular · OpenShift · Clean Architecture.',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  other: {
    'color-scheme': 'dark light',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning style={{ '--font-serif': _playfair.variable } as React.CSSProperties}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ClientProviders>
          {children}
        </ClientProviders>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

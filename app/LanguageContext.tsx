'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'EN' | 'ES'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    'hero.badge': 'AVAILABLE · OPEN TO WORK',
    'hero.title': 'Manuel\nCobos\nSolís',
    'hero.role': 'Full Stack Developer · Spring Boot & Angular',
    'hero.description': 'Full Stack Developer at VIEWNEXT, working on-site for Banco Santander. Backend with Java/Spring Boot, frontend with Angular. I build systems that have to work, no excuses.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    'hero.experience': 'Experience',
    'hero.experience.value': '1+ year · VIEWNEXT · Banco Santander client',
    'hero.expertise': 'Core Stack',
    'hero.expertise.value': 'Java · Spring Boot · Angular · Kafka',
    'hero.education': 'Credentials',
    'hero.education.value': 'MuleSoft Certified Dev L1 · LPIC-1',

    'experience.title': 'Experience',
    'experience.subtitle': 'VIEWNEXT · 1 year 5 months',
    'experience.role1.period': 'Jul 2025 – Present',
    'experience.role1.company': 'VIEWNEXT · On-site Banco Santander',
    'experience.role1.title': 'Desarrollador de Software',
    'experience.role1.description': 'Full stack development in banking environment at Banco Santander client. Java/Spring Boot backend, Angular frontend, working within established CI/CD pipelines using GitHub Actions and OpenShift deployments.',
    'experience.role1.bullet1': 'Development and maintenance of banking microservices with Java/Spring Boot in high-availability production environment',
    'experience.role1.bullet2': 'Frontend development with Angular for internal banking tools and customer-facing interfaces',
    'experience.role1.bullet3': 'Working with GitHub Actions CI/CD pipelines and Docker containers orchestrated on OpenShift',
    'experience.role1.tags': 'Java · Spring Boot · Angular · OpenShift · Docker · GitHub Actions',

    'experience.role2.period': 'Mar 2025 – Jun 2025',
    'experience.role2.company': 'VIEWNEXT · FCT DAW',
    'experience.role2.title': 'Desarrollador Java · Prácticas FCT',
    'experience.role2.description': 'Backend development internship as part of the DAW (Web Application Development) Higher Degree FCT practices. Real production environment, working with microservices and async messaging.',
    'experience.role2.bullet1': 'Kafka messaging pipeline for financial event processing in streaming',
    'experience.role2.bullet2': 'Real-time WebSocket communication for banking operation status notifications',
    'experience.role2.bullet3': 'Data reconciliation batch jobs between systems using Spring Batch',
    'experience.role2.tags': 'Java · Spring Boot · Kafka · WebSockets · Spring Batch · REST APIs',

    'experience.role3.period': 'Nov 2024 – Feb 2025',
    'experience.role3.company': 'VIEWNEXT · FP Dual DAW',
    'experience.role3.title': 'Backend Developer · FP Dual',
    'experience.role3.description': 'Intensive specialization in the Spring ecosystem for corporate API development, as part of the DAW Higher Degree FP Dual program.',
    'experience.role3.bullet1': 'REST controllers, persistence management with Spring Data and service securization with Spring Security',
    'experience.role3.bullet2': 'Implementation of business logic following Clean Architecture model for long-term maintainability',
    'experience.role3.bullet3': 'First contact with enterprise development patterns: SOLID, dependency injection, layered architecture',
    'experience.role3.tags': 'Java · Spring Boot · Spring Security · Spring Data · REST APIs · Clean Architecture',

    'experience.role4.period': 'Mar 2024 – Jun 2024',
    'experience.role4.company': 'VIEWNEXT · FCT DAM',
    'experience.role4.title': 'Integration Developer · Prácticas FCT',
    'experience.role4.description': 'Enterprise middleware internship as part of the DAM (Multiplatform Application Development) Higher Degree FCT practices. First professional experience with enterprise integration platforms.',
    'experience.role4.bullet1': 'MuleSoft Anypoint Platform flows connecting legacy banking systems to modern APIs',
    'experience.role4.bullet2': 'Data transformation and routing in IBM Integration Bus (IIB) for critical banking processes',
    'experience.role4.bullet3': 'Obtained MuleSoft Certified Developer Level 1 certification during this period',
    'experience.role4.tags': 'MuleSoft · IBM IIB · IBM App Connect · SOA · ESB · REST APIs · XML',

    'projects.title': 'Projects',
    'projects.subtitle': 'Personal projects · github.com/ManuelCobos24',
    'projects.project1.category': 'FULL STACK',
    'projects.project1.title': 'Proiectus Alpha Lorem',
    'projects.project1.description': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.',
    'projects.project1.tags': 'Lorem · Ipsum · Dolor · Sit · Amet',
    'projects.project2.category': 'BACKEND',
    'projects.project2.title': 'Sistema Beta Consectetur',
    'projects.project2.description': 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.',
    'projects.project2.tags': 'Adipiscing · Elit · Sed · Eiusmod · Tempor',
    'projects.project3.category': 'BACKEND',
    'projects.project3.title': 'Módulo Gamma Adipiscing',
    'projects.project3.description': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.',
    'projects.project3.tags': 'Incididunt · Labore · Dolore · Magna · Aliqua',
    'projects.github': 'Proyectos en desarrollo · github.com/ManuelCobos24',

    'skills.title': 'Skills',
    'skills.middleware.label': 'MIDDLEWARE & INTEGRATION',
    'skills.middleware.badge': 'DIFERENCIADOR',
    'skills.backend.label': 'BACKEND',
    'skills.frontend.label': 'FRONTEND',
    'skills.devops.label': 'DEVOPS & DEPLOYMENT',
    'skills.databases.label': 'DATABASES',
    'skills.testing.label': 'TESTING & QA',
    'skills.certs.label': 'CERTIFICATIONS',

    'contact.title': 'Hablemos',
    'contact.description': 'Open to new opportunities in banking, fintech, or any team building systems that need to work at scale. Based in Cáceres, Spain · Remote friendly.',
    'contact.email.label': 'Email',
    'contact.email.value': 'manuelcobos200324@gmail.com',
    'contact.github.label': 'GitHub',
    'contact.github.value': 'github.com/ManuelCobos24',
    'contact.linkedin.label': 'LinkedIn',
    'contact.linkedin.value': 'linkedin.com/in/manuelcobos',
    'contact.cta': 'Send Email →',
  },
  ES: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Skills',
    'nav.contact': 'Contacto',

    'hero.badge': 'DISPONIBLE · OPEN TO WORK',
    'hero.title': 'Manuel\nCobos\nSolís',
    'hero.role': 'Full Stack Developer · Spring Boot & Angular',
    'hero.description': 'Desarrollo software bancario en producción para Banco Santander. Backend con Java/Spring Boot, frontend con Angular. Me especializo en sistemas que tienen que funcionar sí o sí.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.contact': 'Contactar',
    'hero.experience': 'Experiencia',
    'hero.experience.value': '+1 año · VIEWNEXT · Cliente Banco Santander',
    'hero.expertise': 'Stack Principal',
    'hero.expertise.value': 'Java · Spring Boot · Angular · Kafka',
    'hero.education': 'Credenciales',
    'hero.education.value': 'MuleSoft Certified Dev L1 · LPIC-1',

    'experience.title': 'Experiencia',
    'experience.subtitle': 'VIEWNEXT · 1 año 5 meses',
    'experience.role1.period': 'Jul 2025 – Presente',
    'experience.role1.company': 'VIEWNEXT · Cliente Banco Santander',
    'experience.role1.title': 'Desarrollador de Software',
    'experience.role1.description': 'Desarrollo full stack en entorno bancario en cliente Banco Santander. Backend Java/Spring Boot, frontend Angular, trabajando dentro de los pipelines CI/CD establecidos con GitHub Actions y despliegues en OpenShift.',
    'experience.role1.bullet1': 'Desarrollo y mantenimiento de microservicios bancarios con Java/Spring Boot en entorno de producción de alta disponibilidad',
    'experience.role1.bullet2': 'Desarrollo frontend con Angular para herramientas internas bancarias e interfaces de cliente',
    'experience.role1.bullet3': 'Uso de pipelines CI/CD con GitHub Actions y contenedores Docker orquestados en OpenShift',
    'experience.role1.tags': 'Java · Spring Boot · Angular · OpenShift · Docker · GitHub Actions',

    'experience.role2.period': 'Mar 2025 – Jun 2025',
    'experience.role2.company': 'VIEWNEXT · Prácticas FCT DAW',
    'experience.role2.title': 'Desarrollador Java · Prácticas FCT',
    'experience.role2.description': 'Prácticas de empresa FCT del Grado Superior de Desarrollo de Aplicaciones Web (DAW). Entorno real de producción, trabajando con microservicios y mensajería asíncrona.',
    'experience.role2.bullet1': 'Pipeline de mensajería con Apache Kafka para procesamiento de eventos financieros en streaming',
    'experience.role2.bullet2': 'Comunicación en tiempo real con WebSockets para notificaciones de estado de operaciones bancarias',
    'experience.role2.bullet3': 'Jobs de reconciliación de datos entre sistemas con Spring Batch',
    'experience.role2.tags': 'Java · Spring Boot · Kafka · WebSockets · Spring Batch · REST APIs',

    'experience.role3.period': 'Nov 2024 – Feb 2025',
    'experience.role3.company': 'VIEWNEXT · FP Dual DAW',
    'experience.role3.title': 'Desarrollador Backend · FP Dual',
    'experience.role3.description': 'Especialización intensiva en el ecosistema Spring para el desarrollo de APIs corporativas, en el marco del programa FP Dual del Grado Superior de Desarrollo de Aplicaciones Web (DAW).',
    'experience.role3.bullet1': 'Desarrollo de controladores REST, gestión de persistencia con Spring Data y securización de servicios con Spring Security',
    'experience.role3.bullet2': 'Implementación de lógica de negocio siguiendo Clean Architecture para facilitar la mantenibilidad a largo plazo',
    'experience.role3.bullet3': 'Primer contacto con patrones de desarrollo empresarial: SOLID, inyección de dependencias y arquitectura en capas',
    'experience.role3.tags': 'Java · Spring Boot · Spring Security · Spring Data · REST APIs · Clean Architecture',

    'experience.role4.period': 'Mar 2024 – Jun 2024',
    'experience.role4.company': 'VIEWNEXT · Prácticas FCT DAM',
    'experience.role4.title': 'Desarrollador de Integración · Prácticas FCT',
    'experience.role4.description': 'Prácticas de empresa FCT del Grado Superior de Desarrollo de Aplicaciones Multiplataforma (DAM). Primera experiencia profesional con plataformas de integración empresarial.',
    'experience.role4.bullet1': 'Flujos con MuleSoft Anypoint Platform conectando sistemas bancarios legacy con APIs modernas',
    'experience.role4.bullet2': 'Transformaciones de datos y enrutamiento en IBM Integration Bus (IIB) para procesos bancarios críticos',
    'experience.role4.bullet3': 'Obtención de la certificación MuleSoft Certified Developer Level 1 durante las prácticas',
    'experience.role4.tags': 'MuleSoft · IBM IIB · IBM App Connect · SOA · ESB · REST APIs · XML',

    'projects.title': 'Proyectos',
    'projects.subtitle': 'Proyectos personales · github.com/ManuelCobos24',
    'projects.project1.category': 'FULL STACK',
    'projects.project1.title': 'Proiectus Alpha Lorem',
    'projects.project1.description': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.',
    'projects.project1.tags': 'Lorem · Ipsum · Dolor · Sit · Amet',
    'projects.project2.category': 'BACKEND',
    'projects.project2.title': 'Sistema Beta Consectetur',
    'projects.project2.description': 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.',
    'projects.project2.tags': 'Adipiscing · Elit · Sed · Eiusmod · Tempor',
    'projects.project3.category': 'BACKEND',
    'projects.project3.title': 'Módulo Gamma Adipiscing',
    'projects.project3.description': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.',
    'projects.project3.tags': 'Incididunt · Labore · Dolore · Magna · Aliqua',
    'projects.github': 'Proyectos en desarrollo · github.com/ManuelCobos24',

    'skills.title': 'Skills',
    'skills.middleware.label': 'MIDDLEWARE & INTEGRACIÓN',
    'skills.middleware.badge': 'DIFERENCIADOR',
    'skills.backend.label': 'BACKEND',
    'skills.frontend.label': 'FRONTEND',
    'skills.devops.label': 'DEVOPS & DESPLIEGUE',
    'skills.databases.label': 'BASES DE DATOS',
    'skills.testing.label': 'TESTING & QA',
    'skills.certs.label': 'CERTIFICACIONES',

    'contact.title': 'Hablemos',
    'contact.description': 'Abierto a nuevas oportunidades en banca, fintech o cualquier equipo que construya sistemas que necesiten funcionar a escala. Cáceres, España · Remoto disponible.',
    'contact.email.label': 'Email',
    'contact.email.value': 'manuelcobos200324@gmail.com',
    'contact.github.label': 'GitHub',
    'contact.github.value': 'github.com/ManuelCobos24',
    'contact.linkedin.label': 'LinkedIn',
    'contact.linkedin.value': 'linkedin.com/in/manuelcobos',
    'contact.cta': 'Enviar Email →',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('EN')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'EN' || saved === 'ES')) {
      setLang(saved)
    }
  }, [])

  const handleSetLang = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem('language', newLang)
  }

  const t = (key: string): string => {
    return translations[lang][key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

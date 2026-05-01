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
    'hero.description': 'Full Stack Developer at VIEWNEXT, building high-availability software for the banking and financial sector. Backend with Java/Spring Boot, frontend with Angular. I specialize in systems that have to work no matter what.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    'hero.experience': 'Experience',
    'hero.experience.value': '1+ year · VIEWNEXT · Banking Sector',
    'hero.expertise': 'Core Stack',
    'hero.expertise.value': 'Java · Spring Boot · Angular · Kafka',
    'hero.education': 'Credentials',
    'hero.education.value': 'MuleSoft Certified Dev L1 · LPIC-1',
    'hero.current_client': 'VIEWNEXT · Multi-client Corporate Environment',
    'hero.current_role': 'Full Stack Developer · On-site',

    'experience.title': 'Experience',
    'experience.subtitle': 'VIEWNEXT · 1 year 5 months',
    
    // Role 1 (Current)
    'experience.role1.period': 'Jul 2025 – Present',
    'experience.role1.company': 'VIEWNEXT · Banking Sector',
    'experience.role1.title': 'Software Developer',
    'experience.role1.description': 'Full stack development in a high-availability banking environment. Backend with Java/Spring Boot, frontend with Angular, working within established CI/CD pipelines using GitHub Actions and OpenShift.',
    'experience.role1.bullet1': 'Development and maintenance of high-availability microservices with Java and Spring Boot',
    'experience.role1.bullet2': 'Frontend development with Angular for internal tools and customer-facing interfaces',
    'experience.role1.bullet3': 'Usage of CI/CD pipelines with GitHub Actions and Docker containers orchestrated on OpenShift',
    'experience.role1.tags': 'Java · Spring Boot · Angular · OpenShift · Docker · GitHub Actions',

    // Role 2 (Grouped FCT and FP Dual)
    'experience.role2.period': 'Nov 2024 – Jun 2025',
    'experience.role2.company': 'VIEWNEXT · Corporate APIs & Streaming',
    'experience.role2.title': 'Java Backend Developer (Internal Promotion from FP Dual to FCT in DAW)',
    'experience.role2.description': 'Direct evolution within the company: after an intensive specialization in the Spring ecosystem (FP Dual) for corporate API development, I transitioned to the production environment (FCT) working with microservices and real-time messaging.',
    'experience.role2.bullet1': 'Construction of an asynchronous messaging pipeline with Apache Kafka for processing financial events in real time',
    'experience.role2.bullet2': 'Implementation of real-time communication with WebSockets for banking operation status notifications',
    'experience.role2.bullet3': 'Development of REST controllers, data persistence (Spring Data) and security (Spring Security) under Clean Architecture',
    'experience.role2.tags': 'Java · Spring Boot · Kafka · WebSockets · Spring Security · Clean Architecture',

    // Role 3 (The old Role 4)
    'experience.role3.period': 'Mar 2024 – Jun 2024',
    'experience.role3.company': 'VIEWNEXT · Enterprise Integration',
    'experience.role3.title': 'Enterprise Integration Developer (Internship DAM)',
    'experience.role3.description': 'First professional experience in enterprise integration platforms as part of the DAM Higher Degree. Direct immersion into complex connectivity platforms.',
    'experience.role3.bullet1': 'Design of MuleSoft Anypoint Platform flows connecting legacy systems to modern APIs',
    'experience.role3.bullet2': 'Data transformations and routing using IBM Integration Bus (IIB) for critical processes',
    'experience.role3.bullet3': 'Obtained the MuleSoft Certified Developer Level 1 certification',
    'experience.role3.tags': 'MuleSoft · IBM IIB · SOA · ESB · REST APIs · XML',

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
    'projects.github': 'Ongoing projects · github.com/ManuelCobos24',
    'projects.under_construction': 'Under Construction',
    'projects.coming_soon': 'Coming Soon',

    'skills.title': 'Skills',
    'skills.middleware.label': 'MIDDLEWARE & INTEGRATION',
    'skills.middleware.badge': 'KEY DIFFERENTIATOR',
    'skills.backend.label': 'BACKEND',
    'skills.frontend.label': 'FRONTEND',
    'skills.devops.label': 'DEVOPS & DEPLOYMENT',
    'skills.databases.label': 'DATABASES',
    'skills.testing.label': 'TESTING & QA',
    'skills.certs.label': 'CERTIFICATIONS',

    'contact.title': 'Let\'s Talk',
    'contact.description': 'Open to new opportunities in banking, fintech, or any team building systems that need to work at scale. Based in Cáceres, Spain · Remote friendly.',
    'contact.email.label': 'Email',
    'contact.email.value': 'manuelcobos200324@gmail.com',
    'contact.github.label': 'GitHub',
    'contact.github.value': 'github.com/ManuelCobos24',
    'contact.linkedin.label': 'LinkedIn',
    'contact.linkedin.value': 'linkedin.com/in/manuelcobos',
    'contact.cta': 'Send Email →',

    'footer.rights': 'All rights reserved.',
    'experience.total': 'Total Experience',
    'time.months': 'mos',
    'time.years': 'yrs',
    'time.and': 'and',
    'time.month': 'mo',
    'time.year': 'yr',

    'notfound.title': 'Oops',
    'notfound.description': 'The page you\'re looking for doesn\'t exist or has been moved.',
    'notfound.cta': 'Back to Home',

    'share.title': 'Share',
    'share.button': 'Share portfolio',
    'share.copy': 'Copy link',
    'share.copied': 'Copied!',
    'share.email.subject': 'Check out Manuel Cobos\' Portfolio',
    'share.email.body': 'Hi,\n\nI just found Manuel Cobos\' portfolio. He\'s a Full Stack Developer specializing in Java, Spring Boot, and Angular. Check it out:\n\n{{URL}}\n\nBest regards',
    'share.whatsapp': 'Hey! 👋 Check out Manuel Cobos\' portfolio — Full Stack Developer specialized in Java & Angular. Worth a look: {{URL}}',
    'share.teams': 'Manuel Cobos — Full Stack Developer (Java · Spring Boot · Angular · Kafka). Portfolio: {{URL}}',
    'share.twitter': 'Check out Manuel Cobos\' portfolio — Full Stack Developer specialized in Java, Spring Boot & Angular 🔧 {{URL}}',
    'share.linkedin': 'Manuel Cobos is a Full Stack Developer specializing in Java, Spring Boot, Apache Kafka, and Angular. Check out his portfolio: {{URL}}',
    'share.facebook': 'Manuel Cobos — Full Stack Developer portfolio. Java · Spring Boot · Angular · Kafka · OpenShift. {{URL}}',
  },
  ES: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    'hero.badge': 'DISPONIBLE · OPEN TO WORK',
    'hero.title': 'Manuel\nCobos\nSolís',
    'hero.role': 'Full Stack Developer · Spring Boot & Angular',
    'hero.description': 'Full Stack Developer en VIEWNEXT, desarrollando software de alta disponibilidad para el sector bancario y financiero. Backend con Java/Spring Boot, frontend con Angular. Me especializo en sistemas que tienen que funcionar sí o sí.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.contact': 'Contactar',
    'hero.experience': 'Experiencia',
    'hero.experience.value': '+1 año · VIEWNEXT · Sector Bancario',
    'hero.expertise': 'Stack Principal',
    'hero.expertise.value': 'Java · Spring Boot · Angular · Kafka',
    'hero.education': 'Credenciales',
    'hero.education.value': 'MuleSoft Certified Dev L1 · LPIC-1',
    'hero.current_client': 'VIEWNEXT · Entorno Corporativo Multi-cliente',
    'hero.current_role': 'Full Stack Developer · Presencial',

    'experience.title': 'Experiencia',
    'experience.subtitle': 'VIEWNEXT · 1 año 5 meses',
    
    // Role 1 (Current)
    'experience.role1.period': 'Jul 2025 – Presente',
    'experience.role1.company': 'VIEWNEXT · Sector Bancario',
    'experience.role1.title': 'Desarrollador de Software',
    'experience.role1.description': 'Desarrollo full stack en entorno bancario de alta disponibilidad. Backend con Java/Spring Boot, frontend con Angular, trabajando dentro de pipelines CI/CD establecidos con GitHub Actions y OpenShift.',
    'experience.role1.bullet1': 'Desarrollo y mantenimiento de microservicios de alta disponibilidad con Java y Spring Boot',
    'experience.role1.bullet2': 'Desarrollo frontend con Angular para herramientas internas e interfaces orientadas al cliente',
    'experience.role1.bullet3': 'Uso de pipelines CI/CD con GitHub Actions y contenedores Docker orquestados en OpenShift',
    'experience.role1.tags': 'Java · Spring Boot · Angular · OpenShift · Docker · GitHub Actions',

    // Role 2 (Grouped FCT and FP Dual)
    'experience.role2.period': 'Nov 2024 – Jun 2025',
    'experience.role2.company': 'VIEWNEXT · APIs y Streaming Corporativo',
    'experience.role2.title': 'Desarrollador Backend Java (Promoción Interna de FP Dual a FCT en DAW)',
    'experience.role2.description': 'Evolución directa dentro de la empresa: tras una especialización intensiva en el ecosistema Spring (FP Dual) para el desarrollo de APIs corporativas, pasé al entorno de producción (FCT) trabajando con microservicios y mensajería en tiempo real.',
    'experience.role2.bullet1': 'Construcción de un pipeline de mensajería asíncrona con Apache Kafka para el procesamiento de eventos financieros en tiempo real',
    'experience.role2.bullet2': 'Implementación de comunicación en tiempo real con WebSockets para notificaciones de estado de operaciones bancarias',
    'experience.role2.bullet3': 'Desarrollo de controladores REST, persistencia de datos (Spring Data) y seguridad (Spring Security) bajo Clean Architecture',
    'experience.role2.tags': 'Java · Spring Boot · Kafka · WebSockets · Spring Security · Clean Architecture',

    // Role 3 (The old Role 4)
    'experience.role3.period': 'Mar 2024 – Jun 2024',
    'experience.role3.company': 'VIEWNEXT · Integración de Sistemas Empresariales',
    'experience.role3.title': 'Desarrollador de Integración Empresarial (Prácticas DAM)',
    'experience.role3.description': 'Primera experiencia profesional en plataformas de integración empresarial como parte del Grado Superior DAM. Inmersión directa en plataformas de conectividad complejas.',
    'experience.role3.bullet1': 'Diseño de flujos con MuleSoft Anypoint Platform conectando sistemas legacy con APIs modernas',
    'experience.role3.bullet2': 'Transformaciones de datos y enrutamiento usando IBM Integration Bus (IIB) para procesos críticos',
    'experience.role3.bullet3': 'Obtención de la certificación MuleSoft Certified Developer Level 1',
    'experience.role3.tags': 'MuleSoft · IBM IIB · SOA · ESB · REST APIs · XML',

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
    'projects.under_construction': 'En Construcción',
    'projects.coming_soon': 'Disponible Próximamente',

    'skills.title': 'Habilidades',
    'skills.middleware.label': 'MIDDLEWARE & INTEGRACIÓN',
    'skills.middleware.badge': 'DIFERENCIADOR',
    'skills.backend.label': 'BACKEND',
    'skills.frontend.label': 'FRONTEND',
    'skills.devops.label': 'DEVOPS & DESPLIEGUE',
    'skills.databases.label': 'BASES DE DATOS',
    'skills.testing.label': 'TESTING & QA',
    'skills.certs.label': 'CERTIFICACIONES',

    'contact.title': 'Hablemos',
    'contact.description': 'Abierto a nuevas oportunidades en banca, fintech o cualquier equipo que construya sistemas que necesiten funcionar a escala. De Cáceres, España · Disponible remoto.',
    'contact.email.label': 'Email',
    'contact.email.value': 'manuelcobos200324@gmail.com',
    'contact.github.label': 'GitHub',
    'contact.github.value': 'github.com/ManuelCobos24',
    'contact.linkedin.label': 'LinkedIn',
    'contact.linkedin.value': 'linkedin.com/in/manuelcobos',
    'contact.cta': 'Enviar Email →',

    'footer.rights': 'Todos los derechos reservados.',
    'experience.total': 'Experiencia Total',
    'time.months': 'meses',
    'time.years': 'años',
    'time.and': 'y',
    'time.month': 'mes',
    'time.year': 'año',

    'notfound.title': 'Ups',
    'notfound.description': 'La página que buscas no existe o ha sido movida.',
    'notfound.cta': 'Volver al inicio',

    'share.title': 'Compartir',
    'share.button': 'Compartir portfolio',
    'share.copy': 'Copiar enlace',
    'share.copied': '¡Copiado!',
    'share.email.subject': 'Mira el portfolio de Manuel Cobos',
    'share.email.body': 'Hola,\n\nAcabo de descubrir el portfolio de Manuel Cobos. Es Full Stack Developer especializado en Java, Spring Boot y Angular. Échale un vistazo:\n\n{{URL}}\n\nSaludos',
    'share.whatsapp': '¡Hola! 👋 Mira el portfolio de Manuel Cobos — Full Stack Developer especializado en Java y Angular. Merece la pena: {{URL}}',
    'share.teams': 'Manuel Cobos — Full Stack Developer (Java · Spring Boot · Angular · Kafka). Portfolio: {{URL}}',
    'share.twitter': 'Mira el portfolio de Manuel Cobos — Full Stack Developer especializado en Java, Spring Boot y Angular 🔧 {{URL}}',
    'share.linkedin': 'Manuel Cobos es Full Stack Developer especializado en Java, Spring Boot, Apache Kafka y Angular. Mira su portfolio: {{URL}}',
    'share.facebook': 'Portfolio de Manuel Cobos — Full Stack Developer. Java · Spring Boot · Angular · Kafka · OpenShift. {{URL}}',
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

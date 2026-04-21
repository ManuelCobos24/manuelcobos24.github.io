'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  const middleware = [
    'MuleSoft', 'IBM IIB', 'IBM App Connect',
    'SOA', 'ESB', 'XML', 'SOAP API'
  ]

  const backend = [
    'Java SE', 'Spring Boot', 'Spring MVC',
    'Spring Security', 'Spring Data JPA',
    'Spring Batch', 'REST APIs', 'Kafka',
    'WebSockets', 'Clean Architecture', 'SOLID'
  ]

  const frontend = [
    'Angular', 'TypeScript', 'RxJS',
    'Angular Material', 'HTML5', 'CSS3',
    'Responsive Design'
  ]

  const devops = [
    'Docker', 'OpenShift', 'GitHub Actions',
    'Linux', 'Git', 'Harbor', 'Maven'
  ]

  const databases = [
    'PostgreSQL', 'MongoDB', 'Spring Data JPA',
    'SQL'
  ]

  const testing = [
    'JUnit 5', 'Mockito', 'Spring Boot Test',
    'Postman'
  ]

  const skillCategories = [
    {
      label: t('skills.backend.label'),
      badge: t('skills.middleware.badge'),
      skills: backend,
    },
    {
      label: t('skills.frontend.label'),
      skills: frontend,
    },
    {
      label: t('skills.devops.label'),
      skills: devops,
    },
    {
      label: t('skills.databases.label'),
      skills: databases,
    },
    {
      label: t('skills.testing.label'),
      skills: testing,
    },
    {
      label: t('skills.middleware.label'),
      skills: middleware,
    },
    {
      label: t('skills.certs.label'),
      skills: ['MuleSoft Certified Developer L1', 'LPIC-1'],
    },
  ]

  return (
    <section id="skills" className="scroll-mt-16 border-t border-border py-24 lg:py-32 bg-secondary-bg/50">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-2 font-bold">
            {t('skills.title')}
          </h2>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.label} className="border border-border p-6 rounded">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {category.label}
                </h3>
                {category.badge && (
                  <span className="text-xs font-mono font-bold text-green-600 dark:text-green-400 
                                   border border-green-500/40 bg-green-500/8 px-2 py-1 rounded">
                    {category.badge}
                  </span>
                )}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-foreground bg-background px-3 py-1 rounded border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

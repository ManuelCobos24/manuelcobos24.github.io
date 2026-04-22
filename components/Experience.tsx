'use client'

import { useLanguage } from '@/app/LanguageContext'
import { formatDuration, calculateMonths, getTechHoverClass } from '@/lib/tech-utils'

export default function Experience() {
  const { t } = useLanguage()

  const roles = [
    {
      period: t('experience.role1.period'),
      company: t('experience.role1.company'),
      title: t('experience.role1.title'),
      description: t('experience.role1.description'),
      bullets: [
        t('experience.role1.bullet1'),
        t('experience.role1.bullet2'),
        t('experience.role1.bullet3'),
      ],
      tags: t('experience.role1.tags').split(' · '),
      current: true,
      start: new Date(2025, 6), // Jul 2025
      end: null,
    },
    {
      period: t('experience.role2.period'),
      company: t('experience.role2.company'),
      title: t('experience.role2.title'),
      description: t('experience.role2.description'),
      bullets: [
        t('experience.role2.bullet1'),
        t('experience.role2.bullet2'),
        t('experience.role2.bullet3'),
      ],
      tags: t('experience.role2.tags').split(' · '),
      current: false,
      start: new Date(2024, 10), // Nov 2024
      end: new Date(2025, 5), // Jun 2025
    },
    {
      period: t('experience.role3.period'),
      company: t('experience.role3.company'),
      title: t('experience.role3.title'),
      description: t('experience.role3.description'),
      bullets: [
        t('experience.role3.bullet1'),
        t('experience.role3.bullet2'),
        t('experience.role3.bullet3'),
      ],
      tags: t('experience.role3.tags').split(' · '),
      current: false,
      start: new Date(2024, 2), // Mar 2024
      end: new Date(2024, 5), // Jun 2024
    },
  ]

  const totalExperienceMonths = roles.reduce((sum, role) => sum + calculateMonths(role.start, role.end), 0)

  return (
    <section id="experience" className="scroll-mt-16 border-t border-border py-24 lg:py-32 bg-secondary-bg/50">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-2 font-bold">
            {t('experience.title')}
          </h2>
          <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
            {t('experience.subtitle')} · {t('experience.total')}: {formatDuration(totalExperienceMonths, t)}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {roles.map((role) => (
            <div key={role.period} className={`pb-12 border-b border-border last:border-b-0 last:pb-0 
              ${role.current ? 'border-l-2 border-l-primary pl-6 -ml-6' : ''}`}>
              
              {/* Period */}
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {role.period}
                </p>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground opacity-70">
                  · {formatDuration(calculateMonths(role.start, role.end), t)}
                </span>
              </div>

              {/* Company */}
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                {role.company}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {role.title}
              </h3>

              {/* Description */}
              {role.description && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {role.description}
                </p>
              )}

              {/* Bullet points */}
              <ul className="space-y-2 mb-6">
                {role.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded transition-colors duration-300 ${getTechHoverClass(tag)}`}
                  >
                    {tag}
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

'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  const roles = [
    {
      period: t('experience.role1.period'),
      company: t('experience.role1.company'),
      title: t('experience.role1.title'),
      bullets: [
        t('experience.role1.bullet1'),
        t('experience.role1.bullet2'),
        t('experience.role1.bullet3'),
      ],
      tags: t('experience.role1.tags').split(' · '),
      current: true,
    },
    {
      period: t('experience.role2.period'),
      company: t('experience.role2.company'),
      title: t('experience.role2.title'),
      bullets: [
        t('experience.role2.bullet1'),
        t('experience.role2.bullet2'),
        t('experience.role2.bullet3'),
      ],
      tags: t('experience.role2.tags').split(' · '),
      current: false,
    },
    {
      period: t('experience.role3.period'),
      company: t('experience.role3.company'),
      title: t('experience.role3.title'),
      bullets: [
        t('experience.role3.bullet1'),
        t('experience.role3.bullet2'),
        t('experience.role3.bullet3'),
      ],
      tags: t('experience.role3.tags').split(' · '),
      current: false,
    },
    {
      period: t('experience.role4.period'),
      company: t('experience.role4.company'),
      title: t('experience.role4.title'),
      bullets: [
        t('experience.role4.bullet1'),
        t('experience.role4.bullet2'),
        t('experience.role4.bullet3'),
      ],
      tags: t('experience.role4.tags').split(' · '),
      current: false,
    },
  ]

  return (
    <section id="experience" className="scroll-mt-16 border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-2 font-bold">
            {t('experience.title')}
          </h2>
          <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {roles.map((role) => (
            <div key={role.period} className={`pb-12 border-b border-border last:border-b-0 last:pb-0 
              ${role.current ? 'border-l-2 border-l-green-500 pl-6 -ml-6' : ''}`}>
              
              {/* Period */}
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                {role.period}
              </p>

              {/* Company */}
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                {role.company}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {role.title}
              </h3>

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
                    className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded"
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

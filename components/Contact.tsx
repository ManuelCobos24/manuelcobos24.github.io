'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  const contacts = [
    {
      label: t('contact.email.label'),
      value: t('contact.email.value'),
      href: `mailto:${t('contact.email.value')}`,
    },
    {
      label: t('contact.github.label'),
      value: t('contact.github.value'),
      href: `https://${t('contact.github.value')}`,
    },
    {
      label: t('contact.linkedin.label'),
      value: t('contact.linkedin.value'),
      href: `https://${t('contact.linkedin.value')}`,
    },
  ]

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-2 font-bold">
            {t('contact.title')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {contacts.map((contact) => (
            <div key={contact.label}>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                {contact.label}
              </p>
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-foreground hover:text-accent transition-colors break-all"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <a
            href="mailto:manuelcobos200324@gmail.com"
            className="inline-flex px-8 py-3 bg-accent text-white font-semibold uppercase text-xs tracking-widest hover:opacity-90 transition-opacity"
          >
            {t('contact.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}

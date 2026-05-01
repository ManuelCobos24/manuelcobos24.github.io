'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'
import { Share2, Check, Copy, Mail, MessageCircle, Users, Twitter, Linkedin, Facebook } from 'lucide-react'

const GITHUB_URL = 'https://github.com/ManuelCobos24'
const LINKEDIN_URL = 'https://www.linkedin.com/in/manuelcobos'
const SITE_URL = 'https://manuelcobos.dev'

export default function ShareButton() {
  const { t, lang } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)

  const currentUrl = typeof window !== 'undefined' ? window.location.href : SITE_URL

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const input = document.createElement('input')
      input.value = currentUrl
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareEmail = () => {
    const subject = encodeURIComponent(t('share.email.subject'))
    const body = encodeURIComponent(t('share.email.body').replace('{{URL}}', currentUrl))
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const shareWhatsApp = () => {
    const text = encodeURIComponent(t('share.whatsapp').replace('{{URL}}', currentUrl))
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  const shareTeams = () => {
    const text = t('share.teams').replace('{{URL}}', currentUrl)
    navigator.clipboard.writeText(text).then(() => {
      window.open('https://teams.microsoft.com', '_blank')
    })
  }

  const shareSlack = () => {
    const text = t('share.teams').replace('{{URL}}', currentUrl)
    navigator.clipboard.writeText(text).then(() => {
      window.open('https://slack.com', '_blank')
    })
  }

  const shareTwitter = () => {
    const text = encodeURIComponent(t('share.twitter').replace('{{URL}}', currentUrl))
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
  }

  const shareLinkedIn = () => {
    const text = encodeURIComponent(t('share.linkedin').replace('{{URL}}', currentUrl))
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&summary=${text}`, '_blank')
  }

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(t('share.facebook').replace('{{URL}}', currentUrl))}`, '_blank')
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Manuel Cobos - Full Stack Developer',
          text: lang === 'ES'
            ? 'Mira el portfolio de Manuel Cobos — Full Stack Developer especializado en Java, Spring Boot y Angular.'
            : 'Check out Manuel Cobos\' portfolio — Full Stack Developer specialized in Java, Spring Boot & Angular.',
          url: currentUrl,
        })
      } catch {
        // cancelled
      }
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => navigator.share ? handleNativeShare() : setOpen(!open)}
        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={t('share.button')}
        title={t('share.button')}
      >
        <Share2 className="w-4 h-4" />
      </button>

      {!navigator.share && open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-72 p-4 bg-background border border-border rounded-lg shadow-2xl z-50">
            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              {t('share.title')}
            </p>
            
            {/* Messaging platforms */}
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5">
              {lang === 'ES' ? 'Mensajería' : 'Messaging'}
            </p>
            <div className="grid grid-cols-3 gap-1 mb-3">
              <button onClick={shareEmail}
                      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-secondary transition-colors"
                      title={lang === 'ES' ? 'Compartir por Email' : 'Share via Email'}>
                <Mail className="w-4 h-4" />
                <span className="text-[10px]">Email</span>
              </button>
              <button onClick={shareWhatsApp}
                      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-secondary transition-colors"
                      title="Share via WhatsApp">
                <MessageCircle className="w-4 h-4" />
                <span className="text-[10px]">WhatsApp</span>
              </button>
              <button onClick={shareTeams}
                      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-secondary transition-colors"
                      title="Share via Teams">
                <Users className="w-4 h-4" />
                <span className="text-[10px]">Teams</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1 mb-3">
              <button onClick={shareSlack}
                      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-secondary transition-colors"
                      title="Share via Slack">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
                <span className="text-[10px]">Slack</span>
              </button>
            </div>

            {/* Social platforms */}
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5">
              {lang === 'ES' ? 'Redes sociales' : 'Social'}
            </p>
            <div className="grid grid-cols-3 gap-1 mb-3">
              <button onClick={shareTwitter}
                      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-secondary transition-colors"
                      title="Share on X (Twitter)">
                <Twitter className="w-4 h-4" />
                <span className="text-[10px]">X</span>
              </button>
              <button onClick={shareLinkedIn}
                      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-secondary transition-colors"
                      title="Share on LinkedIn">
                <Linkedin className="w-4 h-4" />
                <span className="text-[10px]">LinkedIn</span>
              </button>
              <button onClick={shareFacebook}
                      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-secondary transition-colors"
                      title="Share on Facebook">
                <Facebook className="w-4 h-4" />
                <span className="text-[10px]">Facebook</span>
              </button>
            </div>

            {/* Copy link */}
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm rounded border border-border hover:bg-secondary transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-green-500">{t('share.copied')}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t('share.copy')}</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
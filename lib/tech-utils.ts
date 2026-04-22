const techClasses: Record<string, string> = {
  'Java': 'hover:bg-[#ED8B00]/10 hover:text-[#ED8B00] hover:border-[#ED8B00]',
  'Spring Boot': 'hover:bg-[#6DB33F]/10 hover:text-[#6DB33F] hover:border-[#6DB33F]',
  'Spring Security': 'hover:bg-[#6DB33F]/10 hover:text-[#6DB33F] hover:border-[#6DB33F]',
  'Spring Data': 'hover:bg-[#6DB33F]/10 hover:text-[#6DB33F] hover:border-[#6DB33F]',
  'Spring Batch': 'hover:bg-[#6DB33F]/10 hover:text-[#6DB33F] hover:border-[#6DB33F]',
  'Spring MVC': 'hover:bg-[#6DB33F]/10 hover:text-[#6DB33F] hover:border-[#6DB33F]',
  'Angular': 'hover:bg-[#DD0031]/10 hover:text-[#DD0031] hover:border-[#DD0031]',
  'TypeScript': 'hover:bg-[#3178C6]/10 hover:text-[#3178C6] hover:border-[#3178C6]',
  'Kafka': 'hover:bg-zinc-500/10 hover:text-zinc-500 hover:border-zinc-500',
  'Docker': 'hover:bg-[#2496ED]/10 hover:text-[#2496ED] hover:border-[#2496ED]',
  'OpenShift': 'hover:bg-[#EE0000]/10 hover:text-[#EE0000] hover:border-[#EE0000]',
  'GitHub Actions': 'hover:bg-[#2088FF]/10 hover:text-[#2088FF] hover:border-[#2088FF]',
  'MongoDB': 'hover:bg-[#47A248]/10 hover:text-[#47A248] hover:border-[#47A248]',
  'PostgreSQL': 'hover:bg-[#336791]/10 hover:text-[#336791] hover:border-[#336791]',
  'SQL': 'hover:bg-[#336791]/10 hover:text-[#336791] hover:border-[#336791]',
  'MuleSoft': 'hover:bg-[#00A1E0]/10 hover:text-[#00A1E0] hover:border-[#00A1E0]',
  'IBM': 'hover:bg-[#054ADA]/10 hover:text-[#054ADA] hover:border-[#054ADA]',
  'RxJS': 'hover:bg-[#B7178C]/10 hover:text-[#B7178C] hover:border-[#B7178C]',
  'HTML5': 'hover:bg-[#E34F26]/10 hover:text-[#E34F26] hover:border-[#E34F26]',
  'CSS3': 'hover:bg-[#1572B6]/10 hover:text-[#1572B6] hover:border-[#1572B6]',
  'Linux': 'hover:bg-[#FCC624]/10 hover:text-[#FCC624] hover:border-[#FCC624]',
  'JUnit': 'hover:bg-[#25A162]/10 hover:text-[#25A162] hover:border-[#25A162]',
  'Postman': 'hover:bg-[#FF6C37]/10 hover:text-[#FF6C37] hover:border-[#FF6C37]',
  'Git': 'hover:bg-[#F05032]/10 hover:text-[#F05032] hover:border-[#F05032]',
}

export function getTechHoverClass(tech: string) {
  for (const [key, value] of Object.entries(techClasses)) {
    if (tech.toLowerCase().includes(key.toLowerCase())) {
      return value
    }
  }
  // Fallback neutral hover
  return 'hover:bg-foreground/10 hover:text-foreground hover:border-foreground'
}

export function formatDuration(months: number, t: (key: string) => string) {
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  
  const yStr = years > 0 ? `${years} ${t(years === 1 ? 'time.year' : 'time.years')}` : ''
  const mStr = remainingMonths > 0 ? `${remainingMonths} ${t(remainingMonths === 1 ? 'time.month' : 'time.months')}` : ''
  
  if (years > 0 && remainingMonths > 0) {
    return `${yStr} ${t('time.and')} ${mStr}`
  }
  return yStr || mStr || `1 ${t('time.month')}`
}

export function calculateMonths(start: Date, end: Date | null) {
  const endDate = end || new Date()
  let months = (endDate.getFullYear() - start.getFullYear()) * 12
  months -= start.getMonth()
  months += endDate.getMonth()
  return months <= 0 ? 1 : months
}

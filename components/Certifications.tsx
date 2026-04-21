export default function Certifications() {
  const certs = [
    {
      title: 'MuleSoft Integration Architect',
      issuer: 'MuleSoft / Salesforce',
      description: 'Enterprise API design and integration patterns',
    },
    {
      title: 'LPIC-1 Linux Systems Administrator',
      issuer: 'Linux Professional Institute',
      description: 'Systems administration and Linux fundamentals',
    },
  ]

  return (
    <section id="certifications" className="scroll-mt-16 border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4 font-semibold">Distinctions</h2>
        <div className="w-16 h-px bg-accent mb-12"></div>

        <div className="grid gap-8 lg:grid-cols-2">
          {certs.map((cert) => (
            <div key={cert.title} className="border-l-2 border-accent pl-6 py-2">
              <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">{cert.issuer}</p>
              <p className="text-sm text-foreground font-medium">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tanat Lokejaroenlarb — Staff SRE & Platform Engineer',
  description:
    'Personal portfolio of Tanat Lokejaroenlarb, Staff Site Reliability & Platform Engineer at Adevinta, Barcelona. Kubernetes, SRE, platform engineering.',
  openGraph: {
    title: 'Tanat Lokejaroenlarb — Staff SRE & Platform Engineer',
    description:
      'Kubernetes at scale: 30+ clusters, 80k+ pods. Tech blogger & conference speaker.',
    url: 'https://tanatloke.dev',
    siteName: 'Tanat Lokejaroenlarb',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-navy text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

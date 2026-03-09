import type { Metadata } from 'next'
import { IBM_Plex_Sans, Outfit } from 'next/font/google'

import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Kinesiología Leonardo Benedetto | Rehabilitación y tratamiento del dolor',
  description:
    'Kinesiología traumatológica, rehabilitación vestibular y gimnasia terapéutica. Solicitar turnos por WhatsApp o Instagram.',
  applicationName: 'Kinesiología Leonardo Benedetto',
  openGraph: {
    title: 'Kinesiología Leonardo Benedetto',
    description:
      'Kinesiología traumatológica, rehabilitación vestibular y gimnasia terapéutica. Solicitar turnos por WhatsApp o Instagram.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kinesiología Leonardo Benedetto',
    description:
      'Kinesiología traumatológica, rehabilitación vestibular y gimnasia terapéutica. Solicitar turnos por WhatsApp o Instagram.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${ibmPlexSans.variable} ${outfit.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

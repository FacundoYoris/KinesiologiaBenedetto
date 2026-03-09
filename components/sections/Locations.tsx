import { ExternalLink, MapPin } from 'lucide-react'

import Container from '@/components/Container'
import Reveal from '@/components/Reveal'
import { MAPS_FIK_URL, MAPS_KINAB_URL } from '@/lib/links'

const locations = [
  {
    name: 'FIK – Espacio de Salud',
    address: 'Necochea 6209, Santa Fe Capital',
    maps: MAPS_FIK_URL,
  },
  {
    name: 'KinAB',
    address: 'Pedro Ferré 2119, Santa Fe Capital',
    maps: MAPS_KINAB_URL,
  },
]

export default function Locations() {
  return (
    <section id="donde" className="relative scroll-mt-24 py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_60%_0%,rgba(30,79,138,0.09),transparent_55%)]"
      />
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Dónde atiendo
          </h2>
          <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-3 max-w-2xl text-base text-brand-text sm:text-lg">
            Dos espacios en Santa Fe Capital. Abrí el mapa y elegí el más cómodo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {locations.map((loc, idx) => (
            <Reveal key={loc.name} delay={0.04 * idx}>
              <div className="group rounded-2xl bg-white/85 p-6 shadow-soft ring-1 ring-brand-dark/10 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-card hover:ring-brand-secondary/30">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <MapPin className="h-5 w-5 text-brand-primary transition-transform group-hover:translate-y-[-1px]" />
                      {loc.name}
                    </div>
                    <p className="mt-2 text-sm text-brand-text sm:text-base">
                      {loc.address}
                    </p>
                    <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary opacity-60 transition-opacity group-hover:opacity-100" />
                  </div>
                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-bg px-4 py-2 text-sm font-semibold text-brand-dark ring-1 ring-brand-dark/10 transition-all hover:scale-[1.02] hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Ver en Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

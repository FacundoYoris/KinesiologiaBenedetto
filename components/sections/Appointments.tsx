import { Instagram, MessageCircle } from 'lucide-react'
import Image from 'next/image'

import Container from '@/components/Container'
import Reveal from '@/components/Reveal'
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/links'

export default function Appointments() {
  return (
    <section id="turnos" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-brand-dark/10">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/imagenes/imagen4.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/85" />
          </div>

          <div className="relative grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-2xl bg-white/85 p-6 ring-1 ring-brand-dark/10 backdrop-blur sm:p-7">
              <Reveal>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Solicitar turno
                </h2>
                <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-3 max-w-xl text-base text-slate-700 sm:text-lg">
                  Podés consultar disponibilidad o pedir tu turno directamente por
                  WhatsApp o Instagram.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="rounded-2xl bg-white/85 p-6 ring-1 ring-brand-dark/10 backdrop-blur sm:p-7">
                <div className="flex flex-col gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary px-5 py-4 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.02] hover:from-brand-dark hover:to-brand-primary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Pedir turno por WhatsApp
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-bg px-5 py-4 text-sm font-semibold text-brand-dark ring-1 ring-brand-dark/10 transition-all hover:scale-[1.02] hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <Instagram className="h-5 w-5" />
                    Enviar mensaje por Instagram
                  </a>
                </div>

                <div className="mt-5 text-xs font-medium text-slate-600">
                  Respuesta rápida. Mensaje listo para enviar.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

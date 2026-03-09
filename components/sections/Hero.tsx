'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Instagram, MessageCircle, ShieldCheck } from 'lucide-react'

import Container from '@/components/Container'
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/links'

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,_#1E4F8A,_#4FA3E3)] py-16 text-white sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.14),transparent_46%),radial-gradient(circle_at_60%_80%,rgba(255,255,255,0.12),transparent_40%)]" />
        <motion.div
          aria-hidden
          className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-2xl"
          animate={
            reduced
              ? undefined
              : { x: [0, 18, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }
          }
          transition={
            reduced
              ? undefined
              : { duration: 26, repeat: Infinity, ease: 'easeInOut' }
          }
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-white/10 blur-2xl"
          animate={
            reduced
              ? undefined
              : { x: [0, -16, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }
          }
          transition={
            reduced
              ? undefined
              : { duration: 30, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="scroll-mt-24">
            <motion.div
              initial={reduced ? undefined : { opacity: 0, y: 14 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold ring-1 ring-white/15">
                <ShieldCheck className="h-4 w-4" />
                Enfoque profesional y personalizado
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Leonardo Benedetto
              </h1>
              <p className="mt-3 text-base font-medium text-white/90 sm:text-lg">
                Licenciado en Kinesiología y Fisiatría
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Ayudo a las personas a recuperar movilidad, aliviar el dolor y mejorar
                su calidad de vida mediante tratamientos personalizados basados en la
                evaluación de cada paciente.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-brand-dark shadow-card transition-all hover:scale-[1.02] hover:bg-brand-bg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                >
                  <MessageCircle className="h-5 w-5" />
                  Reservar turno por WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-dark/30 px-5 py-4 text-sm font-semibold text-white shadow-soft ring-1 ring-white/20 backdrop-blur transition-all hover:scale-[1.02] hover:bg-brand-dark/40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                >
                  <Instagram className="h-5 w-5" />
                  Consultar por Instagram
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold text-white/90">
                {[
                  'Traumatología',
                  'Rehabilitación vestibular',
                  'Gimnasia terapéutica',
                  'Plan personalizado',
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white/10 p-3 ring-1 ring-white/15">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-white">
                <Image
                  src="/imagenes/leoBenedetto.jpeg"
                  alt="Leonardo Benedetto, Licenciado en Kinesiología y Fisiatría"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
                <div>
                  <div className="text-sm font-semibold">Atención en Santa Fe</div>
                  <div className="text-xs text-white/80">Turnos por WhatsApp o Instagram</div>
                </div>
                <div className="rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold ring-1 ring-white/15">
                  Respuesta rápida
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

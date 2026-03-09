import Container from '@/components/Container'
import FaqAccordion from '@/components/FaqAccordion'
import Reveal from '@/components/Reveal'
import Image from 'next/image'

const items = [
  {
    q: '¿Trabajás con obras sociales?',
    a: 'Consultá por mensaje para saber qué obras sociales o modalidades están disponibles.',
  },
  {
    q: '¿Necesito derivación médica?',
    a: 'Sí, para atención por obra social es necesaria.',
  },
  {
    q: '¿Cuánto dura una sesión de kinesiología?',
    a: 'Las sesiones suelen durar aproximadamente 60 minutos.',
  },
  {
    q: '¿Cuántas sesiones voy a necesitar?',
    a: 'Depende de la lesión y de la evolución de cada paciente.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_70%,rgba(79,163,227,0.14),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/3 opacity-[0.18] lg:block">
        <Image
          src="/imagenes/imagen5.jpg"
          alt=""
          fill
          sizes="33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/70 to-white" />
      </div>
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-3 max-w-2xl text-base text-brand-text sm:text-lg">
            Respuestas rápidas para que puedas reservar con confianza.
          </p>
        </Reveal>
        <div className="mt-10">
          <FaqAccordion items={items} />
        </div>
      </Container>
    </section>
  )
}

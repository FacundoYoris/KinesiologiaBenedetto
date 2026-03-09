import {
  Activity,
  ClipboardList,
  Dumbbell,
  Orbit,
} from 'lucide-react'
import Image from 'next/image'

import Container from '@/components/Container'
import Reveal from '@/components/Reveal'

const items = [
  {
    title: 'Kinesiología traumatológica',
    desc: 'Recuperación de lesiones musculares y articulares',
    Icon: Activity,
  },
  {
    title: 'Rehabilitación vestibular',
    desc: 'Tratamiento para vértigo, mareos y problemas de equilibrio',
    Icon: Orbit,
  },
  {
    title: 'Gimnasia terapéutica / adaptada',
    desc: 'Ejercicios guiados para mejorar movilidad, fuerza y función',
    Icon: Dumbbell,
  },
  {
    title: 'Evaluación y planificación personalizada',
    desc: 'Cada tratamiento se adapta a las necesidades de cada paciente',
    Icon: ClipboardList,
  },
]

export default function Treatments() {
  return (
    <section
      id="tratamientos"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(234,243,251,0.9),rgba(255,255,255,0.75))]"
      />
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Tratamientos
              </h2>
              <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
              <p className="mt-3 max-w-2xl text-base text-brand-text sm:text-lg">
                Un enfoque claro: evaluación, plan y seguimiento. Elegí la opción
                más adecuada según tu caso.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 overflow-hidden rounded-[2rem] bg-white/80 shadow-soft ring-1 ring-brand-dark/10">
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center rounded-full bg-brand-bg px-3 py-1.5 text-xs font-semibold text-brand-dark ring-1 ring-brand-dark/10">
                  Tratamiento basado en evaluación
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brand-text sm:text-base">
                  Cada plan se ajusta a tu evolución y objetivos. Si tenés dudas,
                  escribime y te orientaré según tu caso.
                </p>
                <a
                  href="#turnos"
                  className="mt-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.02] hover:from-brand-dark hover:to-brand-primary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Consultar disponibilidad
                </a>
              </div>
              <div className="relative lg:col-span-2">
                <div className="absolute -inset-4 rounded-[2rem] bg-brand-secondary/20 blur-2xl" />
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem] bg-brand-bg ring-1 ring-brand-dark/10">
                  <Image
                    src="/imagenes/imagen2.jpg"
                    alt="Tratamiento de kinesiología"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <Reveal key={item.title} delay={0.04 * idx}>
              <div className="group h-full rounded-2xl bg-white/85 p-6 shadow-soft ring-1 ring-brand-dark/10 transition-transform hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-bg text-brand-dark ring-1 ring-brand-dark/10 transition-transform group-hover:scale-[1.04]">
                  <item.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

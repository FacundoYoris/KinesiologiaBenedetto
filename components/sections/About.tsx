import Container from '@/components/Container'
import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_30%,rgba(79,163,227,0.18),transparent_48%),radial-gradient(circle_at_85%_70%,rgba(47,111,182,0.12),transparent_52%)]"
      />
      <Container>
        <div className="grid gap-10">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                ¿Quién soy?
              </h2>
              <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 text-base leading-relaxed text-brand-text sm:text-lg">
                Soy Leonardo Benedetto, Licenciado en Kinesiología y Fisiatría. Me
                dedico a ayudar a las personas a recuperar su movilidad, aliviar el
                dolor y mejorar su calidad de vida mediante tratamientos
                personalizados basados en la evaluación de cada paciente. Trabajo
                principalmente en el área traumatológica, acompañando procesos de
                rehabilitación, prevención de lesiones y readaptación al movimiento.
                Mi objetivo es que cada paciente vuelva a moverse con confianza y sin
                dolor.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal delay={0.02}>
              <div className="group rounded-2xl bg-white/80 p-5 shadow-soft ring-1 ring-brand-dark/10 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-card hover:ring-brand-secondary/30">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-brand-dark">Evaluación</div>
                  <div className="h-2 w-2 rounded-full bg-brand-secondary/70 opacity-60 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Diagnóstico funcional
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Entendemos el origen del dolor y el objetivo de tu rehabilitación.
                </p>
                <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary opacity-60 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="group rounded-2xl bg-white/80 p-5 shadow-soft ring-1 ring-brand-dark/10 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-card hover:ring-brand-secondary/30">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-brand-dark">Plan</div>
                  <div className="h-2 w-2 rounded-full bg-brand-primary/70 opacity-60 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Tratamiento a medida
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Ejercicios, terapia y seguimiento ajustados a tu progreso.
                </p>
                <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary opacity-60 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group rounded-2xl bg-white/80 p-5 shadow-soft ring-1 ring-brand-dark/10 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-card hover:ring-brand-secondary/30">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-brand-dark">Evolución</div>
                  <div className="h-2 w-2 rounded-full bg-brand-dark/70 opacity-60 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Volver a moverte
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Objetivo: confianza, movilidad y menos dolor en tu día a día.
                </p>
                <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary opacity-60 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

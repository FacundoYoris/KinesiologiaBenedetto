import Image from 'next/image'
import { Instagram, MessageCircle } from 'lucide-react'

import Container from '@/components/Container'
import { INSTAGRAM_URL, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/links'

export default function Footer() {
  const year = new Date().getFullYear()
  const DEV_WHATSAPP_URL = `https://wa.me/5493482655054`
  const DEV_EMAIL = 'facu.yoris.dev@gmail.com'

  return (
    <footer className="border-t border-white/30 bg-white/60 py-10 backdrop-blur">
      <Container>
        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-brand-dark/10">
              <Image
                src="/imagenes/logo.jpeg"
                alt="Logo Leonardo Benedetto Kinesiología"
                fill
                className="object-contain p-1"
              />
            </span>
            <div>
              <div className="font-display text-sm font-semibold text-slate-900">
                Leonardo Benedetto
              </div>
              <div className="text-xs text-brand-text">Kinesiología</div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-brand-text">
            <div>
              <span className="font-semibold text-slate-900">Contacto:</span> {PHONE_DISPLAY}
            </div>
            <div className="text-xs">© {year} Leonardo Benedetto. Derechos reservados.</div>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.02] hover:from-brand-dark hover:to-brand-primary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-bg px-4 py-3 text-sm font-semibold text-brand-dark ring-1 ring-brand-dark/10 transition-all hover:scale-[1.02] hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-8 -mx-4 border-t border-slate-200/70 bg-black px-4 py-2.5 text-[11px] text-white sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-white/80">
              <span className="font-semibold text-white">Desarrollo:</span> Facundo Yoris
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={DEV_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-2.5 py-1.5 font-semibold text-white ring-1 ring-white/10 transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="WhatsApp del desarrollador"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${DEV_EMAIL}`}
                className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1.5 font-semibold text-white ring-1 ring-white/10 transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {DEV_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

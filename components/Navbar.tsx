'use client'

import Image from 'next/image'
import type { MouseEvent } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import Container from '@/components/Container'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#tratamientos', label: 'Tratamientos' },
  { href: '#donde', label: 'Dónde atiendo' },
  { href: '#turnos', label: 'Turnos' },
  { href: '#faq', label: 'Preguntas frecuentes' },
]

export default function Navbar() {
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)

  const onNavClick = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) return
    const el = document.querySelector(href)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    setOpen(false)
  }

  const panel = useMemo(
    () => ({
      hidden: { opacity: 0, y: -6 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -6 },
    }),
    [],
  )

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-brand-dark/10">
              <Image
                src="/imagenes/logo.jpeg"
                alt="Logo Leonardo Benedetto Kinesiología"
                fill
                className="object-contain p-1"
                priority
              />
            </span>
            <div className="hidden sm:block">
              <div className="font-display text-sm font-semibold text-slate-900">
                Leonardo Benedetto
              </div>
              <div className="text-xs text-brand-text">Kinesiología</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onNavClick(item.href)}
                className="text-sm font-medium text-slate-800/80 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#turnos"
              onClick={onNavClick('#turnos')}
              className="rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-5 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.02] hover:from-brand-dark hover:to-brand-primary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Reservar turno
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2 text-slate-900 shadow-sm ring-1 ring-brand-dark/10 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:hidden"
            aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduced ? false : 'hidden'}
            animate={reduced ? undefined : 'visible'}
            exit={reduced ? undefined : 'exit'}
            variants={panel}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="border-t border-white/30 bg-white/90 backdrop-blur"
          >
            <Container>
              <div className="grid gap-2 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-900/90 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    onClick={onNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#turnos"
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:from-brand-dark hover:to-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  onClick={onNavClick('#turnos')}
                >
                  Reservar turno
                </a>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

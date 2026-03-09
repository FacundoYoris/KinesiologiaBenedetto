'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

type Item = { q: string; a: string }

export default function FaqAccordion({ items }: { items: Item[] }) {
  const reduced = useReducedMotion()
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        const buttonId = `${baseId}-btn-${idx}`
        const panelId = `${baseId}-panel-${idx}`

        return (
          <motion.div
            layout
            key={item.q}
            className={
              'overflow-hidden rounded-2xl bg-white/80 shadow-soft ring-1 transition-colors ' +
              (isOpen
                ? 'ring-brand-secondary/30'
                : 'ring-brand-dark/10 hover:ring-brand-secondary/20')
            }
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((cur) => (cur === idx ? null : idx))}
              className={
                'flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors ' +
                'hover:bg-brand-bg/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white'
              }
            >
              <span className="text-sm font-semibold text-slate-900 sm:text-base">
                {item.q}
              </span>
              <motion.span
                aria-hidden
                animate={reduced ? undefined : { rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className={
                  'grid h-9 w-9 place-items-center rounded-xl ring-1 ring-brand-dark/10 ' +
                  (isOpen
                    ? 'bg-brand-secondary text-white'
                    : 'bg-brand-bg text-brand-dark')
                }
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduced ? false : { height: 0, opacity: 0, y: -6 }}
                  animate={reduced ? undefined : { height: 'auto', opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0, y: -6 }}
                  transition={
                    reduced
                      ? undefined
                      : {
                          height: { duration: 0.28, ease: 'easeOut' },
                          opacity: { duration: 0.18, ease: 'easeOut' },
                        }
                  }
                  className="px-5 pb-4"
                >
                  <p className="text-sm leading-relaxed text-brand-text sm:text-base">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

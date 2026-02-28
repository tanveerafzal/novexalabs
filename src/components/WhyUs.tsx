'use client'

import { motion } from 'framer-motion'
import {
  Crown,
  Target,
  Sliders,
  Shuffle,
} from 'lucide-react'

const valueProps = [
  {
    icon: Crown,
    title: 'Tier-One Priority: Not Just Another Client',
    description: 'You aren\'t just a line item on a spreadsheet. You get organizational focus from top to bottom. We prioritize your success, giving you direct access to leadership and resources when you need them.',
  },
  {
    icon: Target,
    title: 'Small by Design, Big on Impact',
    description: 'We deploy lean teams that deliver enterprise-grade service. We are action-focused, eliminating the meeting overload typical of large firms so we can focus on shipping solutions.',
  },
  {
    icon: Sliders,
    title: 'Total Control, Your Way',
    description: 'Our processes are a starting point, not a cage. They are uniquely designed to meet your needs, not the other way around. We adapt our workflow to fit your culture and cadence.',
  },
  {
    icon: Shuffle,
    title: 'Agnostic Excellence: Flexible & Portable',
    description: 'We remain solution, vendor, and technology agnostic. We build what is right for you, ensuring ultimate portability and a perfect fit for your specific ecosystem.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm uppercase tracking-widest mb-4 block">
            Value Proposition
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why NOVEXA?
          </h2>
        </motion.div>

        {/* Value Props — Stacked horizontal rows */}
        <div className="max-w-5xl mx-auto">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`py-10 ${index < valueProps.length - 1 ? 'border-b border-primary-700' : ''}`}
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Ghost Number */}
                <div className="md:col-span-2 flex items-center gap-4">
                  <span className="text-6xl font-bold text-accent-500/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon */}
                <div className="md:col-span-1 flex items-start pt-1">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center">
                    <prop.icon className="w-5 h-5 text-accent-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-primary-200 leading-relaxed text-lg">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-center mt-16"
        >
          <p className="text-primary-200 mb-6 text-lg">
            Ready to experience the NOVEXA difference?
          </p>
          <a
            href="https://cal.com/novexalabs/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-accent-500 text-primary-900 font-semibold text-lg hover:bg-accent-400 transition-colors"
          >
            Let&apos;s Talk — Book 30 Min
          </a>
        </motion.div>
      </div>
    </section>
  )
}

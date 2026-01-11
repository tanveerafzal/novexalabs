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
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Target,
    title: 'Small by Design, Big on Impact',
    description: 'We deploy lean teams that deliver enterprise-grade service. We are action-focused, eliminating the meeting overload typical of large firms so we can focus on shipping solutions.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sliders,
    title: 'Total Control, Your Way',
    description: 'Our processes are a starting point, not a cage. They are uniquely designed to meet your needs, not the other way around. We adapt our workflow to fit your culture and cadence.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shuffle,
    title: 'Agnostic Excellence: Flexible & Portable',
    description: 'We remain solution, vendor, and technology agnostic. We build what is right for you, ensuring ultimate portability and a perfect fit for your specific ecosystem.',
    gradient: 'from-green-500 to-emerald-500',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            Value Proposition
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why <span className="text-gradient">Logithic</span>?
          </h2>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:scale-[1.02] relative overflow-hidden">
                {/* Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prop.gradient} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                    <prop.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {prop.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6 text-lg">
            Ready to experience the Logithic difference?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:scale-105"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  )
}

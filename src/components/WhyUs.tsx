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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            Value Proposition
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-gradient">NOVEXA</span>?
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
              <div className="bg-white rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] border border-gray-100">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prop.gradient} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <prop.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {prop.description}
                </p>
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
          <p className="text-gray-600 mb-6 text-lg">
            Ready to experience the NOVEXA difference?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  )
}

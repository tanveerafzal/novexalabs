'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Target,
  Users,
  Clock,
  Shield,
  Handshake,
} from 'lucide-react'

const models = [
  {
    icon: Zap,
    title: 'Development as a Service (DaaS)',
    description: 'On-demand engineering bandwidth.',
  },
  {
    icon: Target,
    title: 'Outcome-Based SOW',
    description: 'Fixed-scope delivery where we own the risk and the result.',
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Fixed monthly/quarterly billing for a dedicated team that learns your DNA.',
  },
  {
    icon: Clock,
    title: 'Time & Material',
    description: 'Maximum flexibility for evolving scopes.',
  },
  {
    icon: Shield,
    title: 'Ops Command',
    description: 'Managed Services for total system reliability.',
  },
  {
    icon: Handshake,
    title: 'Co-Venture Model',
    description: 'Equity sharing partnerships for Product IP and Startups.',
  },
]

export default function EngagementModels() {
  return (
    <section id="engagement" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-accent-500 text-sm uppercase tracking-widest mb-4 block">
            Engagement Models
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Flexible Frameworks Designed for Your Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the partnership model that fits your business needs, budget, and timeline.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="rounded-lg p-8 h-full border border-gray-200 border-t-4 border-t-primary-600 hover:shadow-md transition-shadow">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary-50 flex items-center justify-center mb-6">
                  <model.icon className="w-7 h-7 text-primary-700" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {model.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {model.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Not sure which model fits? Let&apos;s find the right framework together.
          </p>
          <a
            href="https://cal.com/novexalabs/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-primary-700 text-white font-semibold text-lg hover:bg-primary-600 transition-colors"
          >
            Let&apos;s Talk — Book 30 Min
          </a>
        </motion.div>
      </div>
    </section>
  )
}

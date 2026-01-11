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
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Outcome-Based SOW',
    description: 'Fixed-scope delivery where we own the risk and the result.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Fusion Teams',
    description: 'Fixed monthly/quarterly billing for a dedicated team that learns your DNA.',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: Clock,
    title: 'Time & Material',
    description: 'Maximum flexibility for evolving scopes.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Shield,
    title: 'Ops Command',
    description: 'Managed Services for total system reliability.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Handshake,
    title: 'Co-Venture Model',
    description: 'Equity sharing partnerships for Product IP and Startups.',
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export default function EngagementModels() {
  return (
    <section id="engagement" className="py-32 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
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
            Engagement Models
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Flexible Frameworks <span className="text-gradient">Designed for Your Reality</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose the partnership model that fits your business needs, budget, and timeline.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${model.gradient} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <model.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {model.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {model.description}
                </p>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${model.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6 text-lg">
            Not sure which model fits? Let&apos;s find the right framework together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

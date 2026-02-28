'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery & Deconstruction',
    description: 'We break your problem down to its atomic level.',
  },
  {
    number: '02',
    title: 'Architectural Gating',
    description: 'We design the blueprint. If it doesn\'t scale, we don\'t build it.',
  },
  {
    number: '03',
    title: 'Agile Sprints',
    description: 'Rapid iterations. Transparent demos. Constant feedback.',
  },
  {
    number: '04',
    title: 'Deployment & Stabilization',
    description: 'Automated pipelines push live without the drama.',
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'We don\'t walk away at launch. We refine based on real-world data.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <span className="text-accent-500 text-sm uppercase tracking-widest mb-4 block">
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The NOVEXA Process: Engineered for Speed, Agility &amp; Real-World Results
          </h2>
          <div className="w-12 h-1 bg-accent-500" />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="max-w-4xl mb-16"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            We don&apos;t believe in <span className="text-gray-900 font-semibold">&quot;Analysis Paralysis.&quot;</span> Our process is designed to get code into production without bypassing security or governance. We focus on IT delivery that prioritizes <span className="text-primary-700 font-semibold">speed, agility, and flexibility</span>.
          </p>
        </motion.div>

        {/* Process Steps — Horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative"
              >
                {/* Numbered circle */}
                <div className="w-12 h-12 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-sm mb-4 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-16"
        >
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

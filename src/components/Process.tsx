'use client'

import { motion } from 'framer-motion'
import { Search, Blocks, Repeat, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Deconstruction',
    description: 'We break your problem down to its atomic level.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Blocks,
    title: 'Architectural Gating',
    description: 'We design the blueprint. If it doesn\'t scale, we don\'t build it.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    icon: Repeat,
    title: 'Agile Sprints',
    description: 'Rapid iterations. Transparent demos. Constant feedback.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deployment & Stabilization',
    description: 'Automated pipelines push live without the drama.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Optimization',
    description: 'We don\'t walk away at launch. We refine based on real-world data.',
    gradient: 'from-rose-500 to-red-500',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-32 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The Logithic Loop: <span className="text-gradient">Engineered for Speed, Agility & Real-World Results</span>
          </h2>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed">
              We don&apos;t believe in <span className="text-gray-900 font-semibold">&quot;Analysis Paralysis.&quot;</span> Our process is designed to get code into production without bypassing security or governance. We focus on IT delivery that prioritizes <span className="text-gradient font-semibold">speed, agility, and flexibility</span>.
            </p>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-500 group-hover:scale-105 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} p-2.5 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-full h-full text-white" />
                  </div>
                  <span className="text-4xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}

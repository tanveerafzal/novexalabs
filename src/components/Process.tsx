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
    <section id="process" className="py-32 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
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
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-lg text-white/70 leading-relaxed">
              We don&apos;t believe in <span className="text-white font-semibold">&quot;Analysis Paralysis.&quot;</span> Our process is designed to get code into production without bypassing security or governance. We focus on IT delivery that prioritizes <span className="text-gradient font-semibold">speed, agility, and flexibility</span>.
            </p>
          </div>
        </motion.div>

        {/* Process Steps - Timeline Layout */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-primary-500/50 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-ping opacity-30" />
                </div>

                {/* Content Card */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                  <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group hover:scale-105">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} p-3 group-hover:scale-110 transition-transform`}>
                        <step.icon className="w-full h-full text-white" />
                      </div>
                      <span className="text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : ''}`} />
              </motion.div>
            ))}
          </div>
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:scale-105"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}

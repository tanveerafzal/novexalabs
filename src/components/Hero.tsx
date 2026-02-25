'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '21+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

export default function Hero() {
  return (
    <section id="home" className="bg-primary-900 pt-24 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-accent-400 text-sm uppercase tracking-widest mb-4"
            >
              Software Engineering &amp; Consulting
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              NOVEXA LABS
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary-200 tracking-wide mb-8"
            >
              Code. Consult. Conquer.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-lg sm:text-xl text-primary-200/80 max-w-2xl mb-12 leading-relaxed"
            >
              We build world-class software and provide expert consulting that drives real business results. 21+ years architecting mission-critical systems across every major sector — from telecom and finance to public sector, healthcare, and logistics. We turn complexity into velocity: custom code, cloud-native foundations, strategic consulting — zero legacy drag, full future-proof portability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group px-8 py-4 rounded bg-accent-500 text-primary-900 font-semibold text-lg hover:bg-accent-400 transition-colors flex items-center justify-center gap-2"
              >
                Ignite Your Next Leap
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded border-2 border-primary-400 text-white font-semibold text-lg hover:bg-primary-800 transition-colors flex items-center justify-center gap-2"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Right Column — Stat Panel */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="lg:col-span-2"
          >
            <div className="border border-primary-700 rounded-lg p-8">
              <div className="divide-y divide-primary-700">
                {stats.map((stat, index) => (
                  <div key={index} className={`${index === 0 ? 'pb-8' : index === stats.length - 1 ? 'pt-8' : 'py-8'}`}>
                    <div className="text-4xl font-bold text-accent-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-primary-300 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

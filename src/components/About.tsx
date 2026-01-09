'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Target, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We partner with businesses to accelerate their digital transformation through innovative technology solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Constantly exploring emerging technologies like AI, blockchain, and cloud-native architectures.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering high-quality solutions that exceed expectations and drive real results.',
  },
]

const highlights = [
  'Founded by ex-FAANG engineers',
  'Global talent pool of 500+ developers',
  'ISO 27001 & SOC 2 Certified',
  'Agile & DevOps best practices',
  'AI-enhanced development workflow',
  '10+ years of industry experience',
]

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-400 text-sm font-medium mb-4">
              About Logithic
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Building Tomorrow&apos;s <span className="text-gradient">Digital Solutions</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Logithic is a next-generation technology company that combines human expertise
              with AI-powered tools to deliver exceptional software solutions. We specialize
              in custom development, team augmentation, and staffing services that help
              businesses scale faster and smarter.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-white/80">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              Partner With Us
            </a>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 p-2.5 group-hover:scale-110 transition-transform">
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats Card */}
            <div className="glass-strong rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-gradient">8+</div>
                  <div className="text-sm text-white/60">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-white/60">Engineers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">20+</div>
                  <div className="text-sm text-white/60">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

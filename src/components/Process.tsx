'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Search, PenTool, Code, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We start by understanding your business goals, challenges, and technical requirements through in-depth consultations.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Analysis',
    description: 'Our AI-powered tools analyze your needs to identify the optimal technology stack and team composition.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    description: 'We create detailed architectural plans and UI/UX designs that align with your vision and user needs.',
  },
  {
    number: '04',
    icon: Code,
    title: 'Development',
    description: 'Our expert teams build your solution using agile methodologies with continuous integration and testing.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deployment',
    description: 'We handle the entire deployment process, ensuring a smooth launch with zero downtime.',
  },
  {
    number: '06',
    icon: HeartHandshake,
    title: 'Support',
    description: 'Ongoing maintenance, updates, and 24/7 support to keep your systems running at peak performance.',
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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How We <span className="text-gradient">Deliver Excellence</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary-500/50 to-transparent z-0" />
              )}

              <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:scale-105 relative z-10">
                {/* Step Number */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 p-3 mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:scale-105"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}

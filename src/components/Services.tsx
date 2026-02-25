'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Cpu,
  Cloud,
  Smartphone,
  Database,
  Brain,
  Rocket,
  Blocks,
  Settings,
  UserCheck,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Bespoke Digital Engineering',
    subtitle: 'Custom Software Development',
    description: 'Full-stack magic — frontend to backend, APIs, D365/Salesforce extensions, React/Flutter cross-platform apps, mobile apps. From concept to production-grade in record time.',
  },
  {
    icon: Blocks,
    title: 'Enterprise Blueprinting',
    subtitle: 'Architecture & Design Consulting',
    description: 'Future-proof blueprints — functional/technical architecture, platform strategy, UI/UX mastery, requirements-to-gating, independent reviews, platform strategies.',
  },
  {
    icon: Settings,
    title: 'Transformation Engine',
    subtitle: 'Strategic IT Modernization',
    description: 'Full-throttle modernization programs — multi-year roadmaps, stakeholder orchestration, RFP/RFB/RFQ mastery, vendor selection, zero-disruption execution.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Ecosystems',
    subtitle: 'Dedicated Mobile Development',
    description: 'Native & cross-platform apps that feel premium and perform at scale — Flutter, React Native, iOS/Android mastery. Launch-ready, fast.',
  },
  {
    icon: Brain,
    title: 'Cognitive Intelligence',
    subtitle: 'AI/ML Solutions',
    description: 'Embed agentic AI, generative tools, NLP, chatbots, predictive models — with ethical governance and MLOps from day one that actually drive ROI.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    subtitle: 'Analytics & Business Intelligence',
    description: 'Modern pipelines & infrastructure — Snowflake, Azure Data Lake, real-time ingestion, BI-ready lakes for analytics & AI fuel.',
  },
  {
    icon: Cloud,
    title: 'Cloud Velocity',
    subtitle: 'Cloud Migration',
    description: 'Secure and cost effective lifts to AWS/Azure/Google — refactor, DevOps pipelines, cloud-native optimization.',
  },
  {
    icon: Rocket,
    title: 'Product Ignition',
    subtitle: 'MVP & Startup Partnership',
    description: 'Idea → MVP → scale. Strategy, rapid prototyping, launch — with equity-sharing for aligned upside. Equity based models available for startups.',
  },
  {
    icon: Cpu,
    title: 'Ops Command',
    subtitle: 'Managed Services',
    description: 'Proactive 24/7 care for single apps to full estates — monitoring, updates, performance, security — hands-off peace.',
  },
  {
    icon: UserCheck,
    title: 'Talent Calibration',
    subtitle: 'IT Staffing',
    description: 'Access the top 1% of tech talent. Onshore, Nearshore, or Offshore. Cost-effective scale with full transparency.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="text-accent-400 text-sm uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Solutions That Drive Growth
          </h2>
          <div className="w-12 h-1 bg-accent-500 mb-6" />
          <p className="text-xl text-primary-200 max-w-3xl">
            End-to-end software development and consulting services engineered to transform complexity into competitive advantage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="bg-white rounded-lg p-6 h-full border-l-4 border-l-accent-500 hover:shadow-md transition-shadow flex gap-5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary-700" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-accent-600 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-accent-500 text-primary-900 font-semibold text-lg hover:bg-accent-400 transition-colors"
          >
            Ignite Your Next Leap
          </a>
        </motion.div>
      </div>
    </section>
  )
}

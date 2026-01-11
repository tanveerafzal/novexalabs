'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Users,
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
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Blocks,
    title: 'Enterprise Blueprinting',
    subtitle: 'Architecture & Design Consulting',
    description: 'Future-proof blueprints — functional/technical architecture, platform strategy, UI/UX mastery, requirements-to-gating, independent reviews, platform strategies.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Settings,
    title: 'Transformation Engine',
    subtitle: 'Strategic IT Modernization',
    description: 'Full-throttle modernization programs — multi-year roadmaps, stakeholder orchestration, RFP/RFB/RFQ mastery, vendor selection, zero-disruption execution.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Ecosystems',
    subtitle: 'Dedicated Mobile Development',
    description: 'Native & cross-platform apps that feel premium and perform at scale — Flutter, React Native, iOS/Android mastery. Launch-ready, fast.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Brain,
    title: 'Cognitive Intelligence',
    subtitle: 'AI/ML Solutions',
    description: 'Embed agentic AI, generative tools, NLP, chatbots, predictive models — with ethical governance and MLOps from day one that actually drive ROI.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    subtitle: 'Analytics & Business Intelligence',
    description: 'Modern pipelines & infrastructure — Snowflake, Azure Data Lake, real-time ingestion, BI-ready lakes for analytics & AI fuel.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Velocity',
    subtitle: 'Cloud Migration',
    description: 'Secure and cost effective lifts to AWS/Azure/Google — refactor, DevOps pipelines, cloud-native optimization.',
    gradient: 'from-sky-500 to-blue-500',
  },
  {
    icon: Rocket,
    title: 'Product Ignition',
    subtitle: 'MVP & Startup Partnership',
    description: 'Idea → MVP → scale. Strategy, rapid prototyping, launch — with equity-sharing for aligned upside. Equity based models available for startups.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Cpu,
    title: 'Ops Command',
    subtitle: 'Managed Services',
    description: 'Proactive 24/7 care for single apps to full estates — monitoring, updates, performance, security — hands-off peace.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Fusion Teams',
    subtitle: 'Dedicated Teams',
    description: 'Plug-and-play Agile teams that function as a seamless extension of your workforce.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: UserCheck,
    title: 'Talent Calibration',
    subtitle: 'IT Staffing',
    description: 'Access the top 1% of tech talent. Onshore, Nearshore, or Offshore. Cost-effective scale with full transparency.',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Solutions That <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            End-to-end technology services engineered to transform complexity into competitive advantage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {service.title}
                </h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-3`}>
                  {service.subtitle}
                </p>
                <p className="text-white/60 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:scale-105"
          >
            Ignite Your Next Leap
          </a>
        </motion.div>
      </div>
    </section>
  )
}

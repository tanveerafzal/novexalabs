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
  Rocket
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to solve your unique business challenges with cutting-edge technology.',
    features: ['Web Applications', 'Enterprise Systems', 'API Development'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Scale your development capacity with fully managed, dedicated teams that integrate seamlessly with your workflow.',
    features: ['Full-Stack Teams', 'Agile Methodology', 'Transparent Communication'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'AI/ML Solutions',
    description: 'Harness the power of artificial intelligence to automate processes and unlock insights from your data.',
    features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Modernize your infrastructure with scalable, secure cloud solutions on AWS, Azure, or Google Cloud.',
    features: ['Cloud Migration', 'DevOps', 'Serverless Architecture'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Create stunning mobile experiences with native and cross-platform applications for iOS and Android.',
    features: ['React Native', 'Flutter', 'Native iOS/Android'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure to power your analytics and decision-making.',
    features: ['ETL Pipelines', 'Data Warehousing', 'Real-time Processing'],
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'IT Staffing',
    description: 'Access top-tier tech talent for permanent, contract, or project-based roles across all skill levels.',
    features: ['Technical Recruiting', 'Skill Assessment', 'Quick Deployment'],
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Product Development',
    description: 'From concept to launch, we help startups and enterprises build products that users love.',
    features: ['MVP Development', 'Product Strategy', 'UI/UX Design'],
    gradient: 'from-amber-500 to-orange-500',
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
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive technology services designed to transform your ideas into
            powerful digital solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

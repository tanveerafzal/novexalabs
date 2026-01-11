'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Cpu,
  Zap,
  Eye,
  Heart,
  Wrench,
  Brain,
  Rocket,
  Building2,
  Landmark,
  Wifi,
  Stethoscope,
} from 'lucide-react'

const coreValues = [
  {
    title: 'Velocity with Zero Chaos',
    description: 'Fast, disciplined delivery.',
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Radical Openness',
    description: 'Full visibility, no smoke.',
    icon: Eye,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Client Obsession',
    description: 'Priority from day zero.',
    icon: Heart,
    gradient: 'from-rose-500 to-red-500',
  },
  {
    title: 'Tool-Agnostic Mastery',
    description: 'Best path forward, always.',
    icon: Wrench,
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Human-Amplified Intelligence',
    description: 'AI elevates people.',
    icon: Brain,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Speed with Structure',
    description: 'We move fast, but we never break the architecture.',
    icon: Rocket,
    gradient: 'from-green-500 to-emerald-500',
  },
]

const domains = [
  {
    title: 'Public Sector',
    areas: ['Provincial & Federal Government', 'Municipalities/Cities', 'Courts', 'Corrections'],
    icon: Landmark,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Finance',
    areas: ['Banking', 'Insurance', 'Mortgage'],
    icon: Building2,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'Infrastructure',
    areas: ['Telecommunications', 'Utilities', 'Transportation', 'Logistics', 'Fleet Management'],
    icon: Wifi,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Services',
    areas: ['Healthcare', 'Higher Education', 'Retail Management'],
    icon: Stethoscope,
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="glass-strong sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Cpu className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold text-gradient">Logithic Labs</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-400 text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              The DNA of <span className="text-gradient">Logithic Labs</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Backstory Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">The Backstory</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Logithic Labs was founded on a simple premise: <span className="text-white font-semibold">Experience matters, but speed is currency.</span> Founded by two industry veterans with over 50 years of combined experience, we have architected multi-million-dollar systems for the Public Sector, Telecommunications, Finance, and Healthcare. We have navigated the complexities of multi-vendor landscapes and the rigors of government compliance and highly regulated industries. Now, we bring that enterprise-grade discipline to the agile digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 p-3 mb-6">
                <Zap className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                <span className="text-gradient font-semibold">To demystify the complex.</span> We exist to strip away the bloat of traditional IT consulting and deliver lean, high-impact logic that powers the future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-pink-500 p-3 mb-6">
                <Eye className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Be the essential partner for organizations leading in the AI era — where tech disappears into seamless performance, teams feel like natural extensions, and innovation never waits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-white/60">The principles that drive everything we do.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/60">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Depth */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Domain <span className="text-gradient">Depth</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We don&apos;t just know tech; we know your industry. Our founders have deep architectural and delivery experience in:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${domain.gradient} p-3 mb-5 group-hover:scale-110 transition-transform`}>
                    <domain.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{domain.title}</h3>
                  <ul className="space-y-2">
                    {domain.areas.map((area) => (
                      <li key={area} className="flex items-center gap-2 text-white/60 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${domain.gradient}`} />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Something <span className="text-gradient">Extraordinary</span>?
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Let&apos;s discuss how our experience can accelerate your next initiative.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:scale-105"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Logithic Labs Inc. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

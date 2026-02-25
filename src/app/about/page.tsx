'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
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
  },
  {
    title: 'Radical Openness',
    description: 'Full visibility, no smoke.',
    icon: Eye,
  },
  {
    title: 'Client Obsession',
    description: 'Priority from day zero.',
    icon: Heart,
  },
  {
    title: 'Tool-Agnostic Mastery',
    description: 'Best path forward, always.',
    icon: Wrench,
  },
  {
    title: 'Human-Amplified Intelligence',
    description: 'AI elevates people.',
    icon: Brain,
  },
  {
    title: 'Speed with Structure',
    description: 'We move fast, but we never break the architecture.',
    icon: Rocket,
  },
]

const domains = [
  {
    title: 'Public Sector',
    areas: ['Provincial & Federal Government', 'Municipalities/Cities', 'Courts', 'Corrections'],
    icon: Landmark,
  },
  {
    title: 'Finance',
    areas: ['Banking', 'Insurance', 'Mortgage'],
    icon: Building2,
  },
  {
    title: 'Infrastructure',
    areas: ['Telecommunications', 'Utilities', 'Transportation', 'Logistics', 'Fleet Management'],
    icon: Wifi,
  },
  {
    title: 'Services',
    areas: ['Healthcare', 'Higher Education', 'Retail Management'],
    icon: Stethoscope,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-1 h-8 bg-accent-500 rounded-full" />
              <span className="text-2xl font-bold text-primary-800 tracking-wider">NOVEXA LABS</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <span className="text-accent-500 text-sm uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The DNA of <span className="text-accent-500">NOVEXA LABS</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Backstory Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-lg p-8 md:p-12 border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Backstory</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              NOVEXA LABS was founded on a simple premise: <span className="text-gray-900 font-semibold">Experience matters, but speed is currency.</span> With 21+ years of hands-on experience, we have architected multi-million-dollar systems for the Public Sector, Telecommunications, Finance, and Healthcare. We have navigated the complexities of multi-vendor landscapes and the rigors of government compliance and highly regulated industries. Now, we bring that enterprise-grade discipline to the agile digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2 md:divide-x divide-gray-200">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-10"
              >
                <div className="w-14 h-14 rounded-lg bg-primary-50 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-primary-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  <span className="text-accent-600 font-semibold">To demystify the complex.</span> We exist to strip away the bloat of traditional IT consulting and deliver lean, high-impact software and strategy that powers the future.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="p-8 md:p-10 border-t md:border-t-0 border-gray-200"
              >
                <div className="w-14 h-14 rounded-lg bg-primary-50 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Be the essential partner for organizations that demand excellence — where tech disappears into seamless performance, teams feel like natural extensions, and innovation never waits.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-500">The principles that drive everything we do.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="bg-white rounded-lg p-6 h-full border-l-4 border-l-accent-500 hover:shadow-md transition-shadow border border-gray-200">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Depth */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Domain Depth
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We don&apos;t just know tech; we know your industry. Our founders have deep architectural and delivery experience in:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="bg-white rounded-lg p-6 h-full border-l-4 border-l-accent-500 hover:shadow-md transition-shadow border border-gray-200">
                  <div className="w-14 h-14 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center mb-5">
                    <domain.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{domain.title}</h3>
                  <ul className="space-y-2">
                    {domain.areas.map((area) => (
                      <li key={area} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Let&apos;s discuss how our experience can accelerate your next initiative.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-primary-700 text-white font-semibold text-lg hover:bg-primary-600 transition-colors"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-500 text-sm">
          &copy; {new Date().getFullYear()} NOVEXA LABS Inc. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

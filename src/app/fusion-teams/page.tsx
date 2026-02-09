'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Cpu, Users, Zap, Target, Layers } from 'lucide-react'

export default function FusionTeamsPage() {
  return (
    <main className="min-h-screen bg-[rgb(249,249,249)]">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Cpu className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-gradient">Logithic Labs</span>
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
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              Fusion Teams
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Fusion Teams</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Placeholder description for Fusion Teams. Update this content to describe your offering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Content Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 p-3 mb-6">
                <Users className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature One</h3>
              <p className="text-gray-600">
                Placeholder description for the first feature of Fusion Teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-pink-500 p-3 mb-6">
                <Zap className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature Two</h3>
              <p className="text-gray-600">
                Placeholder description for the second feature of Fusion Teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-6">
                <Target className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature Three</h3>
              <p className="text-gray-600">
                Placeholder description for the third feature of Fusion Teams.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Placeholder Section */}
      <section className="py-16 relative bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 p-2.5">
                <Layers className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Add detailed content here explaining how Fusion Teams works. This section can include
              step-by-step processes, methodologies, or any other relevant information.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold mt-0.5">1</div>
                <span>Step one description placeholder</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold mt-0.5">2</div>
                <span>Step two description placeholder</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold mt-0.5">3</div>
                <span>Step three description placeholder</span>
              </li>
            </ul>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started with <span className="text-gradient">Fusion Teams</span>?
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Contact us to learn more about how Fusion Teams can help your organization.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Logithic Labs Inc. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

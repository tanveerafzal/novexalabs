'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Eye, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <span className="text-accent-400 text-sm uppercase tracking-widest mb-4 block">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The DNA of <span className="text-accent-400">NOVEXA LABS</span>
          </h2>
        </motion.div>

        {/* Backstory */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-primary-800/50 border border-primary-700 rounded-lg p-8 md:p-10 text-center">
            <p className="text-lg text-primary-200 leading-relaxed">
              NOVEXA LABS was founded on a simple premise: <span className="text-white font-semibold">Experience matters, but speed is currency.</span> With 21+ years of hands-on experience, we have architected multi-million-dollar systems for the Public Sector, Telecommunications, Finance, and Healthcare. Now, we bring that enterprise-grade discipline to the agile digital world.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision — Shared container with vertical divider */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="bg-primary-800/50 border border-primary-700 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 md:divide-x divide-primary-700">
              <div className="p-8 md:p-10">
                <div className="w-14 h-14 rounded-lg bg-accent-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-lg text-primary-200 leading-relaxed">
                  <span className="text-accent-400 font-semibold">To demystify the complex.</span> We exist to strip away the bloat of traditional IT consulting and deliver lean, high-impact software and strategy that powers the future.
                </p>
              </div>

              <div className="p-8 md:p-10 border-t md:border-t-0 border-primary-700">
                <div className="w-14 h-14 rounded-lg bg-accent-500/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-lg text-primary-200 leading-relaxed">
                  Be the essential partner for organizations that demand excellence — where tech disappears into seamless performance, teams feel like natural extensions, and innovation never waits.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA to full About page */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-center flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-accent-500 text-primary-900 font-semibold text-lg hover:bg-accent-400 transition-colors group"
          >
            Explore Our Values & Expertise
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://cal.com/novexalabs/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded border-2 border-primary-400 text-white font-semibold text-lg hover:bg-primary-800 transition-colors"
          >
            Let&apos;s Talk — Book 30 Min
          </a>
        </motion.div>
      </div>
    </section>
  )
}

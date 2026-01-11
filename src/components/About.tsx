'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Eye, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The DNA of <span className="text-gradient">Logithic Labs</span>
          </h2>
        </motion.div>

        {/* Backstory */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="glass rounded-3xl p-8 md:p-10 text-center">
            <p className="text-lg text-white/70 leading-relaxed">
              Logithic Labs was founded on a simple premise: <span className="text-white font-semibold">Experience matters, but speed is currency.</span> Founded by two industry veterans with over 50 years of combined experience, we have architected multi-million-dollar systems for the Public Sector, Telecommunications, Finance, and Healthcare. Now, we bring that enterprise-grade discipline to the agile digital world.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
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
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-lg text-white/70 leading-relaxed">
              Be the essential partner for organizations leading in the AI era — where tech disappears into seamless performance, teams feel like natural extensions, and innovation never waits.
            </p>
          </motion.div>
        </div>

        {/* CTA to full About page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:scale-105 group"
          >
            Explore Our Values & Expertise
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

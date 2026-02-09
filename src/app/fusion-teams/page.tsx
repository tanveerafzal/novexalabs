'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Cpu, Zap, Activity, TrendingUp, Code, TestTube, Compass, ClipboardList, Check, Building2 } from 'lucide-react'

const teams = [
  {
    name: 'Fusion Spark',
    tagline: 'Ignite Your Project',
    description: 'Perfect for focused initiatives and MVPs. A lean, agile team to get your project off the ground.',
    gradient: 'from-amber-500 to-orange-500',
    icon: Zap,
    price: 16875,
    composition: [
      { role: 'Full Stack Developer', allocation: '100%', count: 1, icon: Code },
      { role: 'QA Engineer', allocation: '100%', count: 1, icon: TestTube },
      { role: 'Solution Architect', allocation: '50%', count: 0.5, icon: Compass },
      { role: 'Project Management', allocation: '25%', count: 0.25, icon: ClipboardList },
    ],
    ideal: ['MVPs & Prototypes', 'Single Feature Development', 'Small Enhancements'],
  },
  {
    name: 'Fusion Pulse',
    tagline: 'Accelerate Delivery',
    description: 'Built for momentum. Increased capacity for parallel workstreams and faster iteration cycles.',
    gradient: 'from-primary-500 to-cyan-500',
    icon: Activity,
    popular: true,
    originalPrice: 27500,
    price: 24750,
    discount: 10,
    composition: [
      { role: 'Full Stack Developers', allocation: '100%', count: 2, icon: Code },
      { role: 'QA Engineer', allocation: '100%', count: 1, icon: TestTube },
      { role: 'Solution Architect', allocation: '75%', count: 0.75, icon: Compass },
      { role: 'Project Management', allocation: '50%', count: 0.5, icon: ClipboardList },
    ],
    ideal: ['Product Development', 'Platform Modernization', 'Agile Sprints'],
  },
  {
    name: 'Fusion Surge',
    tagline: 'Maximum Velocity',
    description: 'Full-scale delivery power. Enterprise-grade team for complex, mission-critical initiatives.',
    gradient: 'from-violet-500 to-purple-500',
    icon: TrendingUp,
    price: 41875,
    composition: [
      { role: 'Full Stack Developers', allocation: '100%', count: 3, icon: Code },
      { role: 'QA Engineers', allocation: '100%', count: 2, icon: TestTube },
      { role: 'Solution Architect', allocation: '100%', count: 1, icon: Compass },
      { role: 'Project Management', allocation: '75%', count: 0.75, icon: ClipboardList },
    ],
    ideal: ['Enterprise Transformations', 'Multi-Module Systems', 'Aggressive Timelines'],
  },
  {
    name: 'Fusion Corporate',
    tagline: 'Tailored for Scale',
    description: 'Custom-configured teams for large-scale corporate initiatives. Flexible composition, dedicated leadership, and enterprise SLAs.',
    gradient: 'from-slate-600 to-slate-800',
    icon: Building2,
    corporate: true,
    features: [
      'Custom team size and composition',
      'Dedicated account management',
      'Enterprise SLAs and compliance',
      'Volume-based pricing',
      'Multi-project support',
      'On-site options available',
    ],
  },
]

const benefits = [
  'Predictable monthly cost with no surprises',
  'Pre-integrated team that works together seamlessly',
  'Flexible scaling — upgrade or adjust as needs evolve',
  'Enterprise-grade talent without the hiring overhead',
  'Dedicated resources focused on your success',
  'Built-in knowledge transfer and documentation',
]

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
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              Enterprise Teams
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Fusion Teams</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-4">
              Pre-configured, high-performance teams delivered at a single price point.
              No hiring. No ramp-up. Just results.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the team size that fits your initiative and scale as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Standard Teams - 3 columns */}
          <div className="grid lg:grid-cols-3 gap-8">
            {teams.filter(t => !t.corporate).map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {team.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 text-white text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`bg-white rounded-3xl p-8 h-full border-2 transition-all duration-500 group-hover:shadow-xl ${team.popular ? 'border-primary-300 shadow-lg' : 'border-gray-100'}`}>
                  {/* Team Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${team.gradient} p-3 group-hover:scale-110 transition-transform`}>
                      <team.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{team.name}</h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
                        {team.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{team.description}</p>

                  {team.corporate ? (
                    <>
                      {/* Custom Pricing */}
                      <div className="mb-6">
                        <span className={`text-3xl font-bold bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
                          Custom
                        </span>
                        <span className="text-gray-500 text-sm ml-1">pricing</span>
                      </div>

                      {/* Features */}
                      <div className="pt-6 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Includes</h4>
                        <ul className="space-y-2">
                          {team.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Price */}
                      <div className="mb-6">
                        {team.discount && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-gray-400 line-through text-lg">
                              ${team.originalPrice.toLocaleString()}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                              {team.discount}% OFF
                            </span>
                          </div>
                        )}
                        <span className={`text-3xl font-bold bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
                          ${team.price.toLocaleString()}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">USD/month</span>
                      </div>

                      {/* Team Composition */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Team Composition</h4>
                        <div className="space-y-3">
                          {team.composition.map((member) => (
                            <div key={member.role} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <member.icon className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">
                                  <span className={`font-semibold bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
                                    {member.count >= 1 ? `${member.count} × ` : ''}
                                  </span>
                                  {member.role}
                                </span>
                              </div>
                              <span className={`text-sm font-semibold bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
                                {member.allocation}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div className="pt-6 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Ideal For</h4>
                        <ul className="space-y-2">
                          {team.ideal.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${team.gradient}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {/* CTA Button */}
                  <a
                    href="https://cal.com/logithiclabs/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 block w-full py-3 rounded-full text-center font-semibold transition-all hover:scale-105 ${
                      team.corporate
                        ? 'bg-gradient-to-r from-slate-700 to-slate-900 text-white'
                        : team.popular
                        ? 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {'Book a Call'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Corporate Team - Full Width */}
          {teams.filter(t => t.corporate).map((team) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-primary-200 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left side - Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 p-3">
                        <team.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{team.name}</h3>
                        <p className="text-primary-600 text-sm font-medium">{team.tagline}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{team.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gradient">Custom</span>
                      <span className="text-gray-500 text-sm ml-1">pricing</span>
                    </div>
                    <a
                      href="https://cal.com/logithiclabs/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold transition-all hover:scale-105"
                    >
                      Let&apos;s Talk
                    </a>
                  </div>

                  {/* Right side - Features */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Includes</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {team.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-gradient">Fusion Teams</span>?
            </h2>
            <p className="text-xl text-gray-500">
              The smart alternative to traditional staffing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Assemble Your <span className="text-gradient">Fusion Team</span>?
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Book a 30-minute call to discuss which team configuration is right for your initiative.
            </p>
            <a
              href="https://cal.com/logithiclabs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105"
            >
              Schedule a Call
            </a>
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

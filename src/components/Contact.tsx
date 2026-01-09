'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Clock, Globe } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@logithic.com',
    link: 'mailto:hello@logithic.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'San Francisco, CA',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: '24/7 Support',
    link: '#',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formState)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to transform your business? Contact us to discuss your project and
            discover how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Company</label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Service Needed</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="" className="bg-gray-900">Select a service</option>
                      <option value="custom-development" className="bg-gray-900">Custom Development</option>
                      <option value="dedicated-teams" className="bg-gray-900">Dedicated Teams</option>
                      <option value="ai-solutions" className="bg-gray-900">AI/ML Solutions</option>
                      <option value="staffing" className="bg-gray-900">IT Staffing</option>
                      <option value="cloud" className="bg-gray-900">Cloud Services</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group"
                >
                  <info.icon className="w-10 h-10 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-medium mb-1">{info.title}</h4>
                  <p className="text-white/60">{info.value}</p>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-16 h-16 text-primary-400/50 mx-auto mb-4" />
                <p className="text-white/60">Serving clients globally</p>
                <p className="text-sm text-white/40 mt-2">
                  With teams across North America, Europe, and Asia
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Why Choose Logithic?</h4>
              <ul className="space-y-3">
                {[
                  'Response within 24 hours',
                  'Free initial consultation',
                  'Flexible engagement models',
                  'NDA protection available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

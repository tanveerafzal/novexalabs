'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@novexalabs.dev',
    link: 'mailto:hello@novexalabs.dev',
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
    value: '6733 Mississauga Rd Suite 700, Mississauga, ON, Canada',
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
    phone: '',
    company: '',
    companySize: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        service: '',
        message: '',
      })
    } catch {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or email us directly.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-accent-500 text-sm uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Contact us to discuss your project and
            discover how we can help you achieve your goals.
          </p>
        </motion.div>

        {/* Joined Split Panel */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="rounded-lg border border-gray-200 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left — Navy panel */}
            <div className="bg-primary-900 p-10">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="block p-4 rounded-lg bg-primary-800 hover:bg-primary-700 transition-colors"
                  >
                    <info.icon className="w-8 h-8 text-accent-400 mb-3" />
                    <h4 className="text-white font-medium mb-1">{info.title}</h4>
                    <p className="text-primary-300 text-sm">{info.value}</p>
                  </a>
                ))}
              </div>

              {/* Why Choose */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Why Choose NOVEXA LABS?</h4>
                <ul className="space-y-3">
                  {[
                    'Response within 24 hours',
                    'Free initial consultation',
                    'Flexible engagement models',
                    'NDA protection available',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-primary-300">
                      <div className="w-2 h-2 rounded-full bg-accent-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — White form panel */}
            <div className="bg-white p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Company</label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Company Size</label>
                    <select
                      value={formState.companySize}
                      onChange={(e) => setFormState({ ...formState, companySize: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Service Needed</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-development">Custom Development</option>
                      <option value="dedicated-teams">Dedicated Teams</option>
                      <option value="ai-solutions">AI/ML Solutions</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="staffing">IT Staffing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded">
                    <AlertCircle className="w-5 h-5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded bg-primary-700 text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

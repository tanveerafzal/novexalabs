'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Custom Development', href: '#services' },
    { name: 'Dedicated Teams', href: '#services' },
    { name: 'AI/ML Solutions', href: '#services' },
    { name: 'Cloud Services', href: '#services' },
    { name: 'IT Staffing', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Case Studies', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Support', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/privacy#cookies' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/novexalabs' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/novexalabs' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/novexalabs' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <span className="w-1 h-8 bg-accent-500 rounded-full" />
              <span className="text-2xl font-bold text-white tracking-wider">NOVEXA LABS</span>
            </a>
            <p className="text-primary-300 mb-6 max-w-sm">
              Code. Consult. Conquer.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded bg-primary-800 flex items-center justify-center text-primary-300 hover:text-accent-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white uppercase text-sm tracking-wide font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white uppercase text-sm tracking-wide font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white uppercase text-sm tracking-wide font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white uppercase text-sm tracking-wide font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-500 text-sm">
              &copy; {new Date().getFullYear()} NOVEXA LABS Inc. All rights reserved.
            </p>
            <p className="text-primary-500 text-sm">
              Crafted with precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

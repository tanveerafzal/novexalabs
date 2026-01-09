import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Logithic',
  description: 'Read the terms and conditions governing the use of Logithic services.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="glass-strong sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Cpu className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold text-gradient">Logithic</span>
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass rounded-3xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-white/60 mb-8">Last updated: January 8, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-white/70 leading-relaxed">
                Welcome to Logithic. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, products, and services (collectively, &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                If you are using our Services on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms, in which case &quot;you&quot; or &quot;your&quot; shall refer to such entity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Logithic provides software development, staffing, and technology consulting services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Custom software development and engineering</li>
                <li>Dedicated development teams</li>
                <li>IT staffing and talent acquisition</li>
                <li>AI and machine learning solutions</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Mobile application development</li>
                <li>Technology consulting and advisory services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Eligibility</h2>
              <p className="text-white/70 leading-relaxed">
                You must be at least 18 years of age and capable of forming a binding contract to use our Services. By using our Services, you represent and warrant that you meet these eligibility requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Account Registration</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Some of our Services may require you to create an account. When you create an account, you agree to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your account credentials confidential</li>
                <li>Be responsible for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Service Agreements</h2>
              <p className="text-white/70 leading-relaxed">
                Specific projects and engagements may be governed by separate Service Agreements, Statements of Work (SOW), or Master Service Agreements (MSA). In the event of any conflict between these Terms and a separate Service Agreement, the Service Agreement shall prevail for that specific engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property Rights</h2>

              <h3 className="text-xl font-medium text-white/90 mb-3">6.1 Our Intellectual Property</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                The Services, including all content, features, and functionality, are owned by Logithic and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>

              <h3 className="text-xl font-medium text-white/90 mb-3">6.2 Client Work Product</h3>
              <p className="text-white/70 leading-relaxed">
                Unless otherwise specified in a Service Agreement, all custom work product developed specifically for you shall be owned by you upon full payment of all applicable fees. Pre-existing materials, tools, frameworks, and methodologies used in the development process remain our property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Confidentiality</h2>
              <p className="text-white/70 leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our engagement. This includes, but is not limited to, business strategies, technical specifications, customer data, and financial information. Confidentiality obligations shall survive the termination of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Payment Terms</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Payment terms for specific services will be outlined in the applicable Service Agreement. General payment terms include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>All fees are quoted in USD unless otherwise specified</li>
                <li>Invoices are due within 30 days of receipt unless otherwise agreed</li>
                <li>Late payments may incur interest charges at 1.5% per month</li>
                <li>You are responsible for all applicable taxes</li>
                <li>We reserve the right to suspend services for non-payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-medium text-white/90 mb-3">9.1 Service Warranty</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                We warrant that our Services will be performed in a professional and workmanlike manner consistent with industry standards. If Services do not conform to this warranty, we will re-perform the non-conforming Services at no additional cost.
              </p>

              <h3 className="text-xl font-medium text-white/90 mb-3">9.2 Disclaimer</h3>
              <p className="text-white/70 leading-relaxed">
                EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
              <p className="text-white/70 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOGITHIC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO LOGITHIC IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Indemnification</h2>
              <p className="text-white/70 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Logithic and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to your use of the Services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Either party may terminate these Terms or any Service Agreement:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>For convenience with 30 days&apos; written notice</li>
                <li>Immediately if the other party materially breaches these Terms</li>
                <li>Immediately if the other party becomes insolvent or files for bankruptcy</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                Upon termination, you shall pay all amounts owed for Services rendered through the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Non-Solicitation</h2>
              <p className="text-white/70 leading-relaxed">
                During the term of engagement and for a period of twelve (12) months thereafter, neither party shall directly solicit for employment any employee of the other party who was involved in the provision or receipt of Services, without the prior written consent of the other party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Governing Law and Dispute Resolution</h2>
              <p className="text-white/70 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. Force Majeure</h2>
              <p className="text-white/70 leading-relaxed">
                Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">16. Modifications to Terms</h2>
              <p className="text-white/70 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website and updating the &quot;Last updated&quot; date. Your continued use of our Services after such changes constitutes your acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">17. Severability</h2>
              <p className="text-white/70 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">18. Entire Agreement</h2>
              <p className="text-white/70 leading-relaxed">
                These Terms, together with the Privacy Policy and any applicable Service Agreements, constitute the entire agreement between you and Logithic regarding the use of our Services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">19. Contact Information</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-xl">
                <p className="text-white/90 font-medium">Logithic</p>
                <p className="text-white/70">Email: legal@logithic.com</p>
                <p className="text-white/70">Address: San Francisco, CA</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Logithic. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
